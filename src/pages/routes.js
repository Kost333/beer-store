import Home from "./home/Home";

export const routes = [
  { component: <Home />, path: "/" },
  { component: <Home />, path: "/:page" },
  { component: <Home />, path: "/beer-preview/:id" },
];
