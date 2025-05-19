import React, { useState } from 'react';

const VideoWithCustomPlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      {isPlaying ? (
        <iframe
         
          src="https://www.youtube.com/embed/0BEuF9Rh8gk?si=a9xqqc6PwueANMeS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='lg:w-[1000px] lg:h-[500px] md:w-[1178px] md:h-[600px]  xl:w-[1178px] xl:h-[600px]'
        />
      ) : (
        <div className="relative">
          <img
            src="https://heat-wave.s3.eu-north-1.amazonaws.com/thumbnail.png"
            alt="Thumbnail"
            className="lg:w-[1000px] lg:h-[500px] md:w-[1178px] md:h-[600px]  xl:w-[1178px] xl:h-[600px]r"
          />
          <div
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            onClick={handlePlayClick}
          >
            <div className='flex justify-center items-center mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <img
                src="https://heat-wave.s3.eu-north-1.amazonaws.com/Play-Button.png"
                alt="Play Button"
                className="w-[16px] h-[18.9px] md:w-[41.202px] md:h-[48.591px]  xl:w-[41.202px] xl:h-[48.591px]  text-white"
              />
              <button className='text-white md:text-[60px] text-[20px] md:leading-[79.8px] leading-[26.6px] md:tracking-[-1.2px] tracking-[-0.4px] mx-4'>Watch Trailer</button>
            </div>
          </div>
        </div>
      )}

      {/* <div className='hidden md:absolute left-1/2 transform -translate-x-1/2  bottom-[10%] md:flex justify-center items-center text-center mx-auto '>
        <p className="text-white md:text-[16px] md:max-w-[706px] text-[10px] w-[410px] md:leading-[21.28px] leading-[13.3px] md:tracking-[-0.32px] md:px-0 px-10 tracking-[-0.2px] opacity-60">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
        </p>
      </div> */}
    </div>
  );
};

export default VideoWithCustomPlayButton;
