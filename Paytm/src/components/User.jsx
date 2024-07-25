import React, { useEffect, useState } from 'react'
import InputBox from './InputBox';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [users, setusers] = useState([]);
    const [filter, setFilter] = useState("");

    // add debouncing here
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setusers(response.data.user);
            })
    }, [filter]);

    return (
        <>
            <div className='font-bold mt-6 text-lg'>
                Users
            </div>
            <div className='my-2'>
                <input onChange={(e) => {
                    setFilter(e.target.value);
                }} type='text' placeholder='Search User.....' className='w-full px-2 py-1 border rounded border-slate-200'></input>
            </div>
            <div>
                {users.map(user => <Userlist user={user} />)}
            </div>
        </>
    );
}

function Userlist({ user }) {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between'>
            <div className='flex'>
                <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
                    <div className='flex flex-col justify-center h-full text-xl'>
                        {user.firstName[0]}
                    </div>
                </div>
                <div className='flex flex-col justify-center h-full'>
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center h-full'>
                <Button onClick={(e) => {
                    navigate("/send?id="+ user._id+"&name="+ user.firstName);
                }} label={"Send Money"} />
            </div>
        </div>
    );
}

export default User 