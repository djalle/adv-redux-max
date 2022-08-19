import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { aksiCart } from '../../store/cart-slicer';

const CartItem = (props) => {
  
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch()

  const addQty = () => {
    dispatch(aksiCart.addItem({
      id,
      nama: title,
      harga: price
    }))
  };

  const decrQty = () => {
    dispatch(aksiCart.removeItem({
      id
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrQty}>-</button>
          <button onClick={addQty}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
