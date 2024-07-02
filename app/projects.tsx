import { motion } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { projects } from "./properties";

export default function Projects() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-violet-900 to-neutral-900 from-0% via-0% to-5% lg:to-10% border-transparent py-16"
        id="projects"
      >
        <motion.div
          className=" text-4xl font-bold text-center lg:hidden"
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

          <div className="font-normal text-base  text-violet-300 mb-4 mt-1">
              <p>Scroll to see some of the projects I&#39;ve worked on.</p>
            </div>
        </motion.div>


        <div className="flex flex-col p-[5px] w-fit gap-2">
          <motion.div
            className=" text-3xl lg:text-4xl font-bold hidden lg:block self-start "
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
            <div className="font-normal text-base  text-violet-300 mb-4 mt-1">
              <p>Scroll to see some of the projects I&#39;ve worked on.</p>
            </div>

          </motion.div>


          <StickyScroll content={projects} />
        </div>


      </div>

    </>
  );
}

