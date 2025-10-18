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

## 🧭 SKWD SEO / Metadata Overview

| **Page**            | **Language** | **SEO Title** (for search results)                    | **Window / Tab Title**            | **Open Graph Title** (for social sharing)                                                                                           | **H1 (visible on page)**                                                                                                      | **Notes / Intent**                     |
| ------------------- | ------------ | ----------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **🏠 Home**         | EN           | Welcome to SKWD – Student staffing agency             | Home - SKWD                       | Welcome to SKWD – Student staffing agency                                                                                           | SKWD – Student staffing agency connecting motivated students with professional events and businesses across Belgium.          | Short SEO title, rich OG + H1 with USP |
|                     | FR           | Bienvenue chez SKWD – Agence d’intérim pour étudiants | Accueil - SKWD                    | Bienvenue chez SKWD – Agence d’intérim pour étudiants                                                                               | SKWD – Agence de staffing étudiant reliant des étudiants motivés et des entreprises pour des événements réussis en Belgique.  |                                        |
|                     | NL           | Welkom bij SKWD - Uitzendkantoor voor studenten       | Startpagina - SKWD                | Welkom bij SKWD - Uitzendkantoor voor studenten                                                                                     | SKWD – Uitzendkantoor voor studenten dat gemotiveerde studenten en bedrijven verbindt voor succesvolle evenementen in België. |                                        |
| **👥 About Us**     | EN           | About us                                              | About us - SKWD                   | About us – Meet our team and discover why each member plays a vital role                                                            | YOUR STAFFING AGENCY                                                                                                          | SEO concise, OG human-oriented         |
|                     | FR           | À propos de nous                                      | À propos de nous - SKWD           | À propos de nous – Découvrez notre équipe et la valeur qu’elle apporte à chaque mission                                             | YOUR STAFFING AGENCY                                                                                                          |                                        |
|                     | NL           | Over ons                                              | Over ons - SKWD                   | Over ons – Ontdek ons team en waarom elke medewerker een belangrijke rol speelt                                                     | YOUR STAFFING AGENCY                                                                                                          |                                        |
| **📞 Contact**      | EN           | Contact us                                            | Contact us - SKWD                 | Contact us – Don’t wait, send us your staffing request today                                                                        | Contact form                                                                                                                  | OG title drives action                 |
|                     | FR           | Contactez-nous                                        | Contactez-nous - SKWD             | Contactez-nous – N’attendez plus et envoyez-nous votre demande d’étudiants pour vos événements                                      | Formulaire de contact                                                                                                         |                                        |
|                     | NL           | Contacteer ons                                        | Contacteer ons - SKWD             | Contacteer ons – Wacht niet langer en stuur ons vandaag nog uw aanvraag voor studenten                                              | Contact formulier                                                                                                             |                                        |
| **❓ FAQ**          | EN           | Frequently asked questions                            | Frequently asked questions - SKWD | Frequently asked questions – Find out what most of our users wonder about                                                           | Frequently asked questions                                                                                                    | OG phrased like a discovery            |
|                     | FR           | Foire aux questions                                   | Foire aux questions - SKWD        | Foire aux questions – Découvrez ce que nos utilisateurs se demandent le plus souvent                                                | Foire aux questions                                                                                                           |                                        |
|                     | NL           | Veelgestelde vragen                                   | Veelgestelde vragen - SKWD        | Veelgestelde vragen – Ontdek wat onze gebruikers zich het vaakst afvragen                                                           | Veelgestelde vragen                                                                                                           |                                        |
| **🍽️ Hospitality**  | EN           | Hospitality sector                                    | Hospitality sector - SKWD         | Hospitality sector – Discover all the unique experiences and different types of jobs you could be working in                        | Hospitality sector                                                                                                            | Keyword-targeted, OG expands           |
|                     | FR           | Secteur Hospitalité                                   | Secteur Hospitalité - SKWD        | Secteur Hospitalité – Découvrez toutes les expériences uniques et les différents types de jobs proposés                             | Secteur de l’hospitalité                                                                                                      |                                        |
|                     | NL           | Sector Hospitality                                    | Sector Hospitality - SKWD         | Sector Hospitality – Ontdek de unieke ervaringen en verschillende soorten jobs waarin je kunt werken                                | Sector hospitality                                                                                                            |                                        |
| **🚚 Logistics**    | EN           | Logistics sector                                      | Logistics sector - SKWD           | Logistics sector – Discover all the unique experiences and diverse jobs you could work in within logistics and events               | Logistics sector                                                                                                              | Clear keyword + human OG               |
|                     | FR           | Secteur Logistique                                    | Secteur Logistique - SKWD         | Secteur Logistique – Découvrez toutes les expériences uniques et les différents types de missions dans la logistique événementielle | Secteur de la logistique                                                                                                      |                                        |
|                     | NL           | Sector Logistiek                                      | Sector Logistiek - SKWD           | Sector Logistiek – Ontdek de unieke ervaringen en verschillende soorten logistieke jobs waarin je kunt werken                       | Sector logistiek                                                                                                              |                                        |
| **🤝 Work With Us** | EN           | Work with us                                          | Work with us - SKWD               | Work with us – Discover why collaborating with SKWD students is the right choice for your event                                     | The right person in the right place, at the right time.                                                                       | Strong motivational H1                 |
|                     | FR           | Travailler avec nous                                  | Travailler avec nous - SKWD       | Travailler avec nous – Découvrez pourquoi collaborer avec les étudiants de SKWD est le bon choix pour vos événements                | La bonne personne au bon endroit, au bon moment.                                                                              |                                        |
|                     | NL           | Werk met ons                                          | Werk met ons - SKWD               | Werk met ons – Ontdek waarom samenwerken met SKWD-studenten de juiste keuze is voor uw evenement                                    | De juiste persoon op de juiste plaats, op het juiste moment.                                                                  |                                        |

---

### 🧩 Notes for documentation

- **SEO Title (≤60 chars):** Used for `<title>` in search engine results. Must be concise and keyword-rich.
- **Window Title:** What appears in browser tabs and bookmarks. Always `SEO title + " - SKWD"`.
- **OG Title:** Used on Facebook, LinkedIn, Twitter — humanized, longer, inviting phrasing.
- **H1:** The main visible title of the page. Matches the semantic headline in JSON-LD.
- **JSON-LD Headline / Name:**
  - `headline` = identical to H1
  - `name` = identical to Window Title

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

## 📄 License

All rights reserved © SKWD.
This codebase is proprietary and may not be copied or reused without permission.
