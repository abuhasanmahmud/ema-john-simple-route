import React from 'react';
import useProducts from '../../useProduct/useProduct';

const OrderReview = () => {
    const [products,setProduct]=useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;