export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
  isPrimary?: boolean;
}

export interface ExperienceSubproject {
  title: string;
  items: string[];
}

export interface ExperienceBlock {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  employmentType: string;
  problemToSolve: string;
  projectOverview?: string;
  responsibilities: string[];
  responsibilityGroups?: ExperienceSubproject[];
  businessImpact: string[];
  businessImpactGroups?: ExperienceSubproject[];
  technologies: string[];
  screenshots: ProjectScreenshot[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; note?: string }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  gpa: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  documentPath?: string;
  description: string;
  type?: string;
  competencies?: string[];
}

export const PERSONAL_INFO = {
  name: "Hai, Saya Basir",
  availabilityText1:
    "Saya terbuka dengan posisi lain di luar posisi yang pernah saya kerjakan",
  availabilityText2:
    "Fast learner, Adaptive, Flexible & Impact Oriented",
  bio:
    "Saya memiliki pengalaman profesional selama 1.5 tahun dalam pengembangan website dan pengolahan data end-to-end untuk menghasilkan data yang bersih, terstruktur, dan siap digunakan. Berbekal pengalaman tersebut, saya memiliki fleksibilitas tinggi dan terbuka untuk berkontribusi tidak hanya di bidang software maupun data.\n\nSaya meyakini bahwa latar belakang ini membekali saya dengan kemampuan adaptasi yang cepat, kemampuan belajar yang cepat, serta mentalitas untuk memecahkan berbagai tantangan teknis maupun operasional di berbagai posisi",
  educationShort:
    "Sarjana Terapan Komputer — IPB University (Lulus 2025 • IPK 3.20)",
  email: "basirarsy2609@gmail.com",
  altEmail: "basirsyams26@gmail.com",
  linkedin: "https://www.linkedin.com/in/basrarsy/",
  github: "https://github.com/basrarsy",
  cvPath: "/assets/cv_basir.pdf",
  diplomaPath: "/assets/Ijazah_Basir.pdf",
  bnspPath: "/assets/BNSP.pdf",
  dataWarehousePath: "/assets/DataWarehousing.pdf",
  avatarPath: "/assets/profile.jpg",
};

export const EXPERIENCES: ExperienceBlock[] = [
  {
    id: "ids-teknologi",
    company: "Dyafera Teknologi",
    role: "Software Engineer",
    period: "2026",
    location: "Bogor, Indonesia",
    employmentType: "Project Based",
    problemToSolve: "Aplikasi internal enterprise sebelumnya dibangun menggunakan arsitektur multi-page konvensional berbasis HTML, CSS, dan Vanilla JavaScript. Seiring berkembangnya kebutuhan bisnis, sistem harus mengakomodasi 30 modul bisnis yang tersebar dalam 4 domain utama serta 49 tahapan workflow operasional dan persetujuan. Arsitektur lama mulai menghadapi tantangan dalam hal efisiensi navigasi, pengelolaan kode, dan konsistensi antarmuka. Setiap perpindahan halaman memerlukan proses reload dokumen, sehingga pengalaman pengguna menjadi kurang responsif ketika menjalankan proses bisnis yang melibatkan banyak tahapan. Selain itu, implementasi antarmuka dan pengelolaan interaksi yang tersebar pada berbagai halaman meningkatkan kompleksitas pemeliharaan serta menyulitkan standarisasi komponen dan perilaku sistem antarmodul. Diperlukan modernisasi arsitektur frontend menjadi Single Page Application (SPA) berbasis React.js untuk meningkatkan responsivitas navigasi, menyederhanakan pengelolaan state, serta membangun fondasi frontend yang lebih modular, konsisten, dan mudah dikembangkan seiring pertumbuhan kebutuhan bisnis.",
    responsibilities: [
      "Melakukan migrasi frontend sistem enterprise berbasis website untuk client dari arsitektur multi-page HTML/CSS/Vanilla JavaScript lama menjadi Single Page Application (SPA) berbasis React.js, mencakup 4 domain utama, 30 modul bisnis, dan 49 tahapan alur kerja (workflow).",
      "Mengembangkan arsitektur frontend modul Request Management yang mencakup Purchase Request, Reimbursement, Cash Advance, dan Settlement.",
      "Membangun modul Approval Report (PO, AR Invoice, Outgoing Payments, Reimbursment, dll) dengan otorisasi berbasis peran (role-based authorization).",
      "Mengembangkan antarmuka Tracking Document (alur siklus PR-to-PO, invoice, outgoing cash settlement, dll) dengan indikator status real-time.",
      "Mengimplementasikan modul Master Data untuk Users Management, Chart of Accounts (COA), Approval Rules,  Master Access, dll.",
      "Menyelesaikan seluruh implementasi antarmuka, sinkronisasi state, dan pengujian integrasi dalam tenggat waktu intensif 4 hingga 5 minggu.",
    ],
    businessImpact: [
      "Mempermudah pengembangan, pemeliharaan, dan penambahan fitur pada sistem yang memiliki banyak modul dan alur kerja.",
      "Menghilangkan jeda reload halaman pada 49 tahapan alur kerja, mempercepat proses transaksi operasional harian.",
      "Menstandarisasi komponen antarmuka melalui pendekatan reusable components sehingga tampilan dan perilaku elemen UI lebih konsisten di 30 modul bisnis.",
      "Mengurangi duplikasi kode frontend dan potensi inkonsistensi implementasi antarmodul.",
      "Menyederhanakan pengelolaan kode frontend melalui arsitektur berbasis komponen React.js",
    ],
    technologies: [
      "React.js",
      "Single Page Application (SPA)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Integrasi REST API",
      "HTML5 / CSS3",
    ],
    screenshots: [
      {
        url: "/assets/ids_documentation/dashboard.png",
        title: "Portal Manajemen & Dashboard Utama",
        caption:
          "Tampilan ringkasan operasional yang menyajikan rekap permintaan aktif, ringkasan alur kerja, dan akses cepat ke modul-modul ERP utama.",
        isPrimary: true,
      },
      {
        url: "/assets/ids_documentation/pending_task.png",
        title: "Antrean Persetujuan Dokumen (Pending Task)",
        caption:
          "Pusat verifikasi terpadu bagi manajer untuk meninjau, menyetujui, atau mengembalikan dokumen transaksi lengkap dengan riwayat log audit.",
        isPrimary: false,
      },
      {
        url: "/assets/ids_documentation/pr_1.png",
        title: "Formulir & Rincian Purchase Request",
        caption:
          "Antarmuka pengajuan pengadaan terstruktur yang mendukung rincian multi-item, alokasi anggaran, dan lampiran dokumen pendukung.",
        isPrimary: false,
      },
    ],
  },
  {
    id: "sisi",
    company: "PT Sinergi Informatika Semen Indonesia",
    role: "Software Engineer & Data Engineer",
    period: "Nov 2025 — Mei 2026",
    location: "Jakarta, Indonesia",
    employmentType: "Program Magang Nasional/Magang HUB",
    problemToSolve: " Proses pengolahan data internal sebelumnya bergantung pada file Excel yang tersedia di website internal dan bersumber dari SAP. Pemindahan data dari file Excel ke Raw Database masih menggunakan script Python, sehingga perubahan kebutuhan bisnis mendorong perlunya mekanisme ingestion data yang lebih fleksibel dan terintegrasi. Sistem baru dibutuhkan untuk menangani upload data bervolume besar, termasuk pemetaan kolom dan identifikasi tujuan database, tanpa bergantung pada script Python untuk tahap pemindahan data ke Raw Database. Selain itu, proses validasi transaksi yang mengalami SLA over sebelumnya dilakukan secara manual melalui pertukaran file Excel dan email antara tim Data & Reporting dengan divisi terkait untuk memperoleh keterangan (remarks). Mekanisme tersebut membutuhkan koordinasi manual dalam proses permintaan, pengisian, dan pemantauan hasil validasi. Diperlukan sistem berbasis website untuk memusatkan proses validasi SLA dan pemberian remarks agar tindak lanjut antar tim lebih terstruktur.",
    responsibilities: [
      "Mengembangkan aplikasi berbasis web menggunakan Laravel, PHP, React.js, JavaScript, dan PostgreSQL untuk menggantikan proses ingestion Excel ke Raw Database yang sebelumnya menggunakan script Python.",
      "Mengimplementasikan fitur high-volume data upload untuk memproses ratusan ribu record ke staging database.",
      "Mengembangkan mekanisme column mapping dan pemetaan file ke database tujuan untuk memastikan data masuk ke tabel yang sesuai.",
      "Membangun modul SLA Validation untuk mengidentifikasi transaksi yang melewati standar SLA dan memfasilitasi pengisian remarks oleh divisi atau tim terkait melalui website.",
      "Mengembangkan dan memelihara end-to-end ETL pipelines menggunakan Python dan Apache Airflow untuk mengolah data dari berbagai modul bisnis internal.",
      "Mengotomatisasi proses ekstraksi data ke Raw Database, dilanjutkan dengan data cleaning dan transformation berdasarkan requirement bisnis.",
      "Memuat data yang telah diproses ke Ready Database / Datamart untuk kebutuhan visualisasi dan pelaporan menggunakan Power BI.",
      "Mengembangkan dan memelihara sekitar 10 Apache Airflow DAG untuk proses bisnis Service Desk, Order-to-Cash (O2C), dan Accounts Payable (AP).",
    ],
    responsibilityGroups: [
      {
        title: "A. Data Upload & Validation System",
        items: [
          "Mengembangkan aplikasi berbasis web menggunakan Laravel, PHP, React.js, JavaScript, dan PostgreSQL untuk menggantikan proses ingestion Excel ke Raw Database yang sebelumnya menggunakan script Python.",
          "Mengimplementasikan fitur high-volume data upload untuk memproses ratusan ribu record ke staging database.",
          "Mengembangkan mekanisme column mapping dan pemetaan file ke database tujuan untuk memastikan data masuk ke tabel yang sesuai.",
          "Membangun modul SLA Validation untuk mengidentifikasi transaksi yang melewati standar SLA dan memfasilitasi pengisian remarks oleh divisi atau tim terkait melalui website.",
        ],
      },
      {
        title: "B. ETL Pipeline Development",
        items: [
          "Mengembangkan dan memelihara end-to-end ETL pipelines menggunakan Python dan Apache Airflow untuk mengolah data dari berbagai modul bisnis internal.",
          "Mengotomatisasi proses ekstraksi data ke Raw Database, dilanjutkan dengan data cleaning dan transformation berdasarkan requirement bisnis.",
          "Memuat data yang telah diproses ke Ready Database / Datamart untuk kebutuhan visualisasi dan pelaporan menggunakan Power BI.",
          "Mengembangkan dan memelihara sekitar 10 Apache Airflow DAG untuk proses bisnis Service Desk, Order-to-Cash (O2C), dan Accounts Payable (AP).",
        ],
      },
    ],
    businessImpact: [
      "Menghilangkan ketergantungan pada script Python untuk proses ingestion data Excel ke Raw Database.",
      "Menyederhanakan proses upload data bervolume besar melalui mekanisme column mapping dan pemetaan database.",
      "Memusatkan proses validasi SLA dan pengumpulan remarks melalui website, menggantikan pertukaran file Excel melalui email.",
      "Mempermudah pemantauan transaksi SLA over dan tindak lanjut oleh tim Data & Reporting.",
      "Mengotomatisasi proses pembersihan dan transformasi data dari Raw Database ke Ready Database.",
      "Menstandarisasi pemrosesan data berdasarkan requirement bisnis sebelum digunakan untuk pelaporan.",
      "Menyediakan data terstruktur dalam Datamart untuk mendukung visualisasi dan dashboard Power BI.",
    ],
    businessImpactGroups: [
      {
        title: "A. Data Upload & Validation System",
        items: [
          "Menghilangkan ketergantungan pada script Python untuk proses ingestion data Excel ke Raw Database.",
          "Menyederhanakan proses upload data bervolume besar melalui mekanisme column mapping dan pemetaan database.",
          "Memusatkan proses validasi SLA dan pengumpulan remarks melalui website, menggantikan pertukaran file Excel melalui email.",
          "Mempermudah pemantauan transaksi SLA over dan tindak lanjut oleh tim Data & Reporting.",
        ],
      },
      {
        title: "B. ETL Pipeline Development",
        items: [
          "Mengotomatisasi proses pembersihan dan transformasi data dari Raw Database ke Ready Database.",
          "Menstandarisasi pemrosesan data berdasarkan requirement bisnis sebelum digunakan untuk pelaporan.",
          "Menyediakan data terstruktur dalam Datamart untuk mendukung visualisasi dan dashboard Power BI.",
        ],
      },
    ],
    technologies: [
      "Laravel",
      "PHP",
      "React.js",
      "JavaScript",
      "PostgreSQL",
      "Python",
      "Apache Airflow",
      "Power BI",
      "Pipeline ETL",
      "Arsitektur Datamart",
    ],
    screenshots: [
      {
        url: "/assets/sisi/csa1.png",
        title: "Antarmuka Upload Raw Data (Sheet Control)",
        caption:
          "Fitur import berkas Excel SLA Report atau CSV dengan mekanisme drag & drop (maks. 500MB) ke database staging, dilengkapi deteksi tipe berkas dan alur multi-step pemetaan sheet.",
        isPrimary: true,
      },
      {
        url: "/assets/sisi/csa8.png",
        title: "Portal Monev MagangHub — Rapor Bulanan",
        caption:
          "Dashboard monitoring dan evaluasi resmi MagangHub (Kemnaker) yang merekam rekapitulasi penilaian berkala penugasan magang di PT SISI bersama mentor industri.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa9.png",
        title: "Indikator Kinerja: Standar Kualitas & Go-Live Sistem",
        caption:
          "Verifikasi pencapaian target evaluasi sistem mencakup Go-Live On-Time 100%, akurasi data >=99%, system uptime >=99.5%, serta pemenuhan 100% audit trail kepatuhan regulasi.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa10.png",
        title: "Evaluasi Kinerja: Pengembangan Aplikasi Report Dashboard",
        caption:
          "Penilaian KPI pengembangan aplikasi pelaporan berbasis sistem untuk mendukung keputusan operasional dengan target deployment dashboard ke lingkungan production.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa11.png",
        title: "Evaluasi Kinerja: Pembuatan Aplikasi Sheet Control",
        caption:
          "Penilaian capaian 100% penyelesaian fitur inti dan upload data aplikasi Sheet Control sesuai timeline, dengan predikat baik pada produktivitas dan kerja sama tim.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa12.png",
        title: "Evaluasi Kinerja: Kelengkapan & Akurasi Pipeline ETL",
        caption:
          "Penilaian capaian target pipeline ETL (minimal 95% data akurat dan lengkap) tanpa kehilangan record maupun kesalahan transformasi logis untuk pelaporan korporat.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa13.png",
        title: "Profil Verifikasi Magang PT SISI — MagangHub",
        caption:
          "Dokumentasi identitas resmi peserta magang di PT Sinergi Informatika Semen Indonesia (GRAHA Aktiva Lt. 11, Jakarta Selatan) terdaftar pada sistem MagangHub Kemnaker.",
        isPrimary: false,
      },
    ],
  },
  {
    id: "cipta-krida-bahari",
    company: "PT Cipta Krida Bahari (CKB Group)",
    role: "Full-Stack Web Developer",
    period: "Jun 2025 — Okt 2025",
    location: "Jakarta, Indonesia",
    employmentType: "Magang / Internship",
    problemToSolve:
      "Proses pencatatan pemakaian serta pemeriksaan berkala terhadap fasilitas keselamatan dan peralatan operasional di berbagai cabang PT Cipta Krida Bahari sebelumnya masih dilakukan secara manual menggunakan formulir berbasis kertas, kemudian direkap ke dalam Microsoft Excel. Aktivitas tersebut mencakup pencatatan konsumsi peralatan medis, pemeriksaan kondisi genset, pengecekan stok perlengkapan medis, serta inspeksi pipa hydrant. Proses pencatatan dan rekapitulasi manual menyebabkan pengelolaan data pemakaian dan hasil inspeksi belum terpusat, sehingga menyulitkan pemantauan riwayat pemeriksaan, identifikasi kebutuhan pengisian ulang stok, serta pengawasan kondisi fasilitas antar cabang. Diperlukan sistem berbasis web untuk mendigitalisasi proses pencatatan dan inspeksi, mengurangi ketergantungan pada dokumentasi kertas dan Excel, serta mempermudah pemantauan informasi operasional secara terstruktur.",
    responsibilities: [
      "Mengembangkan empat modul operasional berbasis web menggunakan Laravel, PHP, Vue.js, JavaScript, dan MySQL untuk mendukung pencatatan pemakaian serta inspeksi fasilitas di berbagai cabang PT Cipta Krida Bahari.",
      "Mengembangkan First Aid Kit Consumption, untuk mencatat dan memantau pemakaian perlengkapan P3K harian di setiap cabang.",
      "Membangun First Aid Kit Inspection, untuk mendokumentasikan pemeriksaan bulanan, memantau tren pemakaian, mengidentifikasi perlengkapan yang telah digunakan, dan memantau sisa stok P3K.",
      "Mengembangkan Genset Inspection, untuk mendukung pemeriksaan bulanan dan pemantauan kondisi serta kesiapan operasional genset.",
      "Mengembangkan Hydrant Pipe Inspection, untuk mendokumentasikan dan mendukung pemeriksaan berkala instalasi pipa hydrant.",
      "Merancang dan mengintegrasikan database relasional MySQL untuk menyimpan data pemakaian dan riwayat inspeksi secara terstruktur.",
      "Mengimplementasikan antarmuka frontend dan backend serta melakukan pengujian integrasi API menggunakan Postman."
    ],
    businessImpact: [
      "Mendigitalisasi pencatatan pemakaian P3K dan dokumentasi inspeksi fasilitas yang sebelumnya membutuhkan pencatatan manual.",
      "Mempermudah pemantauan konsumsi dan ketersediaan perlengkapan P3K melalui pencatatan pemakaian serta pemeriksaan stok secara berkala.",
      "Menyediakan dokumentasi riwayat inspeksi genset dan instalasi pipa hydrant untuk mendukung pemantauan kondisi dan kesiapan fasilitas operasional.",
      "Memusatkan informasi pemakaian dan hasil inspeksi dari berbagai cabang sehingga mempermudah proses monitoring dan penelusuran data oleh pihak terkait.",
      "Mendukung standarisasi proses pelaporan dan dokumentasi inspeksi rutin di lingkungan operasional perusahaan."
    ],
    technologies: [
      "Laravel",
      "Vue.js",
      "PHP",
      "MySQL",
      "REST API",
      "Postman",
      "Git",
    ],
    screenshots: [
      {
        url: "/assets/consumptionP3K/consumptionP3K1.png",
        title: "Dashboard Pemantauan Konsumsi P3K",
        caption:
          "Dashboard operasional cabang yang menampilkan status stok terkini, tren pemakaian perlengkapan, dan rekap mutasi barang medis.",
        isPrimary: true,
      },
      {
        url: "/assets/consumptionP3K/inspectionP3K_1.png",
        title: "Modul First Aid Kit Inspection",
        caption:
          "Dokumentasi inspeksi rutin bulanan untuk memantau tren pemakaian, perlengkapan yang digunakan, dan sisa stok P3K cabang.",
        isPrimary: false,
      },
      {
        url: "/assets/consumptionP3K/inspectionP3K_2.png",
        title: "Formulir Pemeriksaan Kotak P3K",
        caption:
          "Formulir entri data kondisi fisik dan kelengkapan kotak P3K yang diisi oleh petugas lapangan.",
        isPrimary: false,
      },
      {
        url: "/assets/consumptionP3K/inspectionGenset_1.png",
        title: "Modul Genset Inspection",
        caption:
          "Sistem dokumentasi inspeksi berkala untuk memantau kesiapan operasional dan pemeliharaan genset di fasilitas cabang.",
        isPrimary: false,
      },
    ],
  },
  {
    id: "telkom-satelit-indonesia",
    company: "PT Telkom Satelit Indonesia (Telkomsat)",
    role: "Back-End Web Developer",
    period: "Jul 2024 — Nov 2024",
    location: "Bogor, Indonesia",
    employmentType: "Magang / Internship",
    problemToSolve:
      "Proses pencatatan hasil pengujian alat produksi di workshop PT Telkom Satelit Indonesia sebelumnya masih dilakukan secara manual menggunakan formulir berbasis kertas, kemudian direkap kembali ke dalam Microsoft Excel. Proses ini mencakup dokumentasi hasil pengujian, pencatatan status kelayakan perangkat, serta penyusunan dokumen hasil pengujian yang membutuhkan proses administrasi tambahan.\n\nPengelolaan data yang masih tersebar menyulitkan pemantauan status pengujian perangkat secara menyeluruh, termasuk membedakan perangkat yang masih dalam proses pengujian (Progress), tidak lolos pengujian (Not OK), memenuhi standar pengujian (OK), maupun belum diuji. Diperlukan sistem berbasis web untuk memusatkan pencatatan hasil pengujian, mengotomatisasi pembuatan dokumen berdasarkan data yang diinputkan, serta menyediakan dashboard monitoring guna mempermudah pemantauan progres dan kelayakan alat produksi.",
    responsibilities: [
      "Mengembangkan backend sistem pencatatan dan monitoring hasil pengujian alat produksi menggunakan Laravel, PHP, JavaScript, dan MySQL.",
      "Merancang dan mengimplementasikan 16 RESTful API dalam waktu 2 bulan untuk mendukung pengelolaan, validasi, dan pertukaran data hasil pengujian perangkat.",
      "Mengembangkan logika pencatatan hasil pengujian dan pengelolaan status kelayakan perangkat berdasarkan hasil inspeksi teknisi.",
      "Mengimplementasikan fitur otomatisasi pembuatan dokumen hasil pengujian berdasarkan data yang telah diinputkan ke dalam sistem.",
      "Mengembangkan dashboard monitoring untuk menampilkan distribusi status pengujian perangkat, meliputi Progress, Not OK, OK, dan perangkat yang belum diuji.",
      "Berkolaborasi dengan System Architect dan tim QA dalam menyelaraskan spesifikasi API serta memastikan fungsionalitas endpoint sesuai kebutuhan sistem.",
      "Menyusun skrip migrasi database dan mengoptimalkan kueri relasional MySQL untuk mendukung pengelolaan data pengujian dan inventaris perangkat workshop.",
    ],
    businessImpact: [
      "Mendigitalisasi pencatatan hasil pengujian alat produksi yang sebelumnya menggunakan formulir kertas dan rekapitulasi Excel.",
      "Mempercepat proses administrasi melalui otomatisasi pembuatan dokumen hasil pengujian berdasarkan data yang tersimpan dalam sistem.",
      "Mempermudah pemantauan progres dan kelayakan alat produksi melalui dashboard terpusat dengan klasifikasi status Progress, Not OK, OK, dan belum diuji.",
      "Memusatkan dokumentasi hasil pengujian sehingga mempermudah penelusuran riwayat pemeriksaan dan verifikasi kelayakan perangkat.",
      "Menghasilkan 16 RESTful API untuk mendukung integrasi dan pertukaran data antar komponen sistem.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "JavaScript",
      "MySQL",
      "RESTful API",
      "Postman",
      "Git",
    ],
    screenshots: [
      {
        url: "/assets/magangTelkomsat/magangTel1.png",
        title: "Dashboard Monitoring Status Alat Produksi",
        caption:
          "Dashboard terpusat untuk memantau distribusi status pengujian perangkat workshop (Progress, Not OK, OK, dan belum diuji).",
        isPrimary: true,
      },
      {
        url: "/assets/magangTelkomsat/magangTel2.png",
        title: "Formulir Hasil Uji & Parameter API Perangkat",
        caption:
          "Antarmuka pencatatan diagnostik terperinci yang menyimpan input telemetri, nomor seri perangkat, dan hasil verifikasi kelayakan.",
        isPrimary: false,
      },
      {
        url: "/assets/magangTelkomsat/magangTel3.png",
        title: "Jadwal Pemeliharaan & Riwayat Kalibrasi",
        caption:
          "Log operasional untuk memantau siklus servis berkala, catatan teknisi penguji, dan status kepatuhan kalibrasi alat.",
        isPrimary: false,
      },
      {
        url: "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
        title: "Sertifikat Magang Industri — PT Telkom Satelit Indonesia",
        caption:
          "Sertifikat penghargaan resmi atas perancangan 16 RESTful API dan modul inventaris workshop alat komunikasi satelit.",
        isPrimary: false,
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Pengembangan Backend",
    skills: [
      { name: "Laravel", note: "MVC, Eloquent ORM, Queues, Service Layer" },
      { name: "PHP", note: "OOP, Modern PHP 8+" },
      { name: "Perancangan RESTful API", note: "Autentikasi, Rate Limiting, JSON:API" },
      { name: "Node.js", note: "Express, Runtime API" },
      { name: "Arsitektur Sistem", note: "Pemisahan Domain & Ingest Staging" },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Python", note: "Pandas, Pembersihan Data, Otomasi" },
      { name: "Apache Airflow", note: "Penjadwalan DAG, Alur Kerja ETL" },
      { name: "Pipeline ETL", note: "Ingest Data, Transformasi, Validasi" },
      { name: "Validasi Data" },
    ],
  },
  {
    category: "Basis Data & Penyimpanan",
    skills: [
      { name: "PostgreSQL", note: "Kueri Kompleks, Indexing, Partisi Datamart" },
      { name: "MySQL", note: "Optimasi Skema, Relasi Antartabel" },
      { name: "Database Staging", note: "Penyerapan Data Batch & Isolasi Upload" },
      { name: "DBeaver", note: "Analisis Kueri & Administrasi Basis Data" },
    ],
  },
  {
    category: "Pengembangan Frontend",
    skills: [
      { name: "React.js", note: "Single Page Application (SPA), State Management, Hooks" },
      { name: "Vue.js", note: "Composition API, Komponen Reaktif" },
      { name: "TypeScript", note: "Strict Typing, Interface Terstruktur" },
      { name: "JavaScript (ES6+)", note: "Asynchronous I/O, DOM Modular" },
      { name: "Tailwind CSS", note: "Layout Responsif & Sistem Desain" },
    ],
  },
  {
    category: "Tools, Platform & AI",
    skills: [
      { name: "Antigravity", note: "IDE" },
      { name: "Git & GitHub", note: "Version Control, Branching, Pull Request" },
      { name: "Postman", note: "Dokumentasi & Otomasi Pengujian API" },
      { name: "VS Code", note: "Workspace Pengembangan & Debugging" },
      { name: "Excel", note: "Excel fundamental" },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Institut Pertanian Bogor (IPB University)",
    degree: "Sarjana Terapan (D-IV)",
    field: "Teknologi Rekayasa Perangkat Lunak",
    graduationYear: "Lulus 2025",
    gpa: "3.20 / 4.00",
    location: "Bogor, Indonesia",
    description:
      "Kurikulum pendidikan rekayasa perangkat lunak empat tahun yang berfokus pada arsitektur perangkat lunak, manajemen basis data, sistem terdistribusi, rekayasa web, dan siklus hidup pengembangan sistem enterprise.",
    highlights: [
      "Menyelesaikan studi pada tahun 2025 dengan Indeks Prestasi Kumulatif (IPK) 3.20.",
      "Menyelesaikan proyek tugas akhir berbasis kebutuhan industri dan klien nyata.",
      "Memiliki pemahaman mendalam pada software engineering, pemodelan data relasional, dan arsitektur data enterprise.",
    ],
  },
];

export interface TrainingItem {
  title: string;
  organizer: string;
  period: string;
  type: string;
  description: string;
  competencies: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Sertifikasi Profesi Software Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    issueDate: "Standar Kompetensi Kerja Nasional (SKKNI)",
    documentPath: "/assets/BNSP.pdf",
    type: "Sertifikasi Profesi Berlisensi",
    description:
      "Sertifikasi kompetensi resmi nasional yang memvalidasi keahlian profesional dalam perancangan spesifikasi perangkat lunak, pemrograman terstruktur, implementasi basis data, pengujian kode, dan integrasi antarmuka sistem.",
    competencies: [
      "Perancangan Perangkat Lunak Terstruktur",
      "Implementasi Basis Data Relasional & Kueri SQL",
      "Pengujian Kode Program & Standarisasi Dokumentasi",
    ],
  },
  {
    title: "Pelatihan Data Warehousing & Engineering — Studi Independen Bersertifikat",
    issuer: "Kemendikbudristek & PT Dibimbing Digital Indonesia",
    issueDate: "Februari — Juni 2024",
    documentPath: "/assets/DataWarehousing.pdf",
    type: "Program Pelatihan Bersertifikat",
    description:
      "Program pelatihan intensif Studi Independen (Kampus Merdeka Kemendikbudristek) bekerja sama dengan mitra PT Dibimbing Digital Indonesia. Mempelajari dan mempraktikkan pengolahan data end-to-end, perancangan data warehouse, tata kelola data, serta otomatisasi pipeline ETL.",
    competencies: [
      "Python",
      "SQL",
      "Data Governance",
      "ETL Pipelines",
      "Apache Airflow",
      "Git & Version Control",
    ],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Apakah Anda hanya terbuka untuk posisi Software Engineer atau Data Engineer?",
    answer:
      "Tidak. Saya sangat terbuka dengan posisi lain di luar posisi yang pernah saya kerjakan. Saya memiliki latar belakang pengalaman profesional di bidang Software Engineering dan Data Engineering di berbagai industri. Dengan latar belakang tersebut, saya sangat fleksibel dan tidak kaku hanya di posisi data maupun software. Saya percaya pengalaman ini membentuk kemampuan adaptasi yang tinggi serta daya belajar yang cepat terhadap alur kerja, domain bisnis, maupun teknologi baru.",
    category: "Fleksibilitas Posisi",
  },
  {
    question:
      "Apa fokus dan arah karier yang ingin Anda tekuni ke depannya? Posisi atau bidang pekerjaan apa yang ingin Anda jalani dalam jangka panjang?",
    answer: "Untuk rencana karier ke depan, saya ingin terus berkembang di bidang pekerjaan yang melibatkan kemampuan teknikal, analisis, dan problem- solving. Sebagai seorang freshgraduate yang masih berada ditahap awal perjalan profesional, saya belum ingin membatasi arah karier saya pada satu posisi atau spesialisasi tertentu. Sejauh ini, kesempatan dan pengalaman yang paling banyak saya dapatkan memang berada di bidang software development dan juga data processing (data engineering). Bagi saya, untuk saat ini hal terpenting bukan semata - mata posisi atau jabatan yang saya pegang, melainkan bagaimana saya bisa memberikan kontribusi nyata bagi perusahaan melalui kemampuan yang saya miliki, membantu tim menyelesaikan permasalahan, dan memberikan dampak positif bagi team atau perusahaan melalui posisi apapun itu",
    category: "Arah & Fokus Karier",
  },
  {
    question: "Apakah Anda bisa berbahasa Inggris?",
    answer:
      "Kemampuan listening dan speaking saya masih perlu improvement, namun mengenai reading dan writing sejauh ini saya tidak mengalami masalah.",
    category: "Kemampuan Bahasa",
  },
  {
    question: "Apakah Anda bisa mengoperasikan Microsoft Excel?",
    answer:
      "Ya, saya menguasai dasar-dasar fundamental Microsoft Excel, seperti input dan pembersihan data tabular, penggunaan fungsi dan rumus umum (seperti SUM, AVERAGE, COUNT, IF, VLOOKUP/XLOOKUP), serta pembuatan tabel dan grafik sederhana.\n\nSelama penugasan kerja profesional saya sebelumnya, saya memang lebih banyak berfokus pada sistem basis data (SQL/PostgreSQL/MySQL), aplikasi web enterprise, dan script otomasi (Python/Airflow) karena kebutuhan arsitektur data berskala besar, sehingga penggunaan tools Excel jarang dibutuhkan dalam tugas harian saya. Namun hal tersebut bukan berarti saya tidak bisa; dengan pemahaman logika data yang saya miliki, saya dapat mengoperasikan Excel dengan baik dan sangat siap mempelajari fungsi lanjutan lainnya sesuai kebutuhan pekerjaan.",
    category: "Penguasaan Tools",
  },
  {
    question: "Bagaimana rincian pengalaman kerja ~1.5 tahun Anda selama ini?",
    answer:
      "Pengalaman ~1.5 tahun saya terakumulasi di 4 perusahaan lintas industri, yaitu 3 perusahaan internship (PT Telkom Satelit Indonesia selama 5 bulan, PT Cipta Krida Bahari selama 5 bulan, PT Sinergi Informatika Semen Indonesia selama 6 bulan) serta 1 project-based di Dyafera Teknologi selama 1.5 bulan.",
    category: "Riwayat Pengalaman",
  },
  {
    question: "Bagaimana kesiapan Anda terkait model kerja (On-Site, Hybrid, atau Remote)?",
    answer:
      "Saya sangat siap dan fleksibel bekerja dengan sistem On-Site (WFO), Hybrid, maupun Remote. Saya terbiasa bekerja secara mandiri maupun kolaboratif dalam tim di lingkungan perkantoran Jakarta dan sekitarnya.",
    category: "Kesiapan Kerja",
  },
  {
    question: "Apa nilai tambah utama yang Anda tawarkan untuk tim atau perusahaan?",
    answer:
      "Kombinasi pemahaman rekayasa perangkat lunak dan rekayasa data (Python, SQL, ETL (extract, transform, load data)). Saya dapat melihat tantangan operasional dari sisi arsitektur aplikasi sekaligus integritas alur data, sehingga solusi yang dibangun lebih terstruktur dan berorientasi pada efisiensi bisnis nyata.",
    category: "Nilai Tambah",
  },
  {
    question: "Kapan Anda siap untuk mulai bergabung?",
    answer:
      "Saya siap bergabung secepatnya (immediately available) dan siap mengikuti tahapan wawancara maupun orientasi kerja perusahaan.",
    category: "Ketersediaan",
  },
];
