"use client"
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Testimonial2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const [isActive, setIsActive] = useState('tab2');

    return (
        <section className="cs_tabs cs_style_2 cs_bg_filed position-relative" data-background="/assets/img/testimonial_bg_2.jpg">
        <div className="cs_tabs_overlay cs_heading_bg position-absolute"></div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-10">
              <div className="cs_tab_body p-0">
                <div className={`cs_tab ${isActive === 'tab1' ? 'active' : ''}`} >
                    <TestimonialCard
                        img="/assets/img/avatar_7.png"
                        name=""
                        designation="Business Owner"
                        subtile="Testimonial"
                        title="Clients say About Us"
                        content="Charot Door Manufacturer exceeded my expectations! Their eco-friendly doors are durable, stylish, and energy-efficient. Highly recommended for quality craftsmanship and sustainability."
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab2' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_4.png"
                        name=""
                        designation="Home Builder"
                        subtile="Testimonial"
                        title="Reliable & Sustainable"
                        content="The best doors I’ve ever installed! Charot’s craftsmanship and attention to sustainability make them my top choice for every project."
                    ></TestimonialCard>
                </div>
                <div className={`cs_tab ${isActive === 'tab3' ? 'active' : ''}`} >
                <TestimonialCard
                        img="/assets/img/avatar_8.png"
                        name=""
                        designation="Interior Designer"
                        subtile="Testimonial"
                        title="Elegant & High-Quality"
                        content="Charot doors add elegance and durability to any space. Their eco-conscious approach makes them a perfect choice for modern homes."
                    ></TestimonialCard>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <ul className="cs_tab_links cs_style_2 cs_mp_0">
                <li className={`${isActive === 'tab1' ? 'active' : ''}`} onClick={() => setIsActive('tab1')}><a>
                <Image src="/assets/img/avatar_5.png" alt="img" width={56} height={56}   />
                  </a></li>
                <li className={`${isActive === 'tab2' ? 'active' : ''}`} onClick={() => setIsActive('tab2')} ><a>
                <Image src="/assets/img/avatar_4.png" alt="img" width={56} height={56}   />
                  </a></li>
                <li className={`${isActive === 'tab3' ? 'active' : ''}`} onClick={() => setIsActive('tab3')}><a>
                <Image src="/assets/img/avatar_6.png" alt="img" width={56} height={56}   />
                  </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Testimonial2;