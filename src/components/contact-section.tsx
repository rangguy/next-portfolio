"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, Loader2 } from "lucide-react";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setShowSuccess(true);

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="pt-36 pb-16">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-600 mb-2">Kontak</h4>
            <h2 className="font-bold text-gray-800 text-3xl mb-4">
              Hubungi Saya
            </h2>
            <p className="font-medium text-gray-600">
              Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan
              atau ingin berdiskusi lebih lanjut. Saya siap membantu Anda!
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:mx-auto mb-6">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              <strong>Informasi:</strong> Formulir kontak ini masih dalam tahap
              pengembangan dan belum berfungsi sepenuhnya. Untuk saat ini,
              silakan hubungi saya melalui media sosial atau email langsung.
            </AlertDescription>
          </Alert>
        </div>

        {showSuccess && (
          <div className="w-full lg:w-2/3 lg:mx-auto mb-4">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                <strong>Berhasil!</strong> Pesan Anda berhasil terkirim.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 lg:mx-auto">
          <div className="space-y-6">
            <div>
              <Label
                htmlFor="name"
                className="text-base font-bold text-teal-600"
              >
                Nama
              </Label>
              <Input
                type="text"
                id="name"
                name="nama"
                required
                className="mt-1 bg-slate-200 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-base font-bold text-teal-600"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 bg-slate-200 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
            <div>
              <Label
                htmlFor="pesan"
                className="text-base font-bold text-teal-600"
              >
                Pesan
              </Label>
              <Textarea
                id="pesan"
                name="pesan"
                required
                className="mt-1 bg-slate-200 focus:ring-teal-600 focus:border-teal-600 min-h-32"
              />
            </div>
            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teal-600 hover:bg-teal-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Kirim"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
