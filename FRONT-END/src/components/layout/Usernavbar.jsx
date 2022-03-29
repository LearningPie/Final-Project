import { useState } from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap'

export default function Usernavbar() {
  return (
    <>
      <div className='sticky-top'>
        <Navbar bg='secondary' expand='lg'>
          <Container>
            <Navbar.Brand id='textcolor' className='fw-bold' href='/'>
              LEARNING PIE
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto fw-bold align-items-center'>
                <Nav.Link id='textcolor' classname='p-2' href='/'>
                  HOME
                </Nav.Link>
                <Nav.Link id='textcolor' href='/Register'>
                  REGISTER
                </Nav.Link>
                <Nav.Link id='textcolor' href='/Login'>
                  LOGIN
                </Nav.Link>
                {/* <NavDropdown title='LOGIN' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='/Studentlogin'>
                    STUDENT LOGIN
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/AdminLogin'>
                    ADMIN LOGIN
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link id='textcolor' href=''>
                  F&Q
                </Nav.Link>
                <Example />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

function Example() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button id='textcolor' variant='secondary' onClick={handleShow}>
        ABOUT US
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ABOUT Learning Pie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Who we are
          <h1>
            Empowering the world to develop technology through collective
            knowledge.
          </h1>
          <h5>
            Our public platform serves 100 million people every month, making it
            one of the most popular websites in the world. Our asynchronous
            knowledge management and collaboration offering, Stack Overflow for
            Teams, is transforming how people work.
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
