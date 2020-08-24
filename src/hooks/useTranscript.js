import { useState, useEffect } from 'react';
import { get } from '../mockData';

export default function useTranscript(callId = 123456789) {
  const [data, setData] = useState(null);

  useEffect(() => {
    get(`/transcript?callId=${callId}`).then((response) => {
      setData(
        response.data.word_timings.map((block) =>
          block.map(({ word, startTime, endTime }) => ({
            text: word,
            start: parseFloat(startTime),
            end: parseFloat(endTime),
          })),
        ),
      );
    });
  }, [callId]);

  return data;
}
