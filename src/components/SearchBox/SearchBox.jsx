const SearchBox = ({ searchField, inputSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="searchInput"
        value={searchField}
        onChange={inputSearch}
      />
    </div>
  );
};

export default SearchBox;
