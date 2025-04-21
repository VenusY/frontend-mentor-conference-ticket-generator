export default function AvatarUpload() {
  return (
    <>
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
    </>
  );
}
