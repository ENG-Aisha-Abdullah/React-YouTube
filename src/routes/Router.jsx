import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Nav from "../component/Nav";
import Login from "../pages/Login";
import Register from "../pages/Register";


function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
