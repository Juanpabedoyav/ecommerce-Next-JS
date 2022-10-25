import HomePage from '@components/homepage';
import Header from '@components/header';
import styles from '@styles/Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}
