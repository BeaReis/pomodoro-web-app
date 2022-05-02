import React, { useEffect, useState } from "react";
import {
  ClockContainer,
  ClockFrame,
  InnerContainer,
  PauseButton,
  PlayButton,
  StopButton,
  TimeFrame,
} from "./clock.style";

/* This is the timer component, which:
  - Shows changes in time and style according to active mode;
  - Can Play, Pause and Stop */
function Clock(props) {
  //
  const [activeMode, setActiveMode] = useState("pomodoro");
  //
  const [pomodoro, setPomodoro] = useState({ minutes: 25, seconds: 0 });
  const [short, setShort] = useState({ minutes: 5, seconds: 0 });
  const [long, setLong] = useState({ minutes: 15, seconds: 0 });
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  // Controls countdown state (start/resume and pause)
  const [active, setActive] = useState(false);
  //

  /* Countdown timer triggered by changes in 'seconds' or 'active' state */
  useEffect(() => {
    if (active === true) {
      var interval = setInterval(() => {
        // 'clearInterval' cancels a timed, repeating action established by setInterval
        clearInterval(interval);
        
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            if (props.alarmState === true) {
              playSound();
            }
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active, seconds]);

  /* Whenever mode changes... */
  useEffect(() => {
    // Pause timer when mode is switched
    setActive(false);

    /* Uses 'activeMode' to "save" last set time for each mode to prevent time from 
    reseting on mode change. */
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
    }

    /* Uses props.mode to set minutes and seconds according to current mode. */
    switch (props.mode) {
      case "long":
        setMinutes(long.minutes);
        setSeconds(long.seconds);
        setActiveMode(props.mode);
        break;
      case "short":
        setMinutes(short.minutes);
        setSeconds(short.seconds);
        setActiveMode(props.mode);
        break;
      case "pomodoro":
        setMinutes(pomodoro.minutes);
        setSeconds(pomodoro.seconds);
        setActiveMode(props.mode);
        break;
      default:
    }
    setActiveMode(props.mode);
  }, [props.mode]);

  /* Whenever settings changes */
  useEffect(() => {
    setActive(false);
    /* Apply changes to each mode independent of active mode */
    setPomodoro({ minutes: props.pomodoro, seconds: 0 });
    setShort({ minutes: props.shortBreak, seconds: 0 });
    setLong({ minutes: props.longBreak, seconds: 0 });

    /* When the user change the settings, seconds will be set to 0 and minutes to users input. */
    switch (props.mode) {
      case "long":
        setMinutes(props.longBreak);
        setSeconds(0);
        break;
      case "short": {
        setMinutes(props.shortBreak);
        setSeconds(0);
        break;
      }
      case "pomodoro": {
        setMinutes(props.pomodoro);
        setSeconds(0);
        break;
      }
      default:
    }
  }, [props.pomodoro, props.shortBreak, props.longBreak]);

  function playSound() {
    const audio = new Audio("/alarm2.wav");
    audio.volume = props.volume;
    audio.play();
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
            <StopButton
              onClick={() => {
                setActive(false);
                switch (props.mode) {
                  case "long":
                    setMinutes(props.longBreak);
                    break;
                  case "short":
                    setMinutes(props.shortBreak);
                    break;
                  case "pomodoro":
                    setMinutes(props.pomodoro);
                    break;
                  default:
                }
                setSeconds(0); 
              }}
            />
            <PauseButton
              onClick={() => {
                // Changes timer active state to false and pauses the countdown.
                setActive(false);
              }}
            />
            <PlayButton
              onClick={() => {
                // Changes timer active state to true and starts the countdown.
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
              }}
            />
          </InnerContainer>
        </ClockFrame>
      </ClockContainer>
    </>
  );
}

export default Clock;
