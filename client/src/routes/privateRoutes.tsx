import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";

export const privateRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: "/",
        element: <>Zyae Music</>,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
