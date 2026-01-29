import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/code" state={{data: "helloo"}}>About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;