import { Navigate, createBrowserRouter } from "react-router-dom";
import { AutoInvestPage } from "./pages/AutoInvest";
import MainLayout from "./layout/MainLayout";
import { InvestPage } from "./pages/Invest";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "overview",
        element: <InvestPage />,
      },
      {
        path: "invest",
        element: <InvestPage />,
      },
      {
        index: true,
        path: "auto-investment",
        element: <AutoInvestPage />,
      },
      {
        path: "portfolio",
        element: <InvestPage />,
      },
      {
        path: "*",
        element: <Navigate to="/auto-investment" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
