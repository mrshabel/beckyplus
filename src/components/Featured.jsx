import ProductCard from './ProductCard';
import image1 from '../images/featured1.jpg';
import image2 from '../images/featured2.jpg';
import image3 from '../images/featured3.jpg';
import image4 from '../images/featured4.jpg';

const data = [
  {
    title: 'Flowers on Sleeves Dress',
    price: '$120',
    image: image1,
  },
  {
    title: 'Cat-Eye Resin in Clear',
    price: '$55',
    image: image2,
  },
  {
    title: 'Notte Dat Dress',
    price: '$74',
    image: image3,
  },
  {
    title: 'Marigold fits',
    price: '$88',
    image: image4,
  },
];
export default function Featured() {
  return (
    <section className="mt-6">
      <h1 className="uppercase font-serif text-xl text-gray-700 text-center">
        Featured
      </h1>

      <main className="mt-5 grid gap-5 place-items-center grid-cols-2 md:grid-cols-4">
        {data.map((product, index) => (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            height="350px"
          />
        ))}
      </main>
    </section>
  );
}
