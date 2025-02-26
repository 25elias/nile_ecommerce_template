import React from 'react';

const FilterBy = () => {
    return(
        <div className='flex items-center justify-between gap-4 pb-4'>
            <h3 className='text-xl text-gray-900 tracking-wide'>Filter Option</h3>
            <div className='hidden text-gray-900 font-[500] sm:flex sm:flex-1 pl-16'><p>Showing 1 - 12 of {'112'}</p></div>
            <div>
                <p>Sort by:
                    <select className='text-gray-900 font-[500] px-6 py-1 border border-gray-200 ml-4'>
                        <option>Default</option>
                    </select>
                </p>
            </div>


        </div>
    )
}

export default FilterBy;