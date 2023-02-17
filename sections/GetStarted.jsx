'use client';

import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} lg:flex-row flex-col gap-8`}
      viewport={{ amount: 0.25, once: false }}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>

      <motion.div
        className="flex-[0.75] flex justify-center flex-col"
        variants={fadeIn('left', 'tween', 0.2, 1)}
      >
        <TypingText title="| How Metaverus Works" />
        <TitleText title={<>Get Started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] ">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              text={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1} `}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
