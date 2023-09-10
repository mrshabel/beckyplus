import { Text, Image, Box } from '@chakra-ui/react';
export default function ProductCard({ image, title, price, width, height }) {
  return (
    <Box>
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
          {price}
        </Text>
      </Box>
    </Box>
  );
}
