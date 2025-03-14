import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterBy from './FilterBy';
import SideBar from '../SideBar';



const ProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);


    let products = [
        {id: 0, name: 'Backbag', price: '$20', image: '../assets/new1.png', category: 'Men'},
        {id: 1, name: 'Headphone', price: '$30', image: '../assets/new2.png', category: 'Women'},
        {id: 1, name: 'Headphone', price: '$30', image: '../assets/new3.png', category: 'Women'},
        {id: 1, name: 'Headphone', price: '$30', image: '../assets/new4.png', category: 'Men'},
        {id: 1, name: 'Headphone', price: '$30', image: '../assets/new5.png', category: 'Men'},
    
      ]
      

      
      useEffect(() => {



          // if(selectedCategory) {
          //   products += `&category=${selectedCategory}`;
          // }
        },[])


    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    }

  return (
    <div className='pt-20 max-w-7xl mx-auto pb-12 px-4 sm:px-8'>
      <div>
        <FilterBy onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} products={products} />
      </div>
      <div className='flex justify-between gap-4'>
        {/* SideBar */}
        <div className='hidden sm:flex flex-col'>
          <SideBar />
        </div>
        {/* U need to populate the products here not in productcard, silly!! */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            products.map((product) => 
              <ProductCard  key={product}  product={product}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductPage