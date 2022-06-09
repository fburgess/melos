import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function RatingsEditForm({ review = {}, updateReview }) {
  const [content, setContent] = useState(review.content);
  const [rating, setRating] = useState(review.rating);
  const [menu_item_id, setMenuItemId] = useState(review.menu_item_id);
  
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateReview(id, {
      content,
      rating,
      menu_item_id
    });
  };

//   useEffect(() => {
//     setContent(review.content);
//     setRating(review.rating);
//     setMenuItemId(review.menu_item_id);
//   }, [review])

  return (
    <>
    <h1 className="new-trip-form-title">Ain't Feeling The Same? Change Your Comment Below:</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label className="" htmlFor="concert_id">
            Concert:
            </label>
            <select
            type="dropdown"
            className="dropdown"
            name="menu_item_id"
            id="menu_item_id"
            value={review}
            onChange={(e) => setMenuItemId(e.target.value)}
            >
            <option value= "1">Jerk Chicken</option>
            <option value= "2">Jerk Pork</option>
            <option value= "3">Oxtail And Butter Bean</option>
            <option value= "4">Snapper Fish</option>
            <option value= "5">Stew Prok</option>
            <option value= "6">Fried Chicken</option>
            <option value= "7">Brown Stew Chicken</option>
            <option value= "8">Mac N Cheese</option>
            <option value= "9">Patty N Coco Bread</option>
            <option value= "10">Corn Bread</option>
            <option value= "11">Plantains</option>
            <option value= "12">Sweet Potato Pudding</option>
            <option value= "13">Beet Juice</option>
            <option value= "14">Carrot N Beet Juice</option>
            <option value= "15">Pineapple N Ginger Juice</option>
            <option value= "16">Cucumber Juice</option>
            <option value= "17">Sorrel</option>
            <option value= "18">Carrot Juice</option>
            <option value= "19">Bottled Water</option>
            </select>
        </fieldset>

        <fieldset class="newCommentFieldset">
          <label className="" htmlFor="rating">
            Spice Level:
          </label>
          
          <select
            type="dropdown"
            className="dropdown"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          <option value= "1">🌶</option>
          <option value= "2">🌶🌶</option>
          <option value= "3">🌶🌶🌶</option>
          <option value= "4">🌶🌶🌶🌶</option>
          <option value= "5">🌶🌶🌶🌶🌶</option>
          </select>
        </fieldset>

        <fieldset className="newCommentFieldset">
          <label className="" htmlFor="content">
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
          Update
        </button>
        
      </form>
    </>
  );
}

export default RatingsEditForm;