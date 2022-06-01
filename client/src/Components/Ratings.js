import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import RatingsCard from "./RatingsCard";
import NewRatingForm from "./NewRatingForm";

function Ratings({commentData, setCommentData, addComment}) {
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();

    function deleteComment(id) {
        fetch(`/review/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setCommentData((commentData) =>
            commentData.filter((commentData) => commentData.id !== id)
            );
          }
        });
      }

return (
    <>
    <div>
      <NewRatingForm addComment={addComment} setCommentData={setCommentData} comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}/>
    </div>
    <div>
        {commentData.map((comment) => <RatingsCard comment={commentData} id={comment.id} content={comment.content} rating={comment.rating} username={comment.cusotmer.username} menu_item={comment.menu_item.name} deleteComment={deleteComment} />)}
    </div>
    </>
  );
}

export default Ratings;