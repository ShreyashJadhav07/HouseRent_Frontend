"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { navigationItems } from "../section/Header"; // make sure this contains your links array

const ProfileSheet = () => {
  const [open, setOpen] = useState(false);




  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger: Hamburger Icon */}
      <SheetTrigger>
        <Menu className="h-8 w-8 cursor-pointer text-fuchsia-600" />
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent side="right" className="px-6 bg-transparent text-white">
        <SheetTitle className="sr-only">User Profile Sheet</SheetTitle>

        {/* Profile Display */}
        <div className="p-6 flex flex-col items-center gap-2 mt-[100px] rounded-lg">
          
            <div className="h-[100px] w-[100px] rounded-full bg-gray-700 flex items-center justify-center text-4xl font-bold -mt-[60px]">
              
            </div>
          
            <div className="h-[100px] w-[100px] rounded-full bg-[#0059A3] text-4xl font-semibold flex items-center justify-center -mt-[60px]">
              
            </div>
          

          <p className="text-xl font-bold capitalize">Guest</p>

          <button
        
            className="rounded-full font-medium mt-4 text-base px-4 py-2 bg-fuchsia-600"
          >
            Login
          </button>
        </div>

        {/* Links */}
        <div className="divide-y my-4">
        

          <div>
            {navigationItems.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="flex items-center justify-between px-2 py-4 text-sm"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <ExternalLinkIcon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          <Link
            href={"/help"}
            className="flex items-center justify-between px-2 py-4 text-sm"
            onClick={() => setOpen(false)}
          >
            Help and Legal
            <ChevronRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
