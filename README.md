# SKWD Website

Multilingual marketing website built with **Next.js 15**, **TypeScript**, and **i18next** for internationalization.  
This project serves as the official website for **SKWD**, supporting English, French, and Dutch with automatic language detection and instant client-side switching.

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **i18next + react-i18next** (internationalization)
- **TailwindCSS**
- **Vercel** (deployment)
- **ESLint + Prettier** (code formatting)

---

## 🌍 Features

- 🌐 **Multilingual support** (EN, FR, NL)
- ⚙️ **Automatic locale detection** via browser language
- 🔁 **Instant language switching** (no page reload)
- 🧭 **SEO-ready structure** with localized titles and metadata
- 🧱 **Scalable App Router structure** for future pages

---

## 🧩 Project Structure

src/
├─ app/
│ ├─ [locale]/
│ │ ├─ layout.tsx # Locale-specific layout
│ │ └─ page.tsx # Homepage (translated content)
│ ├─ layout.tsx # Root layout with header and language switcher
│ └─ globals.css
├─ components/
│ ├─ LanguageSwitcher.tsx
│ └─ I18nProvider.tsx
├─ lib/
│ ├─ i18n-config.ts
│ └─ i18n.ts
├─ locales/
│ ├─ en/common.json
│ ├─ fr/common.json
│ └─ nl/common.json
└─ middleware.ts # Locale detection and redirect

---

## ⚡️ Getting Started

### 1️⃣ Install dependencies

npm install

### 2️⃣ Run locally

npm run dev
The app runs at http://localhost:3000.

---

## 🌐 Deployment

Deployed via Vercel.
Automatic build on each push to the main branch.

---

## 🧠 Next Steps

Add more pages and localized content

Integrate SEO metadata per page

Connect form submission logic

Add responsive design and animations

---

## 📄 License

All rights reserved © SKWD.
This codebase is proprietary and may not be copied or reused without permission.
