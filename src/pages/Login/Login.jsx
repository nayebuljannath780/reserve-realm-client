import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginUser = (e) => {
        e.preventDefault();
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h2 className=" mt-4 text-4xl text-center mb-4">Login </h2>
                <form className="max-w-md mx-auto" onSubmit={handleLoginUser}>
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
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        <span>New to ReserveRealm? <Link to='/register' className="underline text-black">Register Now</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;