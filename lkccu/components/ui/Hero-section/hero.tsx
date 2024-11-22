"use client";
import React from "react";
import { Vortex } from "@/components/ui/Hero-section/vortex";
import { useState, useEffect } from "react";

export function Hero() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
      setCount((prevCount: number): number => {
        if (prevCount < 35) {
          return prevCount + 1
        }else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);
    return () => clearInterval(interval)
  }, []);
  return (
    <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Celebrating {count} years of lkccu
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            A community of believers who are passionate about the gospel Jesus and
            who endeavour to live a life that reflects the true being of Christ.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Watch Session
          </button>
          <button className="px-4 py-2  text-white bg-gradient-to-r from-blue-800 via-pink-600 to-purple-500 rounded-lg ">Join Calendar</button>
        </div>
      </Vortex>
    </div>
  );
}
