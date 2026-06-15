import VideoCard from '@/components/VideoCard';
import { videoData } from '@/data/videos';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.feed_container}>
      {videoData.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
