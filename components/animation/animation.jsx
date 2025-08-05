// components/animations/SlideInOnScroll.tsx
'use client'; // This component must run on the client side

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const SlideInOnScroll = ({
  children,
  delay = 0,
  duration = 1,//0.8, How far from the bottom it should start
  yOffset = 50, // Starts 50px below its final position
  amount = 0.3, // Triggers when 50% of the element is visible
  className = ''
}) => {

  const variants = {
    // This is the state before it enters the view.
    // Important: While Framer Motion will apply this on the client,
    // the server-rendered HTML should *not* have these styles applied by default.
    // The content should be visible initially for SEO.
    hidden: { opacity: 0.01, y: yOffset },

    // This is the state when it enters the view.
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"        // Sets the initial animation state
      whileInView="visible"   // Animates to 'visible' when in view
      viewport={{ once: true, amount: amount }} // Animates only once, when 'amount' is visible
      variants={variants}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;