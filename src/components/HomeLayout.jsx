import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function HomeLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 shadow-sm z-[999]">
        <Navbar />
      </header>
      <main className="pt-20 mx-4 sm:mx-6 md:mx-16">
        <Outlet />
      </main>
      <footer className="mx-4 sm:mx-6 md:mx-16 mt-4">
        <Footer />
      </footer>
    </>
  );
}
