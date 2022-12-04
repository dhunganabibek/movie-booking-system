import { Link, Typography } from "@mui/material";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      // User is signed out
      // ...
    }
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    login();
  };
  const email = watch("userName", false);
  const password = watch("password", false);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="email"
            placeholder="Your email"
            {...register("userName", {
              required: true,
              minLength: 3,
              maxLength: 80,
            })}
          />
        </div>
        {errors.userName && <p>Your user name is invalid</p>}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 3,
            })}
          />
        </div>
        {errors.password && errors.password.length > 8 && (
          <p>Password must be 8 characters</p>
        )}
        <input type="submit" />
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <h5 style={{ font: "Segoe UI", color: "#fff" }}>Need an Account? </h5>
          <Link href="/signup" underline="always" variant="body2">
            {"Register Here"}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
