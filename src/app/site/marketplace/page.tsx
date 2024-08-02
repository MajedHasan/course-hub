import React from "react";

type Props = {};

const MarketplacePage = (props: Props) => {
  return (
    <>
      <section className="bg-[#555555] pt-32 pb-32 px-10"></section>
      <section className="-mt-40">
        <div className="bg-[#FFFFFF] py-20 px-10 container mx-auto rounded-lg text-center">
          <h1 className="text-6xl font-bold relative w-fit mx-auto">
            <span className="block absolute w-16 h-16 rounded-full bg-[#DAA520] z-10 -left-6 -top-6"></span>{" "}
            <span className="relative z-20">Marketplace</span>
          </h1>
        </div>
      </section>

      <main>
        <aside></aside>
      </main>
    </>
  );
};

export default MarketplacePage;
