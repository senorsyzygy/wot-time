import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import BattleForm from './components/BattleForm';
import UserForm from './components/UserForm';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        </Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/battleform" element={<BattleForm/>}/>
            <Route path="/userform" element={<UserForm/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
