import { useEffect, useState, useRef } from 'react';

// NOTE: This hook is kept separate as it's the reusable logic heart of the animation.
const useCountUp = (endValue, duration = 2800) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    // Reset state and start time whenever the effect runs
    setCount(0);
    startTimeRef.current = null;
    
    if (endValue <= 0) return;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const currentValue = Math.floor(progress * endValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]); 

  return count;
};

export default useCountUp;