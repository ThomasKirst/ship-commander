import { useNavigate } from 'react-router-dom';

export default function NewShipForm({ onCreateShip }) {
  const navigate = useNavigate();

  function createShip(event) {
    event.preventDefault();
    // Navigate user to another planet
    navigate('/ships');
  }

  return (
    <form onSubmit={createShip}>
      <label htmlFor="name">Enter ship name</label>
      <input type="text" name="name" id="name" />
      <button type="submit">🚀 Add Ship</button>
    </form>
  );
}
