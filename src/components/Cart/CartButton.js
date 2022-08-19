import { useDispatch, useSelector } from 'react-redux/es/exports';

import classes from './CartButton.module.css';
import { aksiUi } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const jumlahBarangDalamCart = useSelector(statum => statum.shoppingCart.totalQty)

  const toggleCartHandler = () => {
    dispatch(aksiUi.toggle()) // ketika dieksekusi, dia akan return action object yang akan didispatch di sini
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{jumlahBarangDalamCart}</span>
    </button>
  );
};

export default CartButton;
