import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  ArrowDown,
  Briefcase,
  Clock,
  Layers,
} from "lucide-react";

export const AboutSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const careerFlowId = [
    {
      step: "01",
      company: "PT Telkom Satelit Indonesia",
      shortCompany: "Telkomsat",
      period: "Jul — Nov 2024",
      duration: "5 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Back-End Web Developer",
      highlight:
        "Merancang dan membangun 16 REST API berkeandalan tinggi untuk sistem inventaris workshop dan pencatatan hasil uji perangkat satelit.",
      tags: ["Laravel", "REST API", "MySQL"],
    },
    {
      step: "02",
      company: "PT Cipta Krida Bahari",
      shortCompany: "CKB Group",
      period: "Jun — Okt 2025",
      duration: "5 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Full-Stack Web Developer",
      highlight:
        "Mengembangkan modul pencatatan konsumsi P3K dan monitoring K3 fasilitas logistik nasional secara real-time.",
      tags: ["Laravel", "Vue.js", "MySQL"],
    },
    {
      step: "03",
      company: "PT Sinergi Informatika Semen Indonesia",
      shortCompany: "PT SISI",
      period: "Nov 2025 — Mei 2026",
      duration: "6 Bulan",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Software Engineer & Data Engineer",
      highlight:
        "Mengembangkan Data Validation System (Solo Dev) dan pipeline otomatis Apache Airflow pada datamart korporat.",
      tags: ["Laravel", "React.js", "Python", "Airflow"],
    },
    {
      step: "04",
      company: "IT Consulting Client & Confidential Enterprise Project",
      shortCompany: "IT Consulting Client & Confidential Enterprise Project",
      period: "Agustus 2026",
      duration: "4 — 5 Minggu",
      type: "Project-Based",
      typeBadge: "bg-[#D5BDAF]/50 text-[#292722] border-[#D5BDAF]",
      role: "Software Engineer",
      highlight:
        "Melakukan migrasi frontend enterprise 4 domain utama yang terbagi menjadi 30 modul bisnis dan 49 alur workflow ke Single Page Application React.js.",
      tags: ["React.js", "SPA", "Tailwind CSS"],
    },
  ];

  const careerFlowEn = [
    {
      step: "01",
      company: "PT Telkom Satelit Indonesia",
      shortCompany: "Telkomsat",
      period: "Jul — Nov 2024",
      duration: "5 Months",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Back-End Web Developer",
      highlight:
        "Designed and engineered 16 high-reliability REST APIs for workshop inventory and satellite equipment test result logging systems.",
      tags: ["Laravel", "REST API", "MySQL"],
    },
    {
      step: "02",
      company: "PT Cipta Krida Bahari",
      shortCompany: "CKB Group",
      period: "Jun — Oct 2025",
      duration: "5 Months",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Full-Stack Web Developer",
      highlight:
        "Developed real-time First Aid Kit consumption tracking and national logistics HSE / K3 monitoring modules.",
      tags: ["Laravel", "Vue.js", "MySQL"],
    },
    {
      step: "03",
      company: "PT Sinergi Informatika Semen Indonesia",
      shortCompany: "PT SISI",
      period: "Nov 2025 — May 2026",
      duration: "6 Months",
      type: "Internship",
      typeBadge: "bg-[#EDEDE9] text-[#292722] border-[#D6CCC2]",
      role: "Software Engineer & Data Engineer",
      highlight:
        "Developed Data Validation System (Solo Dev) and automated Apache Airflow pipelines on the corporate datamart.",
      tags: ["Laravel", "React.js", "Python", "Airflow"],
    },
    {
      step: "04",
      company: "IT Consulting Client & Confidential Enterprise Project",
      shortCompany: "IT Consulting Client & Confidential Enterprise Project",
      period: "August 2026",
      duration: "4 — 5 Weeks",
      type: "Project-Based",
      typeBadge: "bg-[#D5BDAF]/50 text-[#292722] border-[#D5BDAF]",
      role: "Software Engineer",
      highlight:
        "Migrated enterprise frontend across 4 core domains, 30 business modules, and 49 workflows to a React.js Single Page Application.",
      tags: ["React.js", "SPA", "Tailwind CSS"],
    },
  ];

  const careerFlow = isEn ? careerFlowEn : careerFlowId;

  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 bg-[#F5EBE0] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#E3D5CA]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#292722]">
              {isEn
                ? "02. Career Journey Summary (~1.5 Years)"
                : "02. Ringkasan Perjalanan Karir (~1.5 Tahun)"}
            </h2>
          </div>
        </div>

        {/* Top Summary Banner: Breakdown Breakdown 1.5 Tahun */}
        <div className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-6 sm:p-8 mb-12 shadow-sm">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            {/* Left: Highlight Total */}
            <div className="md:col-span-5 space-y-2.5 border-b md:border-b-0 md:border-r border-[#E3D5CA] pb-6 md:pb-0 md:pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D5BDAF]/30 border border-[#D5BDAF] text-xs font-bold text-[#292722] uppercase tracking-wide">
                <Briefcase className="w-4 h-4 text-[#292722]" />
                <span>{isEn ? "Accumulated Experience" : "Akumulasi Pengalaman"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#292722] tracking-tight">
                {isEn ? "Total ~1.5 Years Experience" : "Total ~1.5 Tahun Pengalaman"}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-relaxed">
                {isEn
                  ? "Recap of ~1.5 years of professional experience across 4 companies in diverse sectors (IT consulting, Telecommunication & Satellite, Transportation & Logistics)."
                  : "Rekapitulasi pengalaman profesional selama ~1.5 tahun yang terbagi di 4 perusahaan lintas industri (IT consulting industry, Telecommunication & Satelite Industry, Transportation & Logistics Industry)."}
              </p>
            </div>

            {/* Right: Flow ke Bawah (4 Perusahaan -> 3 Internship & 1 Project-Based) */}
            <div className="md:col-span-7 flex flex-col items-center w-full">
              {/* Node Atas: 4 Perusahaan */}
              <div className="w-full max-w-sm p-3.5 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] text-center shadow-xs">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-[#292722]">4</span>
                  <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#292722]">
                    {isEn ? "Companies" : "Perusahaan"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#292722] font-semibold mt-1">
                  {isEn
                    ? "Total ~1.5 Years of Professional Work Experience"
                    : "Total ~1.5 Tahun Pengalaman Kerja Profesional"}
                </p>
              </div>

              {/* Connector Garis & Panah Cabang ke Bawah */}
              <div className="relative w-full max-w-sm my-2 flex flex-col items-center">
                {/* Garis vertikal atas */}
                <div className="w-0.5 h-3 bg-[#D5BDAF]" />

                {/* Garis horizontal pembagi */}
                <div className="relative w-3/4 flex items-center justify-between border-t-2 border-[#D5BDAF]">
                  {/* Panah cabang kiri (Internship) */}
                  <div className="absolute -top-[1px] left-0 w-0.5 h-2.5 bg-[#D5BDAF]" />
                  <div className="absolute top-1.5 -left-1.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#292722]" />
                  </div>

                  {/* Panah cabang kanan (Project-Based) */}
                  <div className="absolute -top-[1px] right-0 w-0.5 h-2.5 bg-[#D5BDAF]" />
                  <div className="absolute top-1.5 -right-1.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#292722]" />
                  </div>
                </div>
              </div>

              {/* Node Bawah: 3 Internship & 1 Project Based */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {/* Cabang Kiri: 3 Internship */}
                <div className="p-4 rounded-lg bg-[#F5EBE0] border border-[#E3D5CA] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E3D5CA] pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-[#292722]">3</span>
                        <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#292722]">
                          Internship
                        </span>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]">
                        {isEn ? "16 Months" : "16 Bulan"}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-[#292722] font-medium">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722] font-bold">PT Telkom Satelit Indonesia</strong> ({isEn ? "5 Months" : "5 Bulan"})</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722] font-bold">PT Cipta Krida Bahari</strong> ({isEn ? "5 Months" : "5 Bulan"})</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722] font-bold">PT Sinergi Informatika Semen Indonesia</strong> ({isEn ? "6 Months" : "6 Bulan"})</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cabang Kanan: 1 Project Based */}
                <div className="p-4 rounded-lg bg-[#F5EBE0] border border-[#D5BDAF] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E3D5CA] pb-2.5 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-[#292722]">1</span>
                        <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#292722]">
                          Project-Based
                        </span>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#D5BDAF]/40 text-[#292722] border border-[#D5BDAF]">
                        {isEn ? "4 — 5 Weeks" : "4 — 5 Minggu"}
                      </span>
                    </div>

                    <ul className="space-y-2 text-sm text-[#292722] font-medium">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-sm bg-[#292722] mt-1.5 flex-shrink-0" />
                        <span><strong className="text-[#292722] font-bold">IT Consulting Client & Confidential Enterprise Project</strong> ({isEn ? "4 — 5 Weeks" : "4 — 5 Minggu"})</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Progression Flow: 4 Steps */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#292722] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#292722]" />
              <span>{isEn ? "Career Progression" : "Perjalanan Karir"}</span>
            </h4>
            <span className="text-xs sm:text-sm text-[#292722] font-semibold hidden sm:inline">
              {isEn ? "Chronological order from 2024 through 2026" : "Urutan perjalanan dari 2024 hingga 2026"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {careerFlow.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#E3D5CA] bg-[#EDEDE9] p-5 sm:p-6 flex flex-col justify-between hover:border-[#292722] transition-all duration-300 relative group shadow-sm"
              >
                {/* Step & Duration Header */}
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E3D5CA]">
                    <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-[#F5EBE0] text-[#292722] border border-[#D6CCC2]">
                      {isEn ? "Experience" : "Pengalaman"} {item.step}
                    </span>

                    <span
                      className={`text-xs sm:text-sm px-2.5 py-1 rounded border font-bold ${item.typeBadge}`}
                    >
                      {item.type}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1.5 mb-3.5">
                    <span className="text-xs sm:text-sm text-[#292722] font-bold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#292722]" />
                      {item.duration} ({item.period})
                    </span>

                    <h5 className="text-lg sm:text-xl font-bold text-[#292722] leading-snug">
                      {item.company}
                    </h5>

                    <p className="text-sm sm:text-base font-bold text-[#292722]">
                      {item.role}
                    </p>
                  </div>

                  {/* Highlight */}
                  <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-relaxed mb-5">
                    {item.highlight}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="pt-3.5 border-t border-[#E3D5CA]/70 flex flex-wrap gap-2">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs rounded bg-[#F5EBE0] text-[#292722] border border-[#D6CCC2] font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Section 3 for Details */}
        <div className="mt-12 text-center">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs uppercase font-semibold bg-[#292722] text-[#EDEDE9] hover:bg-[#D5BDAF] hover:text-[#292722] transition-all shadow-sm"
          >
            <span>
              {isEn
                ? "View Detailed Implementations & Project Screenshots"
                : "Lihat Detail Implementasi & Tangkapan Layar Proyek"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
