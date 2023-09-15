import Button from "./Button";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import BootButton from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const StyledButton = styled.button`
  background-color: aqua;
  color: white;
  padding: 10px;

  &:hover {
    background-color: blue;
  }
`;

function App() {
  return (
    <>
      <Button />
      <StyledButton>StyledButton</StyledButton>
      <div className="App">
        <BootButton as="input" type="button" value="Input" />
        <Container>
          <Row>
            <Col>
              <h1>Hello Wolrd!</h1>
              <BootButton variant="primary">버튼</BootButton>
              <BootButton variant="default">버튼</BootButton>
              <BootButton variant="success">버튼</BootButton>
              <BootButton variant="info">버튼</BootButton>
              <BootButton variant="warning">버튼</BootButton>
              <BootButton variant="danger">버튼</BootButton>
              <BootButton variant="link">버튼</BootButton>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
