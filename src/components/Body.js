import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import OtherTrailers from "./OtherTrailers";
import { RouterProvider } from "react-router-dom";
import Login from "./login";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/browse/:id",
            element: <OtherTrailers />
        }
    ])

return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
)
}
export default Body;