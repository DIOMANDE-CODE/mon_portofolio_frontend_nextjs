"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header id="header" className="header position-relative">
        <div className="container-fluid container-xl position-relative">
          <div className="top-row d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-end">
              {/* Uncomment the line below if you also wish to use an image logo */}
              {/* <img src="assets/img/logo.webp" alt=""> */}
              <h1 className="sitename">&#60;Chez PYTH /&gt;</h1>
              <span></span>
            </Link>
            <div className="d-flex align-items-center">
              <div className="social-links">
                <Link
                  href="https://web.facebook.com/Young.CAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                  title="Blog Young"
                >
                  <i className="bi bi-facebook" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/diomande-droh-martial-a48005244/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Compte LinkedIn"
                >
                  <i className="bi bi-linkedin" />
                </Link>
                <Link
                  href="https://github.com/DIOMANDE-CODE"
                  className="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Compte Github"
                >
                  <i className="bi bi-github" />
                </Link>
              </div>
              {/* <form className="search-form ms-4">
                <input
                  type="text"
                  placeholder="Recherchez..."
                  className="form-control"
                />
                <button type="submit" className="btn">
                  <i className="bi bi-search" />
                </button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  {pathname === "/" ? (
                    <Link href="/" className="active">
                      Acceuil
                    </Link>
                  ) : (
                    <Link href="/">Acceuil</Link>
                  )}
                </li>
                <li>
                  {pathname === "/projet" ? (
                    <Link href="/projet" className="active">
                      Mes travaux
                    </Link>
                  ) : (
                    <Link href="/projet">Mes travaux</Link>
                  )}
                </li>
                <li>
                  {pathname === "/visuel" ? (
                    <Link href="/visuel" className="active">
                      Mes visuels
                    </Link>
                  ) : (
                    <Link href="/visuel">Mes visuels</Link>
                  )}
                </li>
                <li>
                  {pathname === "/profil" ? (
                    <Link href="/profil" className="active">
                      Profil
                    </Link>
                  ) : (
                    <Link href="/profil">Profil</Link>
                  )}
                </li>
                <li>
                  {pathname === "/contact" ? (
                    <Link href="/contact" className="active">
                      Me joindre
                    </Link>
                  ) : (
                    <Link href="/contact">Me joindre</Link>
                  )}
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" />
            </nav>
          </div>
        </div>
      </header>

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
