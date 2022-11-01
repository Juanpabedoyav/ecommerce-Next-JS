import Card from '@components/card';
import Search from '@components/search';
import useGetData from '@hooks/useGetData';
import useSearch from '@hooks/useSearch';
import Categorias from '@components/categorias';
import styles from '@styles/homepage.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=15';
const ProductList = () => {
  const products = useGetData(API);
  const { search, handleSearch } = useSearch();

  const results = !search ? products : products.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase()));
  return (
    <>
      <Categorias />
      <div className={styles['container-list']}>
        <Search search={search} handleSearch={handleSearch} />

        <h1>Most Popular</h1>
        <ul className={styles.list}>
          <>
            {results.length > 0
              ? results.map((product) => (
                  <a key={product.id} href={`/detail/${product?.id}`}>
                    <Card img={product.images[1]} title={product.title} price={product.price} />
                  </a>
                ))
              : products.map((product) => (
                  <a key={product.id} href={`/detail/${product?.id}`}>
                    <Card img={product.images[1]} title={product.title} price={product.price} />
                  </a>
                ))}
          </>
        </ul>
      </div>
    </>
  );
};

export default ProductList;
