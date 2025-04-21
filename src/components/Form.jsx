import '../styles/scss/Form.scss';

export default function Form() {
  return (
    <form className='form'>
      <label htmlFor='avatar-upload' className='form__label'>
        Upload Avatar
      </label>

      <label htmlFor='avatar-upload' className='avatar-upload__label'>
        <span className='avatar-upload__image-container'>
          <img
            src={require('../assets/images/icon-upload.svg')}
            alt='Upload'
            className='avatar-upload__image'
          />
        </span>
        <button type='button' className='avatar-upload__button'>
          Remove image
        </button>
        <button type='button' className='avatar-upload__button'>
          Change image
        </button>
        <span className='avatar-upload__text'>
          Drag and drop or click to upload
        </span>
        <input
          type='file'
          accept='image/*'
          id='avatar-upload'
          className='avatar-upload__input-field'
        />
      </label>

      <div className='avatar-upload__info'>
        <img
          src={require('../assets/images/icon-info.svg')}
          alt='Information'
          className='avatar-upload__info-icon'
        />
        <p className='avatar-upload__info-text'>
          Upload your photo {'('}JPG or PNG, max size: 500KB{')'}.
        </p>
      </div>

      <label htmlFor='full-name' className='form__label'>
        Full Name
      </label>
      <input
        type='text'
        autoComplete='name'
        id='full-name'
        className='form__input-field'
      />

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

      <label htmlFor='github-username' className='form__label'>
        GitHub Username
      </label>
      <input
        type='text'
        placeholder='@yourusername'
        id='github-username'
        className='form__input-field'
      />

      <button className='form__submit-button'>Generate My Ticket</button>
    </form>
  );
}
