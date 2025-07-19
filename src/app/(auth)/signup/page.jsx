"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, ENDPOINT } from "@/lib/api";
import { LucideLoader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "sonner";



export default function LoginForm(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const  [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const[loading,setLoading]=useState(false)
    const router=useRouter();
    const onSubmit=async () =>{
        setLoading(true);
        if(password !== confirmPassword){
            toast("Password does not match");
            setLoading(true);
            return;

        }
        try{
            const res=await api.post(ENDPOINT.signup,{
                name,
                email,
                password,
                confirmPassword,

            })
            if(res.data?.status === "success"){
                toast("Account Created");
                router.push("/");
                
            }
            else {
                console.log("message:", res.data?.message);
                toast(res.data?.message || "Signup failed");
            }
        }catch (err) {
            if (err.response?.data?.message) {
                console.log("err:", err.response.data.message);
                toast(err.response.data.message);
            } else {
                console.log("err:", err);
                toast("Something went wrong");
            }
            } finally {
            setLoading(false);
        }


    }
    return(
        <div className="h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm bg-black text-white">
                 <CardHeader>
                 <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                   </CardHeader>
                   <CardContent>
                    <div className="grid gap-4">
                        <div className="gird gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="text-black"

                            
                            />
                            

                        </div>
                        <div className="gird gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="text-white"

                            
                            />
                            

                        </div>
                            <div className="gird gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                            id="password"
                            type="password"
                            placeholder="m@example.com"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="text-white"

                            
                            />
                            

                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="text-black"
                            />
                        </div>
                          <Button onClick={onSubmit} className="w-full cursor-pointer" disabled={loading}>
                            {loading ? (
                                <>
                                    Creating...
                                    <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                                </>
                            ) : (
                                "Create an account"
                            )}
                        </Button>



                    </div>
                      <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Login
                        </Link>
                    </div>
                   </CardContent>



            </Card>

        </div>
    )
}