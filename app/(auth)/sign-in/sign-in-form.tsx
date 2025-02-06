"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useActionState } from "react";
import { signInWithCredentials } from "@/./lib/actions/user.actions";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full" variant="default">
      {pending ? "Signing In..." : "Sign In with credentials"}
    </Button>
  );
};
const SignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    message: "",
    success: false,
  });

  const searchParasms = useSearchParams();
  const callbackUrl = searchParasms.get("callbackUrl") || "/";

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
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
          <SignInButton />
          {data && !data.success && (
            <div className="text-center text-destructive">{data.message}</div>
          )}
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
