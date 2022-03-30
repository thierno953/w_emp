import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import { googleSignIn, login } from "../../redux/features/authSlice";
import { AiFillGoogleCircle } from "react-icons/ai";
import { InnerLayout } from "../../Layouts";

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
    <SectionJobsStyled>
    <InnerLayout>
    <div className="right">
        <form onSubmit={handleSubmit} className="input-control">
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
              className="s-btn"
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
                  style={{ width: "100%", background: "var(--color-primary)", color: "#fff", marginTop: "3px" }}
                  className="s-btn"
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
        </InnerLayout>
    </SectionJobsStyled>
  );
};

const SectionJobsStyled = styled.section` 
.right {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: auto;
  .input-control {
    position: relative;
    font-weight: 500;
    width: 100%;
    h3 {
      text-align: center;
    }
    input, textarea {
      width: 100%;
      font-family: inherit;
      font-size: 14px;
      padding: 1.4rem 2rem;
      margin: 5px;
      border: 1px solid var(--color-primary);
      border-radius: 7px;
    }
    .s-btn {
      color: var(--color-white);
      font-size: 14px;
      background-color: #272a33;
      padding: 1.1rem 1rem;
      cursor: pointer;
      border-radius: 7px;
      width: 100%;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: var(--color-primary);
      }
    }
  }
}
`;

export default Login;
