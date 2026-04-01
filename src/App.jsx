import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile1 from './pages/profile1';
import Profile2 from './pages/profile2';
import Profile3 from './pages/profile3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/profile2" element={<Profile2 />} />
        <Route path="/profile3" element={<Profile3 />} />
      </Routes>
    </Router>
  );
}

export default App;