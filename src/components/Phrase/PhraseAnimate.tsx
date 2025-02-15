"use client";

import { motion } from "motion/react";
import { PropsWithChildren } from "react";

export default function PhraseAnimate({
    children,
    className,
}: PropsWithChildren & { className?: string }) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.2 }}
            whileTap={{
                scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
