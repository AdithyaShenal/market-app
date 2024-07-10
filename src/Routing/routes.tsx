import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Components/HomePage";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

export default router;
