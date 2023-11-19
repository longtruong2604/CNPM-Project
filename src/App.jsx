import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { PrinterList } from "./pages/PrinterList/PrinterList";
import Home from "./pages/LandingPage/LandingPage";
import FuncSelect from "./pages/Home/FuncSelect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <RootLayout />,
    children: [
      {
        path: "/app/",
        element: <FuncSelect />,
      },
      {
        path: "/app/printer-list",
        element: <PrinterList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
