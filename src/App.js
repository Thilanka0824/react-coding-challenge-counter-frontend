import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import PokemonPicture from "./components/Logo";
import GlobalLayout from "./layouts/GlobalLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";

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
