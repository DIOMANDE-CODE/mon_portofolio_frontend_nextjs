import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">&#60;Chez PYTH /&gt;</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Abidjan, Yamoussoukro</p>
              <p className="mt-3">
                <strong>WhatsApp:</strong> <span>+225 07 11 39 95 67</span>
              </p>
              <p className="mt-1">
                <strong>Téléphone:</strong> <span>+225 07 11 39 95 67</span>
              </p>
              <p>
                <strong>Email:</strong> <span>chezpyth@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <Link
                href="https://web.facebook.com/Young.CAJ"
                target="_blank"
                title="Blog Young.CAJ"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/diomande-droh-martial-a48005244/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="bi bi-linkedin" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 footer-links">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <Link href="/">Acceuil</Link>
              </li>
              <li>
                <Link href="/projet">Mes travaux</Link>
              </li>
              <li>
                <Link href="/visuel">Mes visuels</Link>
              </li>
              <li>
                <Link href="/profil">Mon profil</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3 footer-links">
            <h4>Compétences</h4>
            <ul>
              <li>
                <span>Développement Web</span>
              </li>
              <li>
                <span >Développement Mobile</span>
              </li>
              <li>
                <span >Communication visuelle</span>
              </li>
              <li>
                <span>Graphisme/Audiovisuel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
