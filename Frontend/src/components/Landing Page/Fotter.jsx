import React, { useState } from 'react'

const Fotter = () => {
  const [businessSol, setBusinessSol] = useState([
    { id: 1, name: 'Payment Gateway' },
    { id: 2, name: 'Guardian By V pay' },
    { id: 3, name: 'Express Checkout' },
    { id: 4, name: 'V Pay Switch' },
    { id: 5, name: 'Offline Merchant' },
    { id: 6, name: 'Advertise on V pay' },
    { id: 7, name: 'Smart Speaker' },
    { id: 8, name: 'V Pay Loans' },
    { id: 9, name: 'payment Links' },
  ]);
  return (
    <div>
      <div className='flex w-[1268px] h-max justify-evenly my-5 '>
        <div className='my-1'>
          <div className='flex items-center gap-1.5'>
            <div className='ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="#0c4b6f" className="size-8 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h1 className='font-bold text-4xl text-sky-900 font-mono items-center'>V-Pay</h1>
          </div>
        </div>

        <div className=''>
          <div>
            <h3 className='text-base font-medium mt-3 mb-2 items-center'>Bussiness Solution</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

        <div className=''>

          <div>
            <h3 className='text-base font-medium mt-3 mb-2 items-center'>Insurence</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

        <div className=''>

          <div>
            <h3 className='text-base font-medium mt-3 mb-2 items-center'>Investments</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

        <div className=''>

          <div>
            <h3 className='text-base font-medium mt-3 mb-2 items-center'>Genral</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

        <div className=''>

          <div>
            <h3 className='text-base font-medium mt-3 mb-2 itmes-center'>Legal</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

        <div className=''>

          <div>
            <h3 className='text-base font-medium mt-3 mb-2 items-center'>Support</h3>
          </div>

          <div className='my-5'>
            {businessSol.map((items) => (
              <ul key={items.id} className='hover:text-cyan-500'>
                <li className='text-sm font-light py-1'>{items.name}</li>
              </ul>
            ))}
          </div>

        </div>

      </div>
      <div className='flex items-center'>
        <div className='items-center ml-[570px]'>
          <h3 className='font-light'>© 2024, All rights reserved</h3>
        </div>
      </div>
    </div>
  )
}

export default Fotter