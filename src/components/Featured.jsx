import ProductCard from './ProductCard';
import image1 from '../images/featured1.jpg';
import image2 from '../images/featured2.jpg';
import image3 from '../images/featured3.jpg';
import image4 from '../images/featured4.jpg';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

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
    <section className="my-6">
      <h1 className="uppercase font-serif text-xl text-gray-700 text-center">
        Featured
      </h1>

      <main className="mt-5 grid gap-5 place-items-center grid-cols-2 md:grid-cols-4">
        {data.map((product, index) => (
          // <ProductCard
          //   key={index}
          //   image={product.image}
          //   title={product.title}
          //   price={product.price}
          // />
          <Image
            key={index}
            height="350px"
            width="500px"
            objectFit="center"
            src={product.image}
            alt={product.title}
          />
        ))}
      </main>
      <footer className="mt-6 flex justify-center">
        <Link
          className="h-12 px-6 capitalize font-serif font-normal tracking-wide py-2 bg-transparent border border-gray-700 flex items-center justify-center "
          to="/shop"
        >
          & more new
        </Link>
      </footer>
    </section>
  );
}
