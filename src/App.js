import Home from "./pages/home";
import Letting from "./pages/letting";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Mise en place des routes pour le router
const router = createBrowserRouter([
  {
    path: "/Kasa/",
    element: <Home />,
  },
  {
    path: "/letting/:id",
    element: <Letting />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
