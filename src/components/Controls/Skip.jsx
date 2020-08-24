import React from 'react';
import { MdRotateRight, MdRotateLeft } from 'react-icons/md';

export default function Skip({ skip, dir }) {
  return (
    <button className='skip' onClick={skip(dir)}>
      {dir === 'back' ? <MdRotateLeft /> : <MdRotateRight />}
    </button>
  );
}
