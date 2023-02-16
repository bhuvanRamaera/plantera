import React from 'react'

const SpicesInfo = () => {
    return (
        <div className="spices-info lg:mt-[28%] lg:mr-20">
            <h1 className='heading'>Why we are best ?</h1>
            <p className='para mt-10 lg:w-[95%]'>
                PlanetsEra Spices are enriched with the most authentic taste and enchanting aroma. Each step in the manufacturing process is responsibly supervised from picking out from the farms to delivering it to the stores, so that there is no compromise in the health of our consumers.
            </p>
            <div className='flex btn-container mt-10'>
                <button className='btn hand'>
                    Handpicked from the best <br /> farms
                </button>
                <button className='btn ml-5 hand'>
                    Grinded at lower temperatures
                </button>
            </div>
            <div className='flex btn-container mt-4'>
                <button className='btn hand'>
                    Hygienic manufacturing
                </button>
                <button className='btn ml-5 hand'>
                    Quality preservation
                </button>
            </div>

        </div>
    )
}

export default SpicesInfo