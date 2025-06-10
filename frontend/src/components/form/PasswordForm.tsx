import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/config/axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";

const PasswordForm = ({}) => {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await api.post("users/update-password", {
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
      });
      if (res.status === 200) {
        navigate("/login");
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
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
};

export default PasswordForm;
