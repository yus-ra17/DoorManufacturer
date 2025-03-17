import About1 from "@/app/Components/About/About1";
import Brand1 from "@/app/Components/Brand/Brand1";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Process2 from "@/app/Components/Process/Process2";
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
      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/about_img_2.jpg"
        img3="/assets/img/about_img_3.jpg"
        expNumber="5"
        expYers="Years"
        expTitle="Experience"
        number="+251908 686868"
        subTitle="Our About"
        Title="Precision Craftsmanship, Timely Delivery"
        Content="We are professional and committed to delivering high-quality doors with precision and efficiency, ensuring the best results for every project."
        feature1="Custom Door Solutions"
        feature2="Durable, Secure Door Installations"
        listItem={[
          "Crafting Doors that Stand the Test of Time",
          "Comprehensive Door Services",
          "We Understand Every Detail of Your Door Needs",
        ]}
        avatar="/assets/img/avatar_1.png"
        name="Ronald Richards"
        designation="Founder CEO"
      ></About1>
      <Testimonial2></Testimonial2>
      <Brand1></Brand1>
      <Process2></Process2>
      <Team1></Team1>
    </div>
  );
};

export default page;
