import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLink2
} from './NavbarElements';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
    console.log (click)
  };
  
  return (
    <>
      <Nav>
        <a href="http://worldwidecruisers.com">
          <img src={`${process.env.PUBLIC_URL}/logo_recto.png`} alt='logo' className='logo'/>
        </a>
        <Bars onClick={() => changeClick()}/>
        <NavMenu click={click}>
          <NavLink as="a" href="http://worldwidecruisers.com/" activeStyle>
            Home
          </NavLink>
          <NavLink as="a" href="http://worldwidecruisers.com/content/4-about-us" activeStyle>
            About us
          </NavLink>
          <NavLink2 as="a" href="http://worldwidecruisers.com/build_your_own" class="active" activeStyle>
            Build your own
          </NavLink2>
          <NavLink as="a" href="https://worldwidecruisers.com/content/6-recent-builds" activeStyle>
            Recent builds
          </NavLink>
          {/* <NavLink as="a" href="http://worldwidecruisers.com/4-merchandise" activeStyle>
            Merchandise
          </NavLink> */}
          <NavLink as="a" href="https://worldwidecruisers.com/content/8-contact-us" activeStyle>
            Contact us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;