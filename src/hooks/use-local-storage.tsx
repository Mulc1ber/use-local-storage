import { useLayoutEffect, useState } from "react";

export const useLocalStorage = <T,>(
  key: string
): [T | null, { setItem: (value: T) => void; removeItem: () => void }] => {
  const [value, setValue] = useState<T | null>(null);

  useLayoutEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setValue(item ? JSON.parse(item) : null);
    } catch (err) {
      console.error("Error:", err);
      setValue(null);
    }
  }, [key]);

  const setItem = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setValue(null);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ];
};
