import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import PeopleData from "../../api/PeopleData";
import { InnerLayout } from "../../Layouts";
import Slider from "../Slider/Slider";
import EmptyFile from "../EmptyFile";


const PeopleSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = PeopleData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <BlogSection>
      <section>
        {item ? (
          <InnerLayout>
            <div className="single_max">
              <div className="profile">
                <div className="profile_1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="image_prof"
                  />
                  <h6>{item.name}</h6>
                  <p>{item.fonction}</p>
                  <Link to="/addPerson">Contact</Link>
                </div>
                <div className="profile_info">
                  <h4>A propos de moi</h4>
                  <p>{item.desc}</p>
                  <div className="flex">
                    <p>{item.confirme}</p>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
              <Slider />
            </div>
          </InnerLayout>
        ) : (
          <EmptyFile/>
        )}
      </section>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  min-height: 20vh;
  .single_max {
    .profile {
      text-align: center;
      position: relative;
     
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      .profile_1 { 
      .image_prof {
        border-radius: 50%;
        margin-bottom: 1rem;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 4px solid hsl(210, 31%, 80%);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      h6 {
        font-weight: 700;
      }
      a {
        background: hsl(210, 22%, 49%);
        padding: 5px 15px;
        color: var(--color-white);
        border-radius: 7px;
        margin-top: 15px;
      }
    }
      .profile_info {
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      }
    }
    @media screen and (max-width: 792px) {
      .profile {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default PeopleSingle;
