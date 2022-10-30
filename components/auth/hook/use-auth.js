import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Auth from "../log-in";

const useAuth = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    if (!token) {
      const _token = Cookies.get("access_token");

      setToken(_token);
    }
  }, [token]);

  console.log("token", token);

  return token;
};

export default useAuth;
