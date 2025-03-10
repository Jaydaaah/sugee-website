"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaEye, FaBullseye } from "react-icons/fa";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Our Company Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-24 bg-white text-center shadow-lg"
            >
                <div className="container mx-auto max-w-4xl">
                    <FaBuilding className="text-6xl text-blue-600 mx-auto mb-4" />
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        Our Company
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We are dedicated to delivering high-quality products
                        that enhance the health and well-being of our customers.
                        With a passion for excellence, we continuously innovate
                        to provide the best solutions in the industry.
                    </p>
                </div>
            </motion.section>

            {/* Vision Section */}
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="py-24 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center"
            >
                <div className="container mx-auto max-w-4xl">
                    <FaEye className="text-6xl text-white mx-auto mb-4" />
                    <h2 className="text-5xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed">
                        To be a global leader in health and wellness, empowering
                        individuals to lead healthier and happier lives through
                        innovative and sustainable solutions.
                    </p>
                </div>
            </motion.section>

            {/* Mission Section */}
            <motion.section
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="py-24 bg-gradient-to-r from-yellow-400 to-yellow-600 text-center text-gray-900"
            >
                <div className="container mx-auto max-w-4xl">
                    <FaBullseye className="text-6xl text-gray-900 mx-auto mb-4" />
                    <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                        Our mission is to provide high-quality, science-backed
                        products that support overall well-being. We are
                        committed to sustainability, innovation, and excellence
                        in every aspect of our business.
                    </p>
                </div>
            </motion.section>
        </div>
    );
}
