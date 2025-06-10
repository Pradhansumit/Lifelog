import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import ForgetPasswordForm from "@/components/form/forgetPasswordForm";
import OtpForm from "@/components/form/OtpForm";
import PasswordForm from "@/components/form/PasswordForm";

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [showOTP, setShowOTP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Forgot Password?</CardTitle>
          <CardDescription>
            Enter your registered email below to get otp.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {showEmail && (
              <ForgetPasswordForm
                setShowOTP={setShowOTP}
                setShowEmail={setShowEmail}
              />
            )}
            {showOTP && (
              <OtpForm
                setShowOTP={setShowOTP}
                setShowPassword={setShowPassword}
              />
            )}
            {showPassword && <PasswordForm />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
