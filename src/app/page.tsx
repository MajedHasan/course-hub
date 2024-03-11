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
          <p className="text-center mt-5 max-w-[550px] w-full mx-auto">
            Learn from Industry Experts and Enhance Your Skills & Share what you
            know{";"} we{"'"}ll help you get paid for it
          </p>
          <div className="flex md:flex-row flex-col items-center gap-6 justify-center mt-8">
            <Button asChild size={"lg"}>
              <Link href={""}>Explore Sevices</Link>
            </Button>
            <Button asChild size={"lg"} className="bg-themePrimary">
              <Link href={""}>View Pricing</Link>
            </Button>
          </div>
        </section>
        <section className="container mx-auto">
          <video
            src="https://www.pexels.com/video/online-courses-list-5900947/"
            controls
            poster="/img/section-02-thumbnail.png"
            className="w-full h-full max-h-[600px]"
          ></video>
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
