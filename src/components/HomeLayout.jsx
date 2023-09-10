import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function HomeLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 shadow-sm">
        <Navbar />
      </header>
      <main className="pt-20 sm:mx-6 md:mx-16">
        <Outlet />
      </main>
      <footer className="sm:mx-6 md:mx-16">
        <Footer />
      </footer>
    </>
  );
}
