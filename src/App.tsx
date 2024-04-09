import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Invoice from "./Pages/Invoice";
import Invoices from "./Pages/Invoices";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Invoices />
  },
  {
path:"invoice",
element:<Invoice />
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
