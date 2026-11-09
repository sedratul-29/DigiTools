
const StatsSection = () => {
    return (
        <div className='flex items-center px-4 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] lg:px-[200px] lg:py-[60px]'>

            <div className='text-white px-5 lg:px-[124.33px]'>
                <h1 className=' font-bold text-base lg:font-extrabold lg:text-6xl lg:mb-3'>50K+</h1>
                <p className='font-normal text-[10px] lg:font-medium opacity-80 lg:text-xl '>Active Users</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className='text-white px-5 lg:px-[124.33px]'>
                <h1 className='font-bold text-base lg:font-extrabold lg:text-6xl lg:mb-3'>200+</h1>
                <p className='font-normal text-[10px] lg:font-medium opacity-80 lg:text-xl'>Premium Tools</p>
            </div>
            <div className="divider  divider-horizontal"></div>
            <div className='text-white px-5 lg:px-[124.33px]'>
                <h1 className='font-bold text-base lg:font-extrabold lg:text-6xl lg:mb-3'>4.9</h1>
                <p className='font-normal text-[10px] lg:font-medium opacity-80 lg:text-xl lg:text-center'>Rating</p>
            </div>

        </div>
    );
};

export default StatsSection;