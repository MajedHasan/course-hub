"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  LogOut,
  MenuSquareIcon,
  MessageCircle,
  Settings,
  User,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { logout } from "@/store/slices/userSlice";

type Props = {};

const Header = (props: Props) => {
  const user = useAppSelector((state) => state.user.currentUser);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  let dashboard = "users";
  if (user?.publicMetadata.role === "ADMIN") {
    dashboard = "admin";
  } else if (user?.publicMetadata.role === "TEACHER") {
    dashboard = "teacher";
  } else if (user?.publicMetadata.role === "STUDENT") {
    dashboard = "student";
  }

  console.log("From User: ", user);

  return (
    <div className="py-3">
      <div className="container mx-auto">
        <header className="flex items-center justify-between gap-4">
          <div className="flex md:gap-10 gap-2 items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} className="md:hidden block">
                  {/* <Button variant={"ghost"}> */}
                  <MenuSquareIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <div className="flex items-center gap-10">
                    <div className="w-10 h-10 rounded bg-black block"></div>
                    <span className="text-2xl font-bold italic">
                      Course Hub
                    </span>
                  </div>
                </SheetHeader>
                <Separator className="my-6" />
                <nav className="flex items-center gap-6 flex-col">
                  <Link href={"/"} className="hover:text-slate-400">
                    Home
                  </Link>
                  <Link href={"/marketplace"} className="hover:text-slate-400">
                    Courses
                  </Link>
                  <Link href={"/about-us"} className="hover:text-slate-400">
                    About Us
                  </Link>
                  <Link href={"/pricing"} className="hover:text-slate-400">
                    Pricing
                  </Link>
                  <Link href={"/contact"} className="hover:text-slate-400">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              href={"/"}
              className="w-10 h-10 rounded bg-black block"
            ></Link>
            <nav className="md:flex items-center gap-6 hidden">
              <Link href={"/"} className="hover:text-slate-400">
                Home
              </Link>
              <Link href={"/marketplace"} className="hover:text-slate-400">
                Courses
              </Link>
              <Link href={"/about-us"} className="hover:text-slate-400">
                About Us
              </Link>
              <Link href={"/pricing"} className="hover:text-slate-400">
                Pricing
              </Link>
              <Link href={"/contact"} className="hover:text-slate-400">
                Contact
              </Link>
            </nav>
          </div>
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.profileImageUrl} alt="Profile Pic" />
                    <AvatarFallback>{user.username}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_DOMAIN}/${dashboard}`}
                      className="cursor-pointer flex w-full"
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_DOMAIN}/${dashboard}`}
                        className="cursor-pointer flex w-full"
                      >
                        <User className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {/* <SignOutButton> */}
                    <Button variant={"destructive"} className="w-full">
                      <div className="flex">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </div>
                    </Button>
                    {/* </SignOutButton> */}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant={"link"}>
                <Link href={"/auth/sign-up"}>Sign Up</Link>
              </Button>
              <Button asChild variant={"default"}>
                <Link href={"/auth/sign-in"}>Login</Link>
              </Button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
