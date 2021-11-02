import React, { useState } from "react";

const AuthContex = React.createContext({
  auth: false,
  authChange: () => {},
});

export const AuthContexProvider = (props: any) => {
  const [auth, setAuth] = useState<boolean>(false);
  const changeAuthHandler = () => {
    setAuth((auth) => !auth);
  };
  return (
    <AuthContex.Provider value={{ auth: auth, authChange: changeAuthHandler }}>
      {props.children}
    </AuthContex.Provider>
  );
};

export default AuthContex;
