import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Main from "./layouts/Main";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("tshirts.json"),
          element: <Home></Home>,
        },
        { path: "/orders", element: <Orders></Orders> },
        { path: "/about", element: <About></About> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
