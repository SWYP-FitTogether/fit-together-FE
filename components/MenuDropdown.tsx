"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react"; // motion/react 꼭 확인!
import Link from "next/link";

interface IMenuDropdownProps {
  active: "board" | "mypage";
  onClose: () => void;
}

const MenuDropdown = ({ active, onClose }: IMenuDropdownProps) => {
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
        <ul className="flex flex-col items-center gap-2 text-headline-2">
          <Link
            href={"/board"}
            className={cn(
              "w-fit cursor-pointer py-2 text-gray-500",
              active === "board" && "border-b-2 border-black text-gray-black",
            )}
          >
            게시판
          </Link>
          <Link
            href={"/mypage"}
            className={cn(
              "w-fit cursor-pointer py-2 text-gray-500",
              active === "mypage" && "border-b-2 border-black text-gray-black",
            )}
          >
            마이페이지
          </Link>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuDropdown;
