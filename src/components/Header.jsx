import '../styles/scss/Header.scss';

export default function Header({ modifierClass }) {
  return (
    <header className={`header ${modifierClass}`}>
      <img
        src={require('../assets/images/logo-full.svg')}
        alt='Logo'
        className='header__logo'
      />
    </header>
  );
}
