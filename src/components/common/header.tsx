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

type Props = {};

const Header = (props: Props) => {
  const [user, setUser] = useState(true);

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
                  <Avatar>
                    <AvatarImage src="" alt="Profile Pic" />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
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
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button asChild variant={"link"}>
                <Link href={"/signup"}>Sign Up</Link>
              </Button>
              <Button asChild variant={"default"}>
                <Link href={"/login"}>Login</Link>
              </Button>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
