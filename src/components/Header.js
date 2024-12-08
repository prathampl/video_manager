import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Video Manager</h1>
      <Link to="/import">
        <button>Import from YouTube</button>
      </Link>
    </header>
  );
}

export default Header;
