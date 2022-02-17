import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import HourForm from './components/Form';

function App() {
  return (
    <div className="App">
      <main>
        <Container className="appContainer">
          <Row>
            <Col>
              <h1 className="header-title">World of Tanks Game Time Calculator</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <HourForm/>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
