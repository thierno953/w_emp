import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";
import CatBtn from "./CatBtn";
import Title from "./Title";

function SectionCategory() {
  return (
    <SectionCategoryStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Categories"}
            para={
              "Voir les propositions"
            }
          />
        </div>
        <div className="category-con">
          <CatBtn
            name={"100% tranquille : Prestataires vérifiés et évalués "}
          />
          <CatBtn
            name={"Budgets maitrisés : Prix définis à l'avance et comparés"}
          />
          <CatBtn
            name={" Satisfait ou refait : La garantie 100% Satisfaction"}
          />
          <CatBtn
            name={"Paiement sécurisé : Jobber réglé après le service fait "}
          />
        </div>
      </InnerLayout>
    </SectionCategoryStyled>
  );
}

const SectionCategoryStyled = styled.section`
  .category-con {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 20px;
    padding-top: 1rem;
    font-size: 16px;

    @media screen and (max-width: 822px) {
      grid-template-columns: 1fr;
      gap: 7px;
    }
  }
`;

export default SectionCategory;
