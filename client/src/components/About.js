import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

function About() {
  return (
    <SectionAbout>
      <InnerLayout>
        <div className="about">
          <div className="about_flex">
            <h2>Mentions Légales</h2>
            <p>
              Ce site est édité par l’association Jeunesse Constructive,
              immatriculé au RNA, sous le numéro W953011516 OPISTON est un
              opérateur de plateforme en ligne qui propose un service de mise en
              relation d’Utilisateurs en vue de la conclusion d’un Accord
              relatif à des prestations de services.
            </p>
          </div>
        </div>
      </InnerLayout>
    </SectionAbout>
  );
}

const SectionAbout = styled.section`
  max-width: 1000px;
  margin: auto;
  min-height: 50vh;
  padding-top: 50px;
  .about {
    .about_flex {
      h2 {
        font-size: 22px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;

export default About;
