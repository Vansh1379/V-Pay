import React from 'react'
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import BottomWarning from '../../components/BottomWarning';

function SignUp() {
    return (
        <div className='bg-slate-300 h-screen flex justify-center items-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox label={"First Name"} placeholder={"vansh"} />
                <InputBox label={"Last Name"} placeholder={"kalra"} />
                <InputBox placeholder="vansh@gmail.com" label={"Email"} />
                <InputBox label={"Password"} placeholder={"123456"} />
                <div className='pt-4'>
                    <Button label={"Sign Up"} />
                </div>
                <BottomWarning label={"Already have an account?"} bottomtext={"Sign in"} to={"/signin"} />
            </div>
        </div>
    );
}

export default SignUp