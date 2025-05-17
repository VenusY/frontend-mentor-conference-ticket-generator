import '../styles/scss/AvatarUpload.scss';

export default function AvatarUpload({
  avatar,
  uploadAvatar,
  removeAvatar,
  dropFile,
  handleDragOver,
  focusInput,
  fileInputField,
}) {
  return (
    <>
      <div
        onClick={focusInput}
        onDrop={dropFile}
        onDragOver={handleDragOver}
        className='avatar-upload__main-container'
      >
        <input
          type='file'
          onChange={uploadAvatar}
          accept='image/*'
          id='avatar-upload'
          className='avatar-upload__input-field'
          ref={fileInputField}
        />

        <div className='avatar-upload__icon-container'>
          <img
            src={avatar || require('../assets/images/icon-upload.svg')}
            alt='Avatar'
            className={`avatar-upload__icon ${
              avatar ? 'avatar-upload__icon--full-size' : ''
            }`}
          />
        </div>

        <div
          className={`avatar-upload__button-container ${
            avatar ? 'avatar-upload__button-container--visible' : ''
          }`}
        >
          <button
            type='button'
            onClick={removeAvatar}
            className='avatar-upload__button avatar-upload__remove-button'
          >
            Remove image
          </button>

          <button
            type='button'
            onClick={focusInput}
            className='avatar-upload__button avatar-upload__change-button'
          >
            Change image
          </button>
        </div>

        <span
          className={`avatar-upload__text ${
            avatar ? 'avatar-upload__text--hidden' : ''
          }`}
        >
          Drag and drop or click to upload
        </span>
      </div>

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

      <div className='avatar-upload__error'>
        <img
          src={require('../assets/images/icon-error.svg')}
          alt='Error'
          className='avatar-upload__error-icon'
        />
        <p className='avatar-upload__error-message'>
          File too large. Please upload a photo under 500KB.
        </p>
      </div>
    </>
  );
}
