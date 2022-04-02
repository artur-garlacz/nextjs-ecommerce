import { ReactElement } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactElement[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function TransitionButton({ children }: Props) {
  return (
    <button className="bg-gray-400 w-20 rounded-sm flex justify-around">
      <motion.ol variants={container} initial="hidden" animate="show">
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ol>
    </button>
  );
}

export function TransactionButtonItem() {
  return <motion.div animate={{ x: 100 }} transition={{ ease: 'easeOut', duration: 2 }} />;
}
