import Link from 'next/link';
import styles from '@styles/header.module.scss';
const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/all">All products</Link>
        </li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default Header;
