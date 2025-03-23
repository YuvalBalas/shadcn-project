import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/components/pages/HomePage";
import TableViewPage from "@/components/pages/TableViewPage";
import Layout from "@/components/templates/Layout";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "table-view",
        element: <TableViewPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
