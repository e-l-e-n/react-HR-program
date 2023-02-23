import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './../footer/Footer';


const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
