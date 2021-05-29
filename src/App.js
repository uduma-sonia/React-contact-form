// import "./App.css";
import MyForm from "./component/Form";
import NavBar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col></Col>

          <Col xs={12} md={5}>
            <MyForm />
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
