import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto md:-mt-50  ">
      {products.map(({ id, title, price, description, category, image }) => (
        <div>
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
