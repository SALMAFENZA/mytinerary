import { React, useEffect, useState } from "react";
import { useGetReactionByUserMutation } from "../redux/reducers/reactionsAPI";
import Reactions from "../Components/Reactions";

export default function MyReactions() {
  let itineraryId = "";
  let [userId, setUserId] = useState();
  let [token, setToken] = useState();
  let [reactions, setReaction] = useState();
  let [reactionProps, setReactionProps] = useState();
  let [getReactionRedux] = useGetReactionByUserMutation();


  useEffect(() => {
    getReactionRedux({ userId, token }).then((e) => {
      setReaction(e.data.response);
      console.log(e);
      console.log(e.data.response[0].userId.length);
    });

    setToken(JSON.parse(localStorage.getItem("token")));
    setUserId(JSON.parse(localStorage.getItem("user")).id);
  }, [token, userId ,reactionProps]);

  return (
    <>
      {reactions?.map((e) =>
      (
          <div className="card-details-city">
            <div className="title-city-more"> {e.itineraryId?.name} </div>
            <div className="cont-img-details">
              <img className="img-details-city" src={e.itineraryId?.photo[0]} alt={e.itineraryId?.name} />
            </div>
            <div className="cont-desciption-city">
              <div className="cont-text-city"> {e.description} </div>
              <Reactions itineraryId={e.itineraryId?._id} setReactionProps={setReactionProps} />
            </div>
            <div> {e.name}</div>
          </div>
        )
      )}
    </>
  );
}
