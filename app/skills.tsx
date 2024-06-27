import { motion } from "framer-motion";

export default function Skills(){
    return(<>
    <div className="min-h-screen w-full flex flex-col gap-16 justify-center items-center" id="skills">

        <motion.div
          className=" text-3xl lg:text-4xl font-bold text-center"
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Skills
        </motion.div>



    </div>
    </>)
}