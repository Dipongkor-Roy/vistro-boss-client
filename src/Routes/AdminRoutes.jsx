import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoutes = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, adminLoadingPending] = useAdmin();

  if (loading || adminLoadingPending) { //or admin loading
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) { //also have to admin
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
