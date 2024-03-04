import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import ScrollToTop from "./scrollToTop";

export default function Layout(){
    return (
        <div className='layout'>
            <ScrollToTop />
            <Navbar />
            <Outlet />
        </div>
    )
}