import React, { useState, useEffect } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { register } from "../../redux/features/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h3>Inscription</h3>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={firstName}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={lastName}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmation du mot de passe"
              value={confirmPassword}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              style={{ width: "100%" }}
              disabled={loading ? true : false}
            >
              S'inscrire
            </button>
          </div>

          <div>
            <Link to="/login" style={{ fontSize: "12px" }}>
              Déjà un compte ? Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
