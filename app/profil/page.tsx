
import AuthorInfo from "./authorInfo";
import AuthorContent from "./authorContent";
import Link from "next/link";

export default function Author() {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">
                  <i className="bi bi-house" /> Acceuil
                </Link>
              </li>
              <li className="breadcrumb-item active current">Mon profil</li>
            </ol>
          </nav>
        </div>
        <div className="title-wrapper">
          <h1>Qui suis-je ?</h1>
        </div>
      </div>
      {/* End Page Title */}
      {/* Author Profile Section */}
      <section id="author-profile" className="author-profile section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="author-profile-1">
            <div className="row">
              {/* Author Info */}
              <AuthorInfo />
              {/* Author Content */}
              <AuthorContent key="author-content" />
            </div>
          </div>
        </div>
      </section>
      {/* /Author Profile Section */}
    </main>
  );
}
