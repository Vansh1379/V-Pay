import React, { useState } from 'react';

const Navbar = () => {
    const [navbarItems, setNavbarItems] = useState([
        { id: 1, content: "BUSINESS SOLUTIONS" },
        { id: 2, content: "PRESS" },
        { id: 3, content: "CAREERS" },
        { id: 4, content: "ABOUT US" },
        { id: 5, content: "BLOG" },
        { id: 6, content: "CONTACT US" },
        { id: 7, content: "TRUST & SAFETY" },
    ]);

    return (
        <div className='bg-slate-200 h-max flex items-center justify-between p-5 border-b border-zinc-950'>
            <div className='flex items-center gap-1.5'>
                <div className='ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#0c4b6f" className="size-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <h1 className='font-bold text-4xl text-sky-900 font-mono items-center'>V-Pay</h1>
            </div>
            <div className='flex space-x-8 mr-10'>
                {navbarItems.map((item) => (
                    <a key={item.id} className='text-base font-semibold text-cyan-900 hover:text-sky-700 cursor-pointer'>
                        {item.content}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
