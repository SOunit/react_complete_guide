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
const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    valueInputClasses: firstNameInputClasses,
  } = BaseInput((value) => value.trim() !== '');

  let formIsValid = false;
  if (enteredFirstNameIsValid) {
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
            <p className='error-text'>Name is empty.</p>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
