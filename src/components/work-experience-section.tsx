import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const workExperiences = [
  {
    title: "IT FullStack Developer",
    company: "PT Manjo Teknologi Indonesia",
    location: "Jakarta Selatan, Indonesia",
    period: "Mar 2026 - Present",
    type: "Full Time",
    description: [
      "Mengembangkan dan mengimplementasikan lebih dari 5 fitur untuk sistem Point of Sale (POS) menggunakan Svelte dan Golang guna mendukung operasional pembayaran digital.",
      "Membantu lebih dari 3 proses integrasi merchant dan kolaborasi teknis untuk implementasi kerja sama partnership.",
      "Mengembangkan dan mengimplementasikan lebih dari 2 fitur baru untuk sistem aggregator menggunakan Svelte."
    ],
    technologies: ["Svelte","Golang", "PostgreSQL / MySQL", "Redis", "Docker"],
  },
  {
    title: "IT Staff - FullStack Web Dev",
    company: "PT Autochem Industry",
    location: "Tangerang, Indonesia",
    period: "Dec 2025 - Mar 2026",
    type: "Internship",
    description: [
      "Mengembangkan dan memelihara lebih dari 3 fitur pada website dashboard production menggunakan framework web CodeIgniter, AJAX, dan JavaScript.",
      "Mengembangkan lebih dari 5 fitur untuk Knowledge Management System (KMS) berbasis RAG menggunakan Ollama sebagai model AI, pgvector sebagai vector database, CodeIgniter sebagai framework web, serta Python untuk parsing data."
    ],
    technologies: ["CodeIgniter","PostgreSQL", "PHP", "PGVector / Vector Database", "Ollama / RAG", "JavaScript", "AJAX"],
  },
  {
    title: "Programmer Junior",
    company: "Nusantara Sakti Group",
    location: "Jakarta Barat, Indonesia",
    period: "Sep 2025 - Dec 2025",
    type: "Contract",
    description: [
      "Berpartisipasi dalam pengembangan fitur baru untuk sistem ERP perusahaan.",
      "Membuat laporan menggunakan Eclipse BIRT dengan pengambilan data melalui query SQL."
    ],
    technologies: ["Ksystem","MySQL", "Eclipse BIRT", "Linux", "Superset Dashboard"],
  },
  {
    title: "Laboratory Assistant of Object Oriented Programming",
    company: "Universitas Jenderal Soedirman",
    location: "Purbalingga, Indonesia",
    period: "Sep 2023 - Des 2023",
    type: "Part Time",
    description: [
      "Membimbing 40 praktikan selama sesi praktik dua mingguan, memastikan akuisisi keterampilan yang efektif melalui dukungan langsung",
      "Menyusun dan memimpin penilaian praktik dua kali setiap semester untuk mengevaluasi efektivitas pelatihan dan kinerja peserta",
      "Menilai sekitar 8 tugas laboratorium dan 2 ujian praktik untuk setiap praktikan, serta memberikan umpan balik personal guna meningkatkan kemampuan teknis mereka",
    ],
    technologies: ["Netbeans","Java"],
  },
  {
    title: "Software Tester",
    company: "Kementerian Komunikasi dan Informatika Republik Indonesia",
    location: "Jakarta, Indonesia",
    period: "Jul 2023 - Agu 2023",
    type: "Internship",
    description: [
      "Melakukan pengujian manual pada aplikasi mobile berbasis Flutter dengan memverifikasi 8 fitur utama dan melaporkan sekitar 6 bug, sehingga berkontribusi pada peningkatan fungsionalitas dan pengalaman pengguna",
    ],
    technologies: ["Dart", "Flutter", "Git", "Gitlab", "Software Testing Lifecycle"],
  },
  {
    title: "Laboratory Assistant of Algorithm & Programming",
    company: "Universitas Jenderal Soedirman",
    location: "Purbalingga, Indonesia",
    period: "Sep 2022 - Des 2022",
    type: "Part Time",
    description: [
      "Membimbing 40 praktikan selama sesi praktik dua mingguan, memastikan akuisisi keterampilan yang efektif melalui dukungan langsung",
      "Menyusun dan memimpin penilaian praktik dua kali setiap semester untuk mengevaluasi efektivitas pelatihan dan kinerja peserta",
      "Menilai sekitar 8 tugas laboratorium dan 2 ujian praktik untuk setiap praktikan, serta memberikan umpan balik personal guna meningkatkan kemampuan teknis mereka",
    ],
    technologies: ["C++/C", "Code::Blocks", "Algoritma"],
  },
];

export function WorkExperienceSection() {
  return (
    <section id="pengalaman" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pengalaman
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pengalaman saya ketika kerja, magang kerja praktik, dan menjadi asisten praktikum
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {workExperiences.map((experience, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                      {experience.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-teal-600 font-medium mb-2">
                      <Building className="h-4 w-4" />
                      {experience.company}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800"
                  >
                    {experience.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-teal-500 mt-1.5 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
