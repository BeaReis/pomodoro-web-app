import React, { useState } from "react";
import { AddButton, Category, Description, Wrapper } from "./activity.style";

function Activity(props) {
  const [category, setCategory] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <>
      <Wrapper>
        <Category
          maxLength={30}
          placeholder="Add category..."
          value={category}
          onChange={(event) => {
            const value = event.target.value;
            setCategory(value);

          }}
          onKeyDown={(event) => {
            if(event.key === "Enter") {
              event.preventDefault;
              props.setActivity(activity);
              props.setCategory(category);
            }
          }}
        />
        <Description
          maxLength={40}
          placeholder="Add activity..."
          value={activity}
          onChange={(event) => {
            const value = event.target.value;
            setActivity(value);
          }}
          onKeyDown={(event) => {
            if(event.key === "Enter") {
              event.preventDefault;
              props.setActivity(activity);
              props.setCategory(category);
            }
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
