'use client';

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface SquareMasonryProps {
  images: string[];
  duration?: number;
  stagger?: number;
  hoverScale?: number;
}

const SquareMasonry: React.FC<SquareMasonryProps> = ({
  images,
  duration = 0.6,
  stagger = 0.05,
  hoverScale = 0.95,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [cols, setCols] = useState(6);

  // --- handle responsive columns ---
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(3); // mobile
      else if (w < 1024) setCols(4); // tablet
      else if (w < 1400) setCols(5); // mid desktop
      else setCols(6); // large desktop
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- preload images ---
  useEffect(() => {
    Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = img.onerror = () => resolve();
          })
      )
    ).then(() => setLoaded(true));
  }, [images]);

  // --- keep only full rows ---
  const visibleImages = useMemo(() => {
    const fullRowCount = Math.floor(images.length / cols) * cols;
    return images.slice(0, fullRowCount);
  }, [images, cols]);

  // --- animation on scroll ---
  useLayoutEffect(() => {
  if (!loaded || !containerRef.current) return;

  const elements = gsap.utils.toArray<HTMLElement>(
    containerRef.current.querySelectorAll('.square-img')
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Add a small randomized delay between 0 and 0.4 seconds
          const randomDelay = Math.random() * 0.8;
          const randomDuration = duration * (0.8 + Math.random() * 0.8); // between 0.8x and 1.2x duration

          gsap.fromTo(
            el,
            { opacity: 0, y: 100, filter: 'blur(6px)' },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: randomDuration,
              delay: randomDelay,
              ease: 'power3.out',
            }
          );

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, [loaded, duration, stagger]);


  // --- hover effect ---
  const handleEnter = (id: number) =>
    gsap.to(`#square-${id}`, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
  const handleLeave = (id: number) =>
    gsap.to(`#square-${id}`, { scale: 1, duration: 0.3, ease: 'power2.out' });

  return (
    <div
      ref={containerRef}
      className="grid overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {visibleImages.map((src, index) => (
        <div
          key={index}
          id={`square-${index}`}
          className="relative aspect-square overflow-hidden cursor-pointer square-img"
          onMouseEnter={() => handleEnter(index)}
          onMouseLeave={() => handleLeave(index)}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover select-none"
            sizes="(max-width:768px)50vw,33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default SquareMasonry;