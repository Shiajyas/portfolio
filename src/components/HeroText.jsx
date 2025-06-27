import { FlipWords } from "@/components/FlipWords";
import {motion} from "motion/react"


export const HeroText = () => {

    const words = ["Secure","Modern","Efficient","Scalable"]

    const variants = {
        hidden: { opacity: 0 ,x: -50},
        visible: { opacity: 1 ,x: 0},
      };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
                <motion.h1
                className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-storm via-royal to-indigo"
                variants={variants}
                initial= "hidden"
                animate= "visible"
                transition={{ delay: 1}}
                >
                    Hi I'm Shijay
                </motion.h1>
                <div className="flex-col items-start">
                    <motion.p
                     className="text-5xl font-medium text-neutral-300"
                       variants={variants}
                       initial= "hidden"
                       animate= "visible"
                       transition={{ delay: 1.2}}
                     >
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>
                    {/* fliperd word from aceternity */}
                    <motion.div
                      variants={variants}
                       initial= "hidden"
                       animate= "visible"
                       transition={{ delay: 1.5}}
                    >
                        <FlipWords
                        className={"text-8xl font-black text-white"}
                        words={words}
                        />
                    </motion.div>
                    <motion.p
                     initial={{ opacity: 0 ,x: 50}}
                     animate={{ opacity: 1 ,x: 0}}
                     transition={{ delay: 1.8}}
                     className="text-4xl font-medium text-neutral-300">
                        Web Solutions
                    </motion.p>
                </div>
        </div>
      {/* Mobile View */}
        <div>
            <div className="flex flex-col space-y-6 md:hiden">
                <motion.p 
                className="text-4xl font-medium "
               initial={{ opacity: 0 ,x: 50}}
                     animate={{ opacity: 1 ,x: 0}}
                     transition={{ delay: 1}}
                >Hi, I'm Shijay
                </motion.p>
                <div>
                    <motion.p 
                    className="text-5xl font-black text-neutral-300"
                     initial={{ opacity: 0 ,x: 50}}
                     animate={{ opacity: 1 ,x: 0}}
                     transition={{ delay: 1.2}}
                    >Building
                    </motion.p>
                    <motion.div
                     initial={{ opacity: 0 ,x: 50}}
                     animate={{ opacity: 1 ,x: 0}}
                     transition={{ delay: 1.5}}
                    >
                       <FlipWords
                       className={"text-7xl font-bold text-white"}
                       words={words} />
                    </motion.div>
                    <motion.p 
                    className="text-4xl font-medium text-neutral-300"
                     initial={{ opacity: 0 ,x: 50}}
                     animate={{ opacity: 1 ,x: 0}}
                     transition={{ delay: 1.8}}
                    >
                  Web Applictions
                  </motion.p>
                </div>
            </div>
        </div>
    </div>
  );
};

