import React from 'react';
import PlayPause from './PlayPause';
import Skip from './Skip';
import Styled from './styled';

export default function Controls({ playing, setPlaying, skip }) {
  return (
    <Styled>
      <audio id='audio'>
        <source src='./assets/audio.wav' type='audio/wav' />
        Your browser does not support the audio element.
      </audio>
      <div className='controls'>
        <Skip dir='back' skip={skip} />
        <PlayPause playing={playing} setPlaying={setPlaying} />
        <Skip dir='forward' skip={skip} />
      </div>
    </Styled>
  );
}
