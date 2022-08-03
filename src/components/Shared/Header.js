import React, { useState } from 'react';
import { TbWaveSquare } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [user]=useAuthState(auth)
    return (
        <nav className="w-full bg-base-100 shadow ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-4">
                <div>
                    <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                        <div className='flex items-center text-2xl font-bold'>
                            <p>
                                <TbWaveSquare
                                    className='w-30px mr-2'
                                />
                            </p>
                            <h1><span className='text-[#efd353] '>E-</span> Shop</h1>
                        </div>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-black rounded-lg"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0 ">
                            <li className="text-black hover:text-indigo-200">
                                Men
                            </li>
                            <li className="text-black hover:text-indigo-200">
                                Women
                            </li>
                            <li className="text-black hover:text-indigo-200">
                                Kids
                            </li>

                        </ul>

                        <div className=" space-y-2 lg:hidden mt-9 pb-5">
                            <div className='flex justify-center text-[18px]' >
                                <div>
                                    <AiOutlineSearch />
                                </div>
                                <div className='mx-9'>
                                    <AiOutlineShoppingCart />
                                </div>
                                <div>
                                    <BiUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:inline-block">
                    <div className='flex justify-between items-center text-xl'>
                       {
                        user &&  <div className='mr-4'>
                        <button onClick={()=>signOut(auth)} className='btn btn-primary rounded-full'>Log Out</button>
                    </div>
                       }
                        <div>
                            <AiOutlineSearch />
                        </div>
                        <div className='mx-4'>
                            <AiOutlineShoppingCart />
                        </div>
                        <div>
                            <BiUser />
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Header;