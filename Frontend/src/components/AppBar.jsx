import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppBar = () => {
    const navigate = useNavigate();
    return (
        <div className=' h-14 flex justify-between mx-0.5 bg-violet-100 shadow-lg w-full '>
            <div className='flex items-center gap-1.5 cursor-pointer' onClick={() => {
                navigate('/');
            }}>
                <div className='ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#0c4b6f" className="size-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h1 className='font-bold text-4xl text-violet-800 font-mono items-center'>V-Pay</h1>
            </div>
            <div className='flex items-center mr-2'>
                <div className='flex flex-col justify-center h-full mr-4'>
                    Hello Vansh
                </div>
                <div className='rounded-full h-12 w-12 bg-violet-200 flex justify-center mt-1 mr-2'>
                    <div className='flex flex-col justify-center h-full text-xl'>
                        V
                    </div>
                </div>
                <div>
                    <button type="button" className=" w-[100px] border-black text-white bg-violet-700 border hover:bg-violet-700 hover:text-white hover:border-0 hover:shadow-lg hover:shadow-violet-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl  text-base px-6 py-1.5 me-2 mb-0">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default AppBar