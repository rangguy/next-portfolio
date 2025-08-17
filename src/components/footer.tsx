import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-24 pb-12 px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
            <h2 className="font-bold text-4xl text-white mb-5">Rangga</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
            <p>ranggadwi100@gmail.com</p>
          </div>
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/2">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-teal-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-base hover:text-teal-400 transition-colors"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-teal-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block text-base hover:text-teal-400 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5 gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-slate-300 text-slate-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/ranggadwimahendra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-300 text-slate-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              asChild
            >
              <a
                href="https://www.instagram.com/ranggad.mah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-slate-300 text-slate-300 hover:border-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              asChild
            >
              <a
                href="https://github.com/rangguy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
            <a
              href="https://www.instagram.com/ranggad.mah/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-teal-400 hover:text-teal-300"
            >
              Rangga Dwi Mahendra
            </a>
            , menggunakan{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sky-400 hover:text-sky-300"
            >
              Tailwind CSS
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
