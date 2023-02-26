import Head from 'next/head'
import Link from 'next/link'

export default function Calculators() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">

            <h1 className="text-6xl font-bold text-center mb-10 text-white">
                Health Calculators
            </h1>
            <ul className="grid grid-cols-4 gap-4">
                <li>
                    <Link href="/calculators/body-mass-index-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        Body Mass Index
                    </Link>
                </li>
                <li>
                    <Link href="/calculators/body-fat-percentage-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        Body Fat Percentage
                    </Link>
                </li>
                <li>
                    <Link href="/heart-rate-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        Heart Rate
                    </Link>
                </li>
                <li>
                    <Link href="/water-intake-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        Water Intake
                    </Link>
                </li>
                <li>
                    <Link href="/one-rep-max-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        One-Rep Max
                    </Link>
                </li>
                <li>
                    <Link href="/protein-intake-calculator" className="block py-2 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300">
                        Protein Intake
                    </Link>
                </li>
            </ul>
        </div>
    );
}
