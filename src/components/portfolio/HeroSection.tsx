import { PERSONAL_INFO } from "@/data/portfolioData";
import { PERSONAL_INFO_EN } from "@/data/portfolioDataEn";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Download, CheckCircle2 } from "lucide-react";

export const HeroSection = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const info = isEn ? PERSONAL_INFO_EN : PERSONAL_INFO;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-8 bg-[#EDEDE9] border-b border-[#E3D5CA]">
      <div className="max-w-7xl mx-auto">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E3D5CA] text-xs text-[#68635C]">
          <div className="flex flex-wrap items-center gap-5">
            {[info.availabilityText1, info.availabilityText2].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
                <span className="font-semibold uppercase tracking-wide text-[#292722]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Top Identity & Educational Background */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-[#E3D5CA]">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#292722] leading-[1.08] uppercase">
              {info.name} 😊
            </h1>
          </div>

          {/* Educational Background Card - Tetap Ada di Atas */}
          <div className="p-4 rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] max-w-xl w-full flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 rounded-lg bg-[#EDEDE9] border border-[#D6CCC2] text-[#292722] mt-0.5 flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#292722] block">
                {isEn ? "Educational Background" : "Latar Belakang Pendidikan"}
              </span>
              <p className="text-xs sm:text-sm text-[#292722] font-medium leading-normal">
                {isEn ? (
                  <>
                    Bachelor of Applied Science in Software Engineering Technology —{" "}
                    <strong className="text-[#292722] font-bold">IPB University</strong> (Class of 2025)
                  </>
                ) : (
                  <>
                    Sarjana Terapan Komputer —{" "}
                    <strong className="text-[#292722] font-bold">IPB University</strong> (Lulus 2025)
                  </>
                )}
              </p>
              <div className="pt-1.5">
                <a
                  href={info.diplomaPath || PERSONAL_INFO.diplomaPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#292722] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isEn ? "View / Download Ijazah (PDF)" : "Lihat / Unduh Dokumen Ijazah (PDF)"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card: Data Engineering & ETL */}
          <div className="rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#292722] transition-all">
            <div>
              {/* Title & Category */}
              <h3 className="text-lg sm:text-xl font-bold text-[#292722] tracking-tight mb-1">
                Data Engineering & ETL
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#68635C] mb-3.5">
              </p>

              {/* Main Description */}
              <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-relaxed mb-4">
                {isEn
                  ? "Experienced in Data Engineering, specifically end-to-end ETL (Extract, Transform, Load) pipelines, through professional experience at PT Sinergi Informatika Semen Indonesia and Data Engineering training at PT Dibimbing Digital Indonesia."
                  : "Memiliki pengalaman dalam bidang Data Engineering, khususnya proses ETL (Extract, Transform, Load), melalui pengalaman profesional di PT Sinergi Informatika Semen Indonesia serta program pelatihan Data Engineering di PT Dibimbing Digital Indonesia."}
              </p>

              {/* Callout: Apa itu ETL? */}
              <div className="p-3.5 rounded-lg border border-[#D6CCC2] bg-[#EDEDE9] mb-4">
                <div className="text-xs sm:text-sm font-bold text-[#292722] mb-1">
                  <span>{isEn ? "What is ETL?" : "Apa itu ETL?"}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292722] font-medium leading-relaxed">
                  {isEn
                    ? "ETL is the process of extracting data from various sources, cleaning and transforming it for accuracy and structure, then loading it into a database ready for reporting and business analytics."
                    : "ETL adalah proses mengambil data dari berbagai sumber, membersihkan dan mengolahnya agar akurat serta terstruktur, kemudian menyimpannya ke dalam database sehingga siap digunakan untuk pelaporan dan analisis bisnis."}
                </p>
              </div>

              {/* Subsection: Pengalaman & Pelatihan */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                  {isEn ? "Experience & Training" : "Pengalaman & Pelatihan"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#292722] font-medium leading-relaxed">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#292722] flex-shrink-0" />
                    <span>
                      <strong className="font-bold text-[#292722]">
                        PT Sinergi Informatika Semen Indonesia
                      </strong>{" "}
                      <span className="text-[#68635C]">({isEn ? "Professional" : "Profesional"})</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#292722] flex-shrink-0" />
                    <span>
                      <strong className="font-bold text-[#292722]">
                        PT Dibimbing Digital Indonesia
                      </strong>{" "}
                      <span className="text-[#68635C]">({isEn ? "Training" : "Pelatihan"})</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Subsection: Tools & Technologies */}
            <div className="pt-4 mt-4 border-t border-[#E3D5CA]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "SQL", "Airflow", "PostgreSQL", "Data Governance", "Data Quality", "Datamart"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-bold rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card: Web Application Development */}
          <div className="rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#292722] transition-all">
            <div>
              {/* Title & Category */}
              <h3 className="text-lg sm:text-xl font-bold text-[#292722] tracking-tight mb-1">
                Web Application Development
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#68635C] mb-3.5">

              </p>

              {/* Main Description */}
              <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-relaxed mb-4">
                {isEn
                  ? "1.5 years of professional experience in web-based application development deployed across diverse business environments, including PT Telkom Satelit Indonesia, PT Sinergi Informatika Semen Indonesia, PT Cipta Krida Bahari, and PT Dyafera Teknologi."
                  : "Memiliki pengalaman profesional selama 1,5 tahun dalam pengembangan aplikasi berbasis website yang telah diterapkan di berbagai lingkungan bisnis, termasuk PT Telkom Satelit Indonesia, PT Sinergi Informatika Semen Indonesia, PT Cipta Krida Bahari, dan Dyafera Teknologi."}
              </p>

              {/* Subsection: Pengalaman di 4 Perusahaan */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                  {isEn ? "Experience Across 4 Companies" : "Pengalaman di 4 Perusahaan"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#292722] font-medium leading-relaxed">
                  {[
                    "PT Telkom Satelit Indonesia",
                    "PT Sinergi Informatika Semen Indonesia",
                    "PT Cipta Krida Bahari",
                    "Dyafera Teknologi",
                  ].map((company) => (
                    <li key={company} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#292722] flex-shrink-0" />
                      <strong className="font-bold text-[#292722]">{company}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subsection: Tools & Technologies */}
            <div className="pt-4 mt-4 border-t border-[#E3D5CA]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Javascript", "PHP", "Laravel", "React", "Vue", "Node.js", "MySQL", "PostgreSQL", "SQL Server"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-bold rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card: Business Process Understanding */}
          <div className="rounded-xl border border-[#E3D5CA] bg-[#F5EBE0] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#292722] transition-all">
            <div>
              {/* Title & Category */}
              <h3 className="text-lg sm:text-xl font-bold text-[#292722] tracking-tight mb-1">
                Business Process Understanding
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#68635C] mb-3.5">
              </p>

              {/* Main Description */}
              <p className="text-sm sm:text-[15px] text-[#292722] font-medium leading-relaxed mb-4">
                {isEn
                  ? "Able to quickly understand business processes, workflows and requirements, and translate them into effective and efficient solutions. My experience building a variety of systems and applications has made me adaptable in addressing both technical and operational challenges."
                  : "Mampu memahami proses bisnis, alur kerja dan kebutuhan bisnis dengan cepat, lalu menerjemahkannya menjadi solusi yang efektif dan efisien. Pengalaman membangun berbagai sistem dan aplikasi membuat saya adaptif menghadapi tantangan teknis maupun operasional."}
              </p>

              {/* Subsection: Key Capabilities */}
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                  {isEn ? "Key Capabilities" : "Key Capabilities"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#292722] font-medium leading-relaxed">
                  {(isEn
                    ? [
                      "Understanding workflows and business processes",
                      "Identifying system requirements",
                      "Translating business needs into technical solutions",
                      "Adapting to technical and operational challenges",
                    ]
                    : [
                      "Memahami alur kerja dan proses bisnis",
                      "Mengidentifikasi kebutuhan sistem",
                      "Menerjemahkan kebutuhan bisnis menjadi solusi teknis",
                      "Beradaptasi dengan tantangan teknis dan operasional",
                    ]
                  ).map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#292722] flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subsection: Tools & Methodologies */}
            <div className="pt-4 mt-4 border-t border-[#E3D5CA]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292722] mb-2.5">
                {isEn ? "Tools & Methodologies" : "Tools & Methodologies"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["System Analysis", "Problem Solving", "Communication", "Agile"].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-bold rounded bg-[#EDEDE9] text-[#292722] border border-[#D6CCC2]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
