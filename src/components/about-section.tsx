import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Github } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="pt-36 pb-32 px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full lg:w-1/2">
            <h4 className="mb-3 text-lg font-bold uppercase text-teal-600">Tentang Saya</h4>
            <h2 className="mb-5 max-w-md text-3xl font-bold text-gray-800 lg:text-4xl">
              Lulusan Informatika dari Universitas Jenderal Soedirman
            </h2>
            <p className="max-w-xl text-base font-medium text-gray-600 lg:text-lg">
              Minat utama saya adalah di pengembangan perangkat lunak, khususnya pengembangan web dan backend dan juga pengembangan model Machine Learning
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 lg:pt-10 lg:text-3xl">Mari berteman</h3>
            <p className="mb-6 text-base font-medium text-gray-600 lg:text-lg">
              Saya suka belajar hal-hal baru dan selalu bersemangat mencoba teknologi terbaru. Jika ingin berdiskusi
              atau berkolaborasi, jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ranggadwimahendra/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com/ranggad.mah/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/rangguy" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
