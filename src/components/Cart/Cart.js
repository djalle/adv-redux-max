import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/exports';

const Cart = (props) => {

  const barangDalamCart = useSelector( statum => statum.shoppingCart.pesenan );

  return (

    <div>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {barangDalamCart.map( barang => (              
            <CartItem
              key={barang.idBarang}
              item={{ 
                id: barang.idBarang,
                title: barang.namaBarang, 
                quantity: barang.qtyBarang, 
                total: barang.hargaTotalBarang, 
                price: barang.hargaBarang 
              }}
            />              
          ))}
        </ul>                   
      </Card>    
    </div>
    
  );
};

export default Cart;
