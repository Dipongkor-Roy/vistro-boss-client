import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthCont";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";


const GoogleLogIn = () => {
    const {googleSignIn}=useContext(AuthContext);
    const axiosPublic = UseAxiosPublic(); //axios
    const handleGoogleSignIn = () => {
        googleSignIn().then((result) => {
          console.log(result.user);
          const userInfo={
            email:result.user?.email,
            name:result.user?.displayName
          }
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            console.log(res.data)
          })
        });
      };
    return (
        <button onClick={handleGoogleSignIn} className="btn">
                <FaGoogle />
                Google
              </button>
    );
};

export default GoogleLogIn;