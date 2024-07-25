import React from 'react'

const Balance = ({ value }) => {
    return (
        <div className='flex ml-4 mt-3'>
            <div className='font-bold text-lg '>
                Your Balance
            </div>
            <div className='font-semibold ml-2 text-lg'>
                Rs :- {value}
            </div>
        </div>
    );
}

export default Balance