import React, { useState, useEffect } from "react";
import "./style.css";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPerson, updatePerson } from "../../redux/features/personSlice";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";
/*eslint-disable*/

const initialState = {
  email: "",
  address: "",
  phone: "",
  title: "",
  description: "",
};

const AddEditPerson = () => {
  const [personData, setPersonData] = useState(initialState);
  const { error, loading, userPersons } = useSelector((state) => ({
    ...state.person,
  }));
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, address, phone, title, description } = personData;
  const { id } = useParams();

  // update
  useEffect(() => {
    if (id) {
      const singlePerson = userPersons.find((tour) => tour._id === id);
      console.log(singlePerson);
      setPersonData({ ...singlePerson });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && address && phone && title && description) {
      const updatedPersonData = { ...personData, name: user?.result?.name };
      if (!id) {
        dispatch(createPerson({ updatedPersonData, navigate, toast }));
      } else {
        dispatch(updatePerson({ id, updatedPersonData, toast, navigate }));
      }
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPersonData({ ...personData, [name]: value });
  };

  const handleClear = () => {
    setPersonData({
      email: "",
      address: "",
      phone: "",
      title: "",
      description: "",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="add_flex">
        <Sidebar />
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h3>{id ? "Update" : "Add"}</h3>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={onInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={onInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={onInputChange}
                required
              />
            </div>
            <textarea
              name="description"
              value={description}
              onChange={onInputChange}
              placeholder="Message"
              cols="20"
              rows="6"
              style={{ width: "100%" }}
            ></textarea>
            <div>
              <FileBase
                type="file"
                placeholder="File"
                value={title}
                onDone={({ base64 }) =>
                  setPersonData({ ...personData, imageFile: base64 })
                }
                required
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{ width: "100%" }}
                disabled={loading ? true : false}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditPerson;
