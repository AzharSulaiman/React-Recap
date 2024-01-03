import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const [resData, setResData] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);
    
    const fetchMenu = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.113645&lng=72.8697339&restaurantId=185159&catalog_qa=undefined&submitAction=ENTER');

        const json = await data.json();
        setResData(json.data)
    };

    if(resData === null) return <Shimmer/>

    const { name } = resData?.cards[0]?.card?.card?.info;

    return  (
        <h1>{name}</h1>
    )
}

export default RestaurantMenu;

