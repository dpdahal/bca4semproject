import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to='/add-student'>Add Student</Link>
      <hr/>
      <h1>CRUD App</h1>
    </div>
  );
}

export default Header;