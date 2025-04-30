import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";

type RegistrationRequest = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
};

const Registration: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [dateOfBirth, setdateOfBirth] = useState<string>('');
    const navigate = useNavigate();

    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registration clicked', { username, email, password, confirmPassword });

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const request: RegistrationRequest = { username, email, password, confirmPassword, dateOfBirth };

        try {
            const response = await axios.post("http://localhost:8000/client-api/v1/auth/registration", request);
            console.log('response', response);
            alert('Registration successful!');
            if(response.status === 200){
                navigate("/");
            }
        } catch (error) {
            console.error('Registration failed', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleRegistration} className="space-y-6">
                    <div>
                        <Input
                            label="Username"
                            preIcon="user"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            required={true}
                            value={username}
                            onChange={(e:any) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            label="Email"
                            preIcon="mail"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required={true}
                            value={email}
                            onChange={(e:any) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e:any) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            label="Confirm Password"
                            preIcon="lock-closed"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            required={true}
                            value={confirmPassword}
                            onChange={(e:any) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <Input
                        label="Date Of Birth"
                        preIcon="calendar"
                        name="dateOfBirth"
                        type="date"
                        placeholder="Enter your date of birth"
                        required={true}
                        value={dateOfBirth}
                        onChange={(e: any) => setdateOfBirth(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <div className="flex justify-end mt-4">
                    <span>Already have an account?</span>&nbsp;
                    <Link to="/login" className="text-blue-500">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Registration;
