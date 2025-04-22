import '../styles/scss/AvatarUpload.scss';

export default function AvatarUpload() {
  return (
    <>
      <label htmlFor='avatar-upload' className='avatar-upload__main-container'>
        <input
          type='file'
          accept='image/*'
          id='avatar-upload'
          className='avatar-upload__input-field'
        />

        <button type='button' className='avatar-upload__button'>
          Remove image
        </button>

        <button type='button' className='avatar-upload__button'>
          Change image
        </button>

        <span className='avatar-upload__icon-container'>
          <img
            src={require('../assets/images/icon-upload.svg')}
            alt='Upload'
            className='avatar-upload__icon'
          />
        </span>

        <span className='avatar-upload__text'>
          Drag and drop or click to upload
        </span>
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
    </>
  );
}
