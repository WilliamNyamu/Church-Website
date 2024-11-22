"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/Navbar/navbar-menu";
import { cn } from "@/lib/utils";



export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-3 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#">Bible Study Sessions</HoveredLink>
            <HoveredLink href="/#">Discipleship</HoveredLink>
            <HoveredLink href="/#">BEST-P program</HoveredLink>
            <HoveredLink href="/#">Class Fellowships</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="The Executive"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Meet our leaders who drive the vision of lkccu being led by the Holy Spirit"
            />
            <ProductItem
              title="The Council"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Meet the Coucil that overseas the day to day running of lkccu activities"
            />
            <ProductItem
              title="The Dockets"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Want to serve God? Check out the dockets available for you to serve"
            />
            <ProductItem
              title="Our Values"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Check the values that drive lkccu in its mission to serve God"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Plugged In">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#">Contact Us</HoveredLink>
            <HoveredLink href="/#">Blogs</HoveredLink>
            <HoveredLink href="/#">Gallery</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
