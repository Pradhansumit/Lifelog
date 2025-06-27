import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import api from "@/config/axios";
import { useState, type FormEvent } from "react";
import { Button } from "../ui/button";

interface OtpFormProps {
  setShowOTP: (value: boolean) => void;
  setShowPassword: (value: boolean) => void;
  sendEmailWithOTP: string;
}

const OtpForm = ({
  setShowOTP,
  setShowPassword,
  sendEmailWithOTP,
}: OtpFormProps) => {
  const [otp, setOtp] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const res = await api.post("users/verify-otp", {
        email: sendEmailWithOTP,
        otp: otp,
      });
      if (res.status === 200) {
        setShowOTP(false);
        setShowPassword(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button type="submit" className="w-full mt-4">
        Submit
      </Button>
    </form>
  );
};

export default OtpForm;
