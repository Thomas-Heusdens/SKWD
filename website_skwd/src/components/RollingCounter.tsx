'use client';

import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import { useInView } from 'react-intersection-observer';
import { easeOut } from 'framer-motion';

interface RollingCounterProps {
  finalValue: number;
  label?: string;
  places?: number[];
  fontSize?: number;
  suffix?: string;  
  textColor?: string;
  delay?: number; // optional delay before animation starts
}

export default function RollingCounter({
  finalValue,
  label,
  places = [100, 10, 1],
  fontSize = 50,
  suffix,
  textColor = 'white',
  delay = 0,
}: RollingCounterProps) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const duration = 2500; // total animation duration in ms

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now() + delay;
    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      // Normalize progress between 0 and 1
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth slowdown (easeOutExpo)
      const easedProgress = easeOut(progress);

      // Simulate “overshoot” like a slot machine
      const randomFactor = (1 - progress) * (Math.random() * 100);
      const currentValue = Math.floor(
        finalValue * easedProgress + randomFactor
      );

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
    <div ref={ref} className="text-center">
      <div className="flex justify-center items-center gap-1">
        <Counter
          value={value}
          places={places}
          fontSize={fontSize}
          textColor={textColor}
          fontWeight={900}
          gap={2}
          horizontalPadding={2}
        />
        {suffix && (
          <span className="text-[40px] font-extrabold leading-none text-white">
            {suffix}
          </span>
        )}
      </div>
      {label && (
        <p className="text-sm tracking-wide font-light">{label}</p>
      )}
    </div>
  );
}