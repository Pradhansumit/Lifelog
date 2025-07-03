import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  email: string;
}

const getUserEmailFromToken = () => {
  // const listOfCookie = document.cookie.split(";");
  // let token = "";

  // listOfCookie.forEach((element) => {
  //   if (element.trim().startsWith("jwt_token")) {
  //     token = element.trim().split("=")[1];
  //   }
  // });

  const token: string | null = localStorage.getItem("jwt_token");
  if (token) {
    let decoded = jwtDecode<CustomJwtPayload>(token);
    return decoded.email;
  }

  return null;
};

export default getUserEmailFromToken;
