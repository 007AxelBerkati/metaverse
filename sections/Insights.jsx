'use client';

import { motion } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25, once: false }}
      className={`${styles.flexCenter} flex-col mx-auto ${styles.innerWidth} `}
    >
      <TypingText title="| Insight" />
      <TitleText
        title={<>Insight about metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((res, index) => (
          <InsightCard
            key={res.title}
            imgUrl={res.imgUrl}
            subtitle={res.subtitle}
            title={res.title}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
