import React, { useEffect, useState } from "react";
import "../Styles/reaction.css";
import {
  useDeleteReactionMutation,
  useAddReactionMutation,
  useGetReactionMutation,
} from "../redux/reducers/reactions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function Reactions(props) {
  let userId = "";
  let { itineraryId } = props;
  let [reactions, setReactions] = useState();
  let [addReactionRedux] = useAddReactionMutation();
  let [delReactionRedux] = useDeleteReactionMutation();
  let [getReactionRedux] = useGetReactionMutation();
  let [userIdLogged, setUserIdLogged] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserIdLogged(JSON.parse(localStorage.getItem("user")).id);
    }

    getReactionRedux({ itineraryId, userId }).then((e) => {
      setReactions(e.data.response);
      console.log(e.data.response);
      console.log(e.data.response[0].userId.length);
    });
  }, []);

  function reactionAddDel(e) {
    let idReaction = e.target.id;
    console.log(idReaction);

    confirmAlert({
      title: "Reaction",
      message: "sure?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => console.log("hola"),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  }
  return (
    <div className="reaction-container">
      {reactions?.map((e) => {
        return (
          <div className="reaction-container" key={e.name}>
            <img
              onClick={(e) => reactionAddDel(e)}
              className="reaction-btn"
              id={e._id}
              src={e.iconBack}
            ></img>
            <div className="reaction-number">{e.userId?.length}</div>
          </div>
        );
      })}
    </div>
  );
}
