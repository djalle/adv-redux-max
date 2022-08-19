import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products'; 
import { aksiUi } from './store/ui-slice';
import Notification from './components/UI/Notifications';

let isInitial = true;

function App() {

  const dispatch = useDispatch;
  const showingCart = useSelector( statum => statum.ui.showingCart);
  const cart = useSelector(statum => statum.shoppingCart);
  const notification = useSelector(statum => statum.ui.notification);

  useEffect(() => {

    const sendCartData = async () => {

      dispatch(
        aksiUi.showNotification({
      
          status: 'pending',
          title: 'Sending...',
          message: 'Lagi kirim data, yang sabar ya'
        
        })
      );
      
      const response = await fetch(
        'https://advredux-cart-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      ); // ini otomatis akan buat dan nyimpen data di 'cart.json'
      // 'PUT' beda sama 'POST'.
      // Kalau POST itu nambah list data. Kalau PUT itu overwrite data existing 

      if (!response.ok) {
        throw new Error('Amsyong! Gagal kirim data');
      };

      dispatch(
        aksiUi.showNotification({
      
          status: 'success',
          title: 'Tersend',
          message: 'Selamat ya, data anda terkirim sudah'
        
        })
      );

    };

    if(isInitial) {
      isInitial = false;
      return
    };

    sendCartData()
      // .catch((error) => {

      //   dispatch(
      //     aksiUi.showNotification({
      
      //       status: 'error',
      //       title: 'Error!',
      //       message: {error}
      //       // message: 'Mon maap, anda amsyong!'
        
      //     })
      //   );

      // });

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification 
          status={notification.status} 
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        { showingCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
    
  );
}

export default App;
