import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./layouts/GlobalLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import PokemonPage from "./pages/PokemonPage";

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
          path: "menu",
          element: <Menu/>,
        },
        {
          path: "pokemonpage",
          element: <PokemonPage/>,
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
