"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignInForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue=""
          />
        </div>
        <div>
          <Label htmlFor="password">password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            defaultValue=""
          />
        </div>
        <div>
          <Button variant="default" className=" w-full ">
            Sign in
          </Button>
          <div className="text-sm text-center text-muted-foreground">
            Don&apos;t have account?
            <Link href="sign-up" target="_self" className="link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
