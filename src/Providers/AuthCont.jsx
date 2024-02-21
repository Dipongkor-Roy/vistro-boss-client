import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthCont = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic=UseAxiosPublic(); //public axios

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    signOut(auth);
  }
  const updateUserProfile=(name,photoUrl)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
//get token and store client
const userInfo={email:currentUser.email}
axiosPublic.post('/jwt',userInfo)
.then(res=>{
  if(res.data.token){
    localStorage.setItem('access-token',res.data.token);
  }

})
      }
      else{
//remove token if it is on client site
localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);
  const authInfo = { user, loading, logIn,googleSignIn, signUp,logOut,updateUserProfile};
  return (
    
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthCont;
