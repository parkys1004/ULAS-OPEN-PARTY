import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  videoId: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ videoId }) => {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isReady, setIsReady] = useState(false);

  const togglePlay = () => {
    if (muted) {
      setMuted(false);
      setPlaying(true);
    } else {
      setPlaying(!playing);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex items-center gap-2">
      <div className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none overflow-hidden">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing={playing}
          loop={true}
          volume={volume}
          muted={muted}
          width="100%"
          height="100%"
          onReady={() => setIsReady(true)}
          config={{
            playerVars: { showinfo: 0, playsinline: 1 }
          }}
        />
      </div>
      
      {isReady && (
        <button
          onClick={togglePlay}
          className="bg-white/10 hover:bg-pink-600 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg shadow-pink-500/30 transition-all duration-300 group animate-pulse hover:animate-none"
          aria-label={muted || !playing ? "Unmute Music" : "Pause Music"}
          title={muted || !playing ? "음악 켜기" : "음악 끄기"}
        >
          {muted || !playing ? (
            <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
          )}
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;
