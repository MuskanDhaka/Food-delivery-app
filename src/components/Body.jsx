import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Footer from "./Footer";
import "../App.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//State variable => super powerful variable
//react hook is a normal javascript function which is given to us by react
//this function comes with some super powers
//that function have some logic written behind the scenes
//it is uitlity function given by React and there are so many react hooks present
//written by facebook
//present in node-modules
//you have to import this
//two very important react hooks
// 1. useState() -- superpowerful state variable for React
// 2. useEffect()
//hook -> utility function

//useState()
//useState is used to create the state variable
//it maintains the state of a component
//the local state variable is accessible inside the component

//Normal javascript variable

const Body = () => {
  //creating useState variable
  //setListOfRestaurants is used to update the list of restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //[] default value
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //normal JS variable
  // let listOfRestaurants;
  // let listOfRestaurants = [

  //   ];

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const jsonData = await data.json();
    // console.log(jsonData);
    // setListOfRestaurants(jsonData.data.cards[2].data.data.cards);
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };
  console.log("body rendered");

  if (listOfRestaurants.length == 0) {
    // console.log("Loading");
    // return <p>Loading...</p>;
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            className="search-box"
            // placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredRestaurants(
                listOfRestaurants.filter((restaurant) =>
                  restaurant.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Search text : ", searchText);

              //filter the restaurant card and update the UI
              // console.log("Search clicked");
              // setListOfRestaurants(
              //   listOfRestaurants.filter((restaurant) =>
              //     restaurant.name
              //       .toLowerCase()
              //       .includes(
              //         document.querySelector(".search-box").value.toLowerCase()
              //       )
              //   )
              // );
              // setFilteredRestaurants(
              //   listOfRestaurants.filter((restaurant) =>
              //     restaurant.name
              //       .toLowerCase()
              //       .includes(searchText.toLowerCase())
              //   )
              // );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Top Rated Restaurants clicked");
            //filter logic here
            setListOfRestaurants(
              listOfRestaurants.filter(
                (restaurant) => restaurant.avgRating > 4.1
              )
            ); //pass the data that you want to push inside listOfRestaurants
            //   console.log("List of restaurant", listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            cloudinaryImageId={restaurant.imageId}
            rating={restaurant.avgRating}
            cuisine={restaurant.cuisines}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
