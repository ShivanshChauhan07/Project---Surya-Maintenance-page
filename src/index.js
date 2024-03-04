import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Attendance from "./component/Attendance";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Ringroad from "./component/Ringroad";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/sites",
        element: <Attendance />,
      },
    ],
  },
  {
    path: "/ringRoad",
    element: <Ringroad />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
