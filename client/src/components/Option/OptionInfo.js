import React from "react";
import styled from "styled-components";

function OptionInfo({
  item: {
    id,
    title,
    desc,
    sub_title,
    info,
    sub_info,
    info_2,
    sub_info_2,
    info_3,
    sub_info_3,
    info_4,
    sub_info_4,
    info_5,
    sub_info_5,
  },
}) {
  return (
    <JobCardStyled>
      <div className="card-con">
        <div className="card-top">
          <div className="c-top-text">
            <h5>{title}</h5>
            <p>{desc}</p>
            <h6>{sub_title}</h6>
          </div>
        </div>
        <div className="gain">
          <h6>
            {info} <span>{sub_info}</span>
          </h6>
        </div>
        <div className="gain">
          <h6>
            {info_2} <span>{sub_info_2}</span>
          </h6>
        </div>
        <div className="gain">
          <h6>
            {info_3} <span>{sub_info_3}</span>
          </h6>
        </div>
        <div className="gain">
          <h6>
            {info_4} <span>{sub_info_4}</span>
          </h6>
        </div>
        <div className="gain">
          <h6>
            {info_5} <span>{sub_info_5}</span>
          </h6>
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
    padding: 2.3rem;
    .card-top {
      display: flex;
      align-items: center;

      .c-top-text {
        h5 {
          color: var(--color-dark);
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          &:hover {
            color: var(--color-primary);
          }
        }
        h6 {
          font-weight: 500;
          font-size: 14px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
        }
      }

      img {
        padding: 1rem;
        background-color: var(--color-neutral-3);
        border-radius: 7px;
        width: 80px;
        height: 80px;
      }
    }
    .gain {
      padding-bottom: 15px;
      h6 {
        font-weight: 500;
        font-size: 14px;
      }
      span {
        font-size: 14px;
        font-weight: 300;
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
    h6 {
      font-weight: 600;
    }
    p {
      font-size: 14px;
      font-weight: 300;
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
        font-weight: 500;
        padding: 0.6rem 0.9rem;
        cursor: pointer;
        border-radius: 7px;
        text-align: center;
      }
    }
  }
`;

export default OptionInfo;
