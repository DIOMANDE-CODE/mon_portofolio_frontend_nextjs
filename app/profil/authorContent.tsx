"use client";

import { useEffect, useState } from "react";
import useFetch from "@/hook/useFetch";

export default function AuthorContent() {
  interface Competence {
    id: number;
    nom_competence: string;
  }

  interface Author_Content {
    id: number;
    biographie: string;
    competences: Competence[];
  }

  const { data, error, loading } = useFetch("users/list/")
  const [authorContent, setAuthorContent] = useState<Author_Content[]>([]);

  useEffect(() => {
    if (data){
      setAuthorContent(data)
    }
  }, [data]);

  if (loading) return <div id="preloader"></div>;
  if (error) return <p className="text-red-500">Erreur : {String(error)}</p>;

  

  return (
    <>
      {authorContent.map((info) => (
        <div className="col-lg-8" key="author-content">
          <div
            className="author-content"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="content-header">
              <h4 style={{fontWeight:'bold'}}>Biographie</h4>
            </div>
            <div className="content-body">
              {
              info.biographie.split('\n')
              .map((paragraph,index) => (
                paragraph.trim() && <p key={`${info.id}-${index}`}>{paragraph}</p>
              ))
                }
              <div className="expertise-areas">
                <h4 style={{fontWeight:'bold'}}>Mes compétences</h4>
                <div className="tags">
                  {info.competences.map((comp) => (
                    <span key={comp.id} style={{textTransform:'uppercase'}}>{comp.nom_competence}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
