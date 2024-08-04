import React, { useState } from 'react';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import BottomWarning from '../../components/BottomWarning';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'


// or via CommonJS

const SignUp = () => {

    const notify = () => toast("You have succesfully signin!");

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className='bg-violet-200 h-screen flex justify-center items-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"} />

                <InputBox onchange={e => setFirstname(e.target.value)} label={"First Name"} placeholder={"billu"} />
                <InputBox onchange={e => setLastName(e.target.value)} label={"Last Name"} placeholder={"badmash"} />
                <InputBox onchange={e => setUsername(e.target.value)} placeholder="hello@gmail.com" label={"Email"} />
                <InputBox onchange={e => setPassword(e.target.value)} label={"Password"} placeholder={"********"} />

                <div className='pt-4'>
                    <Button onClick={async () => {
                        console.log("clicked");

                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                password,
                                firstName,
                                lastName
                            });

                            localStorage.setItem("token", response.data.token);
                            console.log(response.data.token);
                            notify();  // Show toast notification here
                            navigate("/dashboard");
                        } catch (error) {
                            console.error(error);
                            toast.error("Signup failed!"); // Show error toast notification
                            Swal.fire({
                                icon: "error",
                                title: "Chal Bsdk ..",
                                text: "Something went wrong!",
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }

                    }} label={"Sign Up"} />
                </div>

                <BottomWarning label={"Already have an account?"} bottomtext={"Sign in"} to={"/signin"} />
            </div>
            <ToastContainer /> {/* Add ToastContainer here */}
        </div>
    );
}

export default SignUp;
