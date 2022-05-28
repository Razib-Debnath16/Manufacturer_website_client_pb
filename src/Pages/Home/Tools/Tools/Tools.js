import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../../../hooks/useTools';
import ToolCard from '../ToolCard/ToolCard/ToolCard';

const Tools = () => {
    const [tools] = useTools();
    const navigate = useNavigate();
    const handleTools = () => {
        navigate('/allTools');
    }

    return (

        <div id='tools'>
            <h2 className='text-center text-secondary text-3xl my-6'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    tools.slice(0, 3).map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
            <p className='text-center'><button onClick={handleTools} className="btn btn-primary my-6">See All Tools</button></p>
        </div>
    );
};

export default Tools;