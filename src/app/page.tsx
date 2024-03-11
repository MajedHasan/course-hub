import Thunder from "@/components/icons/thunder";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
            <h2 className="text-3xl font-medium">Benefits</h2>
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
      </main>
    </>
  );
}
