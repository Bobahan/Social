import React from 'react';
import { useEffect, useRef } from 'react';

export const useIsMounted = () => {
  let isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  });

  return isMounted;
};
