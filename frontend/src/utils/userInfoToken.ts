import { jwtDecode } from "jwt-decode";

const getUserEmailFromToken = () => {
  const listOfCookie = document.cookie.split(";");
  let token = "";

  listOfCookie.forEach((element) => {
    if (element.trim().startsWith("jwt_token")) {
      token = element.trim().split("=")[1];
    }
  });

  const decoded = jwtDecode(token);

  return decoded.email;
};

export default getUserEmailFromToken;
