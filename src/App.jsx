import './styles/reset.css';
import './styles/scss/App.scss';
import Form from './components/Form';

export default function App() {
  return (
    <>
      <header className='header'>
        <img
          src={require('./assets/images/logo-full.svg')}
          alt='Logo'
          className='header__logo'
        />
      </header>

      <section className='intro'>
        <h1 className='intro__heading'>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>

        <p className='intro__description'>
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <Form />
    </>
  );
}
