import React from "react";
import ReactDOM from "react-dom/client"

// const heading = React.createElement('h1', {}, 'Hello World from React!');
const jsxHeading = <h1>Recap React 🚀</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

const resObj = {
    "info": {
      "id": "55473",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Sector 10",
      "areaName": "Rohini",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas",
        "Fast Food"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "55473",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4000
      },
      "parentId": "721",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-17 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-sector-10-rohini-delhi-55473",
      "type": "WEBLINK"
    }
  }

const Header = () => (
    <div className="headerCont">
        <div className="logoContainer">
            <img className="logo" src="https://masterbundles.com/wp-content/uploads/2023/05/untitled-1-converted-220.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

const RestaurantCard = () => (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resObj.info.cloudinaryImageId} />
        <h3>{resObj.info.name}</h3>
        <h4>{resObj.info.cuisines.join(', ')}</h4>
        <h4>{resObj.info.avgRating} stars</h4>
        <h4>{resObj.info.costForTwo}</h4>
        <h4>{resObj.info.sla.deliveryTime} min</h4>
    </div>
);

const AppLayOut = () => (
     <div>
       <Header/>
       <RestaurantCard/>
    </div>
)
root.render(<AppLayOut/>);