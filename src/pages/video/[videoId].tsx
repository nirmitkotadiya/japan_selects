"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const videoUrls = [
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid1.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid2.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid3.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid4.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid5.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid6.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid7.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid8.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid9.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid10.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid11.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid12.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid13.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid14.mp4",
  "https://res.cloudinary.com/dhenxlgm5/video/upload/v1711530824/demo/vid15.mp4",
];

const VideoPage: React.FC = () => {
  const router = useRouter();
  const { videoId } = router.query;

  const [currentIndex, setCurrentIndex] = useState(Number(videoId) || 0);

  useEffect(() => {
    setCurrentIndex(Number(videoId) || 0);
  }, [videoId]);

  const playPreviousVideo = () => {
    const newIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
    setCurrentIndex(newIndex);
    router.push(`/video/${newIndex}`);
  };

  const playNextVideo = () => {
    const newIndex = (currentIndex + 1) % videoUrls.length;
    setCurrentIndex(newIndex);
    router.push(`/video/${newIndex}`);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "700px",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <video
            key={videoUrls[currentIndex]} // Add key to force re-rendering when video changes
            controls
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the video covers the entire container
            }}
          >
            <source src={videoUrls[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "68%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button className="text-3xl font-bold" onClick={playPreviousVideo}>
          &#8593;
        </button>
        <button className="text-3xl font-bold" onClick={playNextVideo}>
          &#8595;
        </button>
      </div>
    </div>
  );
};

export default VideoPage;
