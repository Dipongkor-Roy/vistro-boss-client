import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">Welcome Back</h2>
      {user?.displayName ? user.displayName : "Back"}
    </div>
  );
};

export default UserHome;
