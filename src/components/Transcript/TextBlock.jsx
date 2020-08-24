import React from 'react';
import Word from './Word';

export default function TextBlock({ words, curTime, setClickedTime }) {
  const [start, end] = [words[0].start, words[words.length - 1].end];
  const isActive = curTime >= start && curTime <= end;

  return (
    <article className={isActive ? 'active' : ''}>
      {words.map((word) => (
        <Word
          key={`${word.start} - ${word.end}`}
          curTime={curTime}
          setClickedTime={setClickedTime}
          {...word}
        />
      ))}
    </article>
  );
}
