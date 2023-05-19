import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main className="mt-9" >
      {" "}
      <section class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-lg">
        {" "}
        <div>
          {" "}
          <div>
            {" "}
            <h1 class="text-2xl mb-4 text-center font-semibold">Create Account</h1>{" "}
            <form>
              {" "}
              <div class="mb-4">
                {" "}
                <label
                  for="email-address"
                  class="block mb-2 text-sm text-gray-600"
                >
                  {" "}
                  Email address{" "}
                </label>{" "}
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  class="w-full px-3 py-2 text-gray-700 border rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
                />{" "}
              </div>
              <div class="mb-4">
                <label for="password" class="block mb-2 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  class="w-full px-3 py-2  text-gray-700 border rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
                />
              </div>
              <button
                type="submit"
                onClick={onSubmit}
                class="w-full px-3 py-2 text-white bg-green-500  rounded-md"
              >
                Sign up
              </button>
            </form>
            <p class="text-sm text-gray-500 text-center mt-3">
              Already have an account?{" "}
              <NavLink to="/login" className=" text-white bg-indigo-500  rounded-lg p-1">
                {" "}
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
      </section>{" "}
    </main>
  );
};

export default SignUp;
