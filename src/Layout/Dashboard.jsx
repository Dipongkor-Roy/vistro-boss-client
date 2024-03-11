import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartPlus, FaHamburger, FaHome, FaList, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
  const [cart]=useCart();
  //todo: admin role setup
  const [isAdmin]=useAdmin();
  // console.log(isAdmin)
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet/>
          <label htmlFor="my-drawer-2" className="mt-5 btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full  bg-orange-200 text-base-content">
            {/* Sidebar content here */}
           {
            isAdmin?
            
            <>
             <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/addItems'><FaCalendar />Add Items</NavLink></li>
            <li><NavLink to='/dashboard/manageItems'><FaWallet />Manage Items</NavLink></li>
            <li> <NavLink to='/dashboard/bookings'><FaShoppingCart></FaShoppingCart>Manage Bookings 
       
            </NavLink></li>
            <li><NavLink to='/dashboard/users'><FaList />All Users</NavLink></li>
            
            </>:
            <>
             <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
            <li><NavLink to='/dashboard/Reservation'><FaCalendar />Reservation</NavLink></li>
            <li><NavLink to='/dashboard/paymentHistory'><FaWallet />Payment History</NavLink></li>
            <li> <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart 
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink></li>


            
            
            </>
            
           }

<div className="divider"></div>
            <li><NavLink to='/'><FaHome />Home</NavLink></li>
            <li></li>
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