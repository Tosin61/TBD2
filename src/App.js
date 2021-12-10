import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './login.js';
import HowToPlay from './how-to-play.js';
import CharacterSelection from './character-select.js';
import CharacterPersonality from './character-personality.js';
import Scenarios from './scenarios.js';
import Endings from './endings.js';

function App() {
    //change pages
    //let navigate = useNavigate();

  return (
      <div className="App">
          <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/HowToPlay" element={<HowToPlay />} />
              <Route path="/CharacterSelection" element={<CharacterSelection />} />
              <Route path="/CharacterPersonality" element={<CharacterPersonality />} />
              <Route path="/Scenarios" element={<Scenarios />} />
              <Route path="/Endings" element={<Endings />} />
              <Route path="*" element={<Navigate exact ="/" replace to="/Login" />} />

          </Routes>
    </div>
  );
}

export default App;
