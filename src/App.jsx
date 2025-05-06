import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import TicketPage from './components/TicketPage';
import FormPage from './components/FormPage';

export default function App() {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  function switchPage() {
    setDisplayTicket(!displayTicket);
  }

  function uploadAvatar(e) {
    const file = e.currentTarget.files[0];
    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
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

  if (displayTicket) {
    return (
      <TicketPage
        avatar={avatar}
        fullName={fullName}
        email={email}
        username={username}
      />
    );
  } else {
    return (
      <FormPage
        avatar={avatar}
        switchPage={switchPage}
        fullName={fullName}
        email={email}
        username={username}
        uploadAvatar={uploadAvatar}
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
      />
    );
  }
}
