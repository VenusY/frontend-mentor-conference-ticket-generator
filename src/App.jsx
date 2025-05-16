import './styles/reset.css';
import './styles/scss/App.scss';
import { useState, useRef } from 'react';
import TicketPage from './components/TicketPage';
import FormPage from './components/FormPage';

export default function App() {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const fileInputField = useRef();

  function switchPage() {
    setDisplayTicket(!displayTicket);
  }

  function uploadAvatar(e) {
    let file;

    if (e.currentTarget.files) {
      file = e.currentTarget.files[0];
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  }

  function removeAvatar(e) {
    e.stopPropagation();
    setAvatar('');
    fileInputField.current.value = '';
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

  function dropFile(e) {
    e.preventDefault();

    let file;

    if (e.dataTransfer.files) {
      file = e.dataTransfer.files[0];
    }

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function focusInput(e) {
    e.stopPropagation();
    fileInputField.current.click();
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
        removeAvatar={removeAvatar}
        dropFile={dropFile}
        handleDragOver={handleDragOver}
        focusInput={focusInput}
        updateFullName={updateFullName}
        updateEmail={updateEmail}
        updateUsername={updateUsername}
        fileInputField={fileInputField}
      />
    );
  }
}
