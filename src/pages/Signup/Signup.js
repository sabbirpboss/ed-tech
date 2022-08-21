import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./Signup.css";
import auth from "../../firebase.init";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const location = useLocation();
  
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div className="w-50 mx-auto my-5 pt-5 pb-5 rounded-3 d-flex justify-content-center align-items-center border border-info border-1">
      <div>
        <h2 className="mt-3 mb-4 text-center"><span className="text-white">Sign Up</span>
        <caption className="d-flex fw-normal fs-6 justify-content-center border-bottom border-info">Create A New Account for Enrollment</caption>
        </h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              className="p-2 mb-3 rounded w-100"
              placeholder="Your Email"
              type="email"
              name="email"
              id="user-email"
              required
            />
          </div>
          <div className="input-group">
            <input
              className="p-2 mb-3 rounded w-100"
              placeholder="Set Password"
              type="password"
              name="password"
              id="user-password"
              required
            />
          </div>
          <div className="input-group">
            <input
              className="mt-1"
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label
              className={`ps-2 ${agree ? "" : "text-danger"}`}
              htmlFor="terms"
            >
              Accept Ed-Tech Terms and Conditions
            </label>
            <input
              disabled={!agree}
              className="form-submit w-75 mx-auto p-2 rounded border-0 fs-5 mb-2 mt-3"
              type="submit"
              value="Sign Up"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
        </form>
<div className="text-center d-flex justify-content-center">
<button
          className=" btn btn-outline-secondary border text-white rounded p-2 mb-4 mt-0"
          onClick={() => signInWithGoogle()}
        >
          Sign In With Google
        </button>
</div>

<p className="text-center text-info">
          Already Have An Account?{" "}
          <Link className="form-link text-decoration-none text-white" to="/login">
            <u>Login</u>
          </Link>
        </p>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    </div>
  );
};

export default SignUp;