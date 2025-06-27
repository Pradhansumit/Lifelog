import api from "@/config/axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRef, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

interface ForgetPasswordFormProps {
  setShowOTP: (value: boolean) => void;
  setShowEmail: (value: boolean) => void;
  setSendEmailWithOTP: (email: string) => void;
}

const ForgetPasswordForm = ({
  setShowOTP,
  setShowEmail,
  setSendEmailWithOTP,
}: ForgetPasswordFormProps) => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!emailRef.current) return;
      setSendEmailWithOTP(emailRef.current.value);
      const res = await api.post("users/forget-password/", {
        email: emailRef.current.value,
      });
      if (res.status === 200) {
        setShowOTP(true);
        setShowEmail(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
