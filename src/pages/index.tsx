"use client"
import React from "react";
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

const Shorts: React.FC = () => {
  const router = useRouter();

  const handleVideoClick = (videoIndex: number) => {
    // Assuming you want to navigate to a page named `/video/[videoId]`, passing the index as the videoId
    router.push(`/video/${videoIndex}`);
  };

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">SHORTS</h2>
      <div className="video-container">
        {videoUrls.map((videoUrl, index) => (
          <div
            key={index}
            className="video-wrapper"
            onClick={() => handleVideoClick(index)}
          >
            <video autoPlay loop muted className="video">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      <style jsx>{`
        .video-container {
          display: flex;
          overflow-x: auto; /* Enable horizontal scrolling */
          scroll-snap-type: x mandatory; /* Snap scrolling to each video */
        }

        .video-wrapper {
          flex: 0 0 auto; /* Prevent videos from growing or shrinking */
          scroll-snap-align: start; /* Ensure each video starts at the beginning of the viewport */
          margin-right: 1rem; /* Add spacing between videos */
        }

        .video {
          width: 250px;
          height: 140px;
          object-fit: cover;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .video {
            width: 150px; /* Adjust video width for smaller screens */
            height: 100px; /* Adjust video height for smaller screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Shorts;
