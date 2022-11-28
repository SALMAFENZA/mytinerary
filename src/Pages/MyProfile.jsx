import React, { useState, useEffect } from "react";
import {
  useGetOneUserMutation,
  useEditUserMutation,
} from "../redux/reducers/userAPI";
import "../Styles/NewCity.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function MyProfile() {
  let [userId, setUserId] = useState("6384886e61f54855ac77fcc4");
  let [userInfo, setUserInfo] = useState();
  let [edit, setEdit] = useState(false);
  let [photo, setPhoto] = useState();
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [lastName, setLastName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  let [getOneUser] = useGetOneUserMutation();
  let [editUserRedux] = useEditUserMutation();

  useEffect(() => {
    getOneUser(userId).then((e) => setUserInfo(e.data.response));
  }, []);

  function editProfile() {
    let data = {
      name: name,
      age: age,
      lastName: lastName,
      email: email,
      password: password,
      photo: photo,
    };
    let id = userId;

    confirmAlert({
      title: "Edit profile",
      message: "Are you sure to want edit your profile?.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            //// ----------- Redux for edit a user. ------------- ////
            // editUserRedux({data , id }).then((e)=> alerts(e.data.message , e.data.success))
            editUserRedux({ data, id }).then((event) => {
              if (event.data) {
                alerts(event.data.message, event.data.success);
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
  }

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
      pending: "Rewriting the user ✍",
      success: e + " 👌",
      error: "Can not edit user 🤯 " + e,
    });
  }

  return edit ? (
    <>
      <ToastContainer />
      <div className="singin-form">
        <div className="titleProfile">MyProfile</div>
        <img
          className="img-details-city"
          src={userInfo?.photo}
          alt={userInfo?.name}
        />
        <div className="contentProfile">{userInfo?.name}</div>
        <div className="contentProfile">{userInfo?.lastName}</div>
        <div className="contentProfile">{userInfo?.age}</div>
        <div className="contentProfile">{userInfo?.email}</div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setEdit(false);
          }}
        >
          Edit my profile
        </button>
      </div>
    </>
  ) : (
    <>
      <ToastContainer />
      <div className="singin-form">
        <div className="titleProfile">MyProfile</div>
        <img
          className="img-details-city"
          src={userInfo?.photo}
          alt={userInfo?.name}
        />
        <form>
          <input
            defaultValue={userInfo?.photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="contentProfile"
          ></input>
          <input
            defaultValue={userInfo?.name}
            onChange={(e) => setName(e.target.value)}
            className="contentProfile"
          ></input>
          <input
            defaultValue={userInfo?.lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="contentProfile"
          ></input>
          <input
            defaultValue={userInfo?.age}
            onChange={(e) => setAge(e.target.value)}
            className="contentProfile"
          ></input>
          <input
            defaultValue={userInfo?.email}
            onChange={(e) => setEmail(e.target.value)}
            className="contentProfile"
          ></input>
          <input
          type="password"
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
            className="contentProfile"
          ></input>
<div className="contain-buttons">
          <button className="botonRegister"
            onClick={(e) => {
              e.preventDefault();
              editProfile();
            }}
          >
            Save Profile
          </button>
          <button className="botonRegister"
            onClick={(e) => {
              e.preventDefault();
              setEdit(true);
            }}
          >
            Go back
          </button>
          </div>
        </form>
      </div>
    </>
  );
}
