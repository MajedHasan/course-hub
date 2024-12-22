import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
