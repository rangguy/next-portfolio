import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText } from "lucide-react"
import { Certificate } from "crypto"

const projects = [
  {
    title: "Sistem Pendukung Keputusan dengan Metode SMART dan MOORA",
    description:
      "Sistem Pendukung Keputusan yang dibuat menggunakan metode SMART dan MOORA untuk melakukan penilaian kinerja produk dengan tiga kriteria keuangan, yaitu Return On Investment, Net Profit Margin, dan Rasio Efisiensi. Sistem ini dibangun menggunakan React sebagai Frontend dan Go sebagai Backend serta PostgreSQL untuk databasenya.",
    image: "/images/spk.png",
    liveUrl: "https://frontend-profitrack.vercel.app/",
    githubUrl: "https://github.com/rangguy/frontend-profitrack",
  },
  {
    title: "API Crowd Funding",
    description:
      "Membuat API untuk aplikasi penggalangan dana menggunakan salah satu payment gateway, yaitu Midtrans. Menggunakan JWT untuk authentikasi, PostgreSQL sebagai DBMSnya, dan Golang sebagai bahasa pemrogramannya dengan Gin framework.",
    image: "/images/crowd-funding.png",
    docsUrl: "https://documenter.getpostman.com/view/29135786/2sAYkLkbZf",
    githubUrl: "https://github.com/rangguy/bwa-crowd-funding-backend",
  },
  {
    title: "Mastering Microservice Golang: Online Soccer Field Booking",
    description:
      "Membuat aplikasi Backend dengan arsitektur microservice menggunakan bahasa Golang (Gin Framework), PostgreSQL sebagai database, Docker untuk environment, Jenkins untuk CI/CD pipelines, Kafka sebagai message broker, Midtrans untuk payment gateway.",
    image: "/iamges/flow.png",
    certificateUrl: "https://drive.google.com/file/d/1Tp0kAJse-FAJj_DUpNxMlH5D6tvhRyk7/view?usp=sharing",
    githubUrl: "https://github.com/rangguy/user-service-minisoccer",
  },
  {
    title: "Laravel 11, Breeze, Spatie: Bikin Web Platform Online Course",
    description:
      "Kelas Online dari BuildWithAngga.com yang mempelajari Laravel 11 dengan membuat sebuah projek online course atau kelas online menggunakan Laravel 11 sebagai tech stack utamanya, menggunakan Laravel Breeze sebagai authentikasinya, DBMS menggunakan MySQL, dan Docker untuk menjalankannya.",
    image: "/images/bwa-online-course.png",
    liveUrl: "https://online-course.ranggadwimah.xyz/",
    certificateUrl: "https://drive.google.com/file/d/1Km3GtDQ8XnRYDQr63X-wCSBmAuSosKvm/view?usp=sharing",
    githubUrl: "https://github.com/rangguy/online-course-bwa",
  },
  {
    title: "FullStack API, Web, CMS & Docker Multi-Container Architecture",
    description:
      "Kelas Online dari BuildWithAngga.com dengan membuat sebuah multi-container architecture dengan studi kasus simple contact form. Backend menggunakan Golang, Frontend menggunakan Next js, dan untuk CMS menggunakan Laravel. Semua aplikasi berjalan di Docker dengan multi-container.",
    image: "/images/cms-contact-form.png",
    certificateUrl: "https://drive.google.com/file/d/1_YlPGTlaIOF2NTwOshsz_phXSFdH2gtA/view?usp=sharing",
    githubUrl: "https://github.com/rangguy/multi-container-contact-form",
  },
  {
    title: "Belajar Fundamental Back-End dengan JavaScript - Dicoding",
    description:
      "Kelas dari dicoding.com mempelajari cara membuat aplikasi Back-End berbasiskan Node.JS dengan menggunakan Hapi Framework. Tugas akhir dari kelas ini adalah membuat aplikasi Backend berupa Restful API dengan menerapkan teknologi database, storage message broker, dan caching, serta memiliki fitur authentication dan authorization menggunakan token JWT.",
    image: "/images/musicapp.png",
    certificateUrl: "https://drive.google.com/file/d/1bF0MzUwl9w_k1UMjWMfpFfjTu3dtrIsr/view?usp=sharing",
    githubUrl: "https://github.com/rangguy/open-music-app",
  },
  {
    title: "Belajar Fundamental Aplikasi Flutter - Dicoding",
    description:
      "Kelas dari dicoding.com mempelajari cara membuat aplikasi cross-platform menggunakan framework Flutter. Tugas akhir dari kelas ini adalah membuat sebuah aplikasi Flutter yang dapat mengambil data dari Web API, menyimpan data secara lokal, menampilkan sebuah notifikasi, serta terdapat testing.",
    image: "/images/cafrestapp.png",
    certificateUrl: "https://drive.google.com/file/d/1hSLnviAFU9vkY05hGlF9XQ3J-hlr_9mT/view?usp=sharing",
    githubUrl: "https://github.com/rangguy/restaurant_app",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-600 mb-2">Portfolio</h4>
            <h2 className="font-bold text-gray-800 text-3xl mb-4">Projek dan Sertifikat</h2>
            <p className="font-medium text-gray-600">
              Di bawah ini merupakan beberapa projek dan beberapa sertifikat yang pernah saya dapatkan baik dari
              perkuliahan maupun bootcamp dan kelas online
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl hover:text-teal-600 transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.docsUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-1" />
                        Docs
                      </a>
                    </Button>
                  )}
                  {project.certificateUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-1" />
                        Sertifikat
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
