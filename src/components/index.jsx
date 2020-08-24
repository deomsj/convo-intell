import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import useAudio from '../hooks/useAudio';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import Transcript from './Transcript';

function App() {
  const audio = useAudio();
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Controls {...audio} />
        <ProgressBar {...audio} />
        <Transcript {...audio} />
      </div>
    </ThemeProvider>
  );
}

export default App;
