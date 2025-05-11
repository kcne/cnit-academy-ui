import React from 'react';

interface VideoPlayerProps {
  vioUrl: string;
  controls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ vioUrl, controls = true }) => {
  return (
    <div className="video-player">
      <video className="w-full" src={vioUrl} controls={controls} />
    </div>
  );
};

export default VideoPlayer;