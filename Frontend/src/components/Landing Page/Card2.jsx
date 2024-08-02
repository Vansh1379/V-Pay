import React, { useState } from 'react'
import AppImage from "../"

const Card2 = () => {
    const [content, setContent] = useState([
        { id: 1, main: "One app for all things money.", description: "Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores." },
        { id: 2, main: "Pay whenever you like, wherever you like.", description: "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card." },
        { id: 3, main: "Find all your favourite apps on PhonePe Switch.", description: "Book flights, order food or buy groceries. Use all your favourite apps without downloading them." }
    ]);

    return (
        <div className='flex'>
            <div className='p-5 ml-12'>
                <div className='text-4xl font-medium text-sky-900 my-6'>
                    <h1>Simple, Fast & Secure</h1>
                </div>
                <div className=''>
                    {content.map((items) => (
                        <div key={items.id} className='border-b border-black'>
                            <h1 className='text-2xl font-normal leading-6 my-4'>{items.main}</h1        >
                            <h3 className='text-custom-gray text-base font-light leading-6 opacity-70 w-[90%] my-3'>{items.description}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[800px]'>
                <img src="" alt="" srcset="" />
            </div>
        </div>
    );
}

export default Card2;
