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
  const [minutes, setMinutes] = useState(25);
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
      if (props.mode === "long") {
        setMinutes(props.longBreak);
      } else if (props.mode === "short") {
        setMinutes(props.shortBreak);
      } else {
        setMinutes(props.pomodoro);
      }
    }, [props.mode, props.pomodoro, props.shortBreak, props.longBreak])

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
      <ClockContainer mode={props.mode}>
        <ClockFrame>
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
