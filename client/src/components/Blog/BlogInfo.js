import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BlogInfo({
  item: {
    id,
    image,
    date,
    type,
    title,

  },
}) {
  return (
    <JobCardStyled>
      <div className="card-con">
        <div className="card-top">
          <img src={image} alt="" />
        </div>
        <p className="type">{type}</p>
        <p className="stack">{title}</p>
        <div className="job-info">
          <p>
            <span>{date}</span>
          </p>
          <Link to={`/blog/${id}`} className="btn">
            Lire <i className="fa fa-long-arrow-alt-right"></i>
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
        border-radius: 7px;
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
      font-weight: 600;
    }
    .stack {
      padding-bottom: 1.2rem;
      line-height: 2.2rem;
      font-size: 1rem;
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

export default BlogInfo;
