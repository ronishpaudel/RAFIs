"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Loader2,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  PhoneIcon,
} from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);

    // Add the access key to the form data
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Header />
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 my-10 mb-14">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required />
                </div>
                <Button type="submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {formStatus === "success" && (
                  <p className="text-green-600 dark:text-green-400">
                    Message sent successfully!
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-600 dark:text-red-400">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300">
                  Nepalgunj- 05, Banke, Nepal
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300">
                  +977-9801222762, +977-9801222763
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <a
                  href="mailto:contact@rafisnepal.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  contact@rafisnepal.com
                </a>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  Social Networks
                </h3>
                <div>
                  <a
                    href="https://facebook.com/regronepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                    <p>Regmi Agro and Food Industries Pvt. Ltd. - RAFIs</p>
                  </a>
                  <a
                    href="https://instagram.com/regronepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 py-3"
                  >
                    <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700" />
                    <p>regronepal</p>
                  </a>
                  <a
                    href="mailto:contact@rafisnepal.com"
                    className="flex items-center space-x-2 pb-2"
                  >
                    <MailIcon className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                    <p>Mail us</p>
                  </a>
                  <a
                    href="tel:+977-9801222762, +977-9801222763"
                    className="flex items-center space-x-2 pb-2"
                  >
                    <PhoneIcon className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                    <p>+977-9801222762, +977-9801222763</p>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
