// App.js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ProductDetails from "./components/ProductDetails";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Layout for the application
const AppLayout = () => {
  return (
    <div className="app bg-[#D1BB9E]">
      <Header />
      {/* The Outlet component will render the child routes (Body, ProductDetails, etc.) */}
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

// Router setup
const appRouter = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />, // Main product listing page
      },
      {
        path: "/product/:id",
        element: <ProductDetails />, // Product details page for each product
      },
      {
        path: "/about",
        element: <AboutUs />, // About Us page
      },
      {
        path: "/contact",
        element: <Contact />, // Contact page
      },
    ],
    errorElement: <Error />, // Error handling for invalid routes
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
