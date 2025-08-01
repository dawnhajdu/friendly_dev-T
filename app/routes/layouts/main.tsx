import { Outlet } from "react-router";
import type { Route } from "../about/+types";


const MainLayout = () => {
    return ( 
    <>

        <section  className="max-w-6xl mx-auto px-6 my-8">
            <Outlet />
        </section>
    </> );
}
 
export default MainLayout;