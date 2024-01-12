import { useContext } from "react";
import { useAuthContext } from "./provider/AuthContext";

export const Login = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <>
      <h1>{isLoggedIn.toString()}</h1>
    </>
  );
};
