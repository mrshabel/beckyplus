import { Divider } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Popular from '../components/Popular';
import Featured from '../components/Featured';

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Divider className="my-8" />
      <Featured />
    </>
  );
}
