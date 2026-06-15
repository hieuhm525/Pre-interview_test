'use client';

import { Video } from '@/data/videos';
import styles from './VideoCard.module.css';
import ActionButtons from './ActionButtons';
import { useEffect, useRef } from 'react';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoRule = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const videoCheck = new IntersectionObserver((videoList) => {
      const videoStatus = videoList[0];

      if (videoRef.current) {
        if (videoStatus.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, videoRule);

    if (videoRef.current) {
      videoCheck.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        videoCheck.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleClickPlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.video_container}>
        <video ref={videoRef} className={styles.video} src={video.videoUrl} onClick={handleClickPlayPause} loop playsInline muted></video>
        <div className={styles.info}>
          <h3>
            <b>{video.authorName}</b>
          </h3>
          <div className={styles.description}>{video.description}</div>
        </div>
        <ActionButtons likesCount={video.likesCount} />
      </div>
    </div>
  );
}
