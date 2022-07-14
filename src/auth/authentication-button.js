import React from "react";

import LoginButton from "./login-signup/Login";
import LogoutButton from "./login-signup/Logout";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
