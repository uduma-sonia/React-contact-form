import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="mb-5">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Contact Us</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Back Home</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
