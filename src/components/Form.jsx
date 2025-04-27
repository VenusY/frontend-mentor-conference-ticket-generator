import '../styles/scss/Form.scss';
import AvatarUpload from './AvatarUpload';

export default function Form({
  fullName,
  emailAddress,
  githubUsername,
  updateFullName,
  updateEmailAddress,
  updateGithubUsername,
}) {
  return (
    <form className='form'>
      <div className='form__container'>
        <label htmlFor='avatar-upload' className='form__label'>
          Upload Avatar
        </label>
        <AvatarUpload />
      </div>

      <div className='form__container'>
        <label htmlFor='full-name' className='form__label'>
          Full Name
        </label>
        <input
          type='text'
          autoComplete='name'
          id='full-name'
          className='form__input-field'
        />
      </div>

      <div className='form__container'>
        <label htmlFor='email-address' className='form__label'>
          Email Address
        </label>
        <input
          type='text'
          autoComplete='email'
          placeholder='example@email.com'
          id='email-address'
          className='form__input-field'
        />
      </div>

      <div className='form__container'>
        <label htmlFor='github-username' className='form__label'>
          GitHub Username
        </label>
        <input
          type='text'
          placeholder='@yourusername'
          id='github-username'
          className='form__input-field'
        />
      </div>

      <button type='submit' className='form__submit-button'>
        Generate My Ticket
      </button>
    </form>
  );
}
