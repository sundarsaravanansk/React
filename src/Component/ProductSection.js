import React from 'react';
import { productsection } from '../Database/ProductionSectionData';
import './ProductSection.css';


const ProductSection = () => {

    return (
        <div className='productsection prodn'>
            <div className='mx-w df jcsb'>
                {
                   productsection.map(val =>(
                        <div>
                            <div><img src={val.img}/></div>
                           
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductSection;
