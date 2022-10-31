import useGetData from '@hooks/useGetData';
import { useRouter } from 'next/router';

export default function Detail() {
  const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=3';
  const router = useRouter();
  const id = router.query.id;
  const products = useGetData(API);
  console.log(products)
  let productSelect = products.find((el) => el.id === id);
  console.log(productSelect);
  return (
    <>
      <h1>Detail soy el detalle </h1>
      <div></div>
    </>
  );
}
