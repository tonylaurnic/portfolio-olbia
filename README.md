# Qui.SiteApp — Portfolio di Antoniu Laurentiu Stratulat

Portfolio website of **Qui.SiteApp**: freelance web, mobile app and SEO developer in **Olbia, Sardinia**.
Shows services, past projects, testimonials and a quote request form, in 4 languages.

- **Owner:** Antoniu Laurentiu Stratulat
- **Email:** dysign.soluzioni@gmail.com
- **WhatsApp / phone:** +39 388 387 9487
- **Languages of the site:** Italian (default), English, German, Romanian
- **Code:** GitHub — `tonylaurnic/portfolio-olbia`

---

## Domain & hosting

> Fill this in when the domain is bought. **Never write passwords here** — this file is pushed to GitHub. If the repository is public, consider not writing the account email either.

| | |
|---|---|
| Domain | **quisiteapp.it** — live, HTTPS, points to Firebase Hosting (checked 9 Oct 2026) |
| Bought on (registrar website) | **Netsons** — https://www.netsons.com (client area: Area Clienti) |
| Account used to buy it | `____________` (account name / which email — no password) |
| Purchase date | `____________` |
| Expiry / renewal date | `____________` |
| Auto-renew active? | yes / no |
| Price per year | `____________` |
| DNS managed at | **Netsons** — nameservers dns1–dns4.netsons.net; A record → 199.36.158.100 (Firebase Hosting) |
| Hosting | Firebase Hosting — project ID **`portfolio-olbia`** |
| Default Firebase address | https://portfolio-olbia.web.app |
| Firebase account | `____________` (which Google account) |
| Last deploy | 4 June 2026 (from the Firebase deploy cache) |

### Connecting the domain to Firebase
1. Firebase console → project `portfolio-olbia` → Hosting → **Add custom domain**.
2. Copy the DNS records Firebase shows (TXT + A records) into the DNS panel on the registrar's website.
3. Wait for verification (minutes to 24 h). Firebase adds the HTTPS certificate automatically.

### After the domain is live
- [x] Domain connected to Firebase — https://quisiteapp.it is live.
- [x] `metadataBase: new URL("https://quisiteapp.it")` set in `src/app/layout.tsx` (9 Oct 2026).
- [ ] Rebuild and deploy: `npm run build && firebase deploy`.
- [ ] Add the site to **Google Search Console**.
- [ ] Update the **Google Business Profile** with the website.
- [ ] Add the partita IVA to the footer and Note legali if you have one (required by Italian law).

---

## Tools used

| Tool | What it does here |
|---|---|
| **Next.js 16** (App Router) | Framework, created with `create-next-app`. Builds a **static export** (`output: "export"` → `out/`) |
| **React 19** | UI components |
| **TypeScript** | Language of all the code (`.ts` / `.tsx`) |
| **Tailwind CSS 4** | Styling |
| **Framer Motion** | Animations (splash screen, fade-ins, rotating roles in the hero, modals) |
| **Lucide React** | Icons |
| **next/font/google** — Geist & Geist Mono | Fonts (downloaded at build time and served from the site itself) |
| **ESLint** | Code checks (`npm run lint`) |
| **Playwright** | Screenshot scripts `screenshot*.mjs` used to check the design |
| **Firebase Hosting** | Where the site is published (project `portfolio-olbia`) |
| **Git + GitHub** | Version control — `git@github.com:tonylaurnic/portfolio-olbia.git` |
| **WhatsApp (wa.me links)** | Floating contact button and "Preferisci WhatsApp?" button |

`AGENTS.md` / `CLAUDE.md` contain instructions for AI coding agents (Next.js 16 has breaking changes vs. older versions).

---

## How the site was made

From the git history (13 commits, 30 May → 4 June 2026):

| Date | What was done |
|---|---|
| 30 May 2026 | Project created with `create-next-app` (Next.js + TypeScript + Tailwind + ESLint) |
| 31 May 2026 | First complete version of the Qui.SiteApp portfolio (Italian + English) |
| 31 May 2026 | Legal pages added: Note legali, Privacy, Cookie + footer links; white background fix |
| 31 May 2026 | Splash screen and legal navigation fixes, profile photo, **Firebase Hosting** set up |
| 4 Jun 2026 | **"Idee e Soluzioni Digitali"** page (`/idee`) |
| 4 Jun 2026 | **German and Romanian** added — full 4-language site, language dropdown with flags |
| 4 Jun 2026 | About section: 18 years in restaurants as a sushiman; skill bars replaced with checkmark cards |
| 4 Jun 2026 | Contact form: ideas selectable from a modal in the project-type field |
| 4 Jun 2026 | "Design UI/UX" removed from services; last deploy to Firebase |

### Projects shown in the portfolio
- **DentalCare Plus** — https://www.dentalcare-plus.de/
- **AndroDashCam** — Android app on Google Play
- **DySign**

---

## Project structure

```
src/
  app/
    layout.tsx           fonts, SEO metadata, splash screen
    page.tsx             home page (language state)
    globals.css          Tailwind
    idee/                ideas page
    privacy/ cookie/ note-legali/   legal pages
  components/            Navbar, Hero, Services, HowItWorks, Portfolio, ProjectModal,
                         About, Testimonials, Contact, IdeeModal, Footer,
                         WhatsAppFloat, SplashScreen, Logo, LegalLayout
  lib/
    i18n.ts              translations (it / en / de / ro)
public/                  project images, logo, profile photo
firebase.json            Firebase Hosting config (serves out/)
.firebaserc              Firebase project: portfolio-olbia
screenshot*.mjs          Playwright screenshot scripts
```

---

## Commands

```bash
npm install          # first time on a new computer
npm run dev          # local site → http://localhost:3000
npm run build        # builds the final site into out/
npm run lint         # code checks
firebase deploy      # publish out/ to Firebase Hosting (after npm run build)
```

---

## Known issues / to do

- [ ] **The contact form doesn't send anything** — `handleSubmit` in `src/components/Contact.tsx` only shows "Richiesta inviata!". Requests are lost. Fix: open WhatsApp with the form data (as done in iTonyFix), or use a form service.
- [ ] **Cookie page is inaccurate** — it lists "Analitici anonimi (30 giorni)", but the site has no analytics. Update `src/app/cookie/page.tsx`.
- [ ] **Next.js 16.2.6 has security advisories** — upgrade: `npm install next@16.3.8 eslint-config-next@16.3.8`. (They mainly affect a running Next.js server, not the static files on Firebase, but `next dev` is affected.)
- [ ] `.firebase/hosting.*.cache` is committed to git — it can be added to `.gitignore`.

---

## Related project

**iTonyFix** (`~/Projects/iTonyFix/i_tony_fix`) — iPhone repair site built with the same stack, based on this project.
