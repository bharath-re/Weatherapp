import menuItems from "../data/menuItems";
import "../styles/Menu.css";
import MenuCard from "../components/MenuCard";

function Menu() {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a dish..."
          className="search-input"
        />
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Menu;
