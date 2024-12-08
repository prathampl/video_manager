import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import YouTubeImport from './components/YouTubeImport';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/import" element={<YouTubeImport />} />
      </Routes>
    </Router>
  );
}

export default App;
