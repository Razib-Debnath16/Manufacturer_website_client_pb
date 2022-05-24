import React, { useEffect, useState } from 'react';
import ToolCard from '../ToolCard/ToolCard/ToolCard';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (

        <div className='tools'>
            <h2 className='text-center text-secondary text-3xl'>Our Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    tools.map(tool => <ToolCard
                        key={tool.id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;