import Navbar from './Navbar';
import { Container } from 'react-bootstrap';

export default function Demo() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <h1>Results</h1>
      </Container>
    </div>
  );
}
