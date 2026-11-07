import React from 'react';

const StatsSection = () => {
    return (
        <div className='flex items-center px-[200px] py-[60px] bg-linear-to-r from-[#4F39F6] from-0% to-[#9514FA] to-100%'>

            <div className='text-white px-[124.33px]'>
                <h1 className='font-extrabold text-6xl mb-3'>50K+</h1>
                <p className='font-medium opacity-80 text-xl'>Active Users</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='text-white px-[124.33px]'>
                <h1 className='font-extrabold text-6xl mb-3'>200+</h1>
                <p className='font-medium opacity-80 text-xl'>Premium Tools</p>
            </div>
            <div className="divider  divider-horizontal"></div>
            <div className='text-white px-[124.33px]'>
                <h1 className='font-extrabold text-6xl mb-3'>4.9</h1>
                <p className='font-medium opacity-80 text-xl'>Rating</p>
            </div>

        </div>
    );
};

export default StatsSection;