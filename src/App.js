import { Link, NavLink, Route, Routes } from 'react-router-dom';
import NewShipForm from './pages/NewShipForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Ship Commander</h1>
      <nav>
        <NavLink to="/">User Profile</NavLink>
        <NavLink to="/ships">Available Ships</NavLink>
        <NavLink to="/market">Marketplace</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <Routes>
        {/* <Switch> */}
        <Route path="/" element={<h2>User Profile</h2>} />
        <Route path="/ships" element={<h2>Available Ships</h2>} />
        <Route path="/ships/new" element={<NewShipForm />} />
        <Route path="/market" element={<h2>Marketplace</h2>} />
        <Route path="/login" element={<h2>Login</h2>} />
      </Routes>
      <footer>
        <Link to="/ships/new">🚀 Create a new Ship</Link>
      </footer>
    </div>
  );
}

export default App;
