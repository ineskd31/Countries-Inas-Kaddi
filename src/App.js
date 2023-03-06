import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import { useState } from "react";





function App() {

  const [dark, setDark] = useState(false);

  // ! PAGE INFO.................................
  const [select, setSelect] = useState(null);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setSelect={setSelect} dark={dark} setDark={setDark}/>
    },
    {
      path: "/info",
      element: <Info select={select} dark={dark} setDark={setDark}/>
    },
  ])




  return (
    <div className="App">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
