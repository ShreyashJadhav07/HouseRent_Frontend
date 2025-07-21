// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import { api, ENDPOINT } from "@/lib/api";
// import { LucideLoader2 } from "lucide-react";
// import { useRouter } from "next/navigation";
// // import { useDispatch, useSelector } from "react-redux";
// // import { userLoggedInDetails } from "@/redux/userSlice";
// import { toast } from "sonner";

// export default function LoginPage() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState("");
//     const router=useRouter();
  
  
   
        
 


//     const onSubmit = async () => {
//         try {
//             if (!email || !password) {
//                 toast("Please fill the fields");
//                 return;
//             }
//             setLoading(true);
//             const res = await api.post(ENDPOINT.login, {
//                 email: email,
//                 password: password,
//             });
//             if (res.data.status === "success") {
              
//                 toast("Logged in successfully!");
          
//                 router.push("/");
//             }
//         } catch (err) {
//             console.log("err: ", err.response.data.message);
//              toast("Invalid creds");
            
//         } finally {
//             setLoading(false);

//         }
//     };

//     return (
//         <div className="h-screen flex items-center justify-center">
//             <Card className="w-full max-w-sm bg-black text-white ">
//                 <CardHeader>
//                     <CardTitle className="text-2xl">Login</CardTitle>
//                     <CardDescription className="text-amber-50">
//                         Enter your email below to login to your account.
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex flex-col gap-4 bg-black text-white">
//                     <div className="flex flex-col gap-2">
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                             id="email"
//                             type="email"
//                             placeholder="m@example.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                              className="text-white"
                            
//                         />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <Label htmlFor="password">Password</Label>
//                         <Input
//                             id="password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="text-white"
//                         />
//                     </div>
//                 </CardContent>
//                 <CardFooter>
//                     <Button onClick={onSubmit} className="w-full cursor-pointer " >
//                         Sign in  {loading && <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />}
//                     </Button>
//                 </CardFooter>
//                 <div className="mt-4 text-center text-sm pb-6 flex justify-between px-6">
//                     <Link href="/resetPassword">Forgot Password?</Link>
//                     <div>
//                         Need an account?{" "}
//                         <Link href="/signup" className="underline">
//                             Sign Up
//                         </Link>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     );
// }
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { api, ENDPOINT } from "@/lib/api";
import { LucideLoader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { userLoggedInDetails } from "@/redux/userSlice";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const router = useRouter();
    const dispatch=useDispatch();

    const onSubmit = async () => {
        try {
            if (!email || !password) {
                toast("Please fill the fields");
                return;
            }
            setLoading(true);
            const res = await api.post(ENDPOINT.login, {
                email,
                password,
            });
            if (res.data.status === "success") {
                dispatch(userLoggedInDetails(res.data.user));
                toast("Logged in successfully!");
                router.push("/");
            }
        } catch (err) {
            console.log("err: ", err.response.data.message);
            toast("Invalid creds");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center px-4">
            {/* 👇 Text Above the Card */}
            <div className="text-center mb-10 max-w-xl">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to House Renting Website</h1>
                <p className="mt-3 text-gray-600 text-base">
                    Please login with your account credentials. If you don’t have an account yet, you can sign up below. We’re here to help you find or list your perfect rental property.
                </p>
            </div>

            {/* 👇 Login Card */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
                    <p className="text-gray-600 mt-1">
                        Enter your credentials to continue.
                    </p>
                </div>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 text-black"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 text-black"
                            required
                        />
                    </div>
                    <Button
                        onClick={onSubmit}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition"
                    >
                        Sign in {loading && <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />}
                    </Button>
                </div>
                <div className="mt-6 flex justify-between text-sm text-gray-600">
                    <Link href="/resetPassword" className="hover:underline">
                        Forgot Password?
                    </Link>
                    <div>
                        Need an account?{" "}
                        <Link href="/signup" className="underline font-medium text-purple-600">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
