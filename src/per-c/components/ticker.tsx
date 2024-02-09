import { useEffect, useRef, useState, ReactNode, CSSProperties, Children } from 'react';

import { useTicker } from '../hooks/useTicker';

const marqueeContainerStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
};

const marqueeItemsStyles = (
  startPosition: number,
  time: number,
  direction?: string,
  willChange?: boolean,
): CSSProperties => ({
  // width: 250,
  display: 'inline-block',
  whiteSpace: 'nowrap',
  transform: `translate3d(-${startPosition}px, 0, 0)`,
  animationName: 'marqueeScroll',
  animationDuration: `${time}s`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationPlayState: 'var(--marquee-play)',
  animationDirection: direction === 'right' ? 'reverse' : undefined,
  ...(willChange && { willChange: 'transform' }),
});

const marqueeItemStyles = (marginRight: string): CSSProperties => ({
  position: 'relative',
  display: 'inline-block',
  marginRight: marginRight,
});

const getClonedItems = (items: (string | number | ReactNode)[], copyTimes = 1): (string | number)[] => {
  return Array(copyTimes).fill(items).flat();
};

export interface TickerProps {
  children?: ReactNode;
  className?: string;
  duration?: number;
  direction?: 'left' | 'right';
  textSpacing?: string;
  pauseOnHover?: boolean;
  playOnlyInView?: boolean;
  threshold?: number;
}

export const Ticker = ({
  className = 'marquee',
  duration = 50,
  direction = 'left',
  pauseOnHover = false,
  playOnlyInView = true,
  textSpacing = '0.15em',
  threshold = 0.1,
  children,
}: TickerProps) => {
  const marqueeContainer = useRef<HTMLDivElement>(null);
  const marqueeItems = useRef<HTMLDivElement>(null);
  const [translateFrom, setTranslateFrom] = useState(0);
  const [showItems, setShowItems] = useState(Children.toArray(children));
  const [initialDuration, setInitialDuration] = useState(duration);
  const [isPlaying, setIsPlaying] = useState(true);

  const isVisible = useTicker({
    ref: marqueeContainer,
    rootMargin: '10px',
    threshold: [threshold],
    repeat: true,
  });

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current!.offsetWidth);
    const itemsWidth = Math.floor(marqueeItems.current!.scrollWidth);
    const cloneTimes = Math.max(2, Math.ceil((containerWidth * 2) / itemsWidth));
    const translateFromVal = itemsWidth * Math.floor(cloneTimes / 2);
    const durationVal = duration * parseFloat((translateFromVal / containerWidth).toFixed(2));

    setShowItems(getClonedItems(Children.toArray(children), cloneTimes));
    setTranslateFrom(translateFromVal);
    setInitialDuration(durationVal);
  }, [children, duration]);

  useEffect(() => {
    if (!playOnlyInView) return;

    if (isVisible) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isVisible, playOnlyInView]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div
        ref={marqueeContainer}
        className={`${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...marqueeContainerStyles,
          ['--marquee-play' as string]: isPlaying ? 'running' : 'paused',
        }}
      >
        <div
          ref={marqueeItems}
          className={`${className}__items`}
          style={marqueeItemsStyles(translateFrom, initialDuration, direction)}
        >
          {showItems.map((item, index) => (
            <div className={`${className}__item`} style={marqueeItemStyles(textSpacing)} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// const items = [1, 2, 3, 4, 5, 6, 7];
// const speed = 100;
// const tickerRef = useRef<any>();
// const [visibleIndex, setVisibleIndex] = useState(0);
//
// useEffect(() => {
//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.style.transition = `transform ${speed}s linear`;
//           entry.target.style.transform = 'translateX(-100%)';
//         } else {
//           entry.target.style.transition = 'none';
//           entry.target.style.transform = 'translateX(0)';
//         }
//       });
//     },
//     { threshold: 0.5 }, // Adjust the threshold as needed
//   );
//
//   observer.observe(tickerRef.current);
//
//   return () => {
//     observer.disconnect();
//   };
// }, [speed]);
//
// // useEffect(() => {
// //   const observer = new IntersectionObserver(
// //     entries => {
// //       entries.forEach(entry => {
// //         const newIndex = (visibleIndex + 1) % items.length;
// //
// //         if (entry.isIntersecting) {
// //           setVisibleIndex(newIndex);
// //           entry.target.style.transition = `transform ${speed}s linear`;
// //           entry.target.style.transform = 'translateX(-100%)';
// //         } else {
// //           entry.target.style.transition = 'none';
// //           entry.target.style.transform = 'translateX(0)';
// //         }
// //
// //         // if (entry.isIntersecting) {
// //         //   const newIndex = (visibleIndex + 1) % items.length;
// //         //   setVisibleIndex(newIndex);
// //         //   entry.target.style.transition = `none`;
// //         //   entry.target.style.transform = 'translateX(0)';
// //         // }
// //       });
// //     },
// //     { threshold: 1.0 }, // Set threshold to 1.0 to trigger when fully in the viewport
// //   );
// //
// //   observer.observe(tickerRef.current);
// //
// //   return () => {
// //     observer.disconnect();
// //   };
// // }, [items, visibleIndex]);
//
// return (
//   <div style={{ overflow: 'hidden' }}>
//     <div ref={tickerRef} style={{ display: 'flex', gap: 40 }}>
//       {items.map((item, index) => (
//         <div key={index} style={{ minWidth: 250, border: '1px solid black', padding: 5 }}>
//           {item}
//         </div>
//       ))}
//     </div>
//     {/*<div ref={tickerRef} style={{ display: 'flex', overflow: 'hidden' }}>*/}
//     {/*  {items.map((item, index) => (*/}
//     {/*    <div*/}
//     {/*      key={index}*/}
//     {/*      style={{*/}
//     {/*        width: 250,*/}
//     {/*        boxSizing: 'border-box',*/}
//     {/*        border: '1px solid black',*/}
//     {/*        padding: 5,*/}
//     {/*        // transform: index === visibleIndex ? 'translateX(-100%)' : 'translateX(0)',*/}
//     {/*        // transition: `transform ${speed}s linear`,*/}
//     {/*      }}*/}
//     {/*    >*/}
//     {/*      {item}*/}
//     {/*    </div>*/}
//     {/*  ))}*/}
//     {/*</div>*/}
//   </div>
// );
