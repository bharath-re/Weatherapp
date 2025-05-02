import { useState } from "react";
import menuItems from "../data/menuItems";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";
import SearchBar from "../components/SearchBar";

function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterlist = (items) => {
    const sorted = [...items]; // clone to avoid mutation
    if (filter === "low-price") {
      return sorted.sort((a, b) => a.price - b.price);
    } else if (filter === "high-price") {
      return sorted.sort((a, b) => b.price - a.price);
    } else if (filter === "alphabetical") {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  };

  const sortedMenuItems = filterlist(filteredItems);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="menu-grid">
        {sortedMenuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Menu;
