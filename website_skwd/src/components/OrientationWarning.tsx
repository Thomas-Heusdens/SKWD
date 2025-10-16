'use client';
import { useEffect, useState } from 'react';

export default function OrientationWarning() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const isSmallDevice = Math.min(width, height) <= 600;
      const isCurrentlyLandscape = width > height;
      
      setIsLandscape(isSmallDevice && isCurrentlyLandscape);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  useEffect(() => {
    if (isLandscape) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLandscape]);

  if (!isLandscape) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center text-center p-6">
      <div className="text-white">
        <h2 className="text-xl font-bold mb-2">Rotate your device</h2>
        <p className="text-sm opacity-80">
          For the best experience, please use portrait mode.
        </p>
      </div>
    </div>
  );
}