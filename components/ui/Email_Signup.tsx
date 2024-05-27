import React from "react";
 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
 
function Email_Signup() {
  return (
    <Card className="flex flex-col gap-y-4 p-4">
      <h2 className="text-center">Stay in the know!</h2>
      <div className="flex w-full max-w-xl gap-x-4">
        <Input placeholder="Enter your email address" className="w-full" />
        <Button>Sign Up!</Button>
      </div>
    </Card>
  );
}
 
export default Email_Signup;