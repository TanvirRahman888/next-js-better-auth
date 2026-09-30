"use client";

import React from "react";
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
import { signUp } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const name = String(data.name);
    const email = String(data.email);
    const password = String(data.password);
    const confirmPassword = String(data.confirmPassword);

    // Extra safety check before sending request
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Form submitted with:", {
      name,
      email,
      password,
    });

    const { data: resData, error } = await signUp.email({
      name,
      email,
      password,
    });

    console.log(resData, error);
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
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            
            {/* Decorative glow */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Top Content */}
            <div className="relative z-10">
              <div className="mb-10 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Welcome to ACME
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-white">
                Create your account and get started today.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-white/70">
                Join our platform to manage your account, access your dashboard,
                and enjoy a simple and secure experience.
              </p>
            </div>

            {/* Bottom Features */}
            <div className="relative z-10 mt-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>

                <span className="text-sm text-white/80">
                  Quick and simple registration
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>

                <span className="text-sm text-white/80">
                  Secure account authentication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm">
                  ✓
                </div>

                <span className="text-sm text-white/80">
                  Access your dashboard anytime
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto w-full max-w-md">
              
              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold text-primary">
                  GET STARTED
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Create an account
                </h2>

                <p className="mt-3 text-sm leading-6 text-default-500">
                  Enter your details below to create your account.
                </p>
              </div>

              <Form
                className="flex w-full flex-col gap-5"
                render={(props) => <form {...props} />}
                onSubmit={onSubmit}
              >
                {/* Name */}
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 text-sm font-medium">
                    Full name
                  </Label>

                  <Input
                    placeholder="John Doe"
                    variant="secondary"
                    className="h-12"
                  />

                  <FieldError className="text-sm" />
                </TextField>

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
                  <Label className="mb-2 text-sm font-medium">
                    Password
                  </Label>

                  <Input
                    placeholder="Create a strong password"
                    className="h-12"
                  />

                  <Description className="mt-2 text-xs text-default-500">
                    Minimum 8 characters, including 1 uppercase letter and 1
                    number.
                  </Description>

                  <FieldError className="text-sm" />
                </TextField>

                {/* Confirm Password */}
                <TextField
                  isRequired
                  name="confirmPassword"
                  type="password"
                  validate={(value) => {
                    const passwordInput = document.querySelector(
                      'input[name="password"]',
                    ) as HTMLInputElement | null;

                    if (!value) {
                      return "Please confirm your password";
                    }

                    if (
                      passwordInput &&
                      value !== passwordInput.value
                    ) {
                      return "Passwords do not match";
                    }

                    return null;
                  }}
                >
                  <Label className="mb-2 text-sm font-medium">
                    Confirm password
                  </Label>

                  <Input
                    placeholder="Retype your password"
                    className="h-12"
                  />

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
                    Create Account
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

              {/* Separator */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-default-200" />

                <span className="whitespace-nowrap text-xs text-default-400">
                  Already registered?
                </span>

                <div className="h-px flex-1 bg-default-200" />
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-default-500">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-primary"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;