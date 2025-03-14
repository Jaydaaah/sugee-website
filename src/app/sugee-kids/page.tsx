"use client";
import { motion } from "framer-motion";
import PhraseAnimate from "@/components/Phrase/PhraseAnimate";
import Talino from "@/components/Phrase/Talino";
import Tangkad from "@/components/Phrase/Tangkad";
import Tibay from "@/components/Phrase/Tibay";
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};
const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
export default function Kids() {
    return (
        <div className="min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </motion.div>
                <motion.div className="relative container mx-auto px-6 pt-32 pb-24 text-center">
                    <motion.div
                        className="max-w-3xl mx-auto mb-16"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-100 bg-blue-500/20 rounded-full">
                            For Growing Kids
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Sugee Kids
                            <span className="block text-blue-100">
                                Growing Healthy and Strong!
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                            Specially formulated for kids with essential
                            nutrients for brain and body development.
                        </p>
                    </motion.div>
                    <motion.div
                        className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-8 justify-center items-center"
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="w-full md:w-1/3"
                            variants={fadeIn}
                        >
                            <PhraseAnimate>
                                <Tangkad />
                            </PhraseAnimate>
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/3"
                            variants={fadeIn}
                        >
                            <PhraseAnimate>
                                <Talino />
                            </PhraseAnimate>
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/3"
                            variants={fadeIn}
                        >
                            <PhraseAnimate>
                                <Tibay />
                            </PhraseAnimate>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-green-50 to-transparent" />
            </section>
            {/* Features Section */}
            <section id="features" className="py-24 bg-green-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                            Benefits
                        </span>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
                            Why Sugee Kids?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover the perfect blend of nutrients designed
                            specifically for children&apos;s growth and development.
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: "Essential Nutrients",
                                description:
                                    "Packed with Calcium, Vitamin D, and Omega-3 for strong bones and a sharp mind.",
                                color: "from-blue-400 to-blue-500",
                                delay: 0,
                            },
                            {
                                title: "Tasty & Healthy",
                                description:
                                    "Delicious fruity flavors kids love, with no artificial additives.",
                                color: "from-yellow-400 to-yellow-500",
                                delay: 0.2,
                            },
                            {
                                title: "Immune Support",
                                description:
                                    "Vitamin C and Zinc boost the immune system to keep kids healthy and active.",
                                color: "from-red-400 to-red-500",
                                delay: 0.4,
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                variants={fadeIn}
                                transition={{ delay: feature.delay }}
                            >
                                <div
                                    className={`h-12 w-12 rounded-xl mb-6 bg-gradient-to-br ${feature.color}`}
                                />
                                <h3 className="text-xl font-semibold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
