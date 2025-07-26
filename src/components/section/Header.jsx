// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Bell, Home } from "lucide-react";
// import ProfileSheet from "../atom/ProfileSheet";
// import notificationpage from "@/app/notification/page";
// import { useEffect, useState } from "react";
// import { api, ENDPOINT } from "@/lib/api";
// import { useSelector } from "react-redux";
// import Image from "next/image";

// export const navigationItems = [
//   { name: "HOME", href: "/" },
//   { name: "LISTINGS", href: "/listings" },
//   { name: "LOCATIONS", href: "/locations" },
//   { name: "WISHLIST", href: "/watchlist" },
//   { name: "PREMIUM", href: "/premium" },

//   { name: "ABOUT US", href: "/about" },
//   { name: "SUBSCRIPTION", href: "/subscription" },
//   { name: "CONTACT US", href: "/contact" },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const userData=useSelector((state) => state.user);
//   const [hasNewNotifications,setHasNewNotifications]=useState(false);
//   useEffect(() =>{
//     const checkNotifications=async () =>{
//       try{
//         const res=await api.get(ENDPOINT.getNotifications);
//         const unread=res.data.notifications.some(noti => !noti.isRead);
//         setHasNewNotifications(unread);
//       } catch(err){
//           console.error("Failed to fetch notifications", err);
//           setHasNewNotifications(false);


//       }
//     };
//     if(userData.isLoggedIn){
//        checkNotifications();

//     }
   
//   }, [userData.isLoggedIn]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black shadow">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//            <Image
//     src="/house2.png"

    
//     alt="HomeEasy Logo"
//     width={90}
//     height={50}
    
//     priority
//   />
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-10">


        

//           </Link>

//           {/* Nav Links */}
//           <nav className="hidden lg:flex items-center justify-center space-x-10  text-fuchsia-600">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-medium  bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent "
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* ProfileSheet */}
//          <div className="flex items-center gap-4 relative">
//   {/* 🔔 Notification Bell */}
//   {userData.isLoggedIn && (
//   <Link href="/notification" className="relative">
//     <Bell className="h-6 w-6 text-gray-700" />
//     {hasNewNotifications  && (
//       <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
//     )}
//   </Link>
//   )}

//   {/* 👤 Profile */}
//   <ProfileSheet />
// </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import ProfileSheet from "../atom/ProfileSheet";
import { useEffect, useState } from "react";
import { api, ENDPOINT } from "@/lib/api";
import { useSelector } from "react-redux";
import Image from "next/image";

export const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "LISTINGS", href: "/listings" },
  { name: "LOCATIONS", href: "/locations" },
  { name: "WISHLIST", href: "/watchlist" },
  { name: "PREMIUM", href: "/premium" },
  { name: "ABOUT US", href: "/about" },
  { name: "SUBSCRIPTION", href: "/subscription" },
  { name: "CONTACT US", href: "/contactUS" },

];

export default function Header() {
  const pathname = usePathname();
  const userData = useSelector((state) => state.user);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  useEffect(() => {
    const checkNotifications = async () => {
      try {
        const res = await api.get(ENDPOINT.getNotifications);
        const unread = res.data.notifications.some((noti) => !noti.isRead);
        setHasNewNotifications(unread);
      } catch (err) {
        console.error("Failed to fetch notifications", err);
        setHasNewNotifications(false);
      }
    };

    if (userData.isLoggedIn) {
      checkNotifications();
    }
  }, [userData.isLoggedIn]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white text-black shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/house2.png"
                alt="HomeEasy Logo"
                width={90}
                height={50}
                priority
              />
            </Link>
          </div>

    
          <div className="flex-1 flex justify-center">
            <nav className="hidden lg:flex items-center space-x-10 text-fuchsia-600">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

         
          <div className="flex items-center gap-4">
            {userData.isLoggedIn && (
              <Link href="/notification" className="relative">
                <Bell className="h-6 w-6 text-gray-700" />
                {hasNewNotifications && (
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
              </Link>
            )}
            <ProfileSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
