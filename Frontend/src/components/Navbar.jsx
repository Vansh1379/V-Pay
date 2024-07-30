import React, { useState } from 'react'

const [navbaritems, setNavbarItems] = useState([
    {
        id: 1,
        content: "BUSINESS SOLUTIONS"
    }, {
        id: 2,
        content: "PRESS"
    }, {
        id: 3,
        content: "CARRERS"
    }, {
        id: 4,
        content: "ABOUT US"
    }, {
        id: 5,
        content: "BLOG"
    }, {
        id: 6,
        content: "CONTACT US"
    }, {
        id: 7,
        content: "TRUST & SAFETY"
    }
])
function Navbar() {
    return (
        <div className='bg-slate-300 h-max flex'>
            <div>
                <h1 className='font-bold text-4xl p-3 text-sky-900 font-mono'>V-Pay</h1>
            </div>
            <div>
                {navbaritems.map((id, content)=>)}
            </div>
        </div>
    )
}

export default Navbar