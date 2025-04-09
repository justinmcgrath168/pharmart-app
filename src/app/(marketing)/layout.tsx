import Footer from "@/components/website/layout/Footer";
import Navigation from "@/components/website/layout/Navigation";
import React from "react";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default WebLayout;
