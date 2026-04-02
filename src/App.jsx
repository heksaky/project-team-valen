import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Valen from './pages/Valen';
import Dhoni from './pages/Dhoni';
import Zebe from './pages/Zebe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile1" element={<Valen />} />
        <Route path="/profile2" element={<Dhoni />} />
        <Route path="/profile3" element={<Zebe />} />
      </Routes>
    </Router>
  );
}

export default App;