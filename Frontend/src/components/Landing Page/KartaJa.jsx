import React from 'react'
import KarteJa from "../../assets/KarteJa.png"
import ImageSlide from "../../assets/ImageSlide.png"

const KartaJa = () => {
    return (
        <div className='mt-6'>
            <div className=''>
                <img src={KarteJa} alt="Karta Ja Badta ja" srcset="" className='h-[250px] w-[700px] ml-[290px]' />
            </div>

            <div className='flex items-center gap-1.5 ml-[560px]'>
                <div className='ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#0c4b6f" className="size-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h1 className='font-bold text-4xl text-sky-900 font-mono items-center'>V-Pay</h1>
            </div>

            <div className='mt-4'>
                <img src={ImageSlide} alt="" />
            </div>

            <div className='ml-[530px]'>
                <button type="button" className=" w-[200px] border-black text-sky-900 border hover:bg-sky-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 ">Watch all videos </button>
            </div>

            <div className=''>
                <div className='w-[900px] h-[125px] ml-[210px]'>
                    <p className=''>
                        Payments on PhonePe are safe, reliable and fast. One in three Indians are now using the PhonePe app to send money, recharge, pay bills and do so much more, in just a few simple clicks. PhonePe has also introduced several Insurance products and Investment options that offer every Indian an equal opportunity to unlock the flow of money, and get access to financial services.
                    </p>
                    <div className='ml-[370px]'>
                        <h3 className='text-sky-900'>#KarteJaBadteJa</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KartaJa