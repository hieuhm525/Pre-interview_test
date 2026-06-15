import styles from './Navbar.module.css';
import { FaHouse, FaRegUser } from 'react-icons/fa6';
import { MdOutlineExplore } from 'react-icons/md';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navItem}>
        <FaHouse className={styles.icon} />
        <span>Home</span>
      </button>
      <button className={styles.navItem}>
        <MdOutlineExplore className={styles.icon} />
        <span>Explore</span>
      </button>
      <button className={styles.navItem}>
        <FaRegUser className={styles.icon} />
        <span>Profile</span>
      </button>
    </nav>
  );
}
