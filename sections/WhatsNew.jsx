'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        className="flex-1 flex justify-center flex-col"
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
        <TypingText title="| Whats New?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
          {newFeatures.map((newFeature) => (
            <NewFeatures
              imgUrl={newFeature.imgUrl}
              subtitle={newFeature.subtitle}
              title={newFeature.title}
              key={newFeature.title}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-[1] ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
