import NewsLetter from "@/components/common/newsletter";
import Thunder from "@/components/icons/thunder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="py-10 bg-[url('/img/home-page-bg.png')] bg-[no-repeat] bg-[center center] bg-[cover]">
        <section className="container mx-auto md:py-24 py-10">
          <div className="bg-[#FCFCFD] rounded md:p-5 p-2 max-w-fit w-full mx-auto flex items-center gap-5">
            <div className="bg-[#FAE3C3] rounded md:p-3 p-1">
              <Thunder />
            </div>
            <h1 className="text-[#1A1A1A] md:text-4xl text-xl font-bold">
              <span className="text-themePrimary">Unlock</span> Your Creative
              Potential
            </h1>
          </div>
          <p className="text-center mt-5 max-w-[660px] w-full mx-auto">
            Learn from industry experts and enhance your skills. Share your
            expertise, and we&apos;ll assist you in monetizing it. Whether you
            &apos; re an experienced teacher or an enthusiastic student, embark
            on your journey now
          </p>
          <div className="flex md:flex-row flex-col items-center gap-6 justify-center mt-8">
            <Button
              asChild
              size={"lg"}
              className="bg-gradient-to-r from-[#775B16] from-10% via-[#EFB41F] via-60% to-[#EFB41F] to-90% rounded-2xl font-bold text-lg py-7 px-10"
            >
              <Link href={""}>Create Account</Link>
            </Button>
          </div>
        </section>
        <section className="container mx-auto">
          <Image
            src="/img/section-02-thumbnail.png"
            alt="preview img"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </section>

        <section className="container mx-auto md:my-20 my-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="text-center">
            <h2 className="lg:text-7xl text-3xl font-light bg-gradient-to-r from-themePrimary via-themePrimary to-slate-800 inline-block text-transparent bg-clip-text">
              15K+
            </h2>
            <p className="lg:text-lg text-sm">Students</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-7xl text-3xl font-light bg-gradient-to-r from-themePrimary via-themePrimary to-slate-800 inline-block text-transparent bg-clip-text">
              75%
            </h2>
            <p className="lg:text-lg text-sm">Total success</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-7xl text-3xl font-light bg-gradient-to-r from-themePrimary via-themePrimary to-slate-800 inline-block text-transparent bg-clip-text">
              35
            </h2>
            <p className="lg:text-lg text-sm">Main questions</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-7xl text-3xl font-light bg-gradient-to-r from-themePrimary via-themePrimary to-slate-800 inline-block text-transparent bg-clip-text">
              26
            </h2>
            <p className="lg:text-lg text-sm">Chief experts</p>
          </div>
          <div className="text-center">
            <h2 className="lg:text-7xl text-3xl font-light bg-gradient-to-r from-themePrimary via-themePrimary to-slate-800 inline-block text-transparent bg-clip-text">
              16
            </h2>
            <p className="lg:text-lg text-sm">Years of experience</p>
          </div>
        </section>

        <section className="container mx-auto md:my-20 my-8 gap-10">
          <div className="mx-auto max-w-[230px] w-full border border-themePrimary py-4 px-1 rounded-full text-center font-bold text-themePrimary text-2xl">
            Road Map
          </div>
          <div className="text-center mt-16 max-w-lg mx-auto w-full">
            <h2 className="text-[#2F327D] md:text-3xl text-xl font-semibold mb-3">
              All-In-One{" "}
              <span className="text-themePrimary">Cloud Software.</span>
            </h2>
            <p className="text-[#696984]">
              Course creator hub is one powerful online software suite that
              combines all the tools needed to run a successful school or
              office.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-14 lg:px-24 mt-24">
            <div className="rounded-xl shadow-xl bg-slate-50 py-10 px-12 text-center relative">
              <div className="absolute -top-10 left-[40%] rounded-full  w-[70px] h-[70px] bg-[#5B72EE] flex items-center justify-center">
                <Image
                  src="/img/section-04-img-01.png"
                  alt="Image 01"
                  width={20}
                  height={20}
                />
              </div>
              <h2 className="text-[#2F327D] text-2xl mb-5 pt-16">
                Online Billing, Invoicing, & Contracts
              </h2>
              <p className="text-[#696984]">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
            <div className="rounded-xl shadow-xl bg-slate-50 py-10 px-12 text-center relative">
              <div className="absolute -top-10 left-[40%] rounded-full  w-[70px] h-[70px] bg-[#DAA520] flex items-center justify-center">
                <Image
                  src="/img/section-04-img-02.png"
                  alt="Image 01"
                  width={25}
                  height={25}
                />
              </div>
              <h2 className="text-[#2F327D] text-2xl mb-5 pt-16">
                Easy Scheduling & Attendance Tracking
              </h2>
              <p className="text-[#696984]">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
            <div className="rounded-xl shadow-xl bg-slate-50 py-10 px-12 text-center relative">
              <div className="absolute -top-10 left-[40%] rounded-full  w-[70px] h-[70px] bg-[#29B9E7] flex items-center justify-center">
                <Image
                  src="/img/section-04-img-03.png"
                  alt="Image 01"
                  width={35}
                  height={35}
                />
              </div>
              <h2 className="text-[#2F327D] text-2xl mb-5 pt-16">
                Customer Tracking
              </h2>
              <p className="text-[#696984]">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:my-20 my-8 gap-10">
          <div className="text-center mt-16 max-w-2xl mx-auto w-full">
            <h2 className="text-[#2F327D] md:text-3xl text-xl font-semibold mb-3">
              What is{" "}
              <span className="text-themePrimary font-light">
                Course creator hub
              </span>
            </h2>
            <p className="text-[#696984]">
              Course creator hub is a platform that allows educators to create
              online classes and courses whereby they can store the course
              materials online; manage assignments, quizzes and exams; monitor
              due dates; grade results and provide students with feedback all in
              one place.
            </p>
          </div>
          <div className="lg:px-20 grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div className="rounded-lg bg-[url('/img/section-05-img-01.png')] bg-cover bg-center overflow-hidden">
              <div className="h-[300px] w-full flex items-center justify-center flex-col gap-4 bg-[#171B41]/50 text-slate-50">
                <h2 className="font-semibold">FOR INSTRUCTORS</h2>
                <Button
                  asChild
                  variant={"ghost"}
                  className="border border-slate-50 rounded-full px-8 py-6"
                >
                  <Link href={""} className="font-light">
                    Start a class today
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-[url('/img/section-05-img-02.png')] bg-cover bg-center overflow-hidden">
              <div className="h-[300px] w-full flex items-center justify-center flex-col gap-4 bg-[#171B41]/50 text-slate-50">
                <h2 className="font-semibold">FOR STUDENTS</h2>
                <Button
                  asChild
                  variant={"ghost"}
                  className="rounded-full bg-[#23BDEE] px-8 py-6"
                >
                  <Link href={""} className="font-light">
                    Enter access code
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:my-20 my-8">
          <div className="flex items-center justify-between gap-10 mb-10">
            <h2 className="md:text-3xl text-xl font-medium">Benefits</h2>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>View All</Link>
            </Button>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">01</h2>
              <p className="font-bold text-left">Flexible Learning Schedule</p>
              <p className="mb-10 text-sm">
                Fit your coursework around your existing commitments and
                obligations.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">02</h2>
              <p className="font-bold text-left">Expert Instruction</p>
              <p className="mb-10 text-sm">
                Learn from industry experts who have hands-on experience in
                design and development.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">03</h2>
              <p className="font-bold text-left">Diverse Course Offerings</p>
              <p className="mb-10 text-sm">
                Explore a wide range of design and development courses covering
                various topics.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">04</h2>
              <p className="font-bold text-left">Updated Curriculum</p>
              <p className="mb-10 text-sm">
                Access courses with up-to-date content reflecting the latest
                trends and industry practices.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">05</h2>
              <p className="font-bold text-left">
                Practical Projects and Assignments
              </p>
              <p className="mb-10 text-sm">
                Develop a portfolio showcasing your skills and abilities to
                potential employers.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white md:py-10 py-7 md:px-10 px-6 flex flex-col gap-3 justify-between">
              <h2 className="md:text-6xl text-3xl font-bold text-right">06</h2>
              <p className="font-bold text-left">
                Interactive Learning Environment
              </p>
              <p className="mb-10 text-sm">
                Collaborate with fellow learners, exchanging ideas and feedback
                to enhance your understanding.
              </p>
              <Button asChild className="bg-secondary ml-auto">
                <Link href={"/"}>
                  <ArrowUpRight size={20} className="text-themePrimary" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto md:my-20 my-8">
          <div className="flex items-center justify-between gap-10 mb-10">
            <h2 className="md:text-3xl text-xl font-medium">
              Services Overview
            </h2>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>View All</Link>
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-4 bg-[#FEFCF5] p-5 rounded-lg">
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-1.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>4 Weeks</Badge>
                    <Badge>Beginner</Badge>
                  </div>
                  <Badge>By Anas Moudnib</Badge>
                </div>
                <CardTitle>Online courses</CardTitle>
                <CardDescription>
                  Our intuitive course builder gives you the power to share what
                  you know. No coding or design skills necessary.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-2.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>6 Weeks</Badge>
                    <Badge>Intermediate</Badge>
                  </div>
                  <Badge>By Othmane Alaoui</Badge>
                </div>
                <CardTitle>Digital downloads</CardTitle>
                <CardDescription>
                  Reach your audience with the content they want, faster than
                  ever. Sell PDFs, audio clips, and more.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-3.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>8 Weeks</Badge>
                    <Badge>Intermediate</Badge>
                  </div>
                  <Badge>By Salima Zarouali</Badge>
                </div>
                <CardTitle>Coaching</CardTitle>
                <CardDescription>
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-4.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>10 Weeks</Badge>
                    <Badge>Beginner</Badge>
                  </div>
                  <Badge>By Sarah Thompson</Badge>
                </div>
                <CardTitle>Online courses</CardTitle>
                <CardDescription>
                  Discover the fundamentals of graphic design, including
                  typography, color theory, layout design, and image
                  manipulation techniques. Create visually stunning designs for
                  print and digital media.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-5.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>10 Weeks</Badge>
                    <Badge>Intermediate</Badge>
                  </div>
                  <Badge>By Othmane Alaoui</Badge>
                </div>
                <CardTitle>Digital downloads</CardTitle>
                <CardDescription>
                  Become proficient in front-end web development. Learn HTML,
                  CSS, JavaScript, and popular frameworks like Bootstrap and
                  React. Build interactive and responsive websites.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src={"/img/section-04-img-6.png"}
                  alt="Card Image"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <div className="flex md:flex-row flex-col items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Badge>6 Weeks</Badge>
                    <Badge>Advance</Badge>
                  </div>
                  <Badge>By Aziza ammelah</Badge>
                </div>
                <CardTitle>Coaching</CardTitle>
                <CardDescription>
                  Take your JavaScript skills to the next level. Explore
                  advanced concepts like closures, prototypes, asynchronous
                  programming, and ES6 features. Build complex applications with
                  confidence.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-themePrimary w-full">
                  <Link href={"/"}>Get It Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="container mx-auto md:my-20 my-8">
          <div className="flex items-center justify-between gap-10 mb-10">
            <h2 className="md:text-3xl text-xl font-medium">
              Our Testimonials
            </h2>
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>View All</Link>
            </Button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
            <Card>
              <CardHeader>
                <CardDescription className="mb-6">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/img/testimonial-img-1.png"}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded"
                    />
                    <span className="font-bold text-sm">Sarah L</span>
                  </div>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Read Full Story</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription className="mb-6">
                  The UI/UX design course exceeded my expectations. The
                  instructor{"'"}s expertise and practical assignments helped me
                  improve my design skills. I feel more confident in my career
                  now. Thank you!
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/img/testimonial-img-1.png"}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded"
                    />
                    <span className="font-bold text-sm">yassine</span>
                  </div>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Read Full Story</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription className="mb-6">
                  The mobile app development course was fantastic! The
                  step-by-step tutorials and hands-on projects helped me grasp
                  the concepts easily. I{"'"}m now building my own app. Great
                  course!
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/img/testimonial-img-1.png"}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded"
                    />
                    <span className="font-bold text-sm">Aziza </span>
                  </div>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Read Full Story</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription className="mb-6">
                  I enrolled in the graphic design course as a beginner, and it
                  was the perfect starting point. The instructor{"'"}s guidance
                  and feedback improved my design abilities significantly. I
                  {"'"}m grateful for this course!
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/img/testimonial-img-1.png"}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded"
                    />
                    <span className="font-bold text-sm">Salim</span>
                  </div>
                  <Button asChild variant={"secondary"}>
                    <Link href={"/"}>Read Full Story</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
        <NewsLetter />
      </main>
    </>
  );
}
