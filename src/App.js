import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route excat path='/' element={<Homepage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
