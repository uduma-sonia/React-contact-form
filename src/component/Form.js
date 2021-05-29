import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";

export class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      gender: "",
      text: "",
      country: "",
      thanks: "",
    };
  }

  handleFullNameChange = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //GET DATA FROM LOCAL STORAGE
    var lsData = JSON.parse(localStorage.getItem("dataEntry"));

    if (lsData == null) lsData = [];

    //STORE STATES IN AN OBJECT
    let stateObj = {
      states: this.state,
    };
    let states = stateObj.states;

    localStorage.setItem("formDataEntry", JSON.stringify(states));
    lsData.push(states);
    localStorage.setItem("dataEntry", JSON.stringify(lsData));

    this.setState({
      fullName: "",
      email: "",
      gender: "",
      text: "",
      country: "",
      thanks: "Thanks for contacting us!",
    });
  };

  render() {
    return (
      <div className="border p-4">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{this.state.thanks}</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name, Surname"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Gender </Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <option>Select...</option>
                  <option value="red">Male</option>
                  <option value="blue">Female</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Country </Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={this.state.country}
                  onChange={this.handleCountryChange}
                >
                  <option>Select...</option>
                  <option value="red">Nigeria</option>
                  <option value="blue">France</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </Form.Group>

          <div className="d-grid ">
            <Button variant="info" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default MyForm;
