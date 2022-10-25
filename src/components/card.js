import styles from '@styles/card.module.scss';

const Card = ({ title, price, img }) => {
  return (
    <li className={styles.card}>
      <figure>
        <img src={img} alt={title} height={228} width={228} />
      </figure>
      <div className={styles['body-card']}>
        <h2>{title}</h2>
        <p>$ {price}</p>
      </div>
    </li>
  );
};

export default Card;
