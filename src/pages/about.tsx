import React from "react";
import Image from "next/image";

const About: React.FC = () => {
    return (
            <div className="mt-16 min-h-screen flex flex-col items-center">
                <div className="max-w-xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-center mb-6">
                        About Our Health & Fitness App
                    </h1>
                    <p className="text-xl text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        suscipit massa eu ipsum sagittis feugiat. Nullam ac tortor sit amet
                        enim vestibulum lacinia vitae et felis.
                    </p>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/gym.jpg"
                        alt="about content 1"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/strong-dude.jpg"
                        alt="about content 2"
                        width={600}
                        height={400}
                    />
                </div>
            </div>
            </div>
            

    );
};

export default About;
