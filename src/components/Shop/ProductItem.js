import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { aksiCart } from '../../store/cart-slicer';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = ({ id, title, price, description } ) => {

  const dispatch = useDispatch();

  const masukinKeranjangHandler = () => {
    dispatch(aksiCart.addItem({
      id, // kalo nama key dan variabelnya sama, ga usah pake titik dua dan valuenya
      nama: title,
      harga: price
    }))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={masukinKeranjangHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
