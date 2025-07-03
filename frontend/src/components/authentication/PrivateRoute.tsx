import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useEffect, type ReactNode } from "react";

interface DecodedToken {
  exp?: number;
}

const checkTokenValidity = (token: string) => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.exp !== undefined && decoded.exp * 1000 > Date.now();
  } catch (e) {
    return false;
  }
};

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  // const cookies = document.cookie;
  // const token_name = "jwt_token";
  // const listOfCookie = cookies.split(";");

  // let token = "";

  // listOfCookie.forEach((element) => {
  //   if (element.trim().startsWith(token_name)) {
  //     token = element.trim().split("=")[1];
  //   }
  // });
  const token = localStorage.getItem("jwt_token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !checkTokenValidity(token)) {
      navigate("/login");
    }
  }, [token]);

  return children;
};

export default PrivateRoute;
