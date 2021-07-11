import { useState, useEffect } from 'react';

// custom hooks, naming is the most important setting
const useCounter = () => {
  // you can use other hooks in custom hooks
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
