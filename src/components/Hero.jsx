import { Link } from 'react-router-dom';
import heroImage from '../images/herobanner.png';
import { Image } from '@chakra-ui/react';

export default function Hero() {
  return (
    <main className="bg-[#E0E0E0] h-[400px] md:h-[600px] flex items-center ">
      <section className="h-full w-[60%] md:w-[50%] block">
        <Image
          className="h-full w-full object-center"
          src={heroImage}
          alt="hero"
        />
      </section>
      <section className="mx-auto w-[50%]  ">
        <div className="flex flex-col justify-center text-center mr-3 md:mx-12 gap-2">
          <div className="">
            <h2 className="text-2xl md:text-4xl uppercase font-serif text-gray-900 tracking-wider ">
              Explore your
            </h2>
            <h2 className="text-2xl md:text-4xl uppercase font-serif text-gray-50 ">
              wardrobe
            </h2>
          </div>

          <p className="text-sm md:text-base text-zinc-900 tracking-widest">
            Shop our trendy fashion
          </p>
          <div className="mx-auto">
            <Link
              className="text-center h-10 px-3 md:px-8 w-fit bg-gray-900 text-white flex items-center justify-center mt-2 md:mt-4 tracking-wide text-sm capitalize"
              to="/"
            >
              Go to Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
