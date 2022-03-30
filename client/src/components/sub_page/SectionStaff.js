import React from "react";
import styled from "styled-components";
import StaffCard from "./StaffCard";
import Title from "./Title";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.png";
import avatar3 from "../../img/avatar3.png";
import avatar4 from "../../img/avatar4.png";
import star from "../../img/star.svg";
import star_half from "../../img/star_half.svg";
import { InnerLayout } from "../../Layouts";

function SectionStaff() {
  return (
    <SectionStaffStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"L'équipe "}
            para={"Autant de personnalités différentes, mais un noyau soudé avec une chose en commun."}
          />
        </div>
        <div className="staff-cards">
          <StaffCard
            img={avatar2}
            name={"Gustavo Mikalia"}
            tit={"Sylvain"}
            rating={star}
            rating_half={star_half}
            stack={"Co-fondateur"}
          />
          <StaffCard
            img={avatar4}
            name={"Sunil Patel"}
            tit={"Axel"}
            rating={star}
            rating_half={star}
            stack={"Marketing Manager"}
          />
          <StaffCard
            img={avatar1}
            name={"Huan Nguyen"}
            tit={"Marion"}
            rating={star}
            rating_half={star_half}
            stack={"Operations Manager"}
          />
          <StaffCard
            img={avatar3}
            name={"Gustavo Mikalia"}
            tit={"Ludo"}
            rating={star}
            rating_half={star}
            stack={"Senior Back-end Developer"}
          />
        </div>
      </InnerLayout>
    </SectionStaffStyled>
  );
}

const SectionStaffStyled = styled.section`
  .staff-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    padding-top: 3.5rem;
  }
`;

export default SectionStaff;
