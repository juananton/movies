import WatchedMovie from './WatchedMovie';

const WatchedMoviesList = ({ watched, setWatched }) => {
  const handleRemove = id =>
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));

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
