import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hearder from './components/Hearder';
import Banner from './components/Banner';
import MyProfile from './components/MyProfile';
import MySkills from './components/MySkills';

function App() {
  return (
    <div className="App">
      <div className='Home_container'>
        <Router>
          <Hearder />

          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Banner />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="myskills" element={<MySkills />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
