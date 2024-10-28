import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router basename="/PROTFOLIO">
        <Routes>
          <Route path='/' element={<HomePage />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
