import React from 'react'
import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img 
            src="https://fontmeme.com/permalink/230927/0ef75156bba8b2dfe9a9286e0e8c2ec9.png"
            width='100px'
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='link-item'>Home</Link>
            <Link to="/" className='link-item'>Movies</Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header