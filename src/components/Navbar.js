import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>BOOKcorner</h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/create'>Create</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
