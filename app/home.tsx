import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
    return (
        <AuroraBackground className="bg-gradient-to-t from-neutral-900 to-purple-500 ">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 backdrop-blur-2xl w-full h-full"
            >
                <div className="text-7xl font-bold text-slate-300 text-center">
                    Saaransh Sharma
                </div>
                <div className="font-extralight text-4xl text-slate-300 py-4">
                    Software Developer
                </div>
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Hi
                </button>
            </motion.div>
        </AuroraBackground>
    )
}

