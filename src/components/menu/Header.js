import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import logo from "./../../img/logo.jpg";


const Header = () => {

  return (
    <header>
      <div className="nav-area">
      <img src={logo} alt="HR" />
        <Link to="/" className="logo">
          HR Program
        </Link>
        <Navbar />
        <BtnDarkMode />
      </div>
    </header>
  );
};

export default Header;
