import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h2 className=" mt-4 text-4xl text-center mb-4">Register</h2>
                <form className="max-w-md mx-auto" action="">
                    <input type="text" placeholder="your name"/>
                    <input type="email" placeholder="your@email.com"></input>
                    <input type="password" placeholder="password"></input>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        <span>Already have an account? <Link to='/login' className="underline text-black">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;