import { createBrowserRouter } from "react-router-dom";
import Layout from "../block/Layout";
import Checkout from "../pages/Checkout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Checkout />,
      },
    ],
  },
]);
