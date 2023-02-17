'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant2 } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| people on the World" textStyles="text-center" />
      <TitleText
        textStyles="text-center"
        title={
          <>
            Track Friends around you and invite them to play together in the
            same world
          </>
        }
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" className="w-full h-full object-cover" alt="map" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680] ">
          <img src="/people-01.png" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-03.png" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[10%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5D6680]">
          <div className="">
            <img
              src="/planet-02.png"
              className="w-full h-full rounded-[24px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10"
            />
            {/* <div className="z-0">
              <img src="/people-01.png" />
              <img src="/people-02.png" />
              <img src="/people-03.png" />
            </div> */}
          </div>
        </div>
        <div className="absolute top-1/4 right-[10%]  w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5D6680]">
          <img src="/planet-03.png" className="w-full h-full rounded-[24px]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
