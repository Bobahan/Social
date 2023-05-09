import React from 'react';
import { useEffect, useRef } from 'react';

export const usePrevious = (value) => {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
};
