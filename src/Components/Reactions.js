import React, { useEffect, useState } from "react";
import "../Styles/reaction.css";
import {
  useDeleteReactionMutation,
  useAddReactionMutation,
  useGetReactionMutation,
} from "../redux/reducers/reactionsAPI";
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
  let [token, setToken] = useState();
  let [idUser, setIdUser] = useState();
  let [change, setChange] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(JSON.parse(localStorage.getItem("token")));
      setIdUser(JSON.parse(localStorage.getItem("user")).id);
    }
    console.log(token);
    getReactionRedux({ itineraryId, userId }).then((e) => {
      setReactions(e.data.response);
      console.log(e.data.response);
      console.log(e.data.response[0].userId.length);
    });
  }, [change]);

  function addDelReaction(reaction) {    
    let { userId } = reaction;
    let id = reaction._id;
    let findUser = userId.some((e) => e._id === idUser);

    if (findUser) {
      console.log("Coincide");
      addReactionRedux({ id, token }).then((e) => {console.log(e.data.message); setChange(e.data.message)});
    } else {
      console.log("No coincide");
      addReactionRedux({ id, token }).then((e) => {console.log(e.data.message); setChange(e.data.message)});
    }
  }
  function reactionAddDel(e, o) {
    let idReaction = o.target.id;

    confirmAlert({
      title: "Reaction",
      message: "sure?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            addDelReaction(e);
          },
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
              onClick={(o) => reactionAddDel(e, o)}
              className="reaction-btn"
              id={e._id}
              src={e.userId.some((h) => h._id === idUser) ? e.icon : e.iconBack}
            ></img>
            <div className="reaction-number">{e.userId?.length}</div>
          </div>
        );
      })}
    </div>
  );
}
