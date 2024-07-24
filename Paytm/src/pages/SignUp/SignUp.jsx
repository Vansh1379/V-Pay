import React, { useState } from 'react'
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import BottomWarning from '../../components/BottomWarning';

const SignUp = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className='bg-slate-300 h-screen flex justify-center items-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"} />

                <InputBox onchange={e => {
                    setFirstname(e.target.value);
                }} label={"First Name"} placeholder={"billu"} />

                <InputBox onchange={e => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"badmash"} />

                <InputBox onchange={e => {
                    setUsername(e.target.value);
                }} placeholder="hello@gmail.com" label={"Email"} />

                <InputBox onchange={e => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"********"} />

                <div className='pt-4'>
                    <Button onClick={() => {
                        console.log("clicked");
                        axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            password,
                            firstName,
                            lastName
                        })
                    }} label={"Sign Up"} />
                </div>

                <BottomWarning label={"Already have an account?"} bottomtext={"Sign in"} to={"/signin"} />
            </div>
        </div>
    );
}

export default SignUp