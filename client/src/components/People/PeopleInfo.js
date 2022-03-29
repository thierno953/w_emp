import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PeopleInfo({
  item: {
    id,
    image,
    name,
    address,
    fonction
  },
}) {
  return (
    <JobCardStyled>
      <div className="card-con">
        <div className="card-top job-info">
          <img src={image} alt="" />
          <div>
          <h4>{name}</h4>
          <p>{fonction}</p>
          </div>
        </div>
        <p className="type">{address}</p>
        <div className="job-info">
          <Link to={`/people/${id}`} className="btn">
            READ MORE <i className="fa fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>
    </JobCardStyled>
  );
}

const JobCardStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 7px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  .card-con {
    padding: 1rem;
    .card-top {
      display: flex;
      gap: 15px;
      align-items: center;
      padding-bottom: 1.2rem;
      .c-top-text {
        padding-left: 2rem;
        h5 {
          color: var(--color-dark);
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          font-size: 1.2rem;
          &:hover {
            color: var(--color-primary);
          }
        }
        p {
          font-size: 1rem;
          padding-top: 0.3rem;
        }
      }

      img {
        object-fit: cover;
        justify-self: center;
        max-width: 100%;
        width: 80px;
        height: 80px;
        border-radius: 7px;
      }
      h4 {
          font-size: 14px;
          font-weight: 700;
          padding-top: 15px;
      }
    }
    .c-title {
      font-size: 1.6rem;
      color: var(--color-dark);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      padding-bottom: 1rem;
      &:hover {
        color: var(--color-primary);
      }
    }

    .type {
      padding-bottom: 1rem;
      font-weight: 400;
    }
    .stack {
      padding-bottom: 1.5rem;
      font-size: 14px;
      font-weight: 300;
    }

    .job-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: var(--color-primary);
        font-size: 0.9rem;
        span {
          color: #656565;
          font-size: 1rem;
        }
      }

      .btn {
        background-color: var(--color-primary);
        color: var(--color-white);
        font-weight: 500;
        padding: 0.6rem 0.9rem;
        cursor: pointer;
        border-radius: 7px;
        text-align: center;
      }
    }
  }
`;

export default PeopleInfo;
