import { useState } from 'react';
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

const Main = ({ tempMovieData, tempWatchedData }) => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <main className='main'>
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
};

export default Main;
