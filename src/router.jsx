import App from "./App";
import CarAvailable from "./app/pages/CarAvailable";
import LandingPage from "./app/pages/LandingPage";
import RentalPage from "./app/pages/RentalPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "car-available",
        element: <CarAvailable />,
      },
      {
        path: "rents/:id",
        element: <RentalPage />,
      },
    ],
  },
]);
