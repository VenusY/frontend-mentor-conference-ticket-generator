import Header from './Header';
import Ticket from './Ticket';

export default function TicketPage() {
  return (
    <section className='ticket-page'>
      <Header />

      <section className='intro'>
        <h1 className='intro__heading'>
          Congrats,{' '}
          <span className='intro__heading--highlighted'>Jonatan Kristof</span>!
          Your ticket is ready.
        </h1>

        <p className='intro__description'>
          We've emailed your ticket to{' '}
          <span className='intro__description--highlighted'>
            jonatan@email.com
          </span>{' '}
          and will send updates in the run up to the event.
        </p>
      </section>

      <Ticket />
    </section>
  );
}
