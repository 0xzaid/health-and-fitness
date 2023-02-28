import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const proteinIntake = (age: number, gender: string, weight: number, height: number, goal: string, activity: string) => {
    let proteinIntake = 0;

    if (activity === "low") {
        if (gender === "male") {
            proteinIntake = (weight * 0.9) + (height * 0.4) - (age * 0.5);
        } else if (gender === "female") {
            proteinIntake = (weight * 0.9) + (height * 0.3) - (age * 0.4);
        }
    } else if (activity === "moderate") {
        if (gender === "male") {
            proteinIntake = (weight * 1.2) + (height * 0.5) - (age * 0.4);
        } else if (gender === "female") {
            proteinIntake = (weight * 1.2) + (height * 0.4) - (age * 0.3);
        }
    } else if (activity === "high") {
        if (gender === "male") {
            proteinIntake = (weight * 1.5) + (height * 0.6) - (age * 0.5);
        } else if (gender === "female") {
            proteinIntake = (weight * 1.5) + (height * 0.5) - (age * 0.4);
        }
    } else if (activity === "high2") {
        if (gender === "male") {
            proteinIntake = (weight * 1.6) + (height * 0.6) - (age * 0.5);
        } else if (gender === "female") {
            proteinIntake = (weight * 1.6) + (height * 0.5) - (age * 0.4);
        }
    }


    return proteinIntake;
};

const ProteinIntakeCalculator = () => {
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>("");
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [goal, setGoal] = useState<string>("");
    const [activity, setActivity] = useState<string>("");
    const [result, setResult] = React.useState<number | null>(null);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const protein = proteinIntake(age, gender, weight, height, goal, activity);
        setResult(protein);
    };

    return (
        <div>
            <div className="container mx-auto w-4/12 bg-white min-h-screen shadow-md rounded px-8 pt-2 pb-8 mb-8 mt-8">
                <div className="container mx-auto w-8/12">
                    <form onSubmit={handleSubmit} className="flex flex-col mt-8">
                        <h1 className="text-2xl font-bold text-gray-800 pb-5 text-center">Protein Intake Calculator</h1>

                        <label htmlFor="age" className="mb-2 text-gray-700 font-bold text-xl">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(event) => setAge(parseInt(event.target.value))}
                            className="w-full p-2 rounded border border-gray-400 mb-4 text-white bg-gray-700"
                        />

                        <label className="mb-2 text-gray-700 font-bold text-xl">Gender</label>
                        <div className="p-2 container bg-gray-700 flex flex-col mb-4 rounded border border-gray-400 ">
                            <div className="flex items-center ">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    checked={gender === "male"}
                                    onChange={(event) => setGender(event.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="flex items-center text-white">
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    checked={gender === "female"}
                                    onChange={(event) => setGender(event.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <label htmlFor="weight" className="mb-2 text-gray-700 font-bold text-xl">
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(event) => setWeight(parseInt(event.target.value))}
                            className="w-full text-white bg-gray-700 text-black p-2 rounded border border-gray-400 mb-4"
                        />
                        <label htmlFor="height" className="mb-2 text-gray-700 font-bold text-xl">
                            Height (cm)
                        </label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(event) => setHeight(parseInt(event.target.value))}
                            className="w-full text-white bg-gray-700 text-black p-2 rounded border border-gray-400 mb-4"
                        />
                        <label className="mb-2 text-gray-700 font-bold text-xl">Activity Level</label>

                        <div className="p-2 container bg-gray-700 flex flex-col mb-4 rounded border border-gray-400">
                            <div className="flex flex-col mb-4 text-white">
                                <label>
                                    <input
                                        type="radio"
                                        name="activity"
                                        value="low"
                                        checked={activity === "low"}
                                        onChange={() => setActivity("low")}
                                        className="mr-2"
                                    />
                                    Sedentary (Little or no exercise)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="activity"
                                        value="moderate"
                                        checked={activity === "moderate"}
                                        onChange={() => setActivity("moderate")}
                                        className="mr-2"
                                    />
                                    Lightly active (Light exercise 3-5 days)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="activity"
                                        value="high"
                                        checked={activity === "high"}
                                        onChange={() => setActivity("high")}
                                        className="mr-2"
                                    />
                                    Moderately active (Moderate exercise 3-5 days)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="activity"
                                        value="high2"
                                        checked={activity === "high2"}
                                        onChange={() => setActivity("high2")}
                                        className="mr-2"
                                    />
                                    Very active (Hard exercise 6-7 days)
                                </label>
                            </div>
                        </div>
                        <label className="mb-2 text-gray-700 font-bold text-xl">Goal</label>
                        <div className="p-2 container bg-gray-700 flex flex-col mb-4 rounded border border-gray-400">
                            <div className="flex flex-col mb-4 text-white">
                                <label>
                                    <input
                                        type="radio"
                                        name="goal"
                                        value="low"
                                        checked={goal === "low"}
                                        onChange={() => setGoal("low")}
                                        className="mr-2"
                                    />
                                    Maintain current weight
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="goal"
                                        value="moderate"
                                        checked={goal === "moderate"}
                                        onChange={() => setGoal("moderate")}
                                        className="mr-2"
                                    />
                                    Lose weight
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="goal"
                                        value="high"
                                        checked={goal === "high"}
                                        onChange={() => setGoal("high")}
                                        className="mr-2"
                                    />
                                    Gain weight
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="bg-blue-500 text-white rounded p-2">
                            Calculate
                        </button>
                    </form>
                    {result !== null && (
                        <div className="mt-4">
                            <p className="text-center text-gray-700 font-bold mb-2">
                                Your protein intake should be around {result.toFixed(1)} grams
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="container mx-auto w-8/12 bg-gray-900 shadow-md rounded px-8 pt-2 pb-8 mb-8 mt-20">
                <div className="gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">What are proteins?</h2>
                        <p className="mb-4 text-white text-xl text-justify">
                            Proteins are one of the three main things that give us energy, along with fats and carbs. But they do a lot more than that! Proteins help build and maintain our bodies, like our muscles and organs, and they also help control how our bodies work.
                        </p>
                        <p className="mb-4 text-white text-xl text-justify">
                            Proteins are made up of things called amino acids, which are like building blocks. Some amino acids are made by our bodies, but we have to get others from the foods we eat. Foods that have all the important amino acids are called complete proteins, and they can come from animals like meat and eggs, or from plants like soybeans and quinoa.
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            There are different types of proteins that do different jobs in our bodies. Some help us fight off germs, others help break down the food we eat, and some even help our cells communicate with each other!
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            Since proteins are so important for keeping our bodies healthy, it&apos;s really important to eat enough foods with protein in them.
                        </p>
                    </div>

                    <div className="grid grid-cols gap-4 mt-10">
                        <Image className="rounded-lg" src="/images/whey-protein.jpg" alt="protein content 1" width="400" height="100" />
                        <Image className="mt-4 lg:mt-10 rounded-lg" src="/images/cooked-protein.jpg" alt="protein content 2" width="400" height="100" />
                    </div>
                </div>
                <div className="gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="font-light text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Why are proteins important?</h2>
                        <p className="mb-4 text-white text-xl text-justify">
                            Proteins are found in many different parts of our body, like our muscles, bones, and blood. They play an important role in building and repairing muscle tissue, helping our bones stay strong, and even transporting oxygen throughout our body.
                        </p>
                        <p className="mb-4 text-white text-xl text-justify">
                            But that&apos;s not all! Proteins also support our immune system by producing antibodies that help fight off harmful bacteria and viruses. And did you know that our DNA, which contains our genetic instructions, is also made up of proteins?
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            It&apos;s important to eat enough protein every day to maintain optimal health and wellness. If we don&apos;t get enough protein, our body may start breaking down our muscle tissue to compensate for the deficit. This can lead to a loss of muscle mass, which can have negative impacts on our overall health and fitness.
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            To ensure that you&apos;re getting enough protein in your diet, try incorporating foods like chicken, fish, beans, nuts, and eggs. And if you&apos;re looking to build muscle, consider adding protein supplements like whey protein to your diet.
                        </p>
                    </div>
                </div>
                <div className="py-8 px-4 ml-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols gap-4 mt-1">
                        <Image className="mt-4 lg:mt-10 rounded-lg" src="/images/girl-eating.jpg" alt="protein content 4" width="400" height="100" />
                        <Image className="rounded-" src="/images/strong-dude.jpg" alt="protein content 3" width="400" height="100" />
                    </div>
                    <div className="font-light text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Benefits of eating high protein</h2>
                        <p className="mb-4 text-white text-xl text-justify">
                            One of the primary advantages of a high protein diet is its ability to reduce appetite and cravings, which can help prevent overeating and promote weight loss. This is because protein is more satiating than carbohydrates or fats, which means it keeps you feeling full for longer periods.
                        </p>
                        <p className="mb-4 text-white text-xl text-justify">
                            Moreover, a high protein diet has been shown to improve body composition by increasing muscle mass while reducing body fat. This is especially beneficial for individuals who are looking to lose weight, as a higher muscle mass can increase the body&apos;s metabolic rate and burn more calories at rest.
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            Another advantage of a high protein diet is that protein is less likely to be stored as body fat when you overeat compared to carbohydrates or fats. This means that even if you consume more calories than you need, a higher protein intake can help minimize the risk of gaining excess body fat.
                        </p>

                        <p className="mb-4 text-white text-xl text-justify">
                            In addition to weight loss benefits, a high protein diet may also have other health benefits, such as improving bone health, lowering blood pressure, and reducing the risk of certain chronic diseases such as diabetes and heart disease.
                        </p>
                    </div>
                </div>
                <div className="gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-white">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Best high protein foods</h2>
                        <p className="mb-4 text-white text-xl text-justify">
                            Protein is an essential nutrient that our bodies need for muscle growth, repair, and maintenance. While animal products like meat, fish, and dairy are some of the best sources of protein, there are plenty of plant-based options too.</p>
                        <p className="mb-4 text-white text-xl text-justify">
                            If you&apos;re following a vegan or vegetarian diet, it&apos;s important to know that you can still get plenty of protein without eating animal products. Good plant-based protein sources include beans, lentils, whole grains, nuts, and seeds, along with meat alternatives like tofu and Beyond Meat.</p>

                        <p className="mb-4 text-white text-xl text-justify">
                            The challenge with plant-based proteins is that they often come with other nutrients like fat or carbohydrates, which can make it harder to get the right balance of macronutrients. But with a little bit of planning, you can easily meet your daily protein needs while following a vegan or vegetarian diet.</p>

                        <p className="mb-4 text-white text-xl text-justify">
                            If you&apos;re having trouble getting enough protein from food alone, protein powders can help. Whey protein is the most common type, but there are also plenty of plant-based options available. You can mix protein powder into a shake or add it to foods like oatmeal, yogurt, or baked goods for an extra protein boost.</p>
                    </div>

                    <div className="grid grid-cols gap-4 mt-10">
                        <Image className="rounded-lg" src="/images/cooked-meat-and-rice.jpg" alt="protein content 5" width="400" height="100" />
                        <Image className="mt-4 lg:mt-10 rounded-lg" src="/images/vegan-protein.jpg" alt="protein content 6" width="400" height="100" />
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default ProteinIntakeCalculator;