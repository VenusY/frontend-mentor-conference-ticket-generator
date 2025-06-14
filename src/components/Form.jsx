import '../styles/scss/Form.scss';
import { useState } from 'react';
import AvatarUpload from './AvatarUpload';

export default function Form({
  switchPage,
  avatar,
  fullName,
  email,
  username,
  uploadAvatar,
  removeAvatar,
  dropFile,
  handleDragOver,
  focusInput,
  updateFullName,
  updateEmail,
  updateUsername,
  displayUploadError,
  fileInputField,
}) {
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validUsername, setValidUsername] = useState(true);

  function validateInputs(e) {
    e.preventDefault();

    let nameIsValid = false;
    let emailIsValid = false;
    let usernameIsValid = false;
    const fullNameRegex = /^(?:\p{L}+[-'\p{L}]*)(?:\s\p{L}+[-'\p{L}]*)*$/u;
    const emailRegex =
      /^[A-Za-z0-9]([A-Za-z0-9.-]*[A-Za-z0-9])?@[A-Za-z]([A-Za-z.-]*[A-Za-z])?\.[A-Za-z]([A-Za-z.]*[A-Za-z])?$/;
    const usernameRegex = /^[A-Za-z0-9-]+$/;

    if (fullName.match(fullNameRegex)) {
      nameIsValid = true;
      setValidName(true);
    } else {
      setValidName(false);
    }

    if (email.match(emailRegex)) {
      emailIsValid = true;
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (username.match(usernameRegex)) {
      usernameIsValid = true;
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }

    if (nameIsValid && emailIsValid && usernameIsValid) {
      switchPage();
    }
  }

  return (
    <form onSubmit={validateInputs} className='form'>
      <div className='form__container'>
        <label htmlFor='avatar-upload' className='form__label'>
          Upload Avatar
        </label>
        <AvatarUpload
          avatar={avatar}
          uploadAvatar={uploadAvatar}
          removeAvatar={removeAvatar}
          dropFile={dropFile}
          handleDragOver={handleDragOver}
          focusInput={focusInput}
          displayUploadError={displayUploadError}
          fileInputField={fileInputField}
        />
      </div>

      <div className='form__container'>
        <label htmlFor='full-name' className='form__label'>
          Full Name
        </label>
        <input
          value={fullName}
          onChange={updateFullName}
          type='text'
          autoComplete='name'
          id='full-name'
          className={`form__input-field ${
            validName ? '' : 'form__input-field--invalid'
          }`}
        />
        <div
          className={`error-message ${
            validName ? '' : 'error-message--visible'
          }`}
        >
          <img
            src={require('../assets/images/icon-error.svg')}
            alt='Error'
            className='error-message__icon'
          />
          <p className='error-message__text'>Please enter a valid name.</p>
        </div>
      </div>

      <div className='form__container'>
        <label htmlFor='email-address' className='form__label'>
          Email Address
        </label>
        <input
          value={email}
          onChange={updateEmail}
          type='text'
          autoComplete='email'
          placeholder='example@email.com'
          id='email-address'
          className={`form__input-field ${
            validEmail ? '' : 'form__input-field--invalid'
          }`}
        />
        <div
          className={`error-message ${
            validEmail ? '' : 'error-message--visible'
          }`}
        >
          <img
            src={require('../assets/images/icon-error.svg')}
            alt='Error'
            className='error-message__icon'
          />
          <p className='error-message__text'>Please enter a valid email.</p>
        </div>
      </div>

      <div className='form__container'>
        <label htmlFor='github-username' className='form__label'>
          GitHub Username
        </label>
        <input
          value={username}
          onChange={updateUsername}
          type='text'
          placeholder='@yourusername'
          id='github-username'
          className={`form__input-field ${
            validUsername ? '' : 'form__input-field--invalid'
          }`}
        />
        <div
          className={`error-message ${
            validUsername ? '' : 'error-message--visible'
          }`}
        >
          <img
            src={require('../assets/images/icon-error.svg')}
            alt='Error'
            className='error-message__icon'
          />
          <p className='error-message__text'>Please enter a valid username.</p>
        </div>
      </div>

      <button type='submit' className='form__submit-button'>
        Generate My Ticket
      </button>
    </form>
  );
}
