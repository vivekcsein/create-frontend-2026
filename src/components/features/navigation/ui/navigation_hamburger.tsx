"use client";
import { motion } from "framer-motion";
import { useHamburgerMenu } from "@/components/providers/HamburgerProvider";

interface NavbarHamburgerProps {
  menuKey: string;
}

const NavigationHamBurger = ({ menuKey }: NavbarHamburgerProps) => {
  const { isOpen, toggleMenu } = useHamburgerMenu(menuKey);
  // console.log("Hamburger menu state:", isOpen, "for key:", menuKey);

  return (
    <button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
    >
      <motion.span
        className="block h-0.5 w-6 bg-black dark:bg-white"
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.span
        className="block h-0.5 w-6 bg-black dark:bg-white"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.span
        className="block h-0.5 w-6 bg-black dark:bg-white"
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default NavigationHamBurger;
