import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";

const Sidebar = () => {
  return (
    <aside className={`aside`}>
      <Link to="/" className="nav-logo">
        <img src={Logo} alt="" />
      </Link>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/usersPage/exercises" className="nav-link">
              <i className="uil uil-fire"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usersPage/infoUser" className="nav-link">
              <i className="uil uil-user"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/usersPage/listUsers" className="nav-link">
              <i className="uil uil-setting"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="nav-footer">
        <span className="copyright">&copy; 2023 </span>
      </section>
    </aside>
  );
};

export default Sidebar;
