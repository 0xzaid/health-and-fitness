import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import firebase from "../../firebase/clientApp"
import Image from 'next/image';


const navLinkVariants = {
    rest: {
        scale: 1,
        opacity: 0.7,
    },
    hover: {
        scale: 1.1,
        opacity: 1,
    },
};

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <Image src="/icons/dumbbell.svg" className="h-6 sm:h-12" alt="Health Logo" width="64" height="32" quality="100" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Health</span>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="bg-gray-700 hover:bg-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="<http://www.w3.org/2000/svg>"
                            >
                                <path
                                    className={isOpen ? 'hidden' : ''}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                                />
                                <path
                                    className={isOpen ? '' : 'hidden'}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.293 18.707l15-15-1.414-1.414-15 15 1.414 1.414zm15-15l-15 15 1.414 1.414 15-15-1.414-1.414zM3 11h18V9H3v2z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </motion.div>                        
                        </li>
                        <li>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/calculators" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Calculators</Link>
                            </motion.div>                        
                        </li>
                        <li>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </motion.div>
                        </li>
                        <li>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/auth" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    {isLoggedIn ? 'Logout' : 'Login/Signup'}
                                </Link>
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
        

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden overflow-hidden ${isOpen ? 'flex-col' : ''}`}
            >
                <div className="text-xl px-2 pt-2 pb-3 sm:px-3 flex flex-col justify-center items-center">
                    <Link href="/" className="nav-link block">
                        Home
                    </Link>
                    <Link href="/about" className="nav-link block">
                        About
                    </Link>
                    <Link href="/calculators" className="nav-link block">
                        Calculators
                    </Link>
                    <Link href="/contact" className="nav-link block">
                        Contact
                    </Link>
                    <Link href="/auth" className="nav-link block">
                        Login/Signup
                    </Link>
                </div>
            </motion.div>
        </nav>

    );
};

export default Navbar;