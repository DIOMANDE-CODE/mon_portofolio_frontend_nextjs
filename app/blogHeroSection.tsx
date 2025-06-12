import Image from "next/image";
import Link from "next/link";

export default function BlogHeroSection(){
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