const Search = ({ search, handleSearch }) => {
  return (
    <>
      <input type={'text'} onChange={handleSearch} value={search} placeholder={'Search your merch ...'} />
    </>
  );
};

export default Search;
