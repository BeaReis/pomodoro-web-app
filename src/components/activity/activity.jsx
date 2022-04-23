import React, { useState } from "react";
import { AddButton, Category, Description, Wrapper } from "./activity.style";

function Activity(props) {
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <>
      <Wrapper>
        <Category
          placeholder="Add category..."
          value={category}
          onChange={(event) => {
            const value = event.target.value;
            setCategory(value);
          }}
        />
        <Description
          placeholder="Add activity..."
          value={activity}
          onChange={(event) => {
            const value = event.target.value;
            setActivity(value);
          }}
        />
        <AddButton
          onClick={() => {
            props.setActivity(activity);
            props.setCategory(category);
          }}
        >
          +
        </AddButton>
      </Wrapper>
    </>
  );
}

export default Activity;
