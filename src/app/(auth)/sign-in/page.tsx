"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Link,
  TextField,
} from "@heroui/react";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Log In Data:", data);

    const { data: redData, error } = await signIn.email({
      email: String(data.email),
      password: String(data.password),
      callbackURL: "/",
    });

    console.log("LogIn:", redData, error);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-default-200 bg-content1 shadow-xl lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left Section */}
          <div className="relative hidden overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            
            {/* Decorative glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Top Content */}
            <div className="relative z-10">
              <div className="mb-10 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Welcome back
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-white">
                Sign in and continue where you left off.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                Access your dashboard, manage your account, and continue using
                your workspace securely.
              </p>
            </div>

            {/* Bottom Features */}
            <div className="relative z-10 mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>
                <span className="text-sm text-white/80">
                  Secure authentication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>
                <span className="text-sm text-white/80">
                  Fast access to your dashboard
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>
                <span className="text-sm text-white/80">
                  Simple and responsive experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto w-full max-w-md">
              
              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold text-primary">
                  WELCOME BACK
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Sign in to your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-default-500">
                  Enter your email and password to continue.
                </p>
              </div>

              <Form
                className="flex w-full flex-col gap-5"
                render={(props) => <form {...props} />}
                onSubmit={onSubmit}
              >
                {/* Email */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 text-sm font-medium">
                    Email address
                  </Label>

                  <Input
                    placeholder="john@example.com"
                    className="h-12"
                  />

                  <FieldError className="text-sm" />
                </TextField>

                {/* Password */}
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }

                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }

                    return null;
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Label className="mb-2 text-sm font-medium">
                      Password
                    </Label>

                    <Link
                      href="#"
                      className="mb-2 text-xs font-medium text-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Input
                    placeholder="Enter your password"
                    className="h-12"
                  />

                  <Description className="mt-2 text-xs text-default-500">
                    Use the password associated with your account.
                  </Description>

                  <FieldError className="text-sm" />
                </TextField>

                {/* Buttons */}
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="w-full font-semibold"
                  >
                    Sign In
                  </Button>

                  <Button
                    type="reset"
                    variant="bordered"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Reset
                  </Button>
                </div>
              </Form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-default-200" />
                <span className="whitespace-nowrap text-xs text-default-400">
                  New here?
                </span>
                <div className="h-px flex-1 bg-default-200" />
              </div>

              {/* Sign up link */}
              <p className="text-center text-sm text-default-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-primary"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;