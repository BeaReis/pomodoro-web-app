import {
  SetupContainer,
  SetupInnerContainer,
  SetupInput,
  SetupTitle,
  TimeWrapper,
} from "./style";

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
          <SetupTitle timeSetup>Category:</SetupTitle>
          <SetupInput />
          <SetupTitle timeSetup>Category:</SetupTitle>
          <SetupInput />
          <SetupTitle timeSetup>Category:</SetupTitle>
          <SetupInput />
          </TimeWrapper>
        </SetupInnerContainer>
      </SetupContainer>
    </>
  );
}

export default Setup;
