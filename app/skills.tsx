import { motion } from "framer-motion";
import { skills } from "./properties";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import React from "react";

export default function Skills() {
  const keycaps = ["Ctrl", "⌘", "Alt"];
  

  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-900 border-transparent px-6"
        id="skills"
      >
        <motion.div
          className=" text-4xl font-bold lg:hidden pt-16"
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

        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center z-10">
          <div className="flex flex-col gap-10 p-[5px]">
            <motion.div
              className=" text-3xl lg:text-4xl font-bold hidden lg:block"
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

            <div className="lg:hidden w-96 flex flex-col gap-4 text-lg font-normal">

            {Object.keys(skills).map((skill, index) => {
                const skillList = skills[skill];
                return (
                  <div key={`skill-${index}`}>
                    <h3 className="text-xl my-4 py-4">{skill}</h3>
                    <div className="grid grid-flow-row place-items-center grid-cols-3 gap-6">
                      {skillList.map((item, itemIndex) => (
                        <React.Fragment key={`item-${itemIndex}`}>
                          <div className="flex flex-col gap-2 items-center hover:scale-105">
                            <BackgroundGradient animate={true} className="">
                              <Image
                                className="h-24 w-24 bg-black rounded-2xl text-center"
                                src={item.imagePath}
                                width={256}
                                height={256}
                                alt={item.description}
                              />
                            </BackgroundGradient>
                            <p className="text-xs font-bold">
                              {item.description}
                            </p>
                          </div>
                        </React.Fragment>
                      ))}

                      {skill === "Frameworks" && (
                        <div className="w-full col-span-3 hidden lg:block">
                          <BackgroundGradient animate={true}>
                            <div className="h-24  bg-black rounded-2xl text-center "></div>
                          </BackgroundGradient>
                        </div>
                      )}

                      {skill === "Languages" && (
                        <>
                          <div className="w-full col-span-3 hidden lg:grid grid-cols-3 place-items-center gap-6 select-none">
                            {keycaps.map((keyCap, keyIndex) => (
                              <BackgroundGradient
                                animate={true}
                                className="hidden lg:block"
                                key={`keyCap-${keyIndex}`}
                              >
                                <div className="h-24 w-24  bg-black rounded-2xl text-center flex items-center justify-center text-neutral-500">
                                  {keyCap}
                                </div>
                              </BackgroundGradient>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>

            <motion.div
              className="hidden w-96 lg:flex flex-col gap-4 text-lg font-normal lg:flex-row lg:w-full lg:gap-12 lg:border-4 lg:p-8 lg:rounded-2xl lg:border-neutral-700 lg:shadow-lg lg:shadow-black "
              initial={{ opacity: 1,  transformOrigin: "bottom center", rotateX: -90}}
              whileInView={{ opacity: 1,  rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0,
                duration: 1.8,
                ease: "easeInOut"
              }}
            >
              {Object.keys(skills).map((skill, index) => {
                const skillList = skills[skill];
                return (
                  <div key={`skill-${index}`}>
                    <h3 className="text-xl my-4 py-4">{skill}</h3>
                    <div className="grid grid-flow-row place-items-center grid-cols-3 gap-6">
                      {skillList.map((item, itemIndex) => (
                        <React.Fragment key={`item-${itemIndex}`}>
                          <div className="flex flex-col gap-2 items-center hover:scale-105">
                            <BackgroundGradient animate={true} className="">
                              <Image
                                className="h-24 w-24 bg-black rounded-2xl text-center"
                                src={item.imagePath}
                                width={256}
                                height={256}
                                alt={item.description}
                              />
                            </BackgroundGradient>
                            <p className="text-xs font-bold">
                              {item.description}
                            </p>
                          </div>
                        </React.Fragment>
                      ))}

                      {skill === "Frameworks" && (
                        <div className="w-full col-span-3 hidden lg:block">
                          <BackgroundGradient animate={true}>
                            <div className="h-24  bg-black rounded-2xl text-center "></div>
                          </BackgroundGradient>
                        </div>
                      )}

                      {skill === "Languages" && (
                        <>
                          <div className="w-full col-span-3 hidden lg:grid grid-cols-3 place-items-center gap-6 select-none">
                            {keycaps.map((keyCap, keyIndex) => (
                              <BackgroundGradient
                                animate={true}
                                className="hidden lg:block"
                                key={`keyCap-${keyIndex}`}
                              >
                                <div className="h-24 w-24  bg-black rounded-2xl text-center flex items-center justify-center text-neutral-500">
                                  {keyCap}
                                </div>
                              </BackgroundGradient>
                            ))}
                          </div>
                        </>
                      )}
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
