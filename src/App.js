import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorDetail from './component/ActorDetail';

import ActorCard from './component/ActorCard';
import "./App.css";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActorCard />} />
        <Route path="/actor/:id" element={<ActorDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
