"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { loginUser } from "@/store/slices/userSlice";
import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Page = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const handleLogin = (values: { email: string; password: string }) => {
    dispatch(loginUser({ email: values.email, password: values.password }));
  };

  const formSchema = z.object({
    email: z
      .string()
      .min(2, { message: "Email must be at least 2 characters" })
      .max(50, { message: "Email must be maximum 50 characters" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 2 characters" })
      .max(30, { message: "Password must be maximum 50 characters" }),
    remember: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    handleLogin(values);
  };

  return (
    <>
      <>
        <Card className="max-w-md w-full lg:ms-auto ">
          <CardHeader className="text-center">
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back! Please log in to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Password" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-right">
                  <Link
                    href={"/auth/forgot-password"}
                    className="text-sm italic underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel
                          htmlFor="checkbox"
                          className="flex items-center justify-start gap-3"
                        >
                          <Checkbox
                            // {...field}
                            id="checkbox"
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked === true)
                            }
                          />
                          <p className="font-thin">Remember Me</p>
                        </FormLabel>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Loading..." : "Login"}
                </Button>
              </form>
            </Form>
            <div className="flex items-center justify-between gap-2 mt-6 mb-4">
              <Separator className="flex-1" />
              <span>OR</span>
              <Separator className="flex-1" />
            </div>
            <div className="text-center">
              <Button
                className="flex items-center gap-3 mx-auto"
                variant={"outline"}
              >
                <Avatar className="w-full h-full max-w-[25px]">
                  <AvatarImage src="/img/google-icon.png" alt="Google Icon" />
                  <AvatarFallback>Google Icon</AvatarFallback>
                </Avatar>
                <span>Login with Google</span>
              </Button>
            </div>
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
