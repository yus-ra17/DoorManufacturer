import About1 from "@/app/Components/About/About1";
import Brand1 from "@/app/Components/Brand/Brand1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Process2 from "@/app/Components/Process/Process2";
import Project1 from "@/app/Components/Project/Project1";
import Project3 from "@/app/Components/Project/Project3";
import Services1 from "@/app/Components/Services/Services1";
import Team1 from "@/app/Components/Team/Team1";
import Testimonial2 from "@/app/Components/Testimonial/Testimonial2";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/page_heading_1.jpg"
        Title="About Us"
      ></BreadCumb>
      <Project1/>

      {/* <Testimonial2></Testimonial2>
      <Brand1></Brand1>
      <Process2></Process2>
      <Team1></Team1> */}
    </div>
  );
};

export default page;