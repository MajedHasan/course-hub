import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StudentSidebarItems, StudentSidebarItems2 } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs/server";
import { ChevronDown, Headphones, LogOut, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const StudentSidebar = async (props: Props) => {
  const user = await currentUser();

  return (
    <div className="flex flex-col gap-5 justify-between h-full p-3">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 pl-4">
          <div className="w-7 h-7 rounded-full bg-themeStudentPrimary"></div>
          <span className="text-lg font-bold text-themeStudentPrimary">
            Course creator hub
          </span>
        </div>
        <div className="flex flex-1 overflow-hiden max-h-full xl:mt-16 mt-8">
          <div className="flex flex-col overflow-scroll flex-1">
            <h2 className="text-md px-4 mb-3 border-b bg-[#0177FB70] rounded py-2 flex items-center justify-between font-bold">
              Menu
              <ChevronDown size={12} />
            </h2>
            {StudentSidebarItems.map((item) => (
              <Link
                key={item.name}
                href={`/student${item.url}`}
                className="w-full py-3 hover:bg-themeStudentPrimary transition-all rounded-lg pl-4 group flex items-center gap-3 "
              >
                {
                  <item.icon
                    size={20}
                    className="text-[#667185] group-hover:text-white"
                  />
                }
                <span className="group-hover:font-medium text-sm group-hover:text-white">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-1 overflow-hiden max-h-full xl:mt-16 mt-8">
          <div className="flex flex-col overflow-scroll flex-1">
            <h2 className="text-md px-4 mb-3 border-b bg-[#0177FB70] rounded py-2 flex items-center justify-between font-bold">
              Account
              <ChevronDown size={12} />
            </h2>
            {StudentSidebarItems2.map((item) => (
              <Link
                key={item.name}
                href={`/student${item.url}`}
                className="w-full py-3 hover:bg-themeStudentPrimary transition-all rounded-lg pl-4 group flex items-center gap-3 "
              >
                {
                  <item.icon
                    size={20}
                    className="text-[#667185] group-hover:text-white"
                  />
                }
                <span className="group-hover:font-medium text-sm group-hover:text-white">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-20">
        <Card className="bg-[#F0F7FF]">
          <CardContent className="pb-0">
            <Image
              src={"/img/Student-Invite.png"}
              alt="Student Invite"
              width={100}
              height={180}
              className="w-full -mt-20"
            />
          </CardContent>
          <CardHeader className="pb-0">
            <CardTitle className="text-center">Invite Friend</CardTitle>
          </CardHeader>
          <CardFooter className="p-4">
            <Button className="text-xs bg-themeStudentPrimary mx-auto">
              Send The Link And Get <strong>&nbsp; 5% OFF</strong>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudentSidebar;
