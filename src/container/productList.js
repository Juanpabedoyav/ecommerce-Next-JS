import Card from '@components/card';

import useGetData from '@hooks/useGetData';
import Categorias from '@components/categorias';
import styles from '@styles/homepage.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=15';
const ProductList = () => {
  const products = useGetData(API);
  return (
    <>
      <Categorias />
      <div className={styles['container-list']}>
        <h1>Most Popular</h1>
        <ul className={styles.list}>
          {products.map((product) => (
            <>
              <a key={product.id} href={`/detail/${product?.id}`}>
                <Card img={product.images[1]} title={product.title} price={product.price} />
              </a>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
