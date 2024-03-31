import { NewSpace } from "@/components/NewSpace";
import { Link, RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
	{
		path: "/",
		element: (
			<div>
				<Link to="/new">New item</Link>
			</div>
		),
	},
	{
		path: "/new",
		element: <NewSpace />,
	},
	{
		path: "*",
		element: <p>404</p>,
	},
]);

export const OptionsApp = () => {
	return <RouterProvider router={router} />;
};
