import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-neutral-900 border-transparent"
        id="projects"
      >
        <motion.div
          className=" text-4xl font-bold text-center md:hidden"
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Projects
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center z-10">
        <div className="flex flex-col gap-10 p-[5px]">
        <motion.div
              className=" text-3xl lg:text-4xl font-bold hidden lg:block"
              initial={{ opacity: 0.0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.div>


        </div>

        </div>


      </div>
    </>
  );
}
