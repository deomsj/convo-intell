import React from 'react';
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md';
// MdRotateLeft;
export default function PlayPause({ playing, setPlaying }) {
  return (
    <button className='play-pause' onClick={() => setPlaying(!playing)}>
      {playing ? <MdPauseCircleFilled /> : <MdPlayCircleFilled />}
    </button>
  );
}
