import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main" id="main-content">
      <div className="page-title">
        <div className="container">
          <div className="title-wrapper">
            <h1>Page introuvable</h1>
            <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
          </div>
        </div>
      </div>
      <div className="container section-pb" style={{ textAlign: "center" }}>
        <Link href="/" className="btn-primary-dark">
          <i className="bi bi-house" aria-hidden="true" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
