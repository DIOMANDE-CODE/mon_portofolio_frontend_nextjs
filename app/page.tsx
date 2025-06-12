import Link from "next/link";
import Image from "next/image";

import SwiperSlider from "@/components/SwiperSlider";

// impoter le données
import QuelqueProjets  from "./quelque_projet";
// import { useState } from "react";

export function BlogHeroSection() {
  return (
    <>
      {/* Blog Hero Section */}
      <section id="blog-hero" className="blog-hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="blog-grid">
            <article className="blog-item featured" data-aos="fade-up">
              <Image
                src="/assets/img/index/index_image_1.jpg"
                alt="Blog"
                width={5000}
                height={5000}
              />
              <div className="blog-content">
                <div className="post-meta">
                  {/* <span className="date">Apr. 14th, 2025</span> */}
                  <span className="category">Developpement web/mobile</span>
                </div>
                <h2 className="post-title">
                  <Link
                    href="blog-details.html"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  >
                    Vous avez une idée ? Je la transforme en application web ou mobile fonctionnelle, rapide et moderne.
                  </Link>
                </h2>
              </div>
            </article>

            <article
              className="blog-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                width={600}
                height={400}
                src="/assets/img/index/index_image_2.jpg"
                alt="Blog Image"
                className="img-fluid"
              />
              <div className="blog-content">
                <div className="post-meta">
                  {/* <span className="date">Apr. 14th, 2025</span> */}
                  <span className="category">Intélligence Artificielle</span>
                </div>
                <h3 className="post-title">
                  <a
                    href="blog-details.html"
                    title="Sed do eiusmod tempor incididunt ut labore"
                  >
                    L’IA pour automatiser, optimiser et faire évoluer vos projets.
                  </a>
                </h3>
              </div>
            </article>
            {/* End Blog Item */}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
    </>
  );
}
export default function Home() {
  return (
    <>
      <main className="main">
        <BlogHeroSection></BlogHeroSection>
        <section id="featured-posts" className="featured-posts section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Nos services</h2>
            <div>
              <span>domaines d'interventions</span>{" "}
              <span className="description-title"></span>
            </div>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="blog-posts-slider swiper init-swiper">
              <div>
                <SwiperSlider></SwiperSlider>
              </div>
            </div>
          </div>
        </section>
        {/* /Featured Posts Section */}
        <QuelqueProjets></QuelqueProjets>
      </main>
      {/* Preloader */}
      {/* Scroll Top */}
      <Link
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
    </>
  );
}
