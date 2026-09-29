# 📄 Product Requirement Document (PRD)
## Personal Portfolio Website — Jacklyn Tamara Wongso (Tamara)

---

## 1. Executive Summary & Core Objectives

* **Target Owner**: Jacklyn Tamara Wongso (Tamara)[cite: 1, 2]
* **Primary Roles**: B2B Account Executive, Strategic Marketer, Cross-Border Business Coordinator, Public Relations & Community Lead[cite: 1, 2].
* **Project Goal**: Membangun web portofolio personal berstandar eksekutif (*executive portfolio*) yang estetik, modern, dan interaktif guna menampilkan rekam jejak revenue B2B (Rp 229,65M+)[cite: 1, 2], kemampuan komunikasi lintas negara (Mandarin-Indonesia-Inggris)[cite: 1, 2], kepemimpinan kampanye (Gojek)[cite: 1, 2], serta keahlian *public speaking* dan kepemimpinan sosial[cite: 1, 2].
* **Target Audience**: Recruiter/Hiring Managers (e.g., Shopee, Gojek, Tech Enterprises)[cite: 1], Corporate PR Leads, serta Klien B2B International & Local[cite: 1].

---

## 2. Web Architecture & Section Breakdown

### 2.1 Sticky Navigation Header
* **Brand Logo/Monogram**: `TW / Tamara Wongso`
* **Navigation Links**: `About`, `Case Studies`, `Experience`, `Speaking`, `Contact`
* **CTAs**: Tombol `Get in Touch` (Pill Button) dan indikator status ketersediaan.

### 2.2 Hero Section (First Impression)
* **Live Status Badge**: `● Available for new opportunities`[cite: 3]
* **Headline Typographic Structure**:
  * Script/Serif Subtitle: *"Hello, I am"*[cite: 3]
  * Main Title: **TAMARA WONGSO**
* **Visual Presentation**: Foto profil studio Tamara dengan efek *Warm Amber Spotlight/Halo Glow* di latar belakang[cite: 3].
* **Floating Meta Chips**:
  * Chip Kiri: `Rp 229M+ Pipeline` (Verified Track Record)[cite: 1, 2]
  * Chip Kanan: `CN / US / ID Specs` (Bilingual Execution)[cite: 1, 2]
* **Action CTAs**: Tombol `Explore Case Studies` (Primary Dark Button) & `Executive Resume` (Secondary Download Button)[cite: 2].

### 2.3 Key Metrics Bar (Bento Highlights)
* **Metric 1 (Revenue Exposure)**: `Rp 229M+` (+34% YoY) — Contributed Across B2B Accounts (PT Alkindo Naratama Tbk)[cite: 1, 2].
* **Metric 2 (School Activation)**: `25+` (100% Target Met) — High Schools Onboarded in 3 Months (Gojek SCH Campaign)[cite: 1, 2].
* **Metric 3 (Oratory & Panels)**: `10+` (Keynotes & Panels) — Public Speaking & MC Engagements[cite: 2].

### 2.4 Interactive Case Studies Section
* **Case Study 1 (PT Alkindo Naratama Tbk)**: *High-Conversion Inbound Ads to Enterprise Packaging Contracts*[cite: 1, 2].
  * *Interactive Flowchart*: 4-Stage Execution Architecture (`Targeted Meta Inbound` ➔ `Lead Qualification & SLA` ➔ `Spec Alignment & Trial` ➔ `Contract & Retention`)[cite: 1].
* **Case Study 2 (Export Operations)**: *Cross-Border Spec Translation & Factory Alignment*[cite: 1, 2].
  * *Interactive Feature*: Penyelarasan spesifikasi teknis Mandarin ke standar kontrol produksi internal (mengeliminasi delay dan pengembalian sampel)[cite: 1, 2].
* **Case Study 3 (Gojek Indonesia)**: *Gojek SCH 25+ High Schools Penetration*[cite: 1, 2].
  * *Funnel Breakdown Grid*: 25 Target Schools, 12,000+ Student Reach, dan 88% First-Order Rate[cite: 1, 2].

### 2.5 Career Trajectory & Practice (Editorial List)
1. **Account Executive (Local & Export)** — *PT Alkindo Naratama Tbk (July 2025 – Present)*[cite: 2]
2. **Marketing Community Manager Intern** — *Gojek Indonesia (Nov 2024 – Jan 2025)*[cite: 2]
3. **Founder & Initiator** — *Hareudang Bandung (Oct 2023 – Jan 2025)*[cite: 2]

### 2.6 Oratory & Advocacy (Public Speaking & Media Showcase)
* **Podcast/Audio Player Widget**: Komponen interaktif *Audio Waveform* + Tombol Play (*"Navigating B2B Sales & Cross-Cultural Negotiation"*)[cite: 2].
* **Event & Advocacy Badges**: `UNAI Representative` (Delegate)[cite: 2], `AIESEC Keynote` (Speaker)[cite: 2], `TEDx Youth Series` (Facilitator).
* **Executive Endorsement Card**: Kutipan testimoni apresiasi kepemimpinan dan eksekusi komersial.

### 2.7 Direct Contact & Footer
* **One-Click Copy Email**: Tombol interaktif menyalin `work.tmraa@gmail.com`[cite: 1, 2] secara otomatis dengan notifikasi toast *"Copied to Clipboard!"*.
* **Direct WhatsApp Action**: Tombol tautan langsung ke `wa.me/6281250726062`[cite: 2].
* **Social Network Directory**: Direct links ke LinkedIn (`/in/jacklyntamaraw`)[cite: 2], Instagram (`@tmraa.w`), dan dokumen unduhan CV ATS[cite: 2].

---

## 3. Functional & Technical Requirements

* **Responsive Design**: Kompatibel sepenuhnya di tampilan Mobile, Tablet, dan Desktop (1440px+).
* **Micro-Interactions & Animations**:
  * *Scroll-triggered animations* (fading & sliding) untuk setiap kartu dan seksi.
  * *Hover states* yang responsif pada tombol, *bento cards*, dan tautan navigasi.
  * *Count-up animation* pada angka statistik utama (Rp 229M+, 25+ Schools, 10+ Events)[cite: 1, 2].
* **Performance Targets**:
  * PageSpeed Score > 90 (Mobile & Desktop).
  * First Contentful Paint (FCP) < 1.2 detik.
  * SEO-optimized meta tags untuk nama brand Jacklyn Tamara Wongso[cite: 1, 2].

---

## 4. Tech Stack Recommendation

* **Frontend Framework**: Next.js (React) / Vite + React
* **Styling Engine**: Tailwind CSS
* **Icons**: Google Material Symbols Outlined / Lucide Icons
* **Deployment**: Vercel / Netlify