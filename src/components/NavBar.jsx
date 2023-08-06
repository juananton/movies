import { useState } from 'react';
import Logo from './Logo';
import NumResults from './NumResults';
import Search from './Search';

const NavBar = ({ movies }) => {
  const [query, setQuery] = useState('');
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search value={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
