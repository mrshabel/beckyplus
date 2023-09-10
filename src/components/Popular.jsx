import ProductCard from './ProductCard';
import popularImage1 from '../images/popular1.jpg';
import popularImage2 from '../images/popular2.jpg';
export default function Popular() {
  return (
    <section className="mt-6">
      <header className="flex flex-col gap-1 items-center ">
        <h1 className="uppercase font-serif text-xl text-gray-700">
          Parks and recreation
        </h1>
        <h3 className="uppercase text-xs text-gray-500 underline pb-2">
          Shop new
        </h3>
      </header>
      <main className="mt-5 grid gap-3 place-items-center md:grid-cols-2">
        <ProductCard image={popularImage1} />
        <ProductCard image={popularImage2} />
      </main>
    </section>
  );
}
