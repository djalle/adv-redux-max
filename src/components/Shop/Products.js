import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCT_HALU = [
  {
    id: 1,
    nama: 'Kaos Kaki Organik',
    harga: 200,
    deskripsi: 'Kaos kaki fresh untuk jiwa fresh'
  },{
    id: 2,
    nama: 'Anting anti Julid',
    harga: 300,
    deskripsi: 'Biasa banget, ga akan dijulidin'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCT_HALU.map(item => {
          return(
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.nama}
              price={item.harga}
              description={item.deskripsi}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
