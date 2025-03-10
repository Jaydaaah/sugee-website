import PhraseAnimate from "@/components/Phrase/PhraseAnimate";
import Talino from "@/components/Phrase/Talino";
import Tangkad from "@/components/Phrase/Tangkad";
import Tibay from "@/components/Phrase/Tibay";
import SilhouetteSports from "@/components/SilhouetteSports";
import SugeeLogo from "@/components/SugeeLogo";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative hero min-h-screen py-20 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300 via-gray-200 to-white">
                <div className="hero-content mx-auto flex flex-col gap-20">
                    <div className="absolute top-10 w-full max-w-3xl md:">
                        <div className="w-full drop-shadow-2xl relative flex flex-col">
                            <SilhouetteSports className=" w-full -z-10" />
                            <div className="absolute w-full bottom-5">
                                <SugeeLogo className="w-1/2 mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Healthy Growth for Kids & Teens!
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Packed with essential vitamins and minerals for
                            strong bones and active minds.
                        </p>
                        <div className="flex justify-center gap-2">
                            <Link href={"/sugee-kids"}>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-md font-medium shadow-md">
                                    Sugee Kids
                                </button>
                            </Link>
                            <Link href={"/sugee-teens"}>
                                <div className="divider divider-horizontal h-30"></div>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-md font-medium shadow-md">
                                    Sugee Teens
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-[700px] flex gap-16 absolute bottom-24">
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
        </div>
    );
}
