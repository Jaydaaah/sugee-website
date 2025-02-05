import PhraseAnimate from "@/components/Phrase/PhraseAnimate";
import Talino from "@/components/Phrase/Talino";
import Tangkad from "@/components/Phrase/Tangkad";
import Tibay from "@/components/Phrase/Tibay";
import { motion } from "motion/react";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative hero min-h-screen py-20 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-500 to-orange-600">
                <div className="hero-content mx-auto flex flex-col gap-20">
                    <div>
                        <h2 className="text-4xl font-extrabold text-yellow-100 mb-4">
                            Healthy Growth for Kids & Teens!
                        </h2>
                        <p className="text-lg text-gray-900 mb-6">
                            Packed with essential vitamins and minerals for
                            strong bones and active minds.
                        </p>
                        <div className="flex justify-center gap-2">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium shadow-md">
                                Sugee kids
                            </button>
                            <div className="divider divider-horizontal h-30"></div>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium shadow-md">
                                Sugee Teens
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[700px] flex gap-16 absolute bottom-24">
                    <PhraseAnimate className="w-1/3">
                        <Tangkad />
                    </PhraseAnimate>
                    <PhraseAnimate className="w-1/3">
                        <Talino />
                    </PhraseAnimate>
                    <PhraseAnimate className="w-1/3">
                        <Tibay />
                    </PhraseAnimate>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-blue-50">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-8">
                        Why Choose Sugee?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold text-yellow-500 mb-4">
                                Vitamin Boost
                            </h4>
                            <p>
                                Rich in Vitamins A, B, C, and D to support
                                overall health.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold text-orange-500 mb-4">
                                Delicious Taste
                            </h4>
                            <p>
                                Natural orange flavor that kids and teens love!
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-bold text-blue-500 mb-4">
                                Easy to Take
                            </h4>
                            <p>
                                Liquid syrup makes it easy to mix into drinks or
                                take directly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                id="benefits"
                className="py-16 bg-gradient-to-r from-blue-100 to-yellow-100"
            >
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-semibold text-orange-500 mb-8">
                        Benefits of Sugee
                    </h3>
                    <ul className="list-disc list-inside text-left md:w-2/3 mx-auto">
                        <li>
                            Supports strong bones and teeth with Calcium and
                            Vitamin D.
                        </li>
                        <li>Boosts immunity with Vitamin C and Zinc.</li>
                        <li>Enhances brain function with Vitamin B-complex.</li>
                        <li>
                            Promotes energy and vitality for active lifestyles.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 bg-yellow-50">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-semibold text-yellow-600 mb-8">
                        Get in Touch
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Have questions or need more information? Contact us
                        today!
                    </p>
                    <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-500 py-6">
                <div className="container mx-auto text-center text-white">
                    <p>&copy; 2025 Sugee. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
