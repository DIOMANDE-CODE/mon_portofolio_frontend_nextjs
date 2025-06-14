// Exemple: /components/GalleryLightbox.tsx
"use client";

import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

export default function GalleryLightbox() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return null; // Ou place-le dans une <div> qui contient tes images
}
