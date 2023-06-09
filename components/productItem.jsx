import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <span>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </span>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <span>
            <h2 className="text-lg">{product.name}</h2>
          </span>
        </Link>
      </div>
      <p className="mb-2">{product.brand}</p>
      <p className="">${product.price}</p>
      <button className="btn-primary" type="button">
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
