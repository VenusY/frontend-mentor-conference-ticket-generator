import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import TicketPage from './components/TicketPage';
import FormPage from './components/FormPage';

export default function App() {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  function switchPage() {
    setDisplayTicket(!displayTicket);
  }

  function updateFullName(e) {
    setFullName(e.currentTarget.value);
  }

  function updateEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function updateUsername(e) {
    setUsername(e.currentTarget.value);
  }

  function manualUpdateFullName(newValue) {
    setFullName(newValue);
  }

  function manualUpdateEmail(newValue) {
    setEmail(newValue);
  }

  function manualUpdateUsername(newValue) {
    setUsername(newValue);
  }

  if (displayTicket) {
    return <TicketPage />;
  } else {
    return (
      <FormPage
        switchPage={switchPage}
        fullName={fullName}
        email={email}
        username={username}
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
        manualUpdateFullName={manualUpdateFullName}
        manualUpdateEmail={manualUpdateEmail}
        manualUpdateUsername={manualUpdateUsername}
      />
    );
  }
}
