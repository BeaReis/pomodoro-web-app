import {
  ClockContainer,
  ClockFrame,
  InnerContainer,
  PauseButton,
  PlayButton,
  TimeFrame,
  Button,
  Title,
  TimerWrapper,
} from "./clock.style";

function Clock() {
  return (
    <>
      <ClockContainer>
        <ClockFrame>
            <Title>Title</Title>
            <TimeFrame>25:00</TimeFrame>
          <InnerContainer play>
            <PauseButton />
            <PlayButton />
          </InnerContainer>
          <InnerContainer>
          <Button setup/>
          <Button />
          </InnerContainer>
        </ClockFrame>
      </ClockContainer>
    </>
  );
}

export default Clock;
