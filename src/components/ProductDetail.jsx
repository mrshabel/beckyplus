import {
  Box,
  Button,
  Divider,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { data } from '../data/data';
import { BiPackage } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { slug } = useParams();
  const { cart, dispatch } = useCart();
  const product = data.find(product => product.slug === slug);

  const existingProduct = cart.find(item => item.id === product.id);

  function handleCart() {
    if (existingProduct) {
      return console.log('already in cart');
    }
    return dispatch({ type: 'cart/add', payload: product });
  }
  return (
    <main className="w-full flex justify-center my-4">
      <section className="w-full md:w-[85%] lg:w-[60%] flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:h-[70vh] gap-x-10 gap-y-4 ">
        <Box
          className="w-full h-[90%]"
          as={motion.div}
          initial={{ opacity: 0, x: '-50%', filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: '0%', filter: 'blur(0)' }}
          transition="0.2s linear"
        >
          <Image
            className="w-full "
            rounded={'md'}
            src={product.image}
            alt={product.name}
            // width={'100%'}
            height={useBreakpointValue({
              base: '60vh',
              sm: '50vh',
              md: '100%',
            })}
            objectFit="cover"
          />
        </Box>
        <Box
          className="w-full h-full flex flex-col gap-2 md:gap-6 "
          as={motion.div}
          initial={{ opacity: 0, x: '50%' }}
          whileInView={{ opacity: 1, x: '0%' }}
          transition="0.2s linear"
        >
          <div className=" font-semibold flex flex-col gap-3 ">
            <p className="text-gray-900 text-3xl ">{product.name}</p>
            <p className=" text-red-500 text-xl ">&#x20B5; {product.price}</p>
          </div>
          <Divider />
          <p className="text-gray-800 text-sm ">{product.description}</p>
          <div>
            <div className="text-lg text-gray-700 mb-2 flex items-center gap-4">
              <span className="text-[11px] text-gray-900 uppercase">
                category:
              </span>
              <p>{product.category_id}</p>
            </div>
            <div className="text-lg text-gray-700 mb-2 flex items-center gap-4">
              <span className="text-[11px] text-gray-900 uppercase">
                color:
              </span>
              <p>{product.color}</p>
            </div>
            <div className="text-lg text-gray-700 mb-2 flex items-center gap-4">
              <span className="text-[11px] text-gray-900 uppercase">size:</span>
              <p>{product.size}</p>
            </div>
          </div>

          <Divider />

          <div className="text-gray-700 text-xs tracking-wider ">
            <p className="text-red-500">30% off original prices</p>
            <div className="flex py-1 items-center gap-2">
              <BiPackage />
              <p>Free shipping on all GH orders</p>
            </div>
          </div>

          {/* <div className="mx-auto mt-1 "> */}
          <Button
            onClick={handleCart}
            variant={'solid'}
            bg={useColorModeValue('black', 'gray.50')}
            color={useColorModeValue('gray.50', 'gray.900')}
            textTransform={'capitalize'}
            fontSize={'sm'}
            px={16}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Add to Bag
          </Button>
          {/* </div> */}
        </Box>
      </section>
    </main>
  );
}
