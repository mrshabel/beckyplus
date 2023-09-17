import { useState } from 'react';
import Menu from './Menu';

export default function ProductsHeader() {
  const [view, setView] = useState('All');
  const [sortBy, setSortBy] = useState('Name');

  console.log(view, sortBy);
  return (
    <section className="flex justify-between items-center ">
      <h2 className="">300 Products</h2>

      <div className="flex gap-6">
        <Menu
          title="View"
          items={['All', 'Dresses', 'Clothing', 'Accessories', 'Sneakers']}
          setMenu={setView}
        />
        <Menu
          title="Sort By"
          items={['Name', 'Price: High to Low', 'Price: Low to High']}
          setMenu={setSortBy}
        />
      </div>
    </section>
  );
}
