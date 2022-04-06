import styled from "styled-components";

export const InnerLayout = styled.div`
  padding: 3rem 0; 
  width: 70%;
  min-height: 30vh;
  margin: 0 auto;
  @media screen and (max-width: 1059px) {
    width: 80%;
  }
  @media screen and (max-width: 590px) {
    width: 90%;
  }
`;
