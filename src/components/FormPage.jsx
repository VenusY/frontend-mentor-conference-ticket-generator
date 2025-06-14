import Header from './Header';
import Form from './Form';

export default function FormPage({
  avatar,
  switchPage,
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
  return (
    <section className='form-page'>
      <Header modifierClass='' />

      <section className='intro'>
        <h1 className='intro__heading intro__heading--small-margin'>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>

        <p className='intro__description intro__description--wide'>
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <Form
        switchPage={switchPage}
        avatar={avatar}
        fullName={fullName}
        email={email}
        username={username}
        uploadAvatar={uploadAvatar}
        removeAvatar={removeAvatar}
        dropFile={dropFile}
        handleDragOver={handleDragOver}
        focusInput={focusInput}
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
        displayUploadError={displayUploadError}
        fileInputField={fileInputField}
      />
    </section>
  );
}
