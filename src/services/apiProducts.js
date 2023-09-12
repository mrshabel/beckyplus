import supabase from './supabase';

export async function getProducts() {
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error('Products could not be loaded');
  }

  return products;
}

export async function getPaginatedProduct(start, end) {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .range(start, end);

  if (error) {
    throw new Error('Products could not be loaded');
  }

  return products;
}

export async function getCategoryProduct(id) {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', id);

  if (error) {
    throw new Error('Products could not be loaded');
  }

  return products;
}
