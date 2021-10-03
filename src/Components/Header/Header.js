import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../../image/600px-Oikya_Front_Logo.png';
import './Header.css'

const Header = () => {
    return (
      <div>
        <header className="bg-img">
          <Navbar expand="lg">
            <Container>
              <img src={logo} className="logo-img" alt="" />
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link
                    to="/home"
                    className="text-light fw-bold text-decoration-none px-4"
                  >
                    Home
                  </Link>
                  <Link
                    to="/charts"
                    className="text-light fw-bold text-decoration-none px-4"
                  >
                    Chart
                  </Link>
                  <Link
                    to="/about"
                    className="text-light fw-bold text-decoration-none px-4"
                  >
                    About
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-warning fw-bold">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <section className="container">
            <div className="row text-warning mt-md-5">
              <div className="col-md-8">
                <h1>
                  “Many of life’s failures are people who did not realize how
                  close they were to success when they gave up.”– Thomas A.
                  Edison
                </h1>
                <Button variant="outline-warning mt-md-5 text-left">
                  Learn More
                </Button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </section>
        </header>
      </div>
    );
};

export default Header;