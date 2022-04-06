import React, { useState } from 'react'
import {
  SetupContainer,
  SetupInnerContainer,
  SetupInput,
  SetupTitle,
  TimeWrapper,
  Button,
  Wrapper
} from "./setup.style";

function Setup(props) {

  const [visibility, setVisibility] = useState(false);
  


  return (
    <>
      <Wrapper>
          <Button onClick={function (event){
            event.preventDefault();
            console.log(visibility);
            console.log(event);
            if(visibility === false) {
              setVisibility(true);
            } else {
              setVisibility(false);
            }
          }}/>
      </Wrapper>
      {visibility && (
      <SetupContainer >
        <SetupInnerContainer>
          <SetupTitle>Title:</SetupTitle>
          <SetupInput />
          <SetupTitle>Category:</SetupTitle>
          <SetupInput />
          <TimeWrapper>
          <SetupTitle timeSetup>Duration:</SetupTitle>
          <SetupInput />
          <SetupTitle timeSetup>Short Break:</SetupTitle>
          <SetupInput />
          <SetupTitle timeSetup>Long Break:</SetupTitle>
          <SetupInput />
          <SetupTitle timeSetup>Relay:</SetupTitle>
          <SetupInput />
          </TimeWrapper>
        </SetupInnerContainer>
      </SetupContainer>
      )}
    </>
  );
}

export default Setup;
