
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} query={query} setQuery={setQuery} page={page} setPage={setPage} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
