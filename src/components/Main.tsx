import React from "react";
import Demo from "./HomeLayout/Demo";
import Header from "./HomeLayout/Header";
import Instructors from "./HomeLayout/Instructors";
import NavBar from "./HomeLayout/NavBar";
import TheBootCamp from "./HomeLayout/TheBootCamp";
import Footer from "./HomeLayout/Footer";
import ContactForm from "./HomeLayout/ContactForm";
import LifeLongAccess from "./HomeLayout/LifeLongAccess";
import ArrowPullDown from "./UIComponents/ArrowPullDown";
import { WhyThisBootcamp } from "./HomeLayout/WhyThisBootcamp";
import { TangoStructure } from "./HomeLayout/TangoStructure";
import { MessageToFollowers } from "./HomeLayout/MessageToFollowers";
import { BackToTop } from "./HomeLayout/BackToTop";
import { Pricing } from "./HomeLayout/Pricing";

export const Main = () => {
  return (
    <>
      <NavBar />
      <Header />
      <TheBootCamp />
      <WhyThisBootcamp />
      <TangoStructure />
      <MessageToFollowers />
      <LifeLongAccess />
      <Demo />
      <Instructors />
      <Pricing />
      <ContactForm />
      <Footer />
      <ArrowPullDown />
      <BackToTop />
    </>
  );
};
