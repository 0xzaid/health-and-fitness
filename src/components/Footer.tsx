import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <div className="bg-gray-700">
            <footer className="flex items-center justify-center w-full h-16 border-t border-gray-900">
                <p>
                    Made with ❤ by <Link
                        href="https://github.com/0xzaid"
                        className="text-blue-500 hover:text-blue-700"
                        target="_blank"
                    >
                        Zaid</Link>
                </p>
            </footer>
        </div>
    )
}