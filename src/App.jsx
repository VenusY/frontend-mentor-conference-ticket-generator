import './styles/reset.css';
import './styles/scss/App.scss';
import { useState } from 'react';
import TicketPage from './components/TicketPage';
import FormPage from './components/FormPage';

export default function App() {
  const [displayTicket, setDisplayTicket] = useState(false);

  function togglePage() {
    setDisplayTicket(!displayTicket);
  }

  if (displayTicket) {
    return <TicketPage />;
  } else {
    return <FormPage />;
  }
}
