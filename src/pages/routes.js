import Home from "./home/Home";
import Cart from "./cart/Cart";

export const routes = [
	{ component: <Home />, path: "/" },
	{ component: <Home />, path: "/:page" },
	{ component: <Home />, path: "/beer-preview/:id" },
	{ component: <Cart />, path: "/cart" },
];
