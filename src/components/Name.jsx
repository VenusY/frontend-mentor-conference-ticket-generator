import '../styles/scss/Name.scss';

export default function Name({ namePart }) {
  return <span className='name'>{namePart.toLowerCase()}</span>;
}
