"use client";

import { motion, AnimatePresence } from "motion/react"; // motion/react 꼭 확인!
import { ReactNode } from "react";

interface IMenuDropdownProps {
  onClose: () => void;
  children: ReactNode;
}

const MenuDropdown = ({ onClose, children }: IMenuDropdownProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 top-[60px] right-[calc(50%-187.5px)] left-[calc(50%-187.5px)] z-40 bg-black"
      />

      <motion.div
        key="menu"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-[60px] right-0 z-50 w-full bg-white py-5 shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuDropdown;
