import "../styles/SearchBar.css";

function SearchBar({ searchQuery, setSearchQuery, filter, setFilter }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a dish..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="">No Filter</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="low-price">Low Price</option>
        <option value="high-price">High Price</option>
      </select>
    </div>
  );
}
export default SearchBar;
