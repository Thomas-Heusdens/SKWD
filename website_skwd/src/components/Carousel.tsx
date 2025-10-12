'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number; // fallback if container not measured
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

// default items (can be overridden)
const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-[26px] w-[26px] text-white" />,
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-[26px] w-[26px] text-white" />,
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-[26px] w-[26px] text-white" />,
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-[26px] w-[26px] text-white" />,
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-[26px] w-[26px] text-white" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 } as const;

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const [containerWidth, setContainerWidth] = useState<number>(baseWidth);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🧠 Resize listener → makes carousel width responsive to its container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current?.parentElement) {
        const parentWidth = containerRef.current.parentElement.clientWidth;
        setContainerWidth(parentWidth - 32); // small padding
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const itemWidth = containerWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  // pause on hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
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

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) setCurrentIndex(items.length - 1);
      else setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  // 🌀 Pattern variations
  const tilePatterns = [
    '/images/Tile1.png',
    '/images/Tile2.png',
    '/images/Tile3.png',
    '/images/Tile4.png',
  ];

  return (
    <div
      ref={containerRef}
      className="
        relative overflow-hidden p-4 bg-skwd-dark-blue rounded-xl
        flex flex-col justify-between
        transition-all duration-300
      "
      style={{
        width: `${containerWidth}px`,
        minHeight: '260px',
        height: 'auto',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
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
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          // Pick tile based on index
          const pattern = tilePatterns[index % tilePatterns.length];

          return (
            <motion.div
              key={index}
              className="
                relative shrink-0 flex flex-col justify-between 
                bg-skwd-blue border border-white/10 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing
              "
              style={{
                width: itemWidth,
                height: '100%',
                rotateY: rotateY,
                backgroundImage: `url('${pattern}')`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
              transition={effectiveTransition}
            >
              <div className="absolute inset-0 bg-skwd-blue/60" />

              <div className="relative z-10 p-6 flex flex-col gap-4">
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

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
              currentIndex % items.length === index ? 'bg-skwd-text-highlight' : 'bg-white/30'
            }`}
            animate={{
              scale: currentIndex % items.length === index ? 1.2 : 1,
            }}
            onClick={() => setCurrentIndex(index)}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}