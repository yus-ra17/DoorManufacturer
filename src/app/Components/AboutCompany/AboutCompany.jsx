"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
  Button,
  Accordion,
  Fade,
  Image,
} from "react-bootstrap";
import Link from "next/link";

const CompanyProfile = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const features = [
    {
      icon: "./eco.jpg",
      title: "Eco-Friendly",
      desc: "Made from sustainable materials, reducing environmental impact and promoting a greener future.",
    },
    {
      icon: "./sound.jpg",
      title: "Soundproof",
      desc: "Effectively blocks outside noise, creating a peaceful and quiet indoor environment.",
    },
    {
      icon: "./Water proof.jpg",
      title: "Water proof",
      desc: "Water and moisture resistance protects against common issues like swelling and warping.",
    },
    {
      icon: "./fire.jpg",
      title: "Fire Safe",
      desc: "Built with fire retardant materials to enhance safety and prevent fire spread.",
    },
    {
      icon: "./Durable.jpg",
      title: "Durable",
      desc: "Resistant to moisture, termites, and extreme weather, ensuring long-lasting performance.",
    },
    {
      icon: "./resistance.jpg",
      title: "Termites and Rot resistance",
      desc: "Eliminates common worries associated with traditional wood doors.",
    },
  ];

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      {/* Animated background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Fade in={show} timeout={1000}>
          <div
            className="position-absolute bg-success opacity-10 rounded-circle"
            style={{
              width: "300px",
              height: "300px",
              top: "-50px",
              left: "-50px",
            }}
          />
        </Fade>
      </div>

      <Container>
        {/* Hero Section */}
        <Fade in={show}>
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h1 className="display-4 fw-bold text-success mb-3">
                🌿 Charot Eco Doors
              </h1>
              <p className="lead text-muted mb-4">
                Pioneering Sustainable Entry Solutions Since 2016
              </p>
            </Col>
          </Row>
        </Fade>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {features.slice(0, 6).map((features, i) => (
            <div key={i} className="col-lg-4">
              <div className="cs_post cs_style_1">
               
                  <Image
                    src={features.icon}
                    alt="img"
                    width={412}
                    height={266}
                  />
             
                <div className="cs_post_content_wrapper position-relative">
                  <div className="cs_post_content cs_white_bg">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_5">
                      {features.title}
                    </h3>
                    <p className="cs_mb_19">{features.desc}</p>
                  </div>
                  <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const TimelineItem = ({ year, title, desc }) => (
  <div className="timeline-item position-relative ps-5 mb-4">
    <div className="position-absolute start-0 top-0 translate-middle">
      <Badge bg="success" className="rounded-circle fs-5">
        {year}
      </Badge>
    </div>
    <h4 className="text-success">{title}</h4>
    <p className="text-muted mb-0">{desc}</p>
    <div className="timeline-line position-absolute start-0 top-0 h-100 border-start border-2 border-success" />
  </div>
);

export default CompanyProfile;
