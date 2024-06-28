import { motion } from "framer-motion";
import { skills } from "./properties";
import React from "react";

export default function Skills() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-neutral-900 border-transparent"
        id="skills"
      >
        <motion.div
          className=" text-4xl font-bold md:hidden pt-16"
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          My Skills
        </motion.div>

        <div className="flex flex-col md:flex-row-reverse gap-16 items-center z-10">
          <div className="flex flex-col gap-10 p-[5px]">
            <motion.div
              className=" text-3xl lg:text-4xl font-bold hidden md:block"
              initial={{ opacity: 0.0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              My Skills
            </motion.div>

            <motion.div
              className="w-96 flex flex-col gap-4 text-lg font-normal md:flex-row md:w-full md:gap-12 "
              initial={{ opacity: 0.0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {Object.keys(skills).map((skill, index) => {
                const skillList = skills[skill];
                return (
                  <div key={`skill-${index}`}>
                    <h3 className="text-xl my-4">{skill}</h3>
                    <div className="grid grid-flow-row place-items-center grid-cols-3 gap-4">
                      {skillList.map((item, itemIndex) => (
                        <React.Fragment key={`item-${itemIndex}`}>

                          <div className="flex flex-col gap-2 items-center hover:scale-105">
                            <div

                              className="h-24 w-24 bg-black rounded-2xl text-center"
                            >

                            </div>
                            <p className="text-sm font-sans">{item.description}</p>
                          </div>

                        </React.Fragment>

                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
