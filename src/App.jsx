import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import TicketPage from './components/TicketPage';
import FormPage from './components/FormPage';

export default function App() {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  function switchPage() {
    setDisplayTicket(!displayTicket);
  }

  function updateFullName(e) {
    setFullName(e.currentTarget.value);
  }

  function updateEmailAddress(e) {
    setEmailAddress(e.currentTarget.value);
  }

  function updateGithubUsername(e) {
    setGithubUsername(e.currentTarget.value);
  }

  if (displayTicket) {
    return <TicketPage />;
  } else {
    return (
      <FormPage
        fullName={fullName}
        emailAddress={emailAddress}
        githubUsername={githubUsername}
        updateFullName={updateFullName}
        updateEmailAddress={updateEmailAddress}
        updateGithubUsername={updateGithubUsername}
      />
    );
  }
}
