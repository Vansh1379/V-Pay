import React from 'react'
import YoursMoney from '../../assets/YourMoney.png'
import Crore from '../../assets/Crore.png'
import Trend from '../../assets/Trend.png'

const YourMoney = () => {
    return (
        <div>
            <div className='mb-0'>
                <img src={YoursMoney} alt="" srcset="" />
                <img src={Crore} alt="" srcset="" />
            </div>
            <div className='mt-0'>
                <img src={Trend} alt="" srcset="" />
            </div>
        </div>
    )
}

export default YourMoney