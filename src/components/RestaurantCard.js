import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    return (

    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
        <h3><Link to='/restaurantmenu'>{name}</Link></h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} min</h4>
    </div>
)
};

export default RestaurantCard;