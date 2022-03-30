import React, { useState, useEffect } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";

import { googleSignIn, login } from "../../redux/features/authSlice";
import { AiFillGoogleCircle } from "react-icons/ai";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //prod -> 775610265870-nn901bhdcnmviubs1dj3ufdn1jul042g.apps.googleusercontent.com

  const devEnv = process.env.NODE_ENV !== "production";
  const clientId = devEnv
    ? "775610265870-jc47veiba3ebfc968kn0f6bmumdrs32l.apps.googleusercontent.com"
    : "775610265870-nn901bhdcnmviubs1dj3ufdn1jul042g.apps.googleusercontent.com";

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    dispatch(googleSignIn({ result, navigate, toast }));
  };
  const googleFailure = (error) => {
    toast.error(error);
  };

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h3>Connexion</h3>
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
            <button
              type="submit"
              style={{ width: "100%" }}
              disabled={loading ? true : false}
            >
              Se connecter
            </button>
          </div>
          <div>
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  style={{ width: "100%", background: "red", color: "#fff" }}
                  color="danger"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiFillGoogleCircle className="me-2" fab icon="google" />{" "}
                  Google Sign In
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
          <div>
            <Link to="/register" style={{ fontSize: "12px" }}>
              <p>Pas de compte ? S'inscrire</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
