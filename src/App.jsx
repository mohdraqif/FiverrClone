import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Gigs from "./pages/Gigs/Gigs";
import Gig from "./pages/gig/Gig";
import AddGig from './pages/AddGig/AddGig'
import Orders from "./pages/Orders/Orders";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import MyGigs from "./pages/MyGigs/MyGigs";
import { Element } from "react-scroll";

function App() {
  const Layout = () => {
    return (
      <Element className="app" name="app">
        <Navbar />
        <Outlet />
        <Footer />
      </Element>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <AddGig />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;