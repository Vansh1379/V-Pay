import React, { useEffect, useState } from 'react'
import InputBox from './InputBox';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const User = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchUsers = (filter) => {
        setLoading(true);
        axios.get( `http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setUsers([]);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers(filter);
    }, [filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const renderUserList = () => {
        if (loading) {
            return <SkeletonLoader count={7} />;
        }

        if (users.length === 0) {
            return <div className="text-center py-4 pt-20">Server is Down Currently</div>;
        }

        return users.map(user => <Userlist key={user._id} user={user} />);
    };

    return (
        <div className='mr-10'>
            <div className='font-medium  mt-6 text-2xl mx-3.5 pl-6 text-violet-900'>
                Bank Users :-
            </div>
            <div className='my-4 mx-8  '>
                <input
                    onChange={handleFilterChange}
                    type='text'
                    placeholder='Search user you wanna send money.....'
                    className='w-[500px] px-5 py-2 rounded-3xl border-violet-900 hover:border-violet-300 border-2'
                />
            </div>
            <div className=''>
                {renderUserList()}
            </div>
        </div>
    );
}

const SkeletonLoader = ({ count }) => {
    return Array(count).fill().map((_, index) => (
        <div key={index} className="flex justify-between mx-3.5 my-2">
            <div className="flex">
                <Skeleton circle width={44} height={44} />
                <div className="ml-2">
                    <Skeleton width={120} />
                </div>
            </div>
            <Skeleton width={100} height={30} />
        </div>
    ));
};

function Userlist({ user }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='flex justify-between  mx-2  pl-6'>
            <div className='flex ' onClick={openModal}>
                <div className='rounded-full h-11 w-11 bg-violet-200 flex justify-center mt-1 mr-2 shadow'>
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
            <div className='flex flex-col justify-center h-full items-center'>
                <Button onClick={(e) => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName);
                }} label={"Send Money"} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex items-center'>
                    <p className='font-normal text-xl'>Username :- </p>
                    <p className=' pl-5 font-normal'> {user.firstName} {user.lastName}</p>
                </div>
                <div className='pt-2'>
                    <p className='font-normal text-xl'>Account Balance:- </p>
                </div>
            </Modal>
        </div>
    );
}

export default User;