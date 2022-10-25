import useGetData from '@hooks/useGetData';

const Categorias = () => {
  const API = 'https://api.escuelajs.co/api/v1/categories';
  const categories = useGetData(API);
  return (
    <ul>
      <h3>Categories</h3>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default Categorias;
