import { createContext } from "react";


export const AuthContext=createContext(null);

const AuthCont = ({children}) => {
    const authInfo={};
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthCont;