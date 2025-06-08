import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import api from "@/config/axios";
import { useNavigate } from "react-router";

const Register = () => {
  const nameRef: React.RefObject<null> = useRef(null);
  const emailRef: React.RefObject<null> = useRef(null);
  const passwordRef: React.RefObject<null> = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const nameValue: React.RefObject<string> = nameRef.current.value;
      const emailValue: React.RefObject<string> = emailRef.current.value;
      const passwordValue: React.RefObject<string> = passwordRef.current.value;

      const res = await api.post("users/register/", {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      });
      if (res.status === 201) {
        navigate("/login/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create you account</CardTitle>
          <CardDescription>
            Register using a valid email address
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
