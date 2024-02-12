import { Col, Container, Row } from "reactstrap";
import Todos from "./components/todos";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
