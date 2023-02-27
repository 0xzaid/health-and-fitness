import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const bodyMassIndex = (weight: number, height: number): number => {
    let h = height / 100; // convert height to meters
    let bmi = weight / (h * h);
    return Math.round(bmi * 10) / 10; // round to 1 decimal point
};

export default function BMICalculator() {
    const [weight, setWeight] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [result, setResult] = React.useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const bmiResult = bodyMassIndex(weight, height);
        setResult(bmiResult);
    };

    return (

        <div>
            <div className="flex items-center justify-center p-40 columns-2 gap-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-gray-800 pb-10">Body Mass Index Calculator</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
                            Weight (kg)
                        </label>
                        <input
                            className="bg-gray-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="weight"
                            type="number"
                            step="any"
                            value={weight}
                            onChange={(event) => setWeight(Number(event.target.value))}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="height">
                            Height (m)
                        </label>
                        <input
                            className="bg-gray-700 shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="height"
                            type="number"
                            step="any"
                            value={height}
                            onChange={(event) => setHeight(Number(event.target.value))}
                            required
                        />

                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Calculate
                        </button>
                    </div>
                    {result !== null && (
                        <div className="mt-4">
                            <p className="text-center text-gray-700 font-bold mb-2">
                                Your BMI is {result.toFixed(1)} kg/m²
                            </p>
                            <p className={`text-center font-bold mb-2 ${result < 16 ? "text-red-500" : result < 17 ? "text-red-400" : result < 18.5 ? "text-yellow-500" : result < 25 ? "text-green-500" : result < 30 ? "text-yellow-500" : result < 35 ? "text-red-400" : result < 40 ? "text-red-500" : "text-red-500"
                                }`}>
                                You are in the {result < 16 ? "severe thinness" : result < 17 ? "moderate thinness" : result < 18.5 ? "mild thinness" : result < 25 ? "normal weight" : result < 30 ? "overweight" : result < 35 ? "obese class I" : result < 40 ? "obese class II" : "obese class III"} category.
                            </p>
                        </div>
                    )}


                </form>

                <div className="bg-gray-700 rounded p-10">
                    <table className="bg-gray-700 text-center text-white mb-2 w-full">
                        <thead className="bg-gray-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="text-white px-6 py-3">Category</th>
                                <th scope="col" className="text-white px-6 py-3">BMI range - kg/m²</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-red-500">
                                <td>Severe Thinness</td>
                                <td>&lt; 16</td>
                            </tr>
                            <tr className="text-red-400">
                                <td>Moderate Thinness</td>
                                <td>16 - 17</td>
                            </tr>
                            <tr className="text-yellow-200">
                                <td>Mild Thinness</td>
                                <td>17 - 18.5</td>
                            </tr>
                            <tr className="text-green-500">
                                <td>Normal Weight</td>
                                <td>18.5 - 25</td>
                            </tr>
                            <tr className="text-yellow-200">
                                <td>Overweight</td>
                                <td>25 - 30</td>
                            </tr>
                            <tr className="text-red-400">
                                <td>Obese Class I</td>
                                <td>30 - 35</td>
                            </tr>
                            <tr className="text-red-500">
                                <td>Obese Class II</td>
                                <td>35 - 40</td>
                            </tr>
                            <tr className="text-red-500">
                                <td>Obese Class III</td>
                                <td>&gt; 40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <div className="flex items-center justify-center">
                <div className="animate-bounce w-6 h-6">
                    <Image src="/down-arrow.png" width="100" height="100" alt="scroll-down"></Image>
                </div>
            </div>


            <section className="bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">What is BMI?</h2>
                        <p className="mb-4 text-white text-xl">
                            BM is used to determine whether a person has a healthy body weight based on their height and weight. BMI is used to categorize people as underweight, normal weight, overweight, or obese, and can indicate whether additional testing or action is required to maintain a healthy weight. The categories of BMI vary based on factors such as region and age.
                        </p>
                        <p className="mb-4 text-white text-xl">
                            In addition to BMI, there are other factors that can affect a person&apos;s health and wellbeing, such as diet, exercise, and genetics. Therefore, it is important to consult with a healthcare professional for personalized advice on maintaining a healthy lifestyle.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg" src="/alexander-redl-d3bYmnZ0ank-unsplash.jpg" alt="bmi content 1" width="600" height="500" />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/kenny-eliason-5ddH9Y2accI-unsplash.jpg" alt="bmi content 2" width="600" height="500" />
                    </div>
                </div>
            </section>

            <section className="bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-white sm:text-lg dark:text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-white dark:text-white">Risks associated with being overweight</h2>
                        <p className="text-xl mb-4 font-light text-white">Carrying excess weight increases the chance of developing a variety of severe medical conditions and health issues. The Centers for Disease Control and Prevention (CDC) has compiled a list of these risks, which include:</p>
                        <ul className="text-xl list-disc mx-10 p-2 text-white">
                            <li>Hypertension</li>
                            <li>Elevated levels of &quot;bad&quot; cholesterol (LDL) and low levels of &quot;good&quot; cholesterol (HDL)</li>
                            <li>High levels of triglycerides</li>
                            <li>Type II diabetes</li>
                            <li>Coronary heart disease</li>
                            <li>Stroke</li>
                            <li>Gallbladder disease</li>
                            <li>Osteoarthritis</li>
                            <li>Breathing difficulties</li>
                            <li>Certain types of cancer (endometrial, breast, colon, kidney, liver, and gallbladder)</li>
                            <li>A diminished quality of life</li>
                            <li>Mental health problems like depression and anxiety</li>
                            <li>Chronic pain</li>
                            <li>An increased risk of mortality when compared to those with a healthy body mass index (BMI)</li>
                        </ul>
                        <p className="mb-4 font-medium text-gray-400git ad">In general, it is recommended that individuals keep their BMI below 25 kg/m2, but it is advisable to seek medical advice to determine if any lifestyle modifications are necessary to improve overall health.</p>
                        <Link href="https://www.cdc.gov/healthyweight/assessing/bmi" target="_blank" className="inline-flex items-center text-blue-500 hover:text-blue-700">
                            Learn more
                            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};