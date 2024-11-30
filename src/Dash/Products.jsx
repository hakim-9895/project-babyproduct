// import React, { useContext } from 'react'
import  { Productcontext } from './Productprovider'

// function Products() {
//   const  {product,loading}=useContext(Productcontext)
//   return (
    
//             <div>
//                 {product.map((p)=><div key={p.id}>
//                     <img
//                       src={p.url}
//                       alt={p.name}
//                       className="w-full h-48 object-cover rounded-t-md"/>
//                     <p>p.name</p>
//                 </div>)}
//             </div>
        
      
    
//   )
// }

// export default Products
// ProductsList.js
import React, { useContext } from "react";


function ProductsList() {
  const { product, loading } = useContext(Productcontext);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {product?.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg overflow-hidden bg-white transition hover:shadow-2xl"
        >
          {/* Product Image */}
          <img
            src={product.url}
            alt={product.name}
            className="h-min object-cover"
          />

          {/* Product Details */}
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
