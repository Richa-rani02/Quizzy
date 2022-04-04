import { Link} from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [isMobile, setISMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-side">
        <img
          className="logo-img"
          src="../Assets/quizzylogo.png"
          alt=""
        />
        <h6>QUIZZY</h6>
      </div>

      <ul
        className={`list-style-none flex-row ${isMobile ? "nav-links-mobile" : "nav-links"}`}
        onClick={() => setISMobile(false)}
      >
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/dashboard" className="dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="login" className="login">
        <li>Login</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setISMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fa fa-times" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-bars" aria-hidden="true"></i>
        )}
      </button>
    </nav>
  );
};
