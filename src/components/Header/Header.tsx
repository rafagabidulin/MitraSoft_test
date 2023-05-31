import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Burger from '../Burger/Burger';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Button
          variant='outline-primary navbar-toggler-icon p-3 mx-5'
          size='lg'
          onClick={() => setShow(!show)}
          aria-expanded={show}
        />
        <NavLink className='navbar-brand' to='/'>
          <img
            style={{ marginLeft: '60px' }}
            src='https://mitrasoft.ru/wp-content/uploads/2021/08/logo-new.svg'
          />
        </NavLink>
        <Burger show={show} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
};

export default Header;
