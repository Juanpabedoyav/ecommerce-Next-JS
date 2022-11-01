import AppContext from '@context/appcontext';
import ProductList from '@container/productList';
import Header from '@components/header';
import useInitialState from '@hooks/useInitialState';

export default function Home() {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Header />
        <ProductList />
      </AppContext.Provider>
    </>
  );
}
