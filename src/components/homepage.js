import Card from '@components/card';
import useGetData from '@hooks/useGetData';
import Categorias from './categorias';
import styles from '@styles/homepage.module.scss';

const HomePage = () => {
  const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=15';
  const products = useGetData(API);
  console.log(products[0]?.id);
  return (
    <>
      <Categorias />
      <div className={styles['container-list']}>
        <h1>Most Popular</h1>
        <ul className={styles.list}>
          {products.map((product) => (
            <>
              <a key={product?.id} href={`/detail/${product?.id}`}>
                <Card img={product.images[1]} title={product.title} price={product.price} />
              </a>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
