"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="main" id="main-content">
      <div className="page-title">
        <div className="container">
          <div className="title-wrapper">
            <h1>Une erreur est survenue</h1>
            <p>Le contenu n&apos;a pas pu être chargé. Réessayez dans un instant.</p>
          </div>
        </div>
      </div>
      <div className="container section-pb" style={{ textAlign: "center" }}>
        <button className="btn-primary-dark" onClick={() => reset()}>
          <i className="bi bi-arrow-clockwise" aria-hidden="true" />
          Réessayer
        </button>
      </div>
    </main>
  );
}
