
import React from 'react';
import './Header.css';

const Header = ({ user }) => (
  <header className="header">
    <h1>{user ? `Welcome, ${user}` : 'Search Hacker News'}</h1>
  </header>
);

export default Header;
