// Inspired by https://css-tricks.com/using-requestanimationframe-with-react-hooks/

import { useEffect, useRef } from "react";

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () =>
      requestRef.current ? cancelAnimationFrame(requestRef.current) : undefined;
  }, []);
};

export default useAnimationFrame;
