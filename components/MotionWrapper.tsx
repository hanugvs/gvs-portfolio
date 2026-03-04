'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const MotionWrapper = ({ children }: Props) => {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 },
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default MotionWrapper;
