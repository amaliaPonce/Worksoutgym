import "../../styles/adminDashboard/sidebar.css";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav-logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#ejercicios" className="nav-link">
              <i className="uil uil-fire"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#usuarios" className="nav-link">
              <i className="uil uil-user"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#administración" className="nav-link">
              <i className="uil uil-setting"></i> 
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav-footer">
        <span className="copyright">&copy; 2023 </span>
      </div>
    </aside>
  );
};

export default Sidebar;
