import React, { useState } from 'react'
import Insurence from '../../assets/insurance.png'
import Lending from '../../assets/Lending.png'
import Investment from '../../assets/Investments.png'

const Cards = () => {
    const [imgLink, setImgLink] = useState([{
        id: 1,
        img: Insurence
    }, {
        id: 2,
        img: Investment
    }, {
        id: 3,
        img: Lending
    }]);

    return (
        <div className='mx-20 my-20'>
            <div className='mx-20'>
                <div className='flex h-[280px] justify-between'>
                    {imgLink.map((items) => (
                        <img key={items.id} style={{ objectFit: 'cover' }} src={items.img} alt="not available" className='object-cover rounded-2xl h-[250px] w-[300px] border border-black hover:border-0 hover:shadow-3xl' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards