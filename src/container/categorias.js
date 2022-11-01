import CategoriesCard from '@components/categoriesCard';
import useGetData from '@hooks/useGetData';
import styles from '@styles/categories.module.scss';

const Categorias = () => {
  const API = 'https://api.escuelajs.co/api/v1/categories';
  const categories = useGetData(API);
  return (
    <>
      <h3>Categories</h3>
      <section className={styles['category-section']}>
        <ul>
          <CategoriesCard categories={categories} />
        </ul>
      </section>
    </>
  );
};

export default Categorias;
