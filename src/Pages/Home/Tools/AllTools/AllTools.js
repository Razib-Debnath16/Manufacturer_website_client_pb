import React from 'react';
import useTools from '../../../../hooks/useTools';
import ToolCard from '../ToolCard/ToolCard/ToolCard';

const AllTools = () => {
    const [tools] = useTools();

    return (

        <div id='tools'>
            <h2 className='text-center text-secondary text-3xl mb-6'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    tools.map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default AllTools;