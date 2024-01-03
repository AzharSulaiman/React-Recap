import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer'
import { useState, useEffect } from 'react';

const Body = () => {
    const [resData, setResData] = useState([]);
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchRes, setSearchRes] = useState('')

    useEffect(() => {
       fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    
        const json = await data.json(); 
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        listOfRestaurant.length == 0 ? <Shimmer/> : ( <div className="body">
        <div className='filter'>
        <input type='text' className='search-box' value={searchRes} onChange={(e)=>{
            e.preventDefault();
            setSearchRes(e.target.value);
        }}/>
        <button className='search-btn' onClick={()=>{
            const filteredResList = resData.filter((fRes)=>
                fRes.info.name.includes(searchRes)
            );
            setListOfRestaurant(filteredResList);

        }}>Search</button>
        <button className="filter-btn" onClick={()=>{
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
            setListOfRestaurant(filteredList)

        }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container" >
          {
            listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
        </div>
      </div>)
    )
  }

  export default Body;