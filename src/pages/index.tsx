import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Health & Fitness Homepage | My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to My Health & Fitness website
        </h1>

        <p className="mt-3 text-2xl">
          We are dedicated to helping you achieve your health and fitness goals.
        </p>

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
          

        </div>
      </main>
    </div>
  )
}
