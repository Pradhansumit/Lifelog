import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import ForgetPasswordForm from "@/components/form/ForgetPasswordForm";
import OtpForm from "@/components/form/OtpForm";
import PasswordForm from "@/components/form/PasswordForm";

const ForgotPassword = () => {
  const [sendEmailWithOTP, setSendEmailWithOTP] = useState("");
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
                setSendEmailWithOTP={setSendEmailWithOTP}
              />
            )}
            {showOTP && (
              <OtpForm
                setShowOTP={setShowOTP}
                setShowPassword={setShowPassword}
                sendEmailWithOTP={sendEmailWithOTP}
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
