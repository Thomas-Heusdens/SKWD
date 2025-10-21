'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

export interface CarouselItem {
  step?: string;
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { step: 'Step 1', title: 'Text Animations', description: 'Cool text animations.', id: 1, icon: <FiFileText className="h-[26px] w-[26px] text-white" /> },
  { step: 'Step 2', title: 'Animations', description: 'Smooth animations.', id: 2, icon: <FiCircle className="h-[26px] w-[26px] text-white" /> },
  { step: 'Step 3', title: 'Components', description: 'Reusable components.', id: 3, icon: <FiLayers className="h-[26px] w-[26px] text-white" /> },
  { step: 'Step 4', title: 'Backgrounds', description: 'Beautiful patterns.', id: 4, icon: <FiLayout className="h-[26px] w-[26px] text-white" /> },
  { step: 'Step 5', title: 'Common UI', description: 'More coming soon.', id: 5, icon: <FiCode className="h-[26px] w-[26px] text-white" /> },
];

const GAP = 16;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 } as const;

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
}: CarouselProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(baseWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const x = useMotionValue(0);

  // resize
  useEffect(() => {
    const updateWidth = () => {
      const parent = containerRef.current?.parentElement;
      if (parent) setContainerWidth(parent.clientWidth - 32);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const itemWidth = containerWidth - 32;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  // pause on hover
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const el = containerRef.current;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [pauseOnHover]);

  // autoplay
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;
    const t = setInterval(() => {
      setCurrentIndex(prev => {
        if (loop && prev === items.length - 1) return prev + 1;
        if (prev === carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, autoplayDelay);
    return () => clearInterval(t);
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD)
      setCurrentIndex(p => Math.min(p + 1, carouselItems.length - 1));
    else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD)
      setCurrentIndex(p => Math.max(p - 1, 0));
  };

  const dragProps = loop
    ? {}
    : { dragConstraints: { left: -trackItemOffset * (carouselItems.length - 1), right: 0 } };

  const tilePatterns = ['/images/Tile1.png', '/images/Tile2.png', '/images/Tile3.png', '/images/Tile4.png'];

  // ✅ compute all transforms once, safely
  const rotateYTransforms = useMemo(() => {
    return carouselItems.map((_, index) => {
      const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
      const outputRange = [90, 0, -90];
      return useTransform(x, range, outputRange, { clamp: false });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselItems.length, trackItemOffset, x]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 bg-skwd-dark-blue rounded-xl flex flex-col justify-between transition-all duration-300"
      style={{ width: `${containerWidth}px`, minHeight: '260px', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const rotateY = rotateYTransforms[index];
          const pattern = tilePatterns[index % tilePatterns.length];
          return (
            <motion.div
              key={index}
              className="relative shrink-0 flex flex-col justify-between bg-skwd-blue border border-white/10 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
              style={{
                width: itemWidth,
                rotateY,
                backgroundImage: `url('${pattern}')`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
              transition={effectiveTransition}
            >
              <div className="absolute inset-0 bg-skwd-blue/60" />
              <div className="relative z-10 p-6 flex flex-col gap-4">
                <h3 className="font-light">{item.step}</h3>
                <div className="inline-block bg-white/20 backdrop-blur-md rounded-full p-5 flex items-center justify-center w-fit">
                  {item.icon}
                </div>
                <div>
                  <div className="text-lg font-semibold text-white mb-2">{item.title}</div>
                  <p className="text-sm text-white/80 leading-snug">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, i) => (
          <motion.div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
              currentIndex % items.length === i ? 'bg-skwd-text-highlight' : 'bg-white/30'
            }`}
            animate={{ scale: currentIndex % items.length === i ? 1.2 : 1 }}
            onClick={() => setCurrentIndex(i)}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}