import {
  BriefcaseBusiness, Globe2, Layers3, MonitorSmartphone, Terminal,
} from "lucide-react";

export type ProjectDetail = {
  number: string;
  slug: string;
  name: string;
  type: string;
  description: string;
  highlights: string[];
  stack: string[];
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  tone: "violet" | "cyan" | "orange";
  note: string;
  // NEW — detail-page fields
  year: string;
  role: string;
  status: string;
  overview: string[];
  // tools: string[];
  challenges: { title: string; body: string }[];
  outcomes: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: ProjectDetail[] = [
  // {
  //   number: "01",
  //   slug: "begalileo-learning-platform",
  //   name: "beGalileo · Learning Platform",
  //   type: "PRODUCT EXPERIENCE",
  //   description:
  //     "An online learning platform with interactive learning modules and live classroom experiences connecting teachers and students.",
  //   highlights: [
  //     "LiveClass video experience",
  //     "Real-time chat and screen sharing",
  //     "Interactive question modules",
  //   ],
  //   stack: ["React", "Next.js", "TypeScript", "Twilio Video SDK", "Tailwind CSS"],
  //   icon: MonitorSmartphone,
  //   tone: "violet",
  //   note: "Professional product experience",
  //   year: "2024 — Present",
  //   role: "Software Developer",
  //   status: "In production",
  //   overview: [
  //     "beGalileo is a full learning platform used by students and teachers across the world. I work on the frontend, contributing to both the LiveClass experience (video, chat, screen sharing) and the interactive question modules that students use during lessons.",
  //     "My work sits at the intersection of realtime UI and product polish — building interfaces that respond instantly, degrade gracefully on slow networks, and stay consistent across devices.",
  //   ],
  //   challenges: [
  //     {
  //       title: "Realtime video + chat in a browser",
  //       body: "LiveClass combines Twilio Video SDK with realtime chat and screen sharing. The tricky part is managing simultaneous video streams, chat state, and screen shares without blocking the main thread or dropping frames on lower-end devices.",
  //     },
  //     {
  //       title: "Consistent UI across 200+ daily classes",
  //       body: "Every class runs the same UI in different network and device conditions. I focused on resilient layouts, graceful loading states, and defensive error handling so teachers and students never see a broken interface mid-class.",
  //     },
  //     {
  //       title: "Performance under load",
  //       body: "Lazy loading, memoization, and code splitting on the frontend reduced initial page load time by roughly 30% and improved Lighthouse scores — critical for students on slower connections.",
  //     },
  //   ],
  //   outcomes: [
  //     { label: "Daily live classes", value: "200+" },
  //     { label: "Faster page loads", value: "30%" },
  //     { label: "Core stack", value: "React + Node" },
  //   ],
  //   demoUrl: undefined, // professional product, no public demo
  //   githubUrl: undefined,
  // },
  {
    number: "01",
    slug: "begalileo-learning-platform",
    name: "beGalileo · Learning Platform",
    type: "PRODUCT EXPERIENCE",
    description:
      "An online learning platform with interactive learning modules and live classroom experiences connecting teachers and students.",
    highlights: [
      "LiveClass video, chat, screen sharing, recording",
      "Interactive question engine (math, English, speed games)",
      "Component-level error boundaries + telemetry",
      "Chunked recording upload with retry",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Twilio Video SDK",
      "Redux Toolkit",
      "Context API",
      "Tailwind CSS",
      "REST APIs",
      "AWS S3",
      "AWS Polly",
      "ChatGPT API",
    ],
    icon: MonitorSmartphone,
    tone: "violet",
    note: "Professional product experience",
    year: "2024 — Present",
    role: "Software Developer",
    status: "In production",
    overview: [
      "beGalileo is a full online learning platform used by students and teachers across the world. I work on the frontend, contributing to two core surfaces: the LiveClass experience (video, chat, screen sharing, recording) and the interactive question engine that students work through during lessons.",
      "My work sits at the intersection of realtime UI and production reliability — building interfaces that respond instantly, degrade gracefully when something fails, and stay consistent across devices and network conditions.",
    ],
    challenges: [
      {
        title: "Realtime LiveClass experience",
        body: "LiveClass combines **Twilio Video SDK** with **realtime chat, screen sharing, and teacher-student data synchronization**. The hard part is managing simultaneous video streams, chat state, and screen shares without blocking the main thread — or dropping frames on lower-end devices during **200+ daily classes**.",
      },
      {
        title: "Interactive question engine — Math Zone & English Zone",
        body: "Built a **pluggable question system** spanning multiple subjects and interaction types. **Math Zone** covers number line, short division, addition, linear addition, multiple choice, match-the-following, and place value. **English Zone** covers fill-in-the-blank, jumbled words, correct-spelling selection, grammar exercises, opposites and synonyms, and reading comprehension — each with its own validation model: **string matching with fuzzy tolerance, option comparison, or keyword presence**. Beyond those, the engine handles **word search** and **speed math** where students compete against the teacher or the computer. Every question type has its own interaction model, scoring logic, and answer validation, but they all share a **common lifecycle** — mount, receive question payload, capture answer, validate, emit result. That shared contract meant **adding a new question type was dropping in one component, not modifying the engine**.",
      },
      {
        title: "Teacher live answer review and timing",
        body: "While a student works through the Math Zone, the teacher sees **a live view of every answer submitted — including timing**. For each question the teacher can see **what the student answered, how long they took, whether it was correct**, and if incorrect, exactly which answer they chose. If a student is stuck, the teacher has full context to intervene: **was it a wrong answer, a slow answer, or a skipped question?** Data syncs over the same realtime channel as the rest of LiveClass, so there's no perceivable delay between a student submitting and the teacher seeing it.",
      },
      {
        title: "Teacher whiteboard with realtime student sync",
        body: "Built a **full whiteboard tool** for teachers to draw, annotate, and write freely during a lesson. Includes **free-hand drawing, shape tools, text blocks, an eraser, and multi-page navigation**. All canvas state syncs to students in realtime — **every stroke, shape, and page change appears on the student's screen within milliseconds**. The whiteboard lives inside the **shared component library**, so the student view renders the same drawing surface with interaction disabled. The key architectural decision was **delta sync** — instead of sending full canvas snapshots, each drawing operation is transmitted as a minimal delta, and the student's canvas replays them in order. **That keeps bandwidth flat regardless of how much is drawn.**",
      },
      {
        title: "Interactive Storybook with AI word lookups",
        body: "Built a **book-style reader** used inside LiveClass and on the student portal. The UI mimics a real book — **page turns, spread layout, typography** — so reading feels natural instead of like a web widget. **Tapping any word** surfaces its full details: meaning, sentence usage, synonyms, antonyms, and audio pronunciation. Word details are fetched from the **ChatGPT API on demand and cached per word** so repeat lookups are instant. Audio pronunciation is generated with **AWS Polly** — no third-party TTS SDK runs in the browser. Because the same Storybook component ships to both LiveClass and the portal, the reader is **written once and shared**, keeping the two surfaces identical and reducing maintenance to a single source of truth.",
      },
      {
        title: "Fault-tolerant UI with component-level error boundaries",
        body: "Wrapped **each question component in its own error boundary** so a single broken widget can't take down the whole LiveClass. If one question type fails, **the class continues** — the teacher can skip to the next topic while the failure is reported silently in the background. Combined with a top-level boundary, the worst case is **one component disappearing, not the entire lesson ending**.",
      },
      {
        title: "Silent telemetry and in-class ticket raising",
        body: "When an error boundary catches a failure, it fires **a diagnostic API call with the full context needed to debug**: the question payload, current UI state, active topic, **network speed**, and a screenshot of the failing component. The same mechanism powers a **user-facing ticket flow** — if a teacher or student notices a UI or content issue, they can raise a ticket in one click, and it sends the same rich diagnostic bundle to the backend.",
      },
      {
        title: "Live class recording with chunked AWS upload + retry",
        body: "Every LiveClass session is recorded end-to-end and persisted to AWS using **S3 multipart uploads**. Recording a full lesson as one upload is fragile — any network hiccup, browser throttling, or server timeout fails the whole thing. So the recording is **split into numbered chunks, each uploaded independently**. If a chunk fails, **it retries with exponential backoff** without restarting the whole upload. Chunks are tracked client-side with their **ETags**, and once every part succeeds, the client calls a finalize endpoint that asks S3 to **assemble the parts into a single video file**. If the tab closes mid-upload, **upload state is persisted locally** so the recording resumes on the next visit instead of losing the lesson.",
      },
      {
        title: "Frontend performance & SEO",
        body: "Improved initial page load time by roughly **30%** through **lazy loading, memoization, and code splitting**, and implemented Next.js **SEO best practices** — SSR, SSG, dynamic metadata, and semantic HTML — to improve search visibility and organic traffic.",
      },
    ],
    outcomes: [
      { label: "Daily live classes", value: "200+" },
      { label: "Question types", value: "10+" },
      { label: "Recording reliability", value: "Retry-safe" },
    ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
    number: "02",
    slug: "browser-python-editor",
    name: "Browser-based Python Editor",
    type: "DEVELOPER TOOL",
    description:
      "A browser-based coding environment where students write and run real Python — including NumPy, Turtle, and Skulpt-powered visuals — without installing anything. Full file and folder management, in-browser execution via Pyodide, and Web Workers to keep the UI responsive.",
    highlights: [
      "Create, rename, delete, and organize files + folders",
      "Real Python execution via Pyodide (WASM)",
      "NumPy, Turtle graphics, and Skulpt support",
      "react-ace editor with syntax highlighting",
      "Web Workers keep the UI responsive during execution",
    ],
    stack: [
      "React",
      "TypeScript",
      "Pyodide",
      "Skulpt",
      "react-ace",
      "Web Workers",
      "NumPy",
      "Vite",
      "Webpack",
    ],
    icon: Terminal,
    tone: "cyan",
    note: "Interactive coding experience",
    year: "2025",
    role: "Software Developer",
    status: "In production",
    overview: [
      "A teaching tool built into the learning platform. Students write and run **real Python** in the browser without installing anything — the editor manages their files and folders, executes code safely, and reports results back in real time. Because it runs entirely client-side, it works on shared school devices, Chromebooks, and low-spec laptops where installing Python isn't an option.",
      "The editor is designed to feel like a real IDE: **syntax highlighting via react-ace**, a persistent file tree, an output console, and a run button that responds in milliseconds. Students can run NumPy computations, draw with Turtle graphics, and execute Skulpt-based programs — all inside the same editor, with the same file system.",
    ],
    challenges: [
      {
        title: "Running real Python in the browser with Pyodide",
        body: "Executing Python entirely in the browser means loading a **WASM-compiled Python runtime** — Pyodide. It's powerful but heavy: the initial load fetches megabytes of WASM, and once running, Python code executes on the **main thread** unless isolated. The editor boots Pyodide lazily — only when the student hits Run for the first time — so the page stays fast for students who are just reading. Package loading (NumPy and friends) happens on demand via Pyodide's `loadPackage`, so a student who never touches NumPy never pays for it.",
      },
      {
        title: "Keeping the UI responsive with Web Workers",
        body: "Python code can run for seconds — or infinite-loop — and blocking the main thread would freeze the entire editor: no typing, no scrolling, no cursor. So Pyodide runs inside a **dedicated Web Worker**, and the main thread communicates with it via `postMessage`. The editor stays fully interactive while Python runs, and an **interrupt path** lets the user cancel a runaway script without reloading the page. Console output is streamed back from the worker in real time — each `print()` appears in the output panel as the code executes, not after.",
      },
      {
        title: "File and folder management that survives reloads",
        body: "Built a full **file tree with create, rename, delete, and move** operations — plus drag-to-nest folders, since that's what students expect from a real IDE. The tree is backed by a **virtual filesystem** that mirrors what Pyodide sees: when the student clicks Run, the current files are written into Pyodide's in-memory FS so `import mymodule` works exactly as it would locally. The whole tree is persisted to **IndexedDB**, so closing the tab and coming back keeps every file. Deleting a folder deletes its descendants atomically — no orphaned files after a partial delete.",
      },
      {
        title: "Multi-runtime support — Pyodide, Skulpt, Turtle",
        body: "Different lessons need different runtimes. **Pyodide** handles real Python with NumPy for data-science-style exercises. **Skulpt** is used for lightweight, fast-booting Python where instant feedback matters more than full library support. **Turtle graphics** runs through Pyodide and renders to an HTML canvas, giving students the classic turtle-drawing experience in the browser. The editor abstracts the runtime behind a **common execution interface** — swap the runtime, keep the same editor, file tree, and output panel.",
      },
    ],
    outcomes: [
      { label: "Runtimes", value: "3" },
      { label: "Execution", value: "Pyodide WASM" },
      { label: "Responsive", value: "Web Workers" },
    ],
    // tools: [
    //   "pyodide",
    //   "skulpt",
    //   "react-ace",
    //   "ace-builds",
    //   "idb-keyval",
    //   "axios",
    //   "zustand",
    //   "uuid",
    //   "framer-motion",
    //   "lucide-react",
    // ],
    demoUrl: undefined,
    githubUrl: undefined,
  },
  {
  number: "03",
  slug: "studynotion-mern-app",
  name: "StudyNotion · Full-Stack Learning Platform",
  type: "FULL-STACK PROJECT",
  description:
    "An end-to-end learning management platform — React frontend, Node.js/Express API, PostgreSQL + Supabase persistence, JWT + OTP auth, Cloudinary media, payment gateway integration, HubSpot CRM webhooks, and New Relic observability.",
  highlights: [
    "React frontend + Node.js/Express backend",
    "PostgreSQL via Supabase with Prisma ORM",
    "JWT auth + email OTP verification",
    "Payment gateway integration for course purchases",
    "HubSpot webhooks for lead/student sync",
    "New Relic APM for backend observability",
  ],
  stack: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "JWT",
    "Cloudinary",
    "HubSpot",
    "New Relic",
    "Razorpay",
    "Tailwind CSS",
  ],
  icon: Layers3,
  tone: "orange",
  note: "Independent full-stack project",
  year: "2023 — 2024",
  role: "Full-stack Developer",
  status: "Personal project",
  overview: [
    "StudyNotion is a **full-stack learning platform** I built end-to-end: React on the frontend, **Node.js + Express** on the backend, **PostgreSQL via Supabase** for persistence, and **Prisma** as the ORM. Every feature exercises the complete request lifecycle — form → API → database → response → UI update — so nothing is faked on either side of the wire.",
    "Beyond the CRUD baseline, the app handles **real production concerns**: JWT auth with HTTP-only cookies, email OTP verification, signed Cloudinary uploads, **payment gateway integration** for course purchases, **HubSpot webhooks** so leads and enrollments sync to CRM, and **New Relic APM** on the backend for tracing slow requests and failed queries. It's the project where I learned what full-stack actually means — you own the bug whether it's in React state or a SQL join.",
  ],
  challenges: [
    {
      title: "JWT auth + OTP verification across the stack",
      body: "Auth uses **JWT access tokens stored in HTTP-only cookies** — the browser never reads the token directly, which blocks XSS token theft. Signup goes through an **email OTP flow**: the backend generates a code, sends it via a transactional email provider, and validates it before activating the account. The tricky part is **refresh and expiry** — access tokens are short-lived, refresh tokens are longer, and the frontend has to handle '401 → silently refresh → retry the original request' without logging the user out mid-action. Logout clears both cookies and revokes the refresh token server-side.",
    },
    {
      title: "PostgreSQL + Prisma schema design",
      body: "Course data is relational: **users → courses → sections → lessons → enrollments → payments**. I modelled this in **PostgreSQL** (hosted on **Supabase**) with **Prisma** as the ORM — typed schema, generated client, and migrations tracked in source control. The hard part was getting the **relationships right**: a course belongs to an instructor, contains ordered sections, each section contains ordered lessons, and enrollments join users to courses with a payment record attached. Prisma's relations made the queries readable, but the schema decisions — cascade rules, indexes on foreign keys, soft-delete vs hard-delete — were the actual engineering.",
    },
    {
      title: "Payment gateway integration",
      body: "Course purchases run through a **payment gateway** (Razorpay). The flow is deliberately server-driven: the frontend requests an order, the **backend creates the order** with the gateway (so amounts and currency are server-controlled, never trusted from the client), the frontend opens the gateway's checkout, and on success the gateway calls a **webhook** back to the backend. The webhook is the source of truth — it's **signature-verified** so a fake request can't grant a free enrollment. Only after the webhook confirms payment does the backend write the enrollment record and return success to the user.",
    },
    {
      title: "Cloudinary media with signed uploads",
      body: "Course thumbnails and lesson videos go through **Cloudinary** instead of being stored on the server or in the database. The backend generates **signed upload signatures** on demand — the frontend receives a short-lived token and uploads directly to Cloudinary, so the API secret never touches the browser and the Node server never proxies multi-megabyte video files. The database stores only the Cloudinary public IDs, and the frontend renders through Cloudinary's transformation URLs for responsive image sizing.",
    },
    {
      title: "HubSpot webhooks for CRM sync",
      body: "When a student enrolls or a lead submits an inquiry, the backend fires a **HubSpot webhook** to create or update the contact in CRM. The integration runs **server-side** so the HubSpot API key never leaves the backend, and it's **idempotent** — the same student enrolling twice doesn't create two CRM records. Failures from HubSpot (rate limits, 5xx) are logged but **never block the user's enrollment** — CRM sync is treated as best-effort, with a retry queue in the background.",
    },
    {
      title: "New Relic APM on the backend",
      body: "Instrumented the Node.js API with **New Relic APM** so slow endpoints, failing queries, and error rates are visible without grepping logs. New Relic traces each request end-to-end — Express middleware, Prisma queries, outbound calls to Cloudinary/HubSpot/Razorpay — so a slow enrollment isn't a mystery; the trace shows exactly which query or external call is the bottleneck. Custom events tag requests by user role and route, so I can answer questions like 'are instructor dashboard endpoints slower than student ones?'",
    },
  ],
  outcomes: [
    { label: "Stack", value: "MERN + Postgres" },
    { label: "Observability", value: "New Relic" },
    { label: "Payments", value: "Razorpay" },
  ],
  // tools: [
  //   "react",
  //   "node",
  //   "express",
  //   "prisma",
  //   "@prisma/client",
  //   "@supabase/supabase-js",
  //   "jsonwebtoken",
  //   "bcrypt",
  //   "cloudinary",
  //   "razorpay",
  //   "newrelic",
  //   "axios",
  //   "cors",
  //   "dotenv",
  //   "react-router-dom",
  //   "reduxjs/toolkit",
  //   "react-redux",
  //   "tailwindcss",
  // ],
  demoUrl: undefined,
  githubUrl: "https://github.com/Rajushk",
},
  {
  number: "04",
  slug: "beGalileo-learning-platform",
  name: "beGalileo · Learning Platform",
  type: "WEBSITE ENGINEERING",
  description:
    "The public-facing marketing site that sits outside the learning platform — responsive landing pages, dynamic content routes, and a multi-step lead-capture flow integrated with HubSpot CRM and instrumented with Google Tag Manager.",
  highlights: [
    "Responsive landing pages across mobile, tablet, desktop",
    "Multi-step lead capture form with per-step validation",
    "Dynamic routes for content (pages driven by a CMS or data source)",
    "HubSpot integration — form submissions sync to CRM",
    "Google Tag Manager instrumentation for conversion tracking",
    "SEO-ready with metadata, semantic HTML, and fast loads",
  ],
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Context API",
    "HubSpot API",
    "Google Tag Manager",
    "react-hook-form",
    "Zod",
  ],
  icon: Globe2,
  tone: "violet",
  note: "Public marketing surface",
  year: "2025",
  role: "Software Developer",
  status: "In production",
  overview: [
    "The outer site is the **public front door** to the product — everything a prospective parent, teacher, or school administrator sees before signing up. It's built as its own Next.js app, separate from the learning platform, with its own deployment cadence, its own content pipeline, and its own performance budget.",
    "The build covers **fully responsive landing pages**, **dynamic routes** for content-driven pages, and a **multi-step lead-capture form** that pipes submissions straight into **HubSpot** so the sales team works from a single CRM. Analytics run through **Google Tag Manager** so marketing can track conversions, form starts, and CTA clicks without shipping code for every new event. The pages are tuned for SEO — metadata, semantic HTML, structured content — because organic traffic is the site's primary purpose.",
  ],
  challenges: [
    {
      title: "Responsive landing pages across every device",
      body: "Every page is built **mobile-first** with a consistent spacing and typography scale — a marketing site has to look deliberate at 375px, 768px, 1024px, and 1440px, not just at desktop. Tailwind's responsive utilities handle the breakpoints, but the harder work is **content hierarchy**: what's above the fold on mobile isn't the same as what's above the fold on desktop. Sections reflow, images swap sizes, and CTA placements shift so the page reads well regardless of viewport.",
    },
    {
      title: "Multi-step lead capture with per-step validation",
      body: "The lead form is **multi-step** — contact details, then role/company, then specific interests — with **per-step validation via react-hook-form + Zod**. Users can't advance to step 2 with an invalid email, but they can navigate backwards without losing data. The whole form is **schema-validated end to end** so a user who somehow bypasses the UI validation still can't submit invalid data. Submission errors (network failure, HubSpot rejection) are surfaced inline with **retry without losing form state**.",
    },
    {
      title: "Dynamic routes for content-driven pages",
      body: "Most of the marketing site's pages are **data-driven, not hardcoded** — blog posts, resource pages, feature pages, and case studies all render through **dynamic routes** in Next.js. Content is fetched at request/build time and each page uses `generateStaticParams` to pre-render at build. That gives the marketing team the ability to publish pages **without a code deploy** — they write content, the site renders it. SEO metadata (title, description, Open Graph tags) is generated per page from the content source.",
    },
    {
      title: "HubSpot integration — leads sync to CRM",
      body: "Every form submission flows into **HubSpot** so the sales team works from a single source of truth. The integration goes through a **server-side API route** — the browser never holds the HubSpot access token. On submit, the API route validates the payload, maps form fields to HubSpot's contact properties, and posts to HubSpot's Forms or Contacts API. Responses (success, duplicate contact, rate-limit) are normalized so the frontend can show meaningful feedback — 'thanks, we'll be in touch' versus 'something went wrong, try again' — instead of a generic error.",
    },
    {
      title: "Google Tag Manager + conversion tracking",
      body: "Marketing needs to know which pages and CTAs drive leads — so **Google Tag Manager** is wired into the site with a small dataLayer utility that fires structured events: `form_start`, `form_step_complete`, `form_submit`, `cta_click`, and `scroll_depth`. Events are pushed to `window.dataLayer` from React handlers, and GTM tags map them to GA4 and Google Ads conversions. The trick is **not firing a tag on every render** — a naive `useEffect` fires on every state change, inflating event counts. Events fire from **user interactions only** (onClick, onSubmit), and the dataLayer utility is typed so a typo in an event name is a TypeScript error, not a silent analytics bug.",
    },
    {
      title: "SEO and fast first paint",
      body: "The site's primary traffic source is search, so **SEO isn't an afterthought** — it's a primary constraint. Every page uses semantic HTML, proper heading hierarchy, descriptive alt text, and Next.js's Metadata API for per-page titles, descriptions, and Open Graph previews. **Images are optimized** through `next/image` with responsive sizes, and **fonts load with `display: swap`** so text paints immediately. Lighthouse scores in the high 90s on production pages, and Core Web Vitals are green.",
    },
  ],
  outcomes: [
    { label: "Pages shipped", value: "20+" },
    { label: "CRM", value: "HubSpot" },
    { label: "Analytics", value: "GTM + GA4" },
  ],
  // tools: [
  //   "next",
  //   "react",
  //   "react-hook-form",
  //   "zod",
  //   "@hookform/resolvers",
  //   "axios",
  //   "tailwindcss",
  //   "@reduxjs/toolkit",
  //   "react-redux",
  //   "lucide-react",
  //   "next-seo",
  // ],
  demoUrl: undefined,
  githubUrl: undefined,
},
];





export const skills = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Context API"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Webhooks", "Redis"] },
  { title: "Databases & ORM", items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "SQL Server"] },
  { title: "Tools & Testing", items: ["Git", "GitHub", "AWS Amplify", "Jest", "React Testing Library", "Vite", "Webpack"] },
];

// export const projects = [
//   {
//     number: "01", name: "beGalileo · Learning Platform", type: "PRODUCT EXPERIENCE",
//     description: "An online learning platform with interactive learning modules and live classroom experiences connecting teachers and students.",
//     highlights: ["LiveClass video experience", "Real-time chat and screen sharing", "Interactive question modules"],
//     stack: ["React", "Next.js", "TypeScript", "Twilio Video SDK"],
//     icon: MonitorSmartphone, tone: "violet" as const,
//     note: "Professional product experience",
//   },
//   {
//     number: "02", name: "Browser-based Python Editor", type: "DEVELOPER TOOL",
//     description: "A browser-based coding experience focused on managing files and folders and running Python code without leaving the learning environment.",
//     highlights: ["File and folder management", "In-browser code execution", "Web Workers for background work"],
//     stack: ["React", "TypeScript", "Web Workers"],
//     icon: Terminal, tone: "cyan" as const,
//     note: "Professional product experience",
//   },
//   {
//     number: "03", name: "StudyNotion · MERN Learning App", type: "FULL-STACK PROJECT",
//     description: "A learning management application with authentication, course workflows, and media handling.",
//     highlights: ["Authentication and authorization", "Email OTP verification", "Course management and Cloudinary"],
//     stack: ["React", "Node.js", "Express", "MongoDB"],
//     icon: Layers3, tone: "orange" as const,
//     note: "Independent full-stack project",
//   },
// ];

export const experience = [
  {
    role: "Software Developer",
    company: "CarveNiche Technologies Pvt. Ltd.",
    product: "beGalileo® — Online Learning Platform",
    period: "Dec 2024 — Present",
    points: [
      "Developed scalable, reusable UI components using React.js, Next.js, and TypeScript.",
      "Contributed to backend development with Node.js and Express.js — REST APIs, MongoDB/Mongoose, PostgreSQL/Prisma.",
      "Used Redis caching and integrated webhooks for efficient data retrieval and event-driven communication.",
      "Built LiveClass features (screen sharing, recording, real-time chat, teacher-student sync) using Twilio Video SDK, supporting 200+ daily live classes.",
      "Built a browser-based Python editor with file/folder management and Web Workers for background execution.",
      "Shipped multi-step forms with Redux Toolkit, Context API, robust error handling, and Jest + RTL component tests.",
      "Improved page load by ~30% via lazy loading, memoization, and code splitting; improved Lighthouse scores.",
      "Implemented Next.js SEO (SSR, SSG, dynamic metadata, semantic HTML) — improved search visibility.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Redis", "Twilio Video SDK"],
  },
  {
    role: "Software Developer",
    company: "TechCiti Software Consulting Pvt. Ltd.",
    product: "",
    period: "Jan 2024 — Dec 2024",
    points: [
      "Developed responsive, reusable UI components with React.js and Tailwind CSS.",
      "Optimized state management with Redux Toolkit and Context API for data consistency.",
      "Integrated REST APIs using Axios with async handling and error management.",
      "Debugged and resolved React component issues, improving user experience.",
    ],
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Context API", "Axios"],
  },
];

export const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export const artTone = {
  violet: "from-[rgba(125,93,210,0.23)] to-[rgba(30,36,60,0.7)]",
  cyan: "from-[rgba(52,178,202,0.2)] to-[rgba(30,36,60,0.7)]",
  orange: "from-[rgba(218,145,88,0.2)] to-[rgba(30,36,60,0.7)]",
};

export const iconTone = {
  violet: "text-[#c2adff] border-[rgba(204,194,255,0.3)]",
  cyan: "text-[#83d9ee] border-[rgba(204,194,255,0.3)]",
  orange: "text-[#f2b77e] border-[rgba(204,194,255,0.3)]",
};

// Shared section wrapper width
// export const SECTION_WRAP = "mx-auto w-[min(1120px,calc(100%-48px))]";
export const SECTION_WRAP = "mx-auto w-[min(1280px,calc(100%-48px))]";