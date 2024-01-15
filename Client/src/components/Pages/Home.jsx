import React from "react";
import "../styles/Home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import worldImg from "../../assets/images/world.png";
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../Services/ServiceList";

import FeaturedTourList from "../Featured-tours/FeaturedTourList";

import experienceImg from "../../assets/images/experience.png";
import MasonarryImgGallery from "../Image-Gallery/MasonarryImgGallery";

import Testimonial from "../Testimonial/Testimonial";

import NewsLetter from "../shared/NewsLetter";
const Home = () => {
  return (
    <>
      {/* ========hero section start ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis quas ipsa, facere fuga consequuntur quis tempora
                  dignissimos assumenda ipsum iusto ex maiores illum, autem,
                  odit est dolorem. Omnis, consequatur unde?
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4 hero__video-box">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========hero section start ======= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">what we serve</h5>
              <h2 className="services__title">we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===========featured tour section start============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-titile">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* ===========featured tour section End============== */}

      {/* ===========experiance section start =========== */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  with our all experiance <br /> we will serve you
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur elit.
                  <br />
                  Nostrum aliquam reiciendis natus Nostrum.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>12</span>
                  <h6>Years experiance</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===========experiance section end =========== */}

      {/* ===========gallery section start================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonarryImgGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===========gallery section end================= */}
      {/* =============testimonial section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =============testimonial section end ========== */}
      <NewsLetter />
    </>
  );
};

export default Home;
