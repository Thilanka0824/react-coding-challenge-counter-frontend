import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./layouts/GlobalLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import Redirect from "./components/Redirect";
import FetchPage from "./pages/FetchPage";
import ReactReducerPage from "./pages/ReactReducerPage";
import CounterPage from "./pages/CounterPage";
import MyProductsPage from "./pages/MyProductsPage";
import ClassProductsPage from "./pages/ClassProductsPage";
import HomeworkUseReducerApi from "./pages/HomeworkUseReducerApi";
import { LoginContextPage } from "./pages/LoginContextPage";

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
          element: <Redirect />,
        },
        {
          path: "pokemonpage",
          element: <PokemonPage />,
        },
        {
          path: "fetchpage",
          element: <FetchPage />,
        },
        {
          path: "react-reducer",
          element: <ReactReducerPage />,
        },
        {
          path: "counterpage",
          element: <CounterPage />,
        },
        {
          path: "myproductspage",
          element: <MyProductsPage />,
        },
        {
          path: "classproductspage",
          element: <ClassProductsPage />,
        },
        {
          path: "login-context-page",
          element: <LoginContextPage />,
        },
        {
          path: "homework-usereducer",
          element: <HomeworkUseReducerApi/>
        },
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
