'use client';

import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import { useInView } from 'react-intersection-observer';
import { easeOut } from 'framer-motion';

interface RollingCounterProps {
  finalValue: number;
  label?: string;
  places?: number[];
  suffix?: string;
  delay?: number;
}

export default function RollingCounter({
  finalValue,
  label,
  places = [100, 10, 1],
  suffix,
  delay = 0,
}: RollingCounterProps) {
  const [value, setValue] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const duration = 2500;
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(60);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 640) setHeight(30);
      else if (width < 768) setHeight(40);
      else if (width < 1024) setHeight(50);
      else setHeight(60);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now() + delay;
    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const randomFactor = (1 - progress) * (Math.random() * 100);
      const currentValue = Math.floor(finalValue * easedProgress + randomFactor);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(finalValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, finalValue, delay]);

  return (
    <>
      <div
        ref={ref}
        className={`
          text-center transition-all duration-300 rounded-xl
          p-2 sm:p-3 md:p-0
          cursor-pointer md:cursor-default
          bg-white text-black md:bg-transparent md:text-white
          shadow-sm md:shadow-none
        `}
        onClick={() => {
          if (window.innerWidth < 768) setShowPopup(true);
        }}
      >
        <div className="flex justify-center items-center gap-0.5 sm:gap-1">
          <Counter
            value={value}
            places={places}
            textColor={isMobile ? 'black' : 'white'}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-extrabold"
            height={height}
          />
          {suffix && (
            <span className="text-base sm:text-2xl md:text-3xl lg:text-[40px] font-extrabold leading-none text-black md:text-white">
              {suffix}
            </span>
          )}
        </div>

        {label && (
          <p className="hidden md:block text-xs sm:text-sm md:text-base tracking-wide font-light mt-1">
            {label}
          </p>
        )}
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl p-6 text-center max-w-[90%] sm:max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl text-black font-extrabold mb-2">{finalValue}{suffix}</h3>
            {label && (
              <p className="text-gray-700 text-base font-medium">{label}</p>
            )}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}