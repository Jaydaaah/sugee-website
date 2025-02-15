import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import SugeeLogo from "@/components/SugeeLogo";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    icons: "/sugee-icon.ico",
    title: "Sugee Vitamins",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="bumblebee">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* Header */}
                <header className="max-w-7xl mx-auto">
                    <div className="navbar bg-base-100 rounded-badge">
                        <div className="flex-1">
                            <Link className="btn btn-ghost text-xl" href="/">
                                <SugeeLogo className="w-[120px]" />
                            </Link>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <a>Link</a>
                                </li>
                                <li>
                                    <details>
                                        <summary>Parent</summary>
                                        <ul className="bg-base-100 rounded-t-none p-2">
                                            <li>
                                                <a>Link 1</a>
                                            </li>
                                            <li>
                                                <a>Link 2</a>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div>{children}</div>

                {/* Footer */}
                <footer className="bg-blue-500 py-6">
                    <div className="container mx-auto text-center text-white">
                        <p>&copy; 2025 Sugee. All rights reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
