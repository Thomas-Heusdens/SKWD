import { MotionValue, motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
  textColor?: string;
}

function Number({ mv, number, height, textColor = 'currentColor' }: NumberProps) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  const style: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: textColor, // ✅ Apply color dynamically
  };

  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  textColor?: string;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, textColor, digitStyle }: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle: React.CSSProperties = {
    height,
    position: 'relative',
    width: '1ch',
    fontVariantNumeric: 'tabular-nums',
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} textColor={textColor} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  places?: number[];
  gap?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
  className?: string;
  digitStyle?: React.CSSProperties;
  height?: number;
}

/**
 * Tailwind-based responsive counter with dynamic textColor
 * Example usage:
 * <Counter
 *   value={250}
 *   textColor={isMobile ? 'black' : 'white'}
 *   className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold"
 * />
 */
export default function Counter({
  value,
  places = [100, 10, 1],
  gap = 2,
  textColor = 'currentColor',
  fontWeight = 'bold',
  className = '',
  digitStyle,
  height = 60,
}: CounterProps) {

  return (
    <div
      className={`inline-flex items-center justify-center gap-[${gap}px] overflow-hidden leading-none font-${fontWeight} ${className}`}
      style={{ color: textColor }} // ✅ Sets color context for all digits
    >
      {places.map(place => (
        <Digit
          key={place}
          place={place}
          value={value}
          height={height}
          textColor={textColor}
          digitStyle={digitStyle}
        />
      ))}
    </div>
  );
}