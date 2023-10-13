import { useEffect, useState } from "react";

const useCount = (s: number) => {
  if (typeof s !== 'number') {
    throw new Error();
  };
  const [value, setValue] = useState(s);
  const [timeout, setTimeout] = useState<any>(null);

  const startTime = () => {
    const defaultTimeout = setInterval(() => {
      setValue((preValue) => preValue - 1);
    }, 1000);
    setTimeout(defaultTimeout);
  };

  const stopTime = () => {
    clearInterval(timeout);
    setTimeout(null);
  };

  const reset = () => {
    setValue(s);
    clearInterval(timeout);
  };

  useEffect(() => {
    if (value === 0) {
      setTimeout(null);
      clearInterval(timeout);
    };
  }, [value]);

  return [startTime, stopTime, reset, value,];
};

export default useCount;