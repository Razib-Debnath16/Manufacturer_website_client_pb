import React, { useEffect, useState } from 'react';
import useTools from '../../../hooks/useTools';
import Products from './Products';

const ManageProducts = () => {
    const [tools] = useTools();
    return (
        <div className='mt-12'>
            <h2 className='text-center text-secondary text-3xl'>All Tools</h2>
            <div className='w-96 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                {
                    tools.map(tool => <Products
                        key={tool._id}
                        tool={tool}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;