'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      varients={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About TechInfused" textStyle="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We are passionate about technology and love to share our knowledge with
        others. We believe that staying up-to-date with the latest trends and
        future advancements in tech is essential, and we strive to provide our
        readers with the most accurate and insightful information possible. We
        are dedicated to delivering high-quality content on a wide range of
        topics, including -{' '}
        <span className="font-extrabold text-white">
          WebDev, blockchain, quantum computing, AR/VR, IoT, AI, and more{' '}
        </span>
        . So, whether you are looking for the latest news in blockchain
        technology, tips and tricks for WebDev, or insights into the future of
        AI, we have got you covered. We are committed to delivering content that
        is both relevant and insightful, and we are confident that you will find
        our content to be both informative and engaging.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
