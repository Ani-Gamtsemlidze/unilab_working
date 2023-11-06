import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Form from "./features/form/Form";
import Landing from "./features/landing/Landing";
import Login from "./features/login/Login";
import UserCard from "./features/user_card/UserCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/cards",
    element: <UserCard />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
