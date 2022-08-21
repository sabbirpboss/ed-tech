import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userOne, errorOne] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user || userOne) {
    toast.success("Welcome To Ed-Tech");
  }

  if (error || errorOne) {
    errorElement = <p className="text-danger">{error?.message || errorOne?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    navigate("/");
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="w-50 mx-auto my-5 pt-5 pb-5 rounded-3 d-flex justify-content-center align-items-center border border-info border-1">
      <div>
      <h2 className="mt-3 mb-4 text-center"><span className="text-info">SignIn / LogIn</span>
        <caption className="d-flex fw-normal fs-6 justify-content-center border-bottom border-info">Welcome To Ed-Tech</caption>
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 input-group" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-3 input-group"
            controlId="formBasicPassword"
          >
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="info w-100 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <button
          className="w-100 btn btn-outline-secondary border text-white rounded p-2 my-4"
          onClick={() => signInWithGoogle()}
        >
          Sign In With Google
        </button>
        <p className="text-info text-center">
          If you are new to Here ? {" "}
          <Link
            className="form-link text-decoration-none text-white"
            to="/signUp"
            onClick={navigateRegister}
          >
            <u>Create An Account</u>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
