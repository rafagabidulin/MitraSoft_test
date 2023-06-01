import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

import user from '../../../public/images/user.png';

const Burger = ({ show, handleClose }) => (
  <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Menu</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Card className='border m-0'>
        <Card.Body>
          <NavLink to='/about'>
            <img className='my-2' src={user} alt='user' width='50px' />
          </NavLink>
          <h2>Rafael Gabidulin</h2>
          <b>
            Email: <a href='mailto: rafagabidulin@gmail.com'>rafagabidulin@gmail.com</a>
          </b>
        </Card.Body>
      </Card>
      <Nav.Item>
        <NavLink to='about'>
          <Button className='my-2 w-100'>About Me</Button>
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/'>
          <Button className='my-2 w-100'>Posts</Button>
        </NavLink>
      </Nav.Item>
    </Offcanvas.Body>
  </Offcanvas>
);

export default Burger;
