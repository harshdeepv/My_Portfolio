// src/App.jsx (or src/router.jsx if that’s where RouterProvider lives)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
