import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import firebase from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth"
import { useState } from 'react'
import { motion } from "framer-motion";
import { getAuth } from 'firebase/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, loading, error] = useAuthState(getAuth());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Health & Fitness Homepage | My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {!loading && (
          <h1 className="text-6xl font-bold">
            Welcome to My Health & Fitness website
          </h1>
        )}


        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-6xl font-bold text-gray-400"
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <p>Loading...</p>
            </motion.div>
          </motion.div>
        )}

        {!loading && (
          <>
            {user ? (
              <p className="mt-3 text-xl">
                Welcome {user.displayName}!
              </p>
            ) : (
              <p className="mt-3 text-xl">
                  Please <Link className="text-blue-700 hover:text-blue-400" href="/auth">login</Link> through Google!
              </p>
            )}

            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <Link href="/calculators" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold justify-between">Calculators &rarr;</h3>
                <p className="mt-4 text-xl text-justify">
                  Browse through our collection of calculators such as BMI, BMR, and more.
                </p>
              </Link>

              <Link href="https://sprinkle-iris-307.notion.site/Exercise-29775913962a423bbf2e4a189a39923b" target="_blank" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold justify-between">My Workouts &rarr;</h3>
                <p className="mt-4 text-xl text-justify">
                  Browse through my personal weekly workouts that I follow and update everyday.
                </p>
              </Link>

              <Link href="#" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold justify-between">Nutrition Tracker &rarr;</h3>
                <p className="mt-4 text-xl text-justify">
                  Nutrition tracker to keep count of your daily calories and macros.
                </p>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

