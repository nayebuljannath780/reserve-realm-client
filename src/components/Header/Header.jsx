import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="navbar mt-2">
            <div className="flex items-center justify-between">
                <a href='' className='flex gap-1'>
                    <img src={logo} className='w-10'></img>
                    <span className='font-bold text-xl'>ReserveRealm</span>
                </a>
                <div className='flex gap-2 rounded-full shadow-md shadow-gray-300 py-2 px-4'>
                    <div>Anywhere</div>
                    <div className="border-2 "></div>
                    <div>Any Weak</div>
                    <div className="border-2 "></div>
                    <div>Add Guest</div>
                    <button className='bg-primary rounded-full text-white p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                </div>
                <Link to='/login' className='flex gap-2 items-center rounded-full border border-gray-300 py-2 px-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className="border border-gray-300 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>

                    </div>
                </Link>
            </div>
        </div>

    );
};

export default Header;