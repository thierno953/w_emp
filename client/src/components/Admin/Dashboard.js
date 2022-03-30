import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deletePerson,
  getPersonsByUser,
} from "../../redux/features/personSlice";
import { toast } from "react-toastify";
import { InnerLayout } from "../../Layouts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userPersons, loading } = useSelector((state) => ({
    ...state.person,
  }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getPersonsByUser(userId));
    }
  }, [dispatch, userId]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour ?")) {
      dispatch(deletePerson({ id, toast }));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <SectionJobsStyled>
      <InnerLayout>
        {userPersons.length === 0 && (
          <h3 style={{ fontSize: "18px", textAlign: "center" }}>
             Bienvenue: {user?.result?.name}
          </h3>
        )}

        {userPersons.length > 0 && (
          <>
            <h4 className="text-center" style={{ textAlign: "center" }}>
              Dashboard: {user?.result?.name}
            </h4>
          </>
        )}
        <div className="dash_flex">
          <Sidebar />
          <div className="cards-con">
            {userPersons &&
              userPersons.map((item) => {
                return (
                  <JobCardStyled key={item._id} item={item}>
                    <div className="card-con">
                      <div className="card-top job-info">
                        <img src={item.imageFile} alt="" />
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.title}</p>
                          <p>{item.phone}</p>
                          <p>{item.email}</p>
                          <p>{item.address}</p>
                        </div>
                      </div>
                      <p className="type">{item.description}</p>
                      <div className="job-info">
                        <button
                          className="btn"
                          onClick={() => handleDelete(item._id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <Link to={`/editPerson/${item._id}`} className="edit">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </div>
                  </JobCardStyled>
                );
              })}
          </div>
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
};

const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  .dash_flex {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.5rem;
    .cards-con {
      padding-top: 3.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 2rem;
      @media screen and (max-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }
    }
    @media screen and (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
`;

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
        background-color: red;
        color: var(--color-white);
        font-weight: 500;
        padding: 0.6rem 0.9rem;
        cursor: pointer;
        border-radius: 7px;
        text-align: center;
      }
      .edit {
        i {
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
  }
`;
export default Dashboard;
