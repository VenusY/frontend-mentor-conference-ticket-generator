import '../styles/scss/Ticket.scss';

export default function Ticket({ avatar, fullName, username }) {
  return (
    <div className='ticket'>
      <div className='ticket__left-container'>
        <header className='ticket-header'>
          <img
            src={require('../assets/images/logo-mark.svg')}
            alt='Logo'
            className='ticket-header__logo'
          />

          <section className='ticket-header__text-section'>
            <h2 className='ticket-header__heading'>Coding Conf</h2>
            <p className='ticket-header__date-location'>
              Jan 31, 2025 / Austin, TX
            </p>
          </section>
        </header>

        <main className='ticket-receiver'>
          <img
            src={require('../assets/images/image-avatar.jpg')}
            alt='Avatar'
            className='ticket-receiver__avatar'
          />

          <div className='ticket-receiver__text-section'>
            <p className='ticket-receiver__name'>{fullName.toLowerCase()}</p>

            <div className='ticket-receiver__github'>
              <img
                src={require('../assets/images/icon-github.svg')}
                alt='GitHub logo'
                className='ticket-receiver__github-logo'
              />
              <p className='ticket-receiver__github-username'>{username}</p>
            </div>
          </div>
        </main>
      </div>

      <div className='ticket__right-container'>
        <p className='ticket__number'>#01609</p>
      </div>
    </div>
  );
}
