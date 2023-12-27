import React from 'react';
import './ProductDisplay.css';
import { productdatadisplay } from '../Database/ProductDisplayData';
import { useState } from 'react';

const ProductDisplay = () => {
    const [productdata , setProductdata]=useState(productdatadisplay)

    return (
        <div className='productcontainer'>
            <div className='mx-w df jcsb'>
                {
                    productdata.map(val =>(
                        <div>
                            <div><img src={val.img}/></div>
                            <div><p>{val.Name}</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductDisplay;
