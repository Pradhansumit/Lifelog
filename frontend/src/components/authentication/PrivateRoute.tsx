import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

const checkTokenValidity = (token: string) => {
  try {
    const decoded = jwtDecode(token);
    console.log(decoded.exp * 1000 > Date.now());
    return decoded.exp * 1000 > Date.now();
  } catch (e) {
    return false;
  }
};

const PrivateRoute = ({ children }) => {
  const cookies = document.cookie;
  const token_name = "jwt_token";
  const listOfCookie = cookies.split(";");

  let token = "";

  listOfCookie.forEach((element) => {
    if (element.trim().startsWith(token_name)) {
      token = element.trim().split("=")[1];
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !checkTokenValidity(token)) {
      navigate("/login");
    }
  }, [token]);

  return children;
};

export default PrivateRoute;
