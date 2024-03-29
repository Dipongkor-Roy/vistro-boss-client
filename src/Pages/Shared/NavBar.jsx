import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthCont";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart();
  const [isAdmin]=useAdmin();
  const handleLogOut = () => {
    logOut().then(() => {});
  };
 
  const navOptions = (
    <>
      <li>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <p>Menu</p>
        </Link>
      </li>
      <li>
        <Link to="/order/salad">
          <p>Order</p>
        </Link>
      </li>
      {/* conditional */}
      {
        user && isAdmin && <li>
        <Link to="/dashboard/adminHome">
        <p>Dashboard</p>
        </Link>
      </li>
      }
      {/* for general user */}
      {
        user && !isAdmin && <li>
        <Link to="/dashboard/userHome">
          <p>Dashboard</p>
        </Link>
      </li>
      }
      {
        user && isAdmin && <li>
        <Link to="/dashboard/adminHome">
          <p>Order</p>
        </Link>
      </li>
      }
      
      <li>
        <Link to="/dashboard/mycart">
          <p>
            <button className="btn btn-xs">
             <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </p>
        </Link>
      </li>

      {user ? (
        <>
          <li onClick={handleLogOut}>
            <p>LogOut</p>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/logIn">
              <p>Login</p>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed bg-opacity-30 z-10 bg-black text-white max-w-screen-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-xl">Vistro Boss</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
