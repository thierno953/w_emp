import React from "react";
import { useState } from "react";
import styled from "styled-components";
import OptionData from "../../api/OptionData";
import { InnerLayout } from "../../Layouts";
import Title from "../sub_page/Title";
import OptionInfo from "./OptionInfo";


function Option() {
  const [items, setItems] = useState(OptionData);

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Options"}
            para={"La plateforme de jobbing pour particuliers"}
          />
        </div>
        <div className="cards-con">
          {items.map((item) => {
            return <OptionInfo key={item.id} item={item} setItems={setItems} />;
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
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 2rem;
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`;
export default Option;
