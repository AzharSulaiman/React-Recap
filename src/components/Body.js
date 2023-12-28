import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer'
// local data before API call
// import resList from '../../utils/restaurantData';
import { useState, useEffect } from 'react';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    
        const json = await data.json();
        console.log('resList', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    }

    return (
      <div className="body">
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
            setListOfRestaurant(filteredList)

        }}>Top Rated Restaurants</button>
        <div className="res-container" >
          {
            listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;