import Header from './Header';
import Form from './Form';

export default function FormPage({
  switchPage,
  fullName,
  emailAddress,
  githubUsername,
  updateFullName,
  updateEmailAddress,
  updateGithubUsername,
}) {
  return (
    <section className='form-page'>
      <Header />

      <section className='intro'>
        <h1 className='intro__heading'>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>

        <p className='intro__description'>
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <Form
        switchPage={switchPage}
        fullName={fullName}
        emailAddress={emailAddress}
        githubUsername={githubUsername}
        updateFullName={updateFullName}
        updateEmailAddress={updateEmailAddress}
        updateGithubUsername={updateGithubUsername}
      />
    </section>
  );
}
