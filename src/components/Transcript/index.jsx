import React from 'react';
import useTranscript from '../../hooks/useTranscript';
import TextBlock from './TextBlock';
import Styled from './styled';

export default function Transcript({ curTime, setClickedTime }) {
  const data = useTranscript();

  return (
    <Styled>
      {data &&
        data.map((words, statementIndex) => (
          <TextBlock
            key={statementIndex}
            words={words}
            curTime={curTime}
            setClickedTime={setClickedTime}
          />
        ))}
    </Styled>
  );
}
