import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import About1 from "../Components/About/About1";

import Choose1 from "../Components/Choose/Choose1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";

import Process from "../Components/Process/Process";

import Testimonial2 from "../Components/Testimonial/Testimonial2";
import AboutCompany from "../Components/AboutCompany/AboutCompany";
import IdealCustomers from "../Components/IdealCustomers/IdealCustomers";
import Faq1 from "../Components/Faq/Faq1";
import 'aos/dist/aos.css';
import ProductGalleryPage from "../Components/products/page";

const page = () => {
  return (
    <div>
      <HeroBanner1></HeroBanner1>
      <About1
        img1="/assets/img/about_img_1.jpg"
        img2="/assets/img/L54A8476.JPG"
        img3="/assets/img/about_img_3.jpg"
        subTitle="Our About"
        Title="Precision Craft, Timely Delivery"
        Content="We are professional and committed to delivering high-quality doors with precision and efficiency, ensuring the best results for every project."
        feature1="Custom Door Solutions"
        feature2="Durable & Secure Doors"
        listItem={[
          "Crafting Doors that Stand the Test of Time",
          "Comprehensive Door Services",
          "We Understand Every Detail of Your Door Needs",
        ]}
      ></About1>
      {/* <Services1></Services1> */}
      <Choose1
        img1="/assets/img/Door1.jpg"
        content="We use high-grade, eco-friendly materials to craft doors that offer exceptional durability, security, and style. Each door undergoes rigorous quality control to meet international standards while maintaining an elegant finish."
        btnName="Read more"
        btnUrl="/about"
        img2="/assets/img/Door22.jpg"
        img3="/assets/img/Door33.jpg"
      ></Choose1>
      <AboutCompany></AboutCompany>
      <BeforeAfter
        title="Recent Completed Projects"
        subTitle="Before & after"
        bgImg="/assets/img/before_after_bg_1.jpg"
        beforeImg="/assets/img/afterDoor.jpg"
        afterTitle="After"
        afterImg="/assets/img/beforDoor.jpg"
        beforeTitle="Before"
      ></BeforeAfter>
      <Process></Process>
      <IdealCustomers></IdealCustomers>
      <ProductGalleryPage></ProductGalleryPage>

      <Testimonial2
        subtitle="Testimonial"
        title="What our clients say <br> About Us"
        bgImg="/assets/img/testimonial_bg_1.jpg"
      ></Testimonial2>
      <Faq1></Faq1>
      {/* <Pricing1></Pricing1> */}

    </div>
  );
};

export default page;
