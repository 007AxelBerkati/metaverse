'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row "
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] h-[250px] object-cover rounded-[32px]"
    />
    <div className="w-full flex justify-between items-center ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="lg:text-[42px] text-[26px] text-white font-normal">
          {title}
        </h4>
        <p className="mt-[16px] text-secondary-white font-normal lg:text-[20px] text-[14px]">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden items-center justify-center rounded-full border-white w-[100px] h-[100px] border-[1px] bg-transparent ">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);
export default InsightCard;
