import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Registration successful')
        }
        catch(e){
            alert('Registration Failed');
        }
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h2 className=" mt-4 text-4xl text-center mb-4">Register</h2>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder="your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        <span>Already have an account? <Link to='/login' className="underline text-black">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;