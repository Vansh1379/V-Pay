import React from 'react'
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import BottomWarning from '../../components/BottomWarning';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = ({ label }) => {
    const notify = () => toast("You have succesfully signin!");

    return (
        <div className='bg-violet-200 h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox label={"Email"} placeholder={"my@gmail.com"} />
                    <InputBox label={"Password"} placeholder={"********"} />
                    <div className='pt-4'>
                        <Button label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} bottomtext={"Sign Up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
}

export default SignIn;