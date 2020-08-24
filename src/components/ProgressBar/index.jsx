import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import Styled from './styled';
dayjs.extend(duration);

export default function ProgressBar({ duration, curTime, setClickedTime }) {
  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration = 0) {
    const dur = dayjs.duration(duration, 'seconds');
    return `${dur.minutes()}:${dur.seconds()}`;
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    setClickedTime(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      setClickedTime(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }

  return (
    <Styled>
      <span className='bar__time'>{formatDuration(curTime)}</span>
      <div
        className='bar__progress'
        style={{
          background: `linear-gradient(to right, #B7C0CE ${curPercentage}%, #028BE6 0)`,
        }}
        onMouseDown={handleTimeDrag}>
        <span
          className='bar__progress__knob'
          style={{ left: `${curPercentage - 1}%` }}
        />
      </div>
      <span className='bar__time'>{formatDuration(duration)}</span>
    </Styled>
  );
}
