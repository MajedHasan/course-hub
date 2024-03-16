import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <main className="h-full">
        <Header />
        {children}
        <Footer />
      </main>
    </ClerkProvider>
  );
};

export default layout;
