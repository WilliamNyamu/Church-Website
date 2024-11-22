'use client';

import { HoverEffect } from "@/components/ui/RMC/card-hover-effect";
import {Space_Grotesk} from 'next/font/google';

const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: '500'});

export function RMC() {
  return (
    <section className="bg-gray-400 dark:bg-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className={`text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 font-extrabold ${spaceGrotesk.className}`}>
          Our Core Values
        </h2>
        <HoverEffect items={projects} />
      </div>
    </section>
    
  );
}
export const projects = [
  {
    title: "Unity",
    description:
      "We value unity and believe that we are stronger together. We are committed to working together to achieve our common goals.",
    link: "https://stripe.com",
  },
  {
    title: "Integrity",
    description:
      "We value integrity and believe that we should always do the right thing, even when no one is watching.Its the right thing to do",
    link: "https://netflix.com",
  },
  {
    title: "Excellence",
    description:
      "We value excellence and believe that we should always strive to do our best work.",
    link: "https://google.com",
  },
  {
    title: "Servant Leadership",
    description:
      "We value servant leadership and believe that we should always put the needs of others first.",
    link: "https://meta.com",
  },
  {
    title: "Relevance",
    description:
      "We value relevance and believe that we should always be adapting to the changing needs of our community.",
    link: "https://amazon.com",
  },
  {
    title: "Purpose",
    description:
      "We value purpose and believe that we should always be working towards a greater goal.",
    link: "https://microsoft.com",
  },
];
