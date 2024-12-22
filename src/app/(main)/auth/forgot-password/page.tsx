"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  searchParams: {
    token: string;
  };
};

const Page = ({ searchParams }: Props) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.token) {
      setToken(searchParams.token);
    }
  }, [searchParams]);

  const handleLogin = (values: { email: string }) => {};

  const formSchema = z.object({
    email: z
      .string()
      .min(2, { message: "Email must be at least 2 characters" })
      .max(50, { message: "Email must be maximum 50 characters" }),
  });
  const passwordFormSchema = z.object({
    password: z
      .string()
      .min(2, { message: "Password must be at least 2 characters" })
      .max(50, { message: "Password must be maximum 50 characters" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    handleLogin(values);
  };

  const passwordOnSubmit = (values: z.infer<typeof passwordFormSchema>) => {
    console.log(values);
  };

  return (
    <>
      <>
        <Card className="max-w-md w-full lg:ms-auto ">
          <CardHeader className="text-center">
            <CardTitle>
              {token ? "Enter New Password" : "Forgot Password"}
            </CardTitle>
            <CardDescription>
              {token
                ? "Welcome back! Please set a new password to access your account."
                : "Welcome back! Please enter your Email."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {token ? (
              <Form {...passwordForm}>
                <form
                  onSubmit={passwordForm.handleSubmit(passwordOnSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={passwordForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your New Password"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Setting..." : "Set New Password"}
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your Email" {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Submiting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-center w-full">
              Don’t have an account?
              <Link
                href={"/auth/sign-up"}
                className="font-bold underline italic"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </>
    </>
  );
};

export default Page;
