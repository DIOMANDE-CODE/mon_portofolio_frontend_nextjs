"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée en ms
      once: true, // ne joue l'animation qu'une seule fois
    });
  }, []);

  return <>{children}</>;
}
