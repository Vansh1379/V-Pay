import React, { useState } from 'react'

const Cards = () => {
    const [imgLink, setImgLink] = useState([{
        id: 1,
        img: "https://imgs.search.brave.com/RPEyAyos3jRc5Yh7rY7V07Hm5ur4fBowWItZI4E7fpc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc"
    }, {
        id: 2,
        img: "https://imgs.search.brave.com/RPEyAyos3jRc5Yh7rY7V07Hm5ur4fBowWItZI4E7fpc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc"
    }, {
        id: 3,
        img: "https://imgs.search.brave.com/RPEyAyos3jRc5Yh7rY7V07Hm5ur4fBowWItZI4E7fpc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMTEvUmln/aHRfSW1hZ2VfRmxh/dC5qcGc"
    }]);

    return (
        <div className='mx-20 my-20'>
            <div className='mx-20'>
                <div className='flex h-[280px] justify-between'>
                    {imgLink.map((items) => (
                        <img key={items.id} src={items.img} alt="not available" className='object-cover rounded-2xl h-[280px] w-[300px] border-2 border-black hover:border-0 hover:shadow-3xl'/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards