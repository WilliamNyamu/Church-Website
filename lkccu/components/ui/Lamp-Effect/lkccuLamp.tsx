"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp-Effect/lamp";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "500" });

export function LkccuLamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={`mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl ${spaceGrotesk.className}`} 
      >
        Welcome <br /> to LKCCU
      </motion.h1>
    </LampContainer>
  );
}
