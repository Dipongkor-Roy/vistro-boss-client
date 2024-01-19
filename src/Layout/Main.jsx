import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('logIn')
    return (
        <div>
           {noHeaderFooter ||  <NavBar/>}
            <Outlet/>
           {noHeaderFooter ||  <Footer/>}
        </div>
    );
};

export default Main;