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
  updateFullName,
  updateEmail,
  updateUsername,
  fileInputField,
}) {
  return (
    <section className='form-page'>
      <Header />

      <section className='intro'>
        <h1 className='intro__heading'>
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
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
        fileInputField={fileInputField}
      />
    </section>
  );
}
