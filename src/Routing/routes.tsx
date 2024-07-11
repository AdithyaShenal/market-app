import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";
import { AboutUs } from "../Components/AboutUs";
import { ContactPage } from "../Components/ContactPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <ContactPage /> },
]);

export default router;
