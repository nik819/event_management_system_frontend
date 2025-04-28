import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { Link, useNavigation } from "react-router-dom";

type loginrequest = {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useNavigation()


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login clicked', { email, password });
        const request: loginrequest ={ email, password}
        const response = await axios.post("http://localhost:8000/client-api/v1/auth/registration",  {
            request,
        })
        console.log('response', response)
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                    <Input
                        label="Email or Username"
                        preIcon="mail"
                        name="email"
                        type="text"
                        placeholder="Enter your email or username"
                        required={true}
                        // register={register}
                        // error={errors?.email?.message?.toString()}
                    />
                    </div>
                    <div>
                    <Input
                        label="Password"
                        preIcon="lock-closed"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required={true}
                        // register={register}
                        // error={errors?.email?.message?.toString()}
                    />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <div className="flex justify-end">
                    <span>Create new account</span>&nbsp;
                    <Link to="/registration" className="text-blue-500">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
