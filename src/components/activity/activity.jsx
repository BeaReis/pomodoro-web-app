import React, { useState } from "react";
import { AddButton, Category, Description, Wrapper } from "./activity.style";

function Activity(props) {
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");

  const handleCategoryOnChange = (event) => {
    let value = event.target.value;
    setCategory(value);
  }

  const handleCategoryOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault;
      props.setActivity(activity);
      props.setCategory(category);
    }
  }

  const handleDescriptionOnChange = (event) => {
    let value = event.target.value;
    setActivity(value);
  }

  const handleDescriptionOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault;
      props.setActivity(activity);
      props.setCategory(category);
    }
  }

  const handleAddButtonOnClick = () => {
    props.setActivity(activity);
    props.setCategory(category);
  }

  return (
    <>
      <Wrapper>
        <Category
          maxLength={25}
          placeholder="Add category..."
          value={category}
          onChange={handleCategoryOnChange}
          onKeyDown={handleCategoryOnKeyDown}
        />
        <Description
          maxLength={35}
          placeholder="Add activity..."
          value={activity}
          onChange={handleDescriptionOnChange}
          onKeyDown={handleDescriptionOnKeyDown}
        />
        <AddButton
          onClick={handleAddButtonOnClick}
        >
          +
        </AddButton>
      </Wrapper>
    </>
  );
}

export default Activity;
