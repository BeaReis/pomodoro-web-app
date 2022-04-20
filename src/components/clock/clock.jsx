import React, { useEffect, useState, useCallback } from "react";
import {
  ClockContainer,
  ClockFrame,
  InnerContainer,
  PauseButton,
  PlayButton,
  TimeFrame,
} from "./clock.style";

function Clock(props) {
  const [activeMode, setActiveMode] = useState("pomodoro");
  const [pomodoro, setPomodoro] = useState({ minutes: 25, seconds: 0 });
  const [short, setShort] = useState({ minutes: 5, seconds: 0 });
  const [long, setLong] = useState({ minutes: 15, seconds: 0 });
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const [active, setActive] = useState(false);
  let interval;

  /* Countdown timer triggered by changes in 'seconds' state */
  useEffect(() => {
    
    if (active === true) {
      interval = setInterval(() => {
        // 'clearInterval' cancels a timed , repeating action established by setInterval
        clearInterval(interval);
        console.log("Iniciei um intervalo");  
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
            setSeconds(seconds - 1);
        }
      }, 1000);

    } else {
      clearInterval(interval);
    }
    // Pesquisar sobre return no useEffect
    return () => clearInterval(interval);
  }, [active, seconds]);

  /* Whenever mode changes... */
  useEffect(() => {
    // Pause timer when mode is switched
    setActive(false);

    switch (activeMode) {
      case "long":
        setLong({ minutes, seconds });
        break;
      case "short":
        setShort({ minutes, seconds });
        break;
      case "pomodoro":
        setPomodoro({ minutes, seconds });
        break;
      default:
        console.log("Bomba");
    }

    switch (props.mode) {
      case "long":
        setMinutes(long.minutes);
        setSeconds(long.seconds);
        break;
      case "short":
        setMinutes(short.minutes);
        setSeconds(short.seconds);
        break;
      case "pomodoro":
        setMinutes(pomodoro.minutes);
        setSeconds(pomodoro.seconds);
        break;
      default:
        console.log("É isso?");
    }
    setActiveMode(props.mode);
  }, [props.mode]);

  /* Whenever props.{mode} changes */
  // useEffect(() => {

  //   switch(props.mode) {
  //     case "long": {

  //     }
  //     case "short": {

  //     }
  //     case "pomodoro": {

  //     }
  //     default: console.log(props.mode);
  //   }

  // }, [props.pomodoro, props.shortBreak, props.longBreak]);

  function handlePause() {
    setActive(false);
  }

  function handlePlay() {
    // Enables setInterval
    setActive(true);
    /* To start countdown: if seconds > 0 countdown has already started, 
    else triggers useEffect by changing state of seconds. */
    if (seconds > 0) {
      // To resume countdown
      if (active === false) {
        setSeconds(seconds - 1);
      }
    } else {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
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
