import Link from 'next/link';
import { useContext } from 'react';
import styles from '@styles/header.module.scss';
import AppContext from '@context/appcontext';
const Header = () => {
  const { state, toggleOrder } = useContext(AppContext);

  return (
    <nav className={styles.nav}>
      <div>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Categories</Link>
          </li>
          <li>
            <Link href="/">Trending</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Account</li>
          <li>shopping card</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
