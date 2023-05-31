import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import user from '../../../public/images/user.png';

const Burger = ({ show, handleClose }) => (
  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <div>
        <NavLink to='/about'>
          <img className='my-2' src={user} alt='user' width='50px' />
        </NavLink>
        <p>Rafael Gabidulin</p>
        <a href='mailto: rafagabidulin@gmail.com'>rafagabidulin@gmail.com</a>
      </div>
      <Nav.Item>
        <NavLink to='about'>About me</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/'>Posts</NavLink>
      </Nav.Item>
    </Offcanvas.Body>
  </Offcanvas>
);

export default Burger;
