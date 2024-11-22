import Image from "next/image";
import { InfiniteMovingCardsDemo } from "@/components/ui/Testimonials/testimonial";
import { TimelineDemo } from "@/components/ui/Timeline/TimelineDemo";
import { RMC} from "@/components/ui/RMC/rmc"
import {LkccuLamp} from "@/components/ui/Lamp-Effect/lkccuLamp";
import { GlobeDemo } from "@/components/ui/globe/goYe";
import { Navbar } from "@/components/ui/Navbar/navbar";
import { Hero } from "@/components/ui/Hero-section/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TimelineDemo />
      {/* <GlobeDemo /> */}
      <RMC />
      <InfiniteMovingCardsDemo />
      <LkccuLamp />
      
    </div>
    
    
  );
}
