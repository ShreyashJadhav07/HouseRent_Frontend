"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { navigationItems } from "../section/Header"; // make sure this contains your links array
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api, ENDPOINT } from "@/lib/api";
import { userLoggedOutDetails } from "@/redux/userSlice";
import { toast } from "sonner";

const ProfileSheet = () => {
  const [open, setOpen] = useState(false);
  const userData=useSelector((state) => state.user);
  const dispatch=useDispatch();
  const router=useRouter();

  const handleLogout =async () =>{
    try{
      const res=await api.get(ENDPOINT.logout);
      if(res.data.status === "success"){
        dispatch(userLoggedOutDetails());

        router.push("/");
        toast("User SuccesFully Logout")
      }

    }catch(error){
            console.log("err",err);
        }

  };
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="h-8 w-8 cursor-pointer text-fuchsia-600" />
      </SheetTrigger>

      <SheetContent side="right" className="px-6 bg-[#f4f4f4] text-gray-800">
        <SheetTitle className="sr-only">User Profile Sheet</SheetTitle>

        {/* Profile Display */}
        <div className="p-6 flex flex-col items-center gap-2 mt-[100px] bg-white rounded-3xl shadow-xl">
          {!userData.isLoggedIn ? <Image
          src="/user.png"
          alt="profile Icon"
          className="h-[100px] w-[100px] rounded-full -mt-[60px]"
          width={40}
          height={40}
          /> :
          
            <div className="h-[100px] w-[100px] rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-4xl font-bold text-white -mt-[60px]">
              {userData.user ? userData.user.name.charAt(0).toUpperCase() : ""}

              
            </div>}
             <p className="text-xl font-bold capitalize text-gray-800">
                        {userData.isLoggedIn ? userData.user.name : "Guest"}
             </p>

             <Link
             href={` ${userData.isLoggedIn ? "/" : "/login"}`}
             className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition mt-4 text-base px-4"
             onClick={() =>{
              setOpen(false);
              if(userData.isLoggedIn){
                handleLogout();
              }
             }}
            
             >
               {userData.isLoggedIn ? "Logout" : "Login"}
             </Link>
           </div>
           <div className="divide-y  bg-white rounded-3xl shadow-xl p-2">
            <div>
              {navigationItems.map((link,index) =>(
                <Link
                href={link.href}
                key={link.href || index}
                className="flex items-center justify-between px-2 py-4 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => {
                     setOpen(false);
                }}

                
                >
                  {link.name}
                  <ExternalLinkIcon className="w-4 h-4 text-gray-400"/>

                </Link>

              ))}

            </div>
                 
                </div>
      </SheetContent>
    </Sheet>
  );
}

export default ProfileSheet;