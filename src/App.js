import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Nav from "./components/Nav/Nav";





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/nav",
      element: <Nav/>
    },
    {
      path: "/info",
      element: <Info/>
    },
  ])
  return (
    <div className="App">

        <RouterProvider router={router} />

    </div>
  );
}

export default App;
