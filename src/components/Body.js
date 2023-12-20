import RestaurantCard from './RestaurantCard'
import resList from '../../utils/restaurantData';

const Body = () => {
    return (
      <div className="body">
        <button className="filter-btn" onClick={()=>{
            resList = resList.filter((res) => console.log(res.info.avgRating > 4))
            // console.log('clicked', resList)

        }}>Top Rated Restaurants</button>
        <div className="res-container" >
          {
            resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          }
        </div>
      </div>
    )
  }

  export default Body;