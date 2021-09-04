import BaseInput from '../hooks/base-input';

// behavior
// 1. instant error check
// 2. instant error recovery
// 3. show error message only after touch
// 4. submit button disabled

// todo to get behavior
// 1. show error message
// 2. check if value is invalid
// 3. check if touched
// 4. check if hasError(=invalid && touched)
// 5. add check for blur
// 6. add check for key touch to recover error
// 7. add error style to input form
// 8. move all to custom hooks
const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    valueInputClasses: firstNameInputClasses,
  } = BaseInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    valueInputClasses: lastNameInputClasses,
  } = BaseInput((value) => value.trim() !== '');

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    valueInputClasses: emailInputClasses,
  } = BaseInput((value) => value.includes('@'));

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  return (
    <form>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameInputHasError && (
            <p className='error-text'>first name is empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameInputHasError && (
            <p className='error-text'>last name is empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
