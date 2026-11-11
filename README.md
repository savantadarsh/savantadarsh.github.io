# Adarsh Savant — GitHub Pages portfolio

A clean, responsive, static portfolio for a commercial and product data analyst. Built with HTML, CSS and a small amount of JavaScript: **no npm, React, bundler or paid hosting required.**

## What's included

- `index.html` — complete professional landing page, experience, work, education, skills and contact
- `projects/` — four case study pages (two link to existing public GitHub repositories; two are anonymised professional engagements)
- `assets/style.css` — layout and colour theme, including mobile and dark mode
- `assets/main.js` — mobile menu and dark-mode switch
- `assets/favicon.svg`, `assets/social-card.png` — branding and share preview
- `404.html`, `sitemap.xml`, `robots.txt`, `.nojekyll` — static-site finishing touches
- `GITHUB_PROFILE_README.md` — optional GitHub *profile* README copy

## Publish at savantadarsh.github.io (recommended)

1. Log in to your GitHub account **savantadarsh**.
2. Create a **public** repository named **`savantadarsh.github.io`**. If one already exists, review its contents before replacing anything.
3. Unzip this folder on your computer. Upload the **contents inside** `adarsh-portfolio/` (not the enclosing directory) to the repository root. GitHub's **Add file → Upload files** supports multi-file upload; use the web editor or GitHub Desktop if you prefer.
4. In **Settings → Pages**, set **Build and deployment → Source: Deploy from a branch**; choose **main / (root)** and Save.
5. Once GitHub Pages finishes deploying, visit **https://savantadarsh.github.io/**.
6. On LinkedIn: **Edit intro → Website** (or add to Contact info / Featured section depending on UI) and set the URL above. Title it **Portfolio — Commercial & Product Analytics**.

If you publish in any other repository (for example `portfolio`), the URL will include the repository name. Update `canonical`, `og:url`, `og:image`, `robots.txt` and `sitemap.xml` before publishing there.

## Update your information

- **Main headline & summary**: edit the hero copy in `index.html`.
- **Project cards**: edit the project grid in `index.html`.
- **Project pages**: edit files in `projects/`.
- **Contact**: the site currently uses the previously shared `adarshineng@gmail.com`, `github.com/savantadarsh`, and `linkedin.com/in/adarshsavant` — check they are still the links you want to publish.
- **CV**: the site uses a **Request my CV** email link rather than distributing a CV file without explicit confirmation. To offer a public PDF, place a vetted `cv.pdf` at the root and change that anchor in `index.html` to `href="cv.pdf" download`.
- **Visual theme**: change CSS variables at the top of `assets/style.css`.
- **Analytics**: no trackers, forms, cookies or external scripts except optional Google Fonts CSS. The dark-mode choice is stored locally in the visitor's browser.

## Important publication checks

This portfolio distinguishes **achieved project results** from **pre-implementation recommendations**. It does not contain client datasets, internal deliverables or confidential names. Nevertheless, **review each anonymised client engagement and all outcome claims** against your employer/client confidentiality and publicity rules before making the repository public.

The numbers on the homepage are drawn from the project history supplied in conversation, not independently audited figures. The two public repositories were read for relevant detail, and links were checked during drafting.

## Preview locally

Double-click `index.html` to open it in your browser. For accurate links and full local preview, from the folder run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
