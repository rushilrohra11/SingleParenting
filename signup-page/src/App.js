import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../src/signup.js';
import Login from '../src/login.js';
import '../src/App.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;