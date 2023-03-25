import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./layouts/GlobalLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import Redirect from "./components/Redirect";
import FetchPage from "./pages/FetchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "redirect",
          element: <Redirect/>,
        },
        {
          path: "pokemonpage",
          element: <PokemonPage/>,
        },
        {
          path: "fetchpage",
          element: <FetchPage/>
        }
      ],
    },
  ]);

  return (
    <div className="App App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
