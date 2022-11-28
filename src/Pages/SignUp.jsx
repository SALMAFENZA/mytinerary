import React, { useState } from "react";
import "../Styles/SignUp.css";
import { useNavigate } from "react-router-dom";
import { useCreateMutation } from "../redux/reducers/userAPI";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  let [createUser, { data, error }] = useCreateMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(e.target)
e.target.reset()

    confirmAlert({
      title: "Create user",
      message: "All the inf is ok?.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            let data = {
              name: name,
              lastName: lastName,
              photo: photo,
              age: age,
              email: email,
              password: password,
            };
            console.log(data);
            //// ----------- Redux for create a user. ------------- ////
            createUser(data).then((event) => {
              console.log(event);
              if (event.data) {
                alerts(event.data.message, event.data.success);
                event.data.success ? e.target.reset() : console.log("Hola")
              } else {
                alerts(event.error.data.message, event.error.data.success);
              }
            });
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
    // navigate("login");
  };

  function alerts(e, i) {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(resCreation, 2000);

      function resCreation() {
        if (i) {
          resolve();
          console.log(e);
        } else {
          reject(e);
          console.log(e);
        }
      }
    });
    console.log(e);
    toast.promise(resolveAfter3Sec, {
      pending: "Please wait 🕜",
      success: e + " please verify your email 👌",
      error: "Can not create 🤯 " + e,
    });
  }

  return (
    <>
      <div className="content-singup">
        <div className="content-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              name="surName"
              value={lastName}
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              name="country"
              value={age}
              type="text"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              name="mobileNumber"
              value={photo}
              type="text"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
            <input
              name="mail"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <input
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="bottom">
              <button className="botonRegister" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
