import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartPlus, FaHamburger, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
  const [cart]=useCart();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full  bg-yellow-500 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/Home'><FaHome />User Home</NavLink></li>
            <li><NavLink to='/dashboard/Reservation'><FaCalendar />Resevation</NavLink></li>
            <li><NavLink to='/dashboard/History'><FaWallet />Payments History</NavLink></li>
            <li> <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink></li>
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome />Home</NavLink></li>
            <li>
        <NavLink to="/menu">
          <FaHamburger/>Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order">
        <FaCartPlus />
         Order
        </NavLink>
      </li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;