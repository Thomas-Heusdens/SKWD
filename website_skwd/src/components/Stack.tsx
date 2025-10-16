'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface StackProps {
  cardDimensions?: { width: number; height: number };
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
}

export default function Stack({
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format' },
          { id: 2, img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format' },
          { id: 3, img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format' },
          { id: 4, img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format' },
        ]
  );

  const [rotationOffsets, setRotationOffsets] = useState<Record<number, number>>({});

  useEffect(() => {
    const offsets: Record<number, number> = {};
    cards.forEach(card => {
      offsets[card.id] = Math.random() * 8 - 4; 
    });
    setRotationOffsets(offsets);
  }, [cards]);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(c => c.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  if (Object.keys(rotationOffsets).length === 0) return null;

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const totalCards = cards.length;

        const baseRotation = ((index / (totalCards - 1)) * 12 - 6);
        const rotateZ = baseRotation + (rotationOffsets[card.id] || 0);

        const depthScale = 1 + index * 0.04 - totalCards * 0.04;

        return (
          <motion.div
            key={card.id}
            className="absolute top-0 left-0 rounded-2xl overflow-hidden border-4 border-white cursor-pointer shadow-lg"
            onClick={() => {
              if (!sendToBackOnClick) return;
              setTimeout(() => sendToBack(card.id), 150);
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              rotateZ,
              scale: depthScale,
              x: index * 2,
              y: index * 2,
              transformOrigin: 'center',
              zIndex: index + 1,
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          >
            <Image
              src={card.img}
              alt={`card-${card.id}`}
              fill
              className="object-cover select-none rounded-2xl"
              draggable={false}
              priority
              sizes={`${cardDimensions.width}px`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}