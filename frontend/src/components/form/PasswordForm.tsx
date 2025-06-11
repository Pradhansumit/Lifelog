import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/config/axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const PasswordForm = ({}) => {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [notMatch, setNotMatch] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const passwordValue = passwordRef.current.value;
      const confirmPasswordValue = confirmPasswordRef.current.value;

      console.log("23", passwordValue === confirmPasswordValue);

      if (passwordValue !== confirmPasswordValue) {
        setNotMatch(true);
      } else {
        setNotMatch(false);
      }
      console.log(notMatch);

      if (!notMatch) {
        const res = await api.post("users/update-password", {
          password: passwordValue,
          confirmPassword: confirmPasswordValue,
        });
        if (res.status === 200) {
          navigate("/login");
        }
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" ref={passwordRef} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          ref={confirmPasswordRef}
          required
        />
      </div>
      {notMatch && (
        <span className="my-3 italic font-light">Password does not match.</span>
      )}
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
};

export default PasswordForm;
