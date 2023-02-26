import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
    return (
        <div className="bg-gray-700">
            <footer className="flex items-center justify-center w-full h-16 border-t">
                <Link
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <Image src="vercel.svg" alt="Vercel Logo" className="h-4 ml-2" width="60" height="150" />
                </Link>
            </footer>
        </div>
    )
}