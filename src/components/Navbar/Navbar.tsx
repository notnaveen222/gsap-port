import FlippingText from "./FlippingText";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="h-14  border-b z-10 fixed mix-blend-difference top-0 left-0 right-0 border-b-[#2e2e2e] flex justify-between items-center px-10"
    >
      <div className="text-white  font-interTight font-medium  text-lg">
        Naveen
      </div>
      <div className="hidden sm:flex font-interTight font-medium min-w-[40%] text-sm justify-evenly border-l bg-transparent border-l-[#2e2e2e] h-full items-center">
        <FlippingText styles=" cursor-pointer" title="Projects" />
        <FlippingText styles=" cursor-pointer" title="About" />
        <FlippingText styles=" cursor-pointer" title="Contact" />
      </div>
    </motion.div>
  );
}
