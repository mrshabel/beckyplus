function generateSlug(inputString) {
  return inputString
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

export const data = [
  {
    id: 1,
    name: 'Floral Sundress',
    description: 'A beautiful floral sundress for any occasion.',
    image:
      'https://images.unsplash.com/photo-1600356604781-e51d412b5723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
    category_id: 2,
    price: 49.99,
    color: 'Mixed',
    size: 'XL',
    slug: generateSlug('Floral Sundress'),
  },
  {
    id: 2,
    name: 'Leather Handbag',
    description: 'A stylish leather handbag to complement your outfit.',
    image:
      'https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBoYW5kYmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 3,
    price: 89.99,
    color: 'Brown',
    size: 'M',
    slug: generateSlug('Leather Handbag'),
  },
  {
    id: 3,
    name: 'High Heel Sandals',
    description: 'Elegant high heel sandals for a night out.',
    image:
      'https://images.unsplash.com/photo-1673377441728-23e984e70521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZEIFdEhpZ2glMjBIZWVsJTIwU2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 4,
    price: 79.99,
    color: 'Cyan',
    size: '43',
    slug: generateSlug('High Heel Sandals'),
  },
  {
    id: 4,
    name: 'Cotton T-shirt',
    description: 'Comfortable and versatile cotton t-shirt.',
    image:
      'https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxjb3R0b24lMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 1,
    price: 29.99,
    color: 'Cream',
    size: 'XL',
    slug: generateSlug('Cotton T-shirt'),
  },
  {
    id: 5,
    name: 'Denim Jeans',
    description: 'Classic denim jeans for everyday wear.',
    image:
      'https://images.unsplash.com/photo-1495298599282-d8920eb5009b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGRlbmltJTIwamVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 1,
    price: 39.99,
    color: 'Blue',
    size: 'All',
    slug: generateSlug('Denim Jeans'),
  },
  {
    id: 6,
    name: 'Statement Necklace',
    description: 'A stunning statement necklace to elevate your look.',
    image:
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHN0YXRlbWVudCUyMG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 3,
    price: 59.99,
    color: 'Neutral',
    size: '11',
    slug: generateSlug('Statement Necklace'),
  },
  {
    id: 7,
    name: 'Jordan 1',
    description: 'Casual and comfortable sneakers for a sporty look.',
    image:
      'https://images.unsplash.com/photo-1595909236612-9fd30b476365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9yZGFuJTIwMXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 4,
    price: 99.99,
    color: 'All',
    size: 'All',
    slug: generateSlug('Jordan 1'),
  },
  {
    id: 8,
    name: 'Eau de Parfum',
    description: 'A delightful fragrance to complete your ensemble.',
    image:
      'https://images.unsplash.com/photo-1693734464091-09942cdb6ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVhdSUyMGRlJTIwUGFyZnVtfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 3,
    price: 89.99,
    color: 'Neutral',
    size: 'S',
    slug: generateSlug('Eau de Parfum'),
  },
  {
    id: 9,
    name: 'Knitted Sweater',
    description: 'Cozy and stylish knitted sweater for chilly days.',
    image:
      'https://images.unsplash.com/photo-1578795024466-26f49b4d23f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fEtuaXR0ZWQlMjBTd2VhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 1,
    price: 54.99,
    color: 'Brown',
    size: 'L',
    slug: generateSlug('Knitted Sweater'),
  },
  {
    id: 10,
    name: 'Blouse',
    description: 'A classy blouse for a polished look.',
    image:
      'https://images.unsplash.com/photo-1604994183234-a311cba28474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 2,
    price: 44.99,
    color: 'All',
    size: 'All',
    slug: generateSlug('Blouse'),
  },
  {
    id: 11,
    name: 'Maxi Dress',
    description: 'An elegant maxi dress for special occasions.',
    image:
      'https://images.unsplash.com/photo-1574868843985-6caab2f9e64c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fE1heGklMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 2,
    price: 69.99,
    color: 'All',
    size: 'XXL',
    slug: generateSlug('Maxi Dress'),
  },
  {
    id: 12,
    name: 'Ankle Boots',
    description: 'Chic ankle boots for a trendy look.',
    image:
      'https://images.unsplash.com/photo-1571489555750-c932b569ef5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFua2xlJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 4,
    price: 79.99,
    color: 'Brown',
    size: '42',
    slug: generateSlug('Ankle Boots'),
  },
  {
    id: 13,
    name: 'Ripped Jeans',
    description: 'Fashionable ripped jeans for a bold style.',
    image:
      'https://images.unsplash.com/photo-1602741963388-69c9a8362fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHJpcHBlZCUyMGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 1,
    price: 49.99,
    color: 'Blue',
    size: 'All',
    slug: generateSlug('Ripped Jeans'),
  },
  {
    id: 14,
    name: 'Printed Scarf',
    description: 'A colorful printed scarf to accessorize.',
    image:
      'https://images.unsplash.com/photo-1600220348586-985707e70bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fFByaW50ZWQlMjBTY2FyZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    category_id: 3,
    price: 19.99,
    color: 'Mixed',
    size: 'XL',
    slug: generateSlug('Printed Scarf'),
  },
  {
    id: 15,
    name: 'Summer Hat',
    description: 'A stylish summer hat to shield from the sun.',
    image:
      'https://images.unsplash.com/photo-1622498159371-15d14f8acdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    category_id: 3,
    price: 24.99,
    color: 'Mixed',
    size: 'All',
    slug: generateSlug('Summer Hat'),
  },
];
