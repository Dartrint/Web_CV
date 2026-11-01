# Trần Thành Đạt — CV & Portfolio

A bilingual, static portfolio for Trần Thành Đạt, built with plain HTML, CSS, and JavaScript.

## Run locally

No build step or package installation is required. From the project directory, start a local web server:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). A local server is recommended so browser storage and page navigation behave consistently.

## Pages

- `index.html` — the light portfolio, featured projects, education, and direct contact.
- `dark.html` — the full CV, including all six projects, education, scholarships, certificates, and social links.
- `journey.html` — an interactive walkthrough of the process behind the projects.

## Features

- Vietnamese and English language switcher; the selected language is shared across pages.
- Responsive navigation and layouts for desktop and mobile.
- Reduced-motion support for animated backgrounds and project navigation.
- Project links, the Findata live demo, email, LinkedIn, and GitHub.

## Deployment

The site is static. Publish the project root and keep `index.html`, `dark.html`, `journey.html`, `styles.css`, `script.js`, and `assets/` together. It can be hosted on Vercel, GitHub Pages, or any static web host.

Live site: https://web-cv-rho-beryl.vercel.app/
