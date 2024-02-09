import { RefObject, useState, useEffect } from 'react';

export interface UseTickerProps {
  repeat?: boolean;
  margin?: string | number;
  threshold?: number | number[];
  ref: RefObject<HTMLElement | null>;
}

export const useTicker = ({ ref, margin = '10px', threshold = 0.4, repeat = false }: UseTickerProps) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const callback = entries => {
      const [entry] = entries;

      setIntersecting(entry.isIntersecting);

      if (!repeat && entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    };

    let observerRefValue = null;

    const observer = new IntersectionObserver(callback, { margin, threshold });

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [ref, setIntersecting, margin, threshold, repeat]);

  return isIntersecting;
};
