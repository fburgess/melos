import React, { useEffect, useState } from 'react';

function NewRatingForm({addReview, setReviewData}) {
    const [rating, setRating] = useState(1);
    const [content, setContent] = useState();
    const [customer_id, setUser_Id] = useState();
    const [menu_item_id, setMenuItemId] = useState(1);
    const [formErrors, setFormErrors] = useState([]);


    const handleSubmit = async (e) => {
      
    
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
            Dishes:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="menu_item_id"
            id="menu_item_id"
            value={menu_item_id}
            onChange={(e) => {
              console.log(e.target.value);
              setMenuItemId(e.target.value)}
            }
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
        <div>
        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="rating">
            Spice Level:
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
          <option value= "1">????</option>
          <option value= "2">????????</option>
          <option value= "3">????????????</option>
          <option value= "4">????????????????</option>
          <option value= "5">????????????????????</option>
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