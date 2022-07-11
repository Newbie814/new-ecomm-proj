import { Outlet, Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={Logo} alt='logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
