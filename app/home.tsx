import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import { socials } from "./properties";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <AuroraBackground className="bg-gradient-to-t from-neutral-900 via-violet-700 to-neutral-900 flex justify-center items-center">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="w-full h-full absolute top-0 left-0"
        particleColor="#FFFFFF"
      />

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-y-12 justify-center items-center w-full h-full absolute top-0 left-0"
      >
        <div className="flex flex-col items-center lg:items-start backdrop-blur-sm p-4 rounded-xl ">
          <div className="text-5xl lg:text-7xl font-bold text-slate-300 text-center">
            Saaransh Sharma
          </div>
          <div className="font-lg text-2xl lg:text-3xl text-slate-300 mb-4">
            A software developer.
          </div>

          <div className="flex gap-4">
            {Object.keys(socials).map((social, index) => {
              const IconComponent = socials[social].icon;

              return (
                <Link
                  href={socials[social].url}
                  key={index}
                  target="_blank"
                  className="inline-flex h-16 w-16 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <IconComponent className="scale-150" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="animate-bounce">
            <Link href="#about">
                <ArrowDownIcon className="rounded-full w-8 h-8 text-slate-300"/>
            </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
