import React from 'react'

const bodyFatPercentage = (weight: number, waist: number, hip: number, neck: number, gender: string): number => {
    let factor = 0;
    let w = weight * 0.45359237; // convert to kg
    let h = hip * 2.54; // convert to cm
    let n = neck * 2.54; // convert to cm
    let waistCm = waist * 2.54; // convert to cm

    if (gender === 'male') {
        factor = 1.10938 - (0.0008267 * w) + (0.0000016 * Math.pow(w, 2)) - (0.0002574 * waistCm) + (0.0001923 * n);
    } else {
        factor = 1.0994921 - (0.0009929 * w) + (0.0000023 * Math.pow(w, 2)) - (0.0001392 * waistCm) + (0.00000068 * Math.pow(waistCm, 2)) - (0.000315 * h);
    }

    const bodyFatPercentage = ((495 / factor) - 450);

    return Math.round(bodyFatPercentage * 10) / 10; // round to 1 decimal point
};

export default function BodyFatCalculator() {
    const [weight, setWeight] = React.useState(0);
    const [waist, setWaist] = React.useState(0);
    const [hip, setHip] = React.useState(0);
    const [neck, setNeck] = React.useState(0);
    const [gender, setGender] = React.useState('male');
    const [result, setResult] = React.useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const bodyFatPercentageResult = bodyFatPercentage(weight, waist, hip, neck, gender);
        setResult(bodyFatPercentageResult);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="weight">
                        Weight (lbs)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="weight"
                        type="number"
                        step="any"
                        value={weight}
                        onChange={(event) => setWeight(Number(event.target.value))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="waist">
                        Waist circumference (in)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="waist"
                        type="number"
                        step="any"
                        value={waist}
                        onChange={(event) => setWaist(Number(event.target.value))}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="hip">
                        Hip circumference (in)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="hip"
                        type="number"
                        step="any"
                        value={hip}
                        onChange={(event) => setHip(Number(event.target.value))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="neck">
                        Neck circumference (in)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="neck"
                        type="number"
                        step="any"
                        value={neck}
                        onChange={(event) => setNeck(Number(event.target.value))}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
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
                            Your body fat percentage is {result}%
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
};