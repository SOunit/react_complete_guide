import { useState } from 'react';

const BaseInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = false;
  if (validate(enteredValue)) {
    valueIsValid = true;
  }

  let hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  };

  const valueInputClasses = hasError ? 'form-control invalid' : 'form-control';

  return {
    enteredValue,
    valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    valueInputClasses,
  };
};

export default BaseInput;
