"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { LucideLoader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const router = useRouter();

    const handleForgetPassword = async () => {
        setLoading(true);
        try {
            const res = await api.patch(ENDPOINT.forgetPassword, { email });
            if (res.data.status === "success") {
                toast("OTP sent successfully!");
                setShowDialog(true);
            } else {
                toast("Failed to send OTP. Try Again");
            }
        } catch (err) {
            if (err?.response?.data?.message === "no user with this email id found") {
                toast("Email doesn't exist");
            } else {
                toast("Error sending OTP");
                console.error("Error sending OTP:", err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        setLoading(true);
        if (!otp || !newPassword || !confirmNewPassword) {
            toast("Please fill all fields");
            setLoading(false);
            return;
        }
        if (newPassword !== confirmNewPassword) {
            toast("New password and Confirm password do not match");
            setLoading(false);
            return;
        }

        try {
            const res = await api.patch(ENDPOINT.resetPassword, {
                email,
                password: newPassword,
                confirmPassword: confirmNewPassword,
                otp,
            });

            if (res.data.status === "success") {
                toast("Password reset successfully!");
                setShowDialog(false);
                router.push("/login");
            } else {
                toast("Failed to reset password. Try Again");
            }
        } catch (err) {
            if (err.response?.data?.message === "otp is not found or wrong") {
                toast("Invalid OTP");
            } else {
                toast("Error resetting password");
                console.error("Error resetting password:", err);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Outer Layout */}
            <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center px-4">
                <div className="text-center mb-10 max-w-xl">
                    <h1 className="text-4xl font-bold text-gray-800">Reset Your Password</h1>
                    <p className="mt-3 text-gray-600 text-base">
                        Enter your email to receive a One Time Password (OTP).
                    </p>
                </div>

                {/* Card */}
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Forgot Password</h2>
                        <p className="text-gray-600 mt-1">
                            Enter your email to receive OTP
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="email" className="text-gray-700">Email</Label>
                            <Input
                                type="email"
                                placeholder="m@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 text-black"
                            />
                        </div>
                        <Button
                            onClick={handleForgetPassword}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition"
                        >
                            {loading ? (
                                <>
                                    Sending OTP...
                                    <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                                </>
                            ) : (
                                "Send OTP"
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* OTP + Reset Password Dialog */}
            <Dialog open={showDialog} onOpenChange={() => setShowDialog(false)}>
                <DialogOverlay>
                    <DialogContent className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reset Password</h2>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="otp" className="text-gray-700">OTP</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="mt-1 text-black"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="newPassword" className="text-gray-700">New Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="mt-1 text-black"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="confirmNewPassword" className="text-gray-700">Confirm Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    className="mt-1 text-black"
                                    required
                                />
                            </div>
                            <Button
                                onClick={handleResetPassword}
                                className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition"
                            >
                                {loading ? (
                                    <>
                                        Submitting...
                                        <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </div>
                    </DialogContent>
                </DialogOverlay>
            </Dialog>
        </>
    );
}

export default ResetPassword;
