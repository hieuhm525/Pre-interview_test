'use client';

import { useState } from 'react';
import { FaHeart, FaCommentDots, FaShare } from 'react-icons/fa';
import styles from './ActionButtons.module.css';

interface ActionButtonProps {
  likesCount: number;
}

export default function ActionButtons({ likesCount }: ActionButtonProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLike, setCurrentLiked] = useState(likesCount);

  const handleLike = () => {
    if (isLiked) {
      setCurrentLiked(currentLike - 1);
      setIsLiked(false);
    } else {
      setCurrentLiked(currentLike + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className={styles.actions}>
      <div className={styles.action}>
        <FaHeart className={styles.icon} onClick={handleLike} style={{ color: isLiked ? 'red' : 'white' }} />
        <span>{currentLike}</span>
      </div>
      <div className={styles.action}>
        <FaCommentDots className={styles.icon} />
        <span>0</span>
      </div>
      <div className={styles.action}>
        <FaShare className={styles.icon} />
        <span>0</span>
      </div>
    </div>
  );
}
