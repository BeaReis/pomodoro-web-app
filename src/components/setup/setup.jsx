import {
  SetupContainer,
  SetupInnerContainer,
  SetupInput,
  SetupTitle,
  TimeWrapper,
} from "./setup.style";

function Setup() {
  return (
    <>
      <SetupContainer>
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
    </>
  );
}

export default Setup;
