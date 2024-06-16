import RestaurantCard from "./RestaurantCard";
import { resList } from "../utility/resList";
import { useState } from "react";
// Body
const Body = () => {
  const [items, setItems] = useState(resList);

  const handleTopRated = () => {
    let itemList = resList.filter((item) => item.rating >= 4);
    setItems(itemList);
  };

  return (
    <div className="body">
      <div className="search">
        <div className="search-item">
          <input type="text" className="text-select" />
          <button>Search</button>
          <button onClick={() => handleTopRated()}>Top Rated</button>
        </div>
      </div>
      <div className="res-container">
        {items?.map((item, id) => (
          <RestaurantCard key={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
