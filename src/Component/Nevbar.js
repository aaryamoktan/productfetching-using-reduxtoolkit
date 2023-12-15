import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
const Nevbar = () => {
  const cartproducts = useSelector(state=>state.cart)
  return (
    <>
         <Navbar expand="lg" style={{height:"10vh",boxShadow:"0px 0px 10px black"}} className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Sopping</Navbar.Brand>
        <Navbar.Brand href="/">Product</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav.Link variant="outline-success" href="/cart">cart {cartproducts.length}</Nav.Link>
      </Container>
    </Navbar>
    </>
  )
}

export default Nevbar