'use client';
import {Player} from '@revideo/player-react';
import {useState} from 'react';

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleTimeUpdate(currentTime: number) {
    setCurrentTime(currentTime);
  }

  function handleDurationChange(duration: number) {
    setDuration(duration);
  }

  return (
    <>
      {currentTime.toFixed(2)} / {duration.toFixed(2)}
      <button onClick={() => setPlaying(prev => !prev)}>Play/Pause</button>
      <div className="flex max-w-6xl">
        <Player
          src="/project.js"
          playing={playing}
          currentTime={currentTime}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
          controls={true}
        />
      </div>
    </>
  );
}
