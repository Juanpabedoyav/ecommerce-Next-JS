import { useState } from 'react';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };
  return {
    search,
    handleSearch,
  };
};

export default useSearch;
