import React from 'react'
import { Link } from 'react-router-dom'

function BottomWarning({ label, bottomtext, to }) {
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link className='pointer underline pl-1 cursor-pointer' >
                {bottomtext}
            </Link>
        </div>
    )
}

export default BottomWarning