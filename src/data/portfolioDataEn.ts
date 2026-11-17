import {
  ProjectScreenshot,
  ExperienceBlock,
  SkillCategory,
  CertificationItem,
  FaqItem,
} from "./portfolioData";

export const PERSONAL_INFO_EN = {
  name: "Hi, I'm Basir",
  title: "Software Engineer & Data Engineer",
  availabilityText1:
    "Open to diverse roles beyond previous job titles",
  availabilityText2:
    "Fast learner, Highly Adaptive, Flexible & Impact Oriented",
  bio:
    "I have professional experience 1.5 years in web development and end-to-end data processing to produce clean, structured, and production-ready data. Leveraging this background, I am highly flexible and eager to contribute beyond software and data domains.\n\nI believe this experience equips me with strong adaptability, fast learning skills, and the mindset to solve diverse technical and operational challenges in different roles.",
  educationShort:
    "Bachelor of Applied Science in Software Engineering Technology — IPB University (class of 2025 • GPA 3.20)",
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

export const EXPERIENCES_EN: ExperienceBlock[] = [
  {
    id: "ids-teknologi",
    company: "IT Consulting Client & Confidential Enterprise Project",
    role: "Software Engineer",
    period: "August 2026",
    location: "Indonesia",
    employmentType: "Project-Based",
    problemToSolve:
      "The client's internal enterprise application was originally built on a conventional multi-page architecture using HTML, CSS, and Vanilla JavaScript. As business demands expanded, the system was required to accommodate 30 business modules across 4 core domains and 49 operational and approval workflows. The legacy architecture faced scalability bottlenecks in navigation efficiency, codebase maintainability, and user interface consistency. Each page navigation triggered a full document reload, resulting in sluggish user experiences during multi-step transactions. Additionally, fragmented UI implementations and state management heightened maintenance overhead and impeded UI standardization across modules. A comprehensive frontend modernization to a React.js Single Page Application (SPA) was required to boost navigation responsiveness, streamline state management, and establish a modular, maintainable foundation for future business growth.",
    responsibilities: [
      "Migrated client enterprise web frontend from a legacy multi-page HTML/CSS/Vanilla JavaScript architecture into a high-performance React.js Single Page Application (SPA), encompassing 4 core domains, 30 business modules, and 49 workflows.",
      "Architected the Request Management frontend module, including Purchase Requests, Reimbursements, Cash Advances, and Settlements.",
      "Built Approval Report modules (Purchase Orders, AR Invoices, Outgoing Payments, reimbursment) integrated with role-based authorization.",
      "Developed the Document Tracking interface (PR-to-PO lifecycle, invoices, outgoing cash settlements, etc) with real-time status indicators.",
      "Implemented Master Data modules for User Management, Chart of Accounts (COA), Approval Rules, Master Access permissions, etc.",
      "Delivered full UI implementation, state synchronization, and integration testing within an intensive 4-to-5-week timeline.",
    ],
    businessImpact: [
      "Streamlined development, maintenance, and feature expansions across 30 modules and complex workflows.",
      "Eliminated full-page reload latencies across 49 workflow stages, accelerating daily operational transactions.",
      "Standardized UI elements through a reusable component architecture, ensuring unified interface consistency.",
      "Drastically eliminated frontend code duplication and cross-module behavioral discrepancies.",
      "Simplified codebase maintenance through React.js component-driven design patterns.",
    ],
    technologies: [
      "React.js",
      "Single Page Application (SPA)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "REST API Integration",
      "HTML5 / CSS3",
    ],
    screenshots: [
      {
        url: "/assets/ids_documentation/dashboard.png",
        title: "Operations Management Portal & Main Dashboard",
        caption:
          "Central operational overview providing active request summaries, workflow status trackers, and quick navigation to ERP modules.",
        isPrimary: true,
      },
      {
        url: "/assets/ids_documentation/pending_task.png",
        title: "Document Approval Queue (Pending Tasks)",
        caption:
          "Unified verification hub for department managers to review, authorize, or return transaction documents with full audit trail histories.",
        isPrimary: false,
      },
      {
        url: "/assets/ids_documentation/pr_1.png",
        title: "Purchase Request Form & Line-Item Details",
        caption:
          "Structured procurement requisition form supporting multi-item breakdowns, departmental budget allocation, and supporting attachments.",
        isPrimary: false,
      },
    ],
  },
  {
    id: "sisi",
    company: "PT Sinergi Informatika Semen Indonesia",
    role: "Software Engineer & Data Engineer",
    period: "Nov 2025 — May 2026",
    location: "Jakarta, Indonesia",
    employmentType: "National Internship Program / MagangHub",
    problemToSolve:
      "Internal data processing previously depended on Excel files exported from SAP and hosted on internal company portals. Data transfer from Excel to the Raw Database relied on manual Python scripts, which lacked agility and resilience as business requirements evolved. A unified system was required to handle high-volume data ingestion, dynamic column mapping, and target database routing without relying on brittle standalone Python scripts. Furthermore, SLA over-limit validation was conducted manually via scattered Excel exchanges and email coordination between Data & Reporting and module division teams to collect remarks. This manual workflow hindered tracking, follow-ups, and auditability. A centralized web application was essential to consolidate SLA validations, standardize remarks submission, and streamline cross-divisional accountability.",
    responsibilities: [
      "Developed a full-stack web application using Laravel, PHP, React.js, JavaScript, and PostgreSQL to replace legacy Python scripts for Excel ingestion into the Raw Database.",
      "Implemented high-volume data upload processing hundreds of thousands of records directly into staging database tables.",
      "Engineered dynamic column mapping and target database routing to ensure accurate data assignment across diverse schemas.",
      "Built an SLA Validation module to flag over-limit transactions and facilitate structured remarks submission by division teams via the web portal.",
      "Developed and maintained end-to-end ETL pipelines using Python and Apache Airflow to process data across internal business modules.",
      "Automated data extraction into the Raw Database followed by cleansing, transformation, and business rule enforcement.",
      "Loaded structured data into the Ready Database / Datamart for analytics reporting and Power BI visualization.",
      "Created and managed ~10 Apache Airflow DAGs covering Service Desk, Order-to-Cash (O2C), and Accounts Payable (AP) workflows.",
    ],
    responsibilityGroups: [
      {
        title: "A. Data Upload & Validation System",
        items: [
          "Developed a web-based portal using Laravel, PHP, React.js, JavaScript, and PostgreSQL to replace Python-based Excel ingestion into the Raw Database.",
          "Implemented high-volume data uploads processing hundreds of thousands of records to database staging.",
          "Engineered dynamic column mapping and table routing to ensure accurate dataset integration.",
          "Built SLA Validation workflows to flag delayed transactions and facilitate structured division remarks submission.",
        ],
      },
      {
        title: "B. ETL Pipeline Development",
        items: [
          "Developed and managed end-to-end ETL pipelines with Python and Apache Airflow across internal business modules.",
          "Automated raw extraction, cleansing, transformation, and business-driven schema formatting.",
          "Loaded transformed datasets into Ready Database Datamarts powering corporate Power BI reports.",
          "Created and monitored ~10 Apache Airflow DAGs covering Service Desk, O2C, and Accounts Payable processes.",
        ],
      },
    ],
    businessImpact: [
      "Eliminated manual Python script dependencies for Excel data ingestion into the Raw Database.",
      "Streamlined high-volume data ingestion via automated file detection, column mapping, and database schema routing.",
      "Centralized SLA compliance tracking and remarks collection, replacing chaotic email and spreadsheet exchanges.",
      "Accelerated transaction monitoring and discrepancy follow-ups for the Data & Reporting team.",
      "Automated data cleansing and transformation pipelines between Raw Database and production Datamart.",
      "Standardized business rule compliance prior to analytical reporting.",
      "Provided structured, high-integrity Datamart schemas powering corporate Power BI dashboards.",
    ],
    businessImpactGroups: [
      {
        title: "A. Data Upload & Validation System",
        items: [
          "Eliminated script dependencies for Excel ingestion into the corporate Raw Database.",
          "Streamlined bulk uploads through automated column mapping and schema routing.",
          "Centralized SLA validation workflows and audit remarks within a single portal.",
          "Accelerated over-limit tracking and follow-up reviews by the Data & Reporting team.",
        ],
      },
      {
        title: "B. ETL Pipeline Development",
        items: [
          "Automated data cleansing and transformation between Raw and Ready Databases.",
          "Standardized business rule validation before analytical reporting generation.",
          "Supplied verified, production-grade Datamarts powering Power BI dashboards.",
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
      "ETL Pipelines",
      "Datamart Architecture",
    ],
    screenshots: [
      {
        url: "/assets/sisi/csa1.png",
        title: "Raw Data Upload Interface (Sheet Control)",
        caption:
          "High-volume import interface supporting Excel SLA Reports and CSV files (up to 500MB) into staging databases with multi-step sheet mapping.",
        isPrimary: true,
      },
      {
        url: "/assets/sisi/csa8.png",
        title: "MagangHub Monev Portal — Monthly Evaluation",
        caption:
          "Official monitoring and evaluation dashboard on MagangHub (Ministry of Manpower) tracking monthly progress under industry mentorship (Muhammad Ali Sofian).",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa9.png",
        title: "Performance Indicator / KPI: Quality Standards & System Go-Live",
        caption:
          "Evaluation metrics confirming 100% on-time go-live, data accuracy >=99%, system uptime >=99.5%, and 100% regulatory audit trail readiness.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa10.png",
        title: "Performance Indicator / KPI: Report Dashboard App Development",
        caption:
          "KPI review on developing system-based reporting applications to empower strategic and operational decision-making.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa11.png",
        title: "Performance Indicator / KPI: Sheet Control App Development",
        caption:
          "KPI achievement verifying 100% core feature readiness and data ingestion workflows for the Sheet Control validation app.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa12.png",
        title: "Performance Indicator / KPI: ETL Pipeline Completeness & Accuracy",
        caption:
          "KPI evaluation validating ETL pipeline completeness and accuracy (>=95%) with zero record loss or logical transformation errors.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/csa13.png",
        title: "Internship Verification Profile at PT SISI — MagangHub",
        caption:
          "Official verification credential at PT Sinergi Informatika Semen Indonesia (GRAHA Aktiva 11th Floor, Jakarta) registered in MagangHub Kemnaker.",
        isPrimary: false,
      },
      {
        url: "/assets/sisi/sertifikat_magang_hub.jpg",
        title: "Official Internship Certificate — MagangHub Kemnaker & PT SISI",
        caption:
          "Official Certificate of Completion (No. MN.031.041543.02.2025) for the Graduate Internship Program at PT Sinergi Informatika Semen Indonesia with the grade of Excellent, issued by Kemnaker RI and PT SISI.",
        isPrimary: false,
      },
    ],
  },
  {
    id: "cipta-krida-bahari",
    company: "PT Cipta Krida Bahari (CKB Group)",
    role: "Full-Stack Web Developer",
    period: "Jun 2025 — Oct 2025",
    location: "Jakarta, Indonesia",
    employmentType: "Internship",
    problemToSolve:
      "The process of recording usage and conducting periodic inspections of safety facilities and operational equipment across various PT Cipta Krida Bahari branches was previously carried out manually using paper-based forms, with the records subsequently compiled in Microsoft Excel. These activities included recording consumption medical supply, inspecting generator conditions, checking medical supply inventory, and inspecting hydrant pipes. The manual recording and recapitulation processes resulted in uncentralized management of usage data and inspection records, making it difficult to monitor inspection histories, identify stock replenishment requirements, and oversee the condition of facilities across different branches. Therefore, a web-based system was required to digitize the recording and inspection processes, reduce reliance on paper-based documentation and Microsoft Excel, and facilitate the structured monitoring of operational information.",
    responsibilities: [
      "Developed four operational web modules using Laravel, PHP, Vue.js, JavaScript, and MySQL to support safety inspections and supply logging across CKB branches.",
      "Engineered First Aid Kit Consumption to track and monitor daily branch-level medical usage.",
      "Built First Aid Kit Inspection to document monthly audits, track usage trends, detect depleted items, and monitor remaining stock levels.",
      "Developed Genset Inspection to support periodic maintenance audits and operational readiness tracking for emergency generators.",
      "Developed Hydrant Pipe Inspection to record and inspect fire safety hydrant pipeline installations.",
      "Designed and integrated relational MySQL databases to store usage data and inspection logs systematically.",
      "Built full-stack frontend and backend interfaces and performed rigorous API integration testing using Postman.",
    ],
    businessImpact: [
      "Digitized First Aid Kit usage records and facility inspection documentation, replacing previously manual recording processes.",
      "Simplified the monitoring of First Aid Kit consumption and availability through structured usage records and periodic stock inspections.",
      "Established inspection records for generators and hydrant pipeline systems to support facility condition monitoring and operational readiness assessments.",
      "Centralized usage records and inspection results across multiple branches, facilitating monitoring and data traceability for relevant stakeholders.",
      "Supported the standardization of routine inspection reporting and documentation processes across the company's operational environment.",
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
        title: "First Aid Kit Consumption Monitoring Dashboard",
        caption:
          "Branch operational dashboard displaying real-time stock levels, item consumption trends, and medical inventory turnover.",
        isPrimary: true,
      },
      {
        url: "/assets/consumptionP3K/inspectionP3K_1.png",
        title: "First Aid Kit Inspection Module",
        caption:
          "Monthly inspection management system tracking consumption trends, depleted supplies, and branch inventory replenishment.",
        isPrimary: false,
      },
      {
        url: "/assets/consumptionP3K/inspectionP3K_2.png",
        title: "First Aid Kit Inspection Form",
        caption:
          "Field audit form used by safety officers to evaluate physical box condition and mandatory medical supply completeness.",
        isPrimary: false,
      },
      {
        url: "/assets/consumptionP3K/inspectionGenset_1.png",
        title: "Emergency Generator Inspection Module",
        caption:
          "Periodic audit system monitoring operational readiness, fuel levels, and maintenance logs for facility generators.",
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
    employmentType: "Internship",
    problemToSolve:
      "Production equipment testing records at the PT Telkom Satelit Indonesia workshop were previously recorded manually on paper forms and subsequently re-entered into Excel spreadsheets. This manual workflow spanned device test documentation, operational suitability verification, and document report generation. Fragmented data made it difficult to monitor overall equipment readiness (Progress, Not OK, OK, and Untested). A web-based backend system was needed to centralize testing records, automate official test document generation from entered parameters, and provide an executive monitoring dashboard to oversee production unit readiness.",
    responsibilities: [
      "Developed the backend system for recording and monitoring production equipment test results using Laravel, PHP, JavaScript, and MySQL.",
      "Designed and deployed 16 robust RESTful APIs within 2 months to support device testing data management and validation.",
      "Implemented diagnostic logging logic and equipment qualification statuses based on technician inspection parameters.",
      "Engineered automated test report document generation directly from verified system test inputs.",
      "Built a monitoring dashboard displaying equipment readiness distributions (Progress, Not OK, OK, and Untested).",
      "Collaborated with System Architects and QA engineers to align API specifications and guarantee endpoint reliability.",
      "Authored database migration scripts and optimized MySQL queries for workshop inventory and diagnostic telemetry.",
    ],
    businessImpact: [
      "Digitized production equipment test logging, eliminating physical paperwork and manual Excel re-entry.",
      "Accelerated administrative report delivery via automated document generation derived from verified test data.",
      "Enabled real-time oversight of workshop equipment readiness through centralized status classification.",
      "Centralized test histories, facilitating rapid audit tracing and device suitability verifications.",
      "Delivered 16 enterprise RESTful APIs enabling seamless inter-module data integration.",
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
        title: "Equipment Readiness Monitoring Dashboard",
        caption:
          "Centralized dashboard displaying workshop equipment testing distributions (Progress, Not OK, OK, and Untested).",
        isPrimary: true,
      },
      {
        url: "/assets/magangTelkomsat/magangTel2.png",
        title: "Equipment Test Form & API Telemetry Parameters",
        caption:
          "Detailed diagnostic interface logging serial numbers, diagnostic metrics, and technician suitability remarks.",
        isPrimary: false,
      },
      {
        url: "/assets/magangTelkomsat/magangTel3.png",
        title: "Maintenance Schedule & Calibration History",
        caption:
          "Operational log tracking periodic service cycles, technician notes, and equipment calibration compliance.",
        isPrimary: false,
      },
      {
        url: "/assets/magangTelkomsat/sertifikatTelkomsat.jpg",
        title: "Industrial Internship Certificate — PT Telkom Satelit Indonesia",
        caption:
          "Official certificate of merit for designing 16 RESTful APIs and the satellite workshop inventory management module.",
        isPrimary: false,
      },
    ],
  },
];

export const SKILL_CATEGORIES_EN: SkillCategory[] = [
  {
    category: "Backend Development",
    skills: [
      { name: "Laravel", note: "MVC, Eloquent ORM, Queues, Service Layer" },
      { name: "PHP", note: "OOP, Modern PHP 8+" },
      { name: "RESTful API Design", note: "Authentication, Rate Limiting, JSON:API" },
      { name: "Node.js", note: "Express, API Runtimes" },
      { name: "System Architecture", note: "Domain Separation & Ingestion Staging" },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Python", note: "Pandas, Data Cleaning, Automation" },
      { name: "Apache Airflow", note: "DAG Scheduling, ETL Workflows" },
      { name: "ETL Pipelines", note: "Data Ingestion, Transformation, Validation" },
      { name: "Data Validation" }
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", note: "Complex Queries, Indexing, Datamart Partitions" },
      { name: "MySQL", note: "Schema Optimization, Inter-table Relations" },
      { name: "Database Staging", note: "Batch Data Ingestion & Upload Isolation" },
      { name: "DBeaver", note: "Query Analysis & Database Administration" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", note: "Single Page Application (SPA), State Management, Hooks" },
      { name: "Vue.js", note: "Composition API, Reactive Components" },
      { name: "TypeScript", note: "Strict Typing, Structured Interfaces" },
      { name: "JavaScript (ES6+)", note: "Asynchronous I/O, Modular DOM" },
      { name: "Tailwind CSS", note: "Responsive Layouts & Design Systems" },
    ],
  },
  {
    category: "Tools, Platforms & AI",
    skills: [
      { name: "Antigravity", note: "Development Workspace & Debugging" },
      { name: "Excel" },
      { name: "Git & GitHub", note: "Version Control, Branching, Pull Requests" },
      { name: "Postman", note: "API Documentation & Automated Testing" },
      { name: "Vs Code", note: "IDE" },

    ],
  },
];

export const CERTIFICATIONS_LIST_EN: CertificationItem[] = [
  {
    title: "Certified Professional Software Developer",
    issuer: "National Professional Certification Agency (BNSP)",
    issueDate: "National Work Competency Standards (SKKNI)",
    documentPath: "/assets/BNSP.pdf",
    type: "Licensed Professional Certification",
    description:
      "Official national competency certification validating professional skills in software specification design, structured programming, database implementation, code testing, and system interface integration.",
    competencies: [
      "Structured Software Architecture Design",
      "Relational Database Implementation & SQL",
      "Code Testing & Documentation Standards",
    ],
  },
  {
    title: "Data Warehousing & Engineering Training — Certified Independent Study",
    issuer: "Kemendikbudristek & PT Dibimbing Digital Indonesia",
    issueDate: "February — June 2024",
    documentPath: "/assets/DataWarehousing.pdf",
    type: "Certified Training Program",
    description:
      "Intensive Certified Independent Study training program (Kampus Merdeka Kemendikbudristek) in collaboration with PT Dibimbing Digital Indonesia. Learned and implemented end-to-end data processing, modern data warehousing, data governance, and automated ETL pipelines.",
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

export const FAQ_LIST_EN: FaqItem[] = [
  {
    question: "Are you only open to Software Engineer or Data Engineer positions?",
    answer:
      "No. I am very open to other positions outside of the roles I have previously worked in. I have a professional background in Software Engineering and Data Engineering across multiple industries. With this background, I am highly flexible and not rigidly confined to data or software roles alone. I believe this experience equips me with strong adaptability and rapid learning skills for new workflows, business domains, and technologies.",
    category: "Role Flexibility",
  },
  {
    question:
      "What is your career focus and direction moving forward? What roles or fields do you aspire to pursue long-term?",
    answer:
      "For my future career plans, I want to continuously grow in roles that involve technical capabilities, analysis, and problem-solving. As a fresh graduate at the early stage of my professional journey, I do not want to restrict my career path to a single rigid position or specialization. So far, the opportunities and experiences I have engaged in the most have indeed been in software development and data processing (data engineering). For me right now, what matters most is not merely the specific job title or position I hold, but how I can deliver tangible contributions to the company using my skill set, assist the team in solving problems, and create a positive impact for the team or organization in whatever role I undertake.",
    category: "Career Direction & Goals",
  },
  {
    question: "What is your proficiency in English?",
    answer:
      "My listening and speaking skills still need improvement, but regarding reading and technical writing, I have no issues so far.",
    category: "Language Proficiency",
  },
  {
    question: "Are you proficient in Microsoft Excel?",
    answer:
      "Yes, I understand the fundamental features of Microsoft Excel, such as tabular data input and cleaning, common formulas and functions (e.g., SUM, AVERAGE, COUNT, IF, VLOOKUP/XLOOKUP), as well as basic charts and tables.\n\nDuring my previous professional engagements, my work primarily focused on relational databases (SQL/PostgreSQL/MySQL), enterprise web applications, and data automation scripts (Python/Airflow) due to large-scale enterprise data requirements, which meant that Excel was rarely required in my daily routine. However, this does not mean I cannot use it; with my solid foundation in data logic, I can operate Excel effectively and am readily prepared to learn advanced functions whenever operational workflows require them.",
    category: "Technical Tools",
  },
  {
    question: "How is your ~1.5 years of experience broken down?",
    answer:
      "My ~1.5 years of experience is distributed across 4 companies in diverse industries: 3 internships (PT Telkom Satelit Indonesia for 5 months, PT Cipta Krida Bahari for 5 months, PT Sinergi Informatika Semen Indonesia for 6 months), and 1 project-based engagement at IT Consulting Client & Confidential Enterprise Project for 4 — 5 weeks.",
    category: "Experience Overview",
  },
  {
    question: "What is your readiness regarding work arrangements (On-Site, Hybrid, or Remote)?",
    answer:
      "I am fully prepared and flexible to work in On-Site (WFO), Hybrid, or Remote arrangements. I am accustomed to working both independently and collaboratively within teams across Jakarta and surrounding areas.",
    category: "Work Arrangement",
  },
  {
    question: "What key value do you bring to a team or company?",
    answer:
      "The dual capability bridging software engineering and data engineering (Python, SQL, ETL (extract, transform, and load data)). I can approach operational challenges from both application architecture and data integrity perspectives, resulting in robust and business-driven solutions.",
    category: "Value Proposition",
  },
  {
    question: "When are you available to start?",
    answer:
      "I am immediately available to join and ready to undergo the interview process and company onboarding.",
    category: "Availability",
  },
];

