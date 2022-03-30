import React from "react";
import Option from "../Option/Option";
import Header from "../sub_page/Header";
import Info from "../sub_page/Info";
import SectionCategory from "../sub_page/SectionCategory";
import SectionDownload from "../sub_page/SectionDownload";
import SectionStaff from "../sub_page/SectionStaff";

const Page = () => {
  return (
    <>
      <Header />
      <SectionCategory />
      <Info />
      <Option />
      <SectionDownload />
      <SectionStaff />
    </>
  );
};

export default Page;
