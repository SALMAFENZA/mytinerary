import React, { useEffect, useState } from "react";
import '../Styles/reaction.css'
import {
  useDeleteReactionMutation,
  useAddReactionMutation,
  useGetReactionMutation,
} from "../redux/reducers/reactions";

export default function Reactions(props) {
  let { itineraryId } = props;
  let userId = "";
  let [reactions, setReactions] = useState();
  let [addReactionRedux] = useAddReactionMutation();
  let [delReactionRedux] = useDeleteReactionMutation();
  let [getReactionRedux] = useGetReactionMutation();

  useEffect(() => {
    getReactionRedux({ itineraryId, userId }).then((e) => {
      setReactions(e.data.response);
      console.log(e.data.response);
    });
  }, []);

  return (
    <div className="reaction-container">
      {reactions?.map((e) => {
        return (
          <div className="reaction-container" key={e.name}>
            <img className="reaction-btn" id={e._id} src={e.iconBack}></img>
          </div>
        );
      })}
    </div>
  );
}
