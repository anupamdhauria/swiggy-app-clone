import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./ResturantCard";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
          <RestaurantCard resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
