import AppContext from '@context/appcontext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/header';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
