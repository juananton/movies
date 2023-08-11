import { useEffect } from 'react';
import WatchedMovie from './WatchedMovie';

const WatchedMoviesList = ({ watched, setWatched }) => {
  const handleRemove = id =>
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched]);

  return (
    <ul className='list'>
      {watched.map(movie => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
