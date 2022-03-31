import React from "react";
import styled from "styled-components";
import hero from "../../img/hero.jpg";
import { Link } from "react-router-dom";
/*eslint-disable*/

const Header = () => {
  return (
    <>
      <NavStyled>
        <div className="header-content">
          <h1>
            Trouve un <span>service</span> deviens <br />
            jobber
          </h1>
          <p>Trouves ton service et rend service</p>

          <Link to="/people">De quel service avez vous besoin ?</Link>
        </div>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.header`
  height: 10vh;
  line-height: 10vh;
  min-height: 80vh;
  object-fit: cover;
  position: relative;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${hero}) no-repeat;

  .header-content {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;
    @media screen and (max-width: 1187px) {
      width: 80%;
   
    }
    h1 {
      color: var( --color-neutral-3);
      font-size: 6rem;
      span {
        font-size: 6rem;
        color: #1a4483;
        fill-opacity: 1;
      }
    }
      p {
        font-size: 18px;
        color: var( --color-neutral-3);
      }
      a {
        background: hsl(210, 22%, 49%);
        color: var(--color-white);
        padding: 12px;
        font-weight: 500;
        margin-bottom: 14px;
        border-radius: 7px;
        font-size: 13px;
        &:hover {
          background-color: var(--color-primary);
        }
      }
      @media screen and (max-width: 780px) {
        padding-top: 100px;
        font-size: 2rem;
        span {
          font-size: 3rem;
        }
        h1 {
          font-size: 3rem;
          span {
            font-size: 3rem;
    
          }
        }
        p {
          font-size: 14px;
        }
        a {
          font-size: 10px;
        }
      }
  

    .main-para {
      padding: 2rem;
      color: var(--color-white);
    }
`;

export default Header;
