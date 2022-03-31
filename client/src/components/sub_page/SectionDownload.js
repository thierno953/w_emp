import React from "react";
import styled from "styled-components";
import business from "../../img/business.jpg";
import { Link } from "react-router-dom";
import { InnerLayout } from "../../Layouts";

function SectionDownload() {
  return (
    <SectionDownloadStyled>
      <div className="dl-overlay"></div>
      <InnerLayout>
        <div className="dl-con">
          <h2>Devenir Jobber</h2>
          <h3>
            Devenez jobber comme vous le <br />
            souhaitez
          </h3>
          <div className="store-btns">
            <div className="store-btn google">
              <Link to="/register">Je m'inscris</Link>
            </div>
            <div className="store-btn apple">
              <Link to="/service">Voir les renseignements</Link>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SectionDownloadStyled>
  );
}

const SectionDownloadStyled = styled.section`
  background: url(${business});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  .dl-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
  }

  .dl-con {
    position: relative;
    z-index: 7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h2 {
      font-size: 2rem;
      padding-top: 3rem;
    }
    h3 {
      font-size: 1.5rem;
      padding-top: 3rem;
    }
  }

  .store-btns {
    display: flex;
    padding-top: 2.5rem;
    .google,
    .apple {
      border-radius: 7px;
      cursor: pointer;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;;
      a {
        font-size: 14px;
      }
    }
    .apple {
      margin-left: 1rem;
    }
  }
`;

export default SectionDownload;
