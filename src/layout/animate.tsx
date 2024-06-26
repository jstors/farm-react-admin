import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Animate = ({ children }) => {
  const DURATION = 0.2;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        key="content"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        exit={{ x: 2000 }}
        transition={{ duration: DURATION }}
      >
        <motion.div
          key={location.pathname}
          variants={container}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: DURATION,
            ease: 'easeIn',
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
