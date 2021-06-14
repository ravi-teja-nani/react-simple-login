import React from 'react';
import {useParams} from 'react-router-dom'

function ProductType() {
 let {productType} = useParams();
 return <div>
    <h1>All type of {productType}</h1>
 </div>
}

export default ProductType;
