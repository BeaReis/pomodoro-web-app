import React, { useEffect, useState } from "react";
import {
  ClockContainer,
  ClockFrame,
  InnerContainer,
  PauseButton,
  PlayButton,
  TimeFrame,
  Title,
} from "./clock.style";

function Clock(props) {
  var min = 25;
  const [mode, setMode] = useState(props.mode);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const [active, setActive] = useState(false);

  /* Countdown timer triggered by changes in 'seconds' state */
    useEffect(() => {
      if(active === true) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            console.log("");
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    }, [seconds]);

    /* */
    useEffect(() => {
      if (mode === "Pomodoro") {
        setMinutes(props.pomodoro); 
      } else if (mode === "Short Break") {
        setMinutes(props.shortBreak);
      } else {
        setMinutes(props.longBreak);
      }
      
    }, [min])

  function handlePause() {
    // 'clearInterval' cancels a timed , repeating action established by setInterval
    clearInterval(seconds);
    setActive(false);
    console.log(active);
  }

  function handlePlay() {
    // Enables setInterval
    setActive(true);
    console.log(timerMinutes);
    /* To start countdown: if seconds > 0 countdown has already started, 
    else triggers useEffect by changing state of seconds. */
    if (seconds > 0) {
      // To resume countdown
      if (active === false) {
        setSeconds(seconds-1);
      }
    } else {
      setMinutes(minutes-1);
      setSeconds(59);
    }
    console.log(active);
  }
   
  return (
    <>
      <ClockContainer mode={mode}>
        <ClockFrame>
          <Title>Title</Title>
          <TimeFrame>
            {timerMinutes}
            <span>:</span>
            {timerSeconds}
          </TimeFrame>
          <InnerContainer play>
            <PauseButton onClick={handlePause} />
            <PlayButton onClick={handlePlay} />
          </InnerContainer>
        </ClockFrame>
      </ClockContainer>
    </>
  );
}

export default Clock;
