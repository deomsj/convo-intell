import { useState, useEffect } from 'react';

function useAudio() {
  const [duration, setDuration] = useState(null);
  const [curTime, setCurTime] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  const skip = (dir) => () => {
    if (dir === 'back') {
      const targetTime = curTime - 10;
      setClickedTime(Math.max(targetTime, 0.0));
    } else {
      const targetTime = curTime + 10;
      setClickedTime(Math.min(targetTime, duration));
    }
  };

  useEffect(() => {
    const audio = document.getElementById('audio');

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (!isNaN(clickedTime)) {
      if (clickedTime !== curTime) {
        audio.currentTime = clickedTime;
      }
      setClickedTime();
    }
    // effect cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [playing, clickedTime, curTime]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    skip,
  };
}

export default useAudio;

// modified from this source: https://codesandbox.io/s/5wwj02qy7k?file=/src/useAudioPlayer.js:0-1246
