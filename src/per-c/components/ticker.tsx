import { Box } from '@mui/material';
import { useCallback, useEffect, useRef, useState, ReactNode, Children } from 'react';

import { getClonedItems } from '../helpers';
import { useTicker } from '../hooks/useTicker';

export interface TickerState {
  readonly translate: number;
  readonly duration?: number;
  readonly isPlaying: boolean;
}

export interface TickerProps {
  children?: ReactNode;
  duration?: number;
  direction?: 'left' | 'right';
  mr?: string;
  pauseOnHover?: boolean;
  playOnlyInView?: boolean;
  threshold?: number;
}

export const Ticker = ({
  duration = 50,
  direction = 'left',
  pauseOnHover = false,
  playOnlyInView = true,
  mr = '40px',
  threshold = 0.1,
  children,
}: TickerProps) => {
  const tickerContainerRef = useRef<HTMLDivElement>(null);
  const tickerBoxRef = useRef<HTMLDivElement>(null);
  const [showItems, setShowItems] = useState(Children.toArray(children));
  const [ticker, setTicker] = useState<TickerState>({ translate: 0, duration, isPlaying: true });

  const isVisible = useTicker({
    ref: tickerContainerRef,
    margin: '10px',
    threshold: [threshold],
    repeat: true,
  });

  useEffect(() => {
    const containerWidth = Math.floor(tickerContainerRef.current!.offsetWidth);
    const itemsWidth = Math.floor(tickerBoxRef.current!.scrollWidth);
    const cloneTimes = Math.max(2, Math.ceil((containerWidth * 2) / itemsWidth));
    const translateFromValue = itemsWidth * Math.floor(cloneTimes / 2);
    const durationValue = duration * parseFloat((translateFromValue / containerWidth).toFixed(2));

    setShowItems(getClonedItems(Children.toArray(children), cloneTimes));
    setTicker(prevState => ({ ...prevState, translate: translateFromValue, duration: durationValue }));
  }, [children, duration]);

  useEffect(() => {
    if (!playOnlyInView) {
      return;
    }

    if (isVisible) {
      setTicker(prevState => ({ ...prevState, isPlaying: true }));
    } else {
      setTicker(prevState => ({ ...prevState, isPlaying: false }));
    }
  }, [isVisible, playOnlyInView]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setTicker(prevState => ({ ...prevState, isPlaying: false }));
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setTicker(prevState => ({ ...prevState, isPlaying: true }));
    }
  }, []);

  return (
    <>
      <Box
        ref={tickerContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={1}
        overflow="hidden"
        position="relative"
        sx={{ '@keyframes marqueeScroll': { to: { transform: 'translate3d(0, 0, 0)' } } }}
      >
        <Box
          ref={tickerBoxRef}
          whiteSpace="nowrap"
          display="inline-block"
          sx={{
            transform: `translate3d(-${ticker.translate}px, 0, 0)`,
            animationName: 'marqueeScroll',
            animationDuration: `${ticker.duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationPlayState: ticker.isPlaying ? 'running' : 'paused',
            animationDirection: direction === 'right' ? 'reverse' : undefined,
            // ...(willChange && { willChange: 'transform' }),
          }}
        >
          {showItems.map((item, index) => (
            <Box key={index} position="relative" display="inline-block" mr={mr}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
