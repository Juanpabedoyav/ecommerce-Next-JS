import Link from 'next/link';
import Search from '@components/search';
import { useContext, useState } from 'react';
import styles from '@styles/header.module.scss';
import AppContext from '@context/appcontext';
const Header = () => {
  const { state, toggleOrder } = useContext(AppContext);

  console.log(state);
  console.log(toggleOrder);

  const [search, setSearch] = useState('');
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };
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
      <Search search={search} handleSearch={handleSearch} />
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
