"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import url_image from "@/utils/imageUrls";
import useFetch from "@/hook/useFetch";

export default function AuthorInfo() {
  interface Author_Info {
    id: number;
    photo_profil: string;
    nom: string;
    fonctions: string;
    slogan: string;
    nombre_projet: number;
    nombre_recompense: number;
    lien_facebook: string;
    lien_instagram: string;
    lien_linkedin: string;
    lien_twitter: string;
    lien_github: string;
    biographie: string;
  }

  const { data, error, loading } = useFetch("users/list/")
  // Declaration du state de AuthorInfo
  const [authorInfo, setAuthorInfo] = useState<Author_Info[]>([]);

  useEffect(() => {
    if (data){
      setAuthorInfo(data)
    }
  }, [data]);

  if (loading) return <div id="preloader"></div>;
  if (error) return <p className="text-red-500">Erreur : {String(error)}</p>;

  return (
    <>
      {authorInfo.map((info) => (
        <div className="col-lg-4 mb-4 mb-lg-0" key={info.id}>
          <div className="author-card" data-aos="fade-up">
            <div className="author-image">
              <Image
                width={5000}
                height={5000}
                src={`${url_image}${info.photo_profil}`}
                priority
                alt="Author"
                className="img-fluid rounded"
              />
            </div>
            <div className="author-info">
              <h2>{info.nom}</h2>
              <p className="designation">{info.fonctions}</p>
              <div className="author-bio">
                <b>{info.slogan}</b>
              </div>

              <div className="social-links">
                {info.lien_facebook && (
                  <a
                    href={info.lien_facebook}
                    className="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                )}

                {info.lien_github && (
                  <a
                    href={info.lien_github}
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github" />
                  </a>
                )}

                {info.lien_instagram && (
                  <a
                    href={info.lien_instagram}
                    className="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                )}

                {info.lien_linkedin && (
                  <a
                    href={info.lien_linkedin}
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
