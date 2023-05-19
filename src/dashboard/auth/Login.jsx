import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard/index");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main className=" mt-9">
        {" "}
        <section class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-xl">
          {" "}
          <div>
            <p class="text-2xl mb-5 text-center font-semibold"> Admin Login </p>
            <form>
              <div class="mb-4">
                <label
                  for="email-address"
                  class="block mb-2 text-sm text-gray-600"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  class="w-full px-3 py-2 text-gray-700 border rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="mb-4">
                <label for="password" class="block mb-2 text-sm text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  class="w-full px-3 py-2 text-gray-700 border rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                onClick={onLogin}
                class="w-full px-3 py-2 text-white bg-indigo-500 rounded-md"
              >
                Login
              </button>
            </form>
            <p className="text-sm text-gray-500  text-center mt-4">
              No account yet?
              <NavLink
                to="/signup"
                className="bg-green-500 text-white mx-1 p-1 rounded-md "
              >
                 Sign up
              </NavLink>
            </p>
          </div>
        </section>{" "}
      </main>
    </>
  );
};

export default Login;
