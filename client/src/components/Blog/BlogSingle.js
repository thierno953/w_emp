import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BlogData from "../../api/BlogData";
import { InnerLayout } from "../../Layouts";
import EmptyFile from "../EmptyFile";
;

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <BlogSection>
      <section>
        {item ? (
          <div className="container_image">
            <img className="image1" src={item.image} alt={item.title} />
            <InnerLayout>
              <div className="single_max">
              <div className="profile">
                <span>22/03/2022</span> 
                <span>Thierno</span>
               </div>
               <h2>{item.title}</h2>
              <h3>{item.desc_accord}</h3>
              <div className="">
              <h4>{item.besoin} <span>{item.desc_besoin}</span></h4>  
              <h4>{item.jobber} <span>{item.desc_jobber}</span></h4>  
              <h4>{item.CGU} <span>{item.desc_CGU}</span></h4>  
              <h4>{item.compte} <span>{item.desc_compte}</span></h4>  
              <h4>{item.contenu} <span>{item.desc_contenu}</span></h4>  
              <h4>{item.offre} <span>{item.desc_offre}</span></h4>  
              <h4>{item.plateforme} <span>{item.desc_Plateforme}</span></h4>  
              <h4>{item.posteur} <span>{item.desc_posteur}</span></h4>       
              <h4>{item.mission}  <span>{item.desc_mission}</span></h4>
              <p>{item.desc_profil}</p>
              <h4>{item.rémunération}  <span>{item.desc_rémunération}</span></h4>
              <h4>{item.services}  <span>{item.desc_Services}</span></h4>
              <h4>{item.Utilisateur}  <span>{item.desc_Utilisateur}</span></h4>
              </div>
         
              </div>
            </InnerLayout>
          </div>
        ) : (
          <EmptyFile />
        )}
      </section>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  min-height: 20vh;

  .container_image {
    .image1 {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      justify-self: center;

    }
    .single_max { 
      max-width: 800px;
      margin: auto;
    .profile {
      display: flex;
      align-item: center;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        font-size: 14px;
      }
    }
    h2 {
      text-align: center;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      text-align: left;
      margin-top: 5px;
    }
    h4 {
      font-size: 16px;
      font-weight: 600;
      margin-top: 10px;
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
    p {
      margin-top: 10px;
      font-size: 14px;
    }
    .image_single {
      width: 100%;
      height: 30vh;
      object-fit: cover;
      justify-self: center;
    }
    .desc_flex {
      margin-top: 20px;
      display: flex;
      algin-item: center;
      justify-content: center;
      gap: 20px
    }
  }
}



`;

export default BlogSingle;
