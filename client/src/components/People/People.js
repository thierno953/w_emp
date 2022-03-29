import React, { useState } from "react";
import styled from "styled-components";
import PeopleData from "../../api/PeopleData";
import { InnerLayout } from "../../Layouts";
import Title from "../sub_page/Title";
import PeopleInfo from "./PeopleInfo";


function People() {
  const [items, setItems] = useState(PeopleData);

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"A propos de jobs"}
            para={
              "Les services les plus populaires"
            }
          />
        </div>
        <div className="cards-con">
          {items.map((item) => {
            return <PeopleInfo key={item.id} item={item} setItems={setItems} />;
          })}
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
}

const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  .cards-con {
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`;
export default People;
