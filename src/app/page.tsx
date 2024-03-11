import Thunder from "@/components/icons/thunder";
import { Button } from "@/components/ui/button";
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
      </main>
    </>
  );
}
