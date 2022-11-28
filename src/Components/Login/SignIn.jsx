import React, { useState } from "react";
import "../../Styles/SignIn.css";
import { useLoginMutation } from "../../redux/reducers/userAPI";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [loginRedux] = useLoginMutation();
  const navigate = useNavigate();


  const submit = (e) => {
    e.preventDefault();

    
    confirmAlert({
      title: "Login",
      message: "Are you ready to log in?.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            let data = {              
              email: email,
              password: password,
            };
            console.log(data);
            //// ----------- Redux for login a user. ------------- ////
            loginRedux(data).then((event) => {
              console.log(event);
              if (event.data) {
                alerts(event.data.message, event.data.success);
                localStorage.setItem("token" , JSON.stringify(event.data.response.token))
                localStorage.setItem("user" , JSON.stringify(event.data.response.user))

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
    
  };
  function alerts(e, i) {
    const resolveAfter3Sec = new Promise((resolve, reject) => {
      setTimeout(resCreation, 2000);

      function resCreation() {
        if (i) {
          resolve();
          console.log(e);
          setTimeout(()=> navigate("/"), 5000)
        } else {
          reject(e);
          console.log(e);
        }
      }
    });
    console.log(e);
    toast.promise(resolveAfter3Sec, {
      pending: "Please wait 🕜",
      success: e + " enjoy 👌",
      error: "🤯" + e,
    });
  }
  return (
    <>
      <div className="sigin-body-cont">
        <div className="contenedor-form-signin">
          <div className="title-singin">
            <h2 className="singin-form">Log-In</h2>
          </div>

          <div className="cont-form-singin">
            <form className="form-signin">
              <input
                className="button-google"
                type="email"
                autoComplete="current-email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="button-google"
                type="password"
                required
                autoComplete="on"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>

          <div className="submit-singin">
            <button className="submit2-singin-google" onClick={submit}>
              Login
            </button>

            <button className="submit2-singin-google">Login with Google</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignInForm;
