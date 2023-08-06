const Search = ({ query, setQuery }) => {
  return (
    <input
      placeholder={'Search movies...'}
      value={query}
      onChange={e => setQuery(e.target.value)}
      className='search'
      type='text'
    />
  );
};

export default Search;
