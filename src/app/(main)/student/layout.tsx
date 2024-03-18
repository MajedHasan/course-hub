import StudentSidebar from "@/components/global/sidebar/student-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { currentUser } from "@clerk/nextjs/server";
import {
  BarChart,
  Bell,
  Mail,
  MailOpen,
  MessageSquareTextIcon,
  NewspaperIcon,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

const StudentLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  return (
    <>
      <main className="w-full min-h-screen h-full bg-[#F0F2F5] flex">
        <div className="max-w-[270px] w-full bg-white border-r border-r-[#E4E7EC] h-screen overflow-y-scroll hidden xl:block">
          <StudentSidebar />
        </div>
        <div className="flex-1 flex flex-col max-h-screen h-full">
          <div className="border-b border-b-[#E4E7EC] bg-white py-3 flex items-center justify-between gap-5 px-3">
            <div className="flex-1">
              <Sheet>
                <SheetTrigger>
                  <BarChart className="xl:hidden block" />
                </SheetTrigger>
                <SheetContent side={"left"} className="overflow-y-scroll">
                  <StudentSidebar />
                </SheetContent>
              </Sheet>
            </div>
            <Input placeholder="Search here..." className="flex-[2]" />
            <div className="flex-1 flex items-center gap-3 justify-end">
              <Link href={"/student/messages"} className="relative">
                <MessageSquareTextIcon />
                <Badge className="absolute -top-1 -right-1 w-3 h-3 p-0 bg-red-400 border-2 border-slate-100" />
              </Link>
              <Drawer>
                <DrawerTrigger>
                  <Bell />
                </DrawerTrigger>
                <DrawerContent className="p-4 bg-slate-200">
                  <DrawerHeader>
                    <DrawerTitle className="text-center">
                      Notifications
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="bg-white p-4 rounded flex flex-col gap-2 flex-1 max-h-[70vh] overflow-y-scroll">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        <Avatar>
                          <AvatarImage src="" alt="" />
                          <AvatarFallback>Image</AvatarFallback>
                        </Avatar>
                        <div>
                          <h2 className="text-md font-bold">
                            3D Place solution
                          </h2>
                          <p className="text-xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Distinctio, ducimus.{" "}
                            <span className="text-xs">Date: 20/02/24</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Mail />
                        <MailOpen />
                      </div>
                    </div>
                    <Separator />
                  </div>
                </DrawerContent>
              </Drawer>
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src={user?.profileImageUrl}
                      alt="Profile Pic"
                    />
                    <AvatarFallback>{user?.username}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent></PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex-1 max-h-full overflow-y-scroll px-5 py-2">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentLayout;
