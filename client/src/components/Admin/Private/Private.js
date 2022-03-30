import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  deletePerson,
  getPersons,
  setCurrentPage,
} from "../../../redux/features/personSlice";
import Sidebar from "../Sidebar";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import { InnerLayout } from "../../../Layouts";
import styled from "styled-components";
import Pagination from "./Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Private = () => {
  const { persons, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({ ...state.person })
  );
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();

  useEffect(() => {
    dispatch(getPersons(currentPage));
  }, [dispatch, currentPage]);

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
        <div className="dash_flex">
          <Sidebar />
          <div className="cards-con">
            {persons.length === 0 && location.pathname === "/" && (
              <p className="text-center mb-0" tag="h2">
                No persons Found
              </p>
            )}

            {persons.length === 0 && location.pathname !== "/" && (
              <p className="text-center mb-0" tag="h2">
                We couldn't find any matches for "{searchQuery}"
              </p>
            )}

            {persons &&
              persons.map((item) => {
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
                      </div>
                    </div>
                  </JobCardStyled>
                );
              })}

           <div className="page">
              {persons.length > 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          )}
              </div>
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
export default Private;
