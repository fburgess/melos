import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import RatingsCard from "./RatingsCard";
import NewRatingForm from "./NewRatingForm";

function Ratings({commentData, setCommentData, addReview}) {
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
      <NewRatingForm addReview={addReview} setCommentData={setCommentData} comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}/>
    </div>
    <div>
        {commentData.map((review) => <RatingsCard comment={commentData} id={review.id} username={review.customer.username} content={review.content} rating={review.rating}  menu_item={review.menu_item.name} deleteComment={deleteComment} />)}
    </div>
    </>
  );
}

export default Ratings;

// username={review.customer.name}