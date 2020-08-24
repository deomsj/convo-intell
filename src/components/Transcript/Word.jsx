import React from 'react';
// { "startTime": "2.400s", "endTime": "2.800s", "word": "This" }

export default function Word({ curTime, setClickedTime, start, end, text }) {
  const isActive = curTime >= start && curTime <= end;
  return (
    <span
      className={isActive ? 'active' : ''}
      onClick={() => setClickedTime(start)}>
      {text}{' '}
    </span>
  );
}
