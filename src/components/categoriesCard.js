import styles from '@styles/categories.module.scss';

const CategoriesCard = ({ categories }) => {
  console.log(categories);
  return (
    <>
      {categories.map((category) => (
        <li className={styles['category-card']} key={category.id}>
          <strong>{category.name}</strong>
          <img src={category.image} />
        </li>
      ))}
    </>
  );
};
export default CategoriesCard;
