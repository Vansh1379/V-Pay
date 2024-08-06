import React from 'react'

const Balance = ({ value }) => {
    return (
        <div className='flex ml-4 mt-3 pl-[420px] items-center'>
            <div className='font-medium text-3xl '>
                Your Balance
            </div>
            <div className='font-semibold ml-2 text-3xl'>
                (Rs) :- {value}
            </div>
        </div>
    );
}

export default Balance