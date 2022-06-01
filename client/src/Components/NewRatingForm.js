import React, { useEffect, useState } from 'react';

function NewRatingForm({addReview, setReviewData}) {
    const [rating, setRating] = useState();
    const [content, setContent] = useState();
    const [customer_id, setUser_Id] = useState();
    const [menu_item_id, setConcert_Id] = useState();
    const [formErrors, setFormErrors] = useState([]);


    const handleSubmit = async (e) => {
        // e.preventDefault();
    
        addReview({
          rating,
          content,
          customer_id,
          menu_item_id
        })
      };


    return (
        <>
      <h1 class="new-trip-form-title">Let Us Know How You Feel:</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label class="form-label" htmlFor="concert_id">
            Concert:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="concert_id"
            id="concert_id"
            value={menu_item_id}
            onChange={(e) => setConcert_Id(e.target.value)}
            >
            <option value= "1"></option>
            <option value= "2"></option>
            <option value= "3"></option>
            <option value= "4"></option>
            <option value= "5"></option>
            <option value= "6"></option>
            <option value= "7"></option>
            <option value= "8"></option>
            <option value= "9"></option>
            <option value= "10"></option>
            </select>
            
        </fieldset>
        <div>
        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="rating">
            Rating:
          </label>
          <br></br>
          <select
            type="dropdown"
            className="dropdown"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          <option value= "1">🔥</option>
          <option value= "2">🔥🔥</option>
          <option value= "3">🔥🔥🔥</option>
          <option value= "4">🔥🔥🔥🔥</option>
          <option value= "5">🔥🔥🔥🔥🔥</option>
          </select>
        </fieldset>

        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="content">
            Comment:
          </label>
          <input
            type="text"
            className="input"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
        </fieldset>

        <button
          class="com-btn"
          type="submit"
        >
          Submit Comment & Rating
        </button>
        </div>
      </form>
    </>
  );
    
}

export default NewRatingForm;