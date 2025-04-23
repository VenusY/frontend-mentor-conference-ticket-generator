import '../styles/scss/Header.scss';

export default function Header() {
  return (
    <header className='header'>
      <img
        src={require('../assets/images/logo-full.svg')}
        alt='Logo'
        className='header__logo'
      />
    </header>
  );
}
