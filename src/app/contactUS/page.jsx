"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function PropertyInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("We will Get Back to You")
  };

  return (
    <section className="relative h-screen w-full bg-black text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img12.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Inquire Property</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="pl-12 h-12 bg-white text-black placeholder:text-gray-500 border-none rounded-full shadow"
              required
            />
          </div>

          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5 text-gray-500" />
            </div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="pl-12 h-12 bg-white text-black placeholder:text-gray-500 border-none rounded-full shadow"
              required
            />
          </div>

          <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Phone className="w-5 h-5 text-gray-500" />
            </div>
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="pl-12 h-12 bg-white text-black placeholder:text-gray-500 border-none rounded-full shadow"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white text-base font-medium rounded-full transition duration-200 shadow-md"
          >
            SEND INQUIRY
          </Button>
        </form>
      </div>
    </section>
  );
}
