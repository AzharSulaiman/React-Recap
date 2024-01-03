import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantsMenu";

// const heading = React.createElement('h1', {}, 'Hello World from React!');
const jsxHeading = <h1>Recap React 🚀</h1> 

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayOut = () => {
  return (
     <div className="app">
       <Header/>
       <Outlet/>
    </div>
)}

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurantmenu',
        element: <RestaurantMenu />
      }
    ]
  },
 
])
root.render(<RouterProvider router={appRoute}/>);