import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, NavDropdown, Button, Form, FormControl, Card, Row, Col, Carousel, Accordion, ListGroup } from 'react-bootstrap';
import 'animate.css'; // Optional for adding animations

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            MyWebsite
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(https://qph.cf2.quoracdn.net/main-qimg-3e1e3a2739043f3f6d9d24bfac08207b-lq)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '100px 0',
        }}
      >
        <Container>
          <h1>Welcome to MyWebsite</h1>
          <p>Your source for the latest news and trending topics.</p>
          <Button variant="light">Learn More</Button>
        </Container>
      </div>

      {/* Slideshow/Carousel of News Cards */}
      <Container className="mt-5">
        <h2>Featured News</h2>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 1</Card.Title>
                    <Card.Text>
                      This is a brief overview of the first featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 2</Card.Title>
                    <Card.Text>
                      This is a brief overview of the second featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 3</Card.Title>
                    <Card.Text>
                      This is a brief overview of the third featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 4</Card.Title>
                    <Card.Text>
                      This is a brief overview of the fourth featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 5</Card.Title>
                    <Card.Text>
                      This is a brief overview of the fifth featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                  <Card.Body>
                    <Card.Title>Article Title 6</Card.Title>
                    <Card.Text>
                      This is a brief overview of the sixth featured article.
                    </Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Accordion for Categories */}
      <Container className="mt-5">
        <h2>Categories</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Technology</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Latest Gadgets</ListGroup.Item>
                <ListGroup.Item>Tech Reviews</ListGroup.Item>
                <ListGroup.Item>Programming Tips</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Science</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Space Exploration</ListGroup.Item>
                <ListGroup.Item>Scientific Discoveries</ListGroup.Item>
                <ListGroup.Item>Environmental News</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Health</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Nutrition Advice</ListGroup.Item>
                <ListGroup.Item>Medical Breakthroughs</ListGroup.Item>
                <ListGroup.Item>Fitness Tips</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Lifestyle</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Travel Tips</ListGroup.Item>
                <ListGroup.Item>Home Decor</ListGroup.Item>
                <ListGroup.Item>Personal Finance</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Animated Counter Section */}
      <Container className="mt-5 text-center">
        <h2>Our Impact</h2>
        <Row>
          <Col md={3}>
            <div className="counter">
              <h3>Articles</h3>
              <p className="animate__animated animate__fadeIn animate__delay-1s">150</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counter">
              <h3>Users</h3>
              <p className="animate__animated animate__fadeIn animate__delay-2s">1200</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counter">
              <h3>Comments</h3>
              <p className="animate__animated animate__fadeIn animate__delay-3s">4500</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="counter">
              <h3>Likes</h3>
              <p className="animate__animated animate__fadeIn animate__delay-4s">3200</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-5">
        <Container>
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <Nav>
            <Nav.Link href="#privacy-policy">Privacy Policy</Nav.Link>
            <Nav.Link href="#terms-of-service">Terms of Service</Nav.Link>
          </Nav>
        </Container>
      </footer>
    </div>
  );
}

export default App;
