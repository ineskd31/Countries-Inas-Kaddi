import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Nav from "./components/Nav/Nav";
import { useState } from "react";





function App() {

  // ! PAGE INFO.................................
  const [select, setSelect] = useState(null);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setSelect={setSelect}/>
    },
    {
      path: "/nav",
      element: <Nav />
    },
    {
      path: "/info",
      element: <Info select={select}/>
    },
  ])




  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
