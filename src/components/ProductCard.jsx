import { Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function ProductCard({
  image,
  title,
  price,
  width,
  height,
  slug,
}) {
  return (
    <Box>
      <Link to={`/shop/${slug}`}>
        <Image
          height={height || '600px'}
          width={width || '500px'}
          objectFit="center"
          src={image}
          alt={title}
        />
        <Box className="mt-2 flex flex-col justify-center items-center w-full h-20">
          <Text
            color="gray.800"
            textAlign="center"
            fontWeight="light"
            fontSize="md"
          >
            {title}
          </Text>
          <Text color="gray.600" fontSize="lg">
            &#x20B5; {price}
          </Text>
        </Box>
      </Link>
    </Box>
  );
}
