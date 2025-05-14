import Header from './Header';
import Name from './Name';
import Ticket from './Ticket';

export default function TicketPage({ avatar, fullName, email, username }) {
  const nameParts = fullName.split(' ');

  return (
    <section className='ticket-page'>
      <Header modifierClass='header--large-margin' />

      <section className='intro'>
        <h1 className='intro__heading'>
          Congrats,{' '}
          {nameParts.map((namePart, index) => {
            if (index === nameParts.length - 1) {
              return <Name key={index} namePart={namePart} />;
            } else {
              return (
                <>
                  <Name key={index} namePart={namePart} />{' '}
                </>
              );
            }
          })}
          ! Your ticket is ready.
        </h1>

        <p className='intro__description'>
          We've emailed your ticket to{' '}
          <span className='intro__description--highlighted'>{email}</span> and
          will send updates in the run up to the event.
        </p>
      </section>

      <Ticket avatar={avatar} fullName={fullName} username={username} />
    </section>
  );
}
