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
        <nav className="bg-gray-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image src="/icons/dumbbell.svg" className="h-6 sm:h-12" alt="Health Logo" width="64" height="32" quality="100" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Health</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/" className="nav-link hover:text-blue-400">Home</Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/about" className="nav-link hover:text-blue-400">About</Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/calculators" className="nav-link hover:text-blue-400">Calculators</Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/contact" className="nav-link hover:text-blue-400">Contact</Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="nav-link"
                            >
                                <Link href="/auth" className="nav-link hover:text-blue-400">
                                    {isLoggedIn ? 'Logout' : 'Login/Signup'}
                                </Link>
                            </motion.div>
                        </div>
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
            </div>

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden overflow-hidden ${isOpen ? 'flex-col' : ''}`}
            >
                <div className="text-xl px-2 pt-2 pb-3 sm:px-3 flex flex-col justify-center items-center">
                    <Link href="/" className="nav-link block border-b">
                        Home
                    </Link>
                    <Link href="/about" className="nav-link block border-b">
                        About
                    </Link>
                    <Link href="/calculators" className="nav-link block border-b">
                        Calculators
                    </Link>
                    <Link href="/contact" className="nav-link block border-b">
                        Contact
                    </Link>
                    <Link href="/auth" className="nav-link block border-b">
                        Login/Signup
                    </Link>
                </div>
            </motion.div>


        </nav>
    );
};

export default Navbar;