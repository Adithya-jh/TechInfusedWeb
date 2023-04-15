'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText, TitleText, ExploreCard } from '../components';

import { exploreWorlds } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The Team" textStyles="text-center" />
      <TitleText
        title={
          <>
            {' '}
            Choose the World you want <br className="md:block hidden" /> to
            explore{' '}
          </>
        }
        textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default Explore;
