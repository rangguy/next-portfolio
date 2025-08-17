"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center z-50 transition-all duration-300 px-10 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <div className="py-6">
            <a href="#home" className="font-bold text-lg text-teal-600 block">
              Rangga
            </a>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-600 transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-600 transition-colors"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#pengalaman"
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-600 transition-colors"
                  >
                    Pengalaman
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-600 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-gray-800 py-2 mx-8 flex group-hover:text-teal-600 transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
