import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Animate = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!isOpen);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <motion.div
        layout
        key="content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{ minHeight: isOpen ? '100px' : '500px' }}
        onClick={() => setOpen(!isOpen)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
