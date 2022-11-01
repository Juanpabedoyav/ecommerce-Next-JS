import ProductList from '@container/productList';
import useGetData from '@hooks/useGetData';
import Head from 'next/head';

export default function Home() {
  const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=15';
  const products = useGetData(API);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <ProductList products={products} />
    </>
  );
}
