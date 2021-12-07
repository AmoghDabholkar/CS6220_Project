import Home from './Home';
import Demo from './Demo';
import Results from './Results';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/results" element={<Results />} />
          <Route path="/" elements={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
