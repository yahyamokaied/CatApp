import './App.css';
import { Link } from 'react-router-dom';

function Nav() {


  const navStyle = {
    color:'white'
  }


  return (
<nav>
<Link style={navStyle} to="/">
    <h2>Cat Facts</h2>
    </Link>
    <ul className="nav-links">


      <Link style={navStyle} to="/mrchat">
          <li>All Facts</li>
      </Link>

    </ul>
</nav>
  );
}

export default Nav;
