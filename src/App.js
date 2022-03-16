import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= { <Landing /> } />
      </Routes>
    </Router>
  );
}

export default App;
