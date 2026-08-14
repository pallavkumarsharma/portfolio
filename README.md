# Pallav Kumar Sharma — Portfolio

> MuleSoft Architect & Integration Manager  
> [pallavkumar.in](https://pallavkumar.in) · [LinkedIn](https://linkedin.com/in/pallavkumarsharma) · [GitHub](https://github.com/pallavkumarsharma)

---

## Folder Structure

```
portfolio/
│
├── index.html                  # Home / Hero
├── about.html                  # About & Bio
├── experience.html             # Career Timeline
├── skills.html                 # Skills + Proficiency bars
├── contact.html                # Contact Form (Formspree)
│
├── blog/                       # ← All writing lives here
│   ├── index.html              #   Listing page (replaces old popup grid)
│   ├── why-api-led-connectivity-gold-standard.html
│   ├── hipaa-compliant-integration-secure-by-design.html
│   └── developer-to-architect-mindset-shift.html
│
├── work/                       # ← All case studies live here
│   ├── index.html              #   Listing page
│   ├── integration-coe.html
│   ├── arkos-health.html
│   ├── informa-modernisation.html
│   └── uae-federal-tax.html
│
└── assets/
    ├── css/
    │   └── styles.css          # Single shared stylesheet
    ├── js/
    │   └── nav.js              # Nav, footer, hamburger, reveal, form — all in one
    └── images/
        ├── favicon.png         # Tab icon
        ├── pallav-mono.png     # Primary photo (B&W — hero, about)
        ├── pallav-casual.jpg   # Secondary photo (blog post sidebar)
        ├── blog/               # ← Drop post-specific images here
        └── work/               # ← Drop case study images here
```

---

## Tech Stack

- **Pure HTML / CSS / Vanilla JS** — no framework, no build step, deploys anywhere
- **Google Fonts** — Playfair Display + DM Sans + DM Mono
- **Formspree** — contact form email delivery
- **Giscus** — comments on blog posts (powered by GitHub Discussions, free, no ads)
- **GitHub Pages** — hosting at pallavkumar.in

---

## Setup Guide

### 1. Clone & switch to your branch
```bash
git clone https://github.com/pallavkumarsharma/portfolio.git
cd portfolio
git checkout feature-test-release
```

---

### 2. Enable Giscus comments (one-time, ~5 minutes)

Giscus stores comments in your repo's GitHub Discussions — free, no ads, no tracking. Readers need a GitHub account to comment.

**Step-by-step:**
1. Go to your repo → **Settings → Features** → enable **Discussions**
2. Create a new Discussion category called `Blog Comments` (type: Announcements)
3. Go to **[giscus.app](https://giscus.app)**
4. Enter your repo: `pallavkumarsharma/portfolio`
5. Set mapping: **Pathname**
6. Select category: **Blog Comments**
7. Copy the generated `<script>` tag

**Then replace the placeholder in each blog post** (`blog/*.html`).  
Find this block and replace with your generated script:

```html
<!-- REPLACE THIS with your generated giscus <script> tag -->
<script src="https://giscus.app/client.js"
  data-repo="pallavkumarsharma/portfolio"
  data-repo-id="YOUR_REPO_ID"          ← replace this
  data-category="Blog Comments"
  data-category-id="YOUR_CATEGORY_ID"  ← replace this
  ...
```

The values `YOUR_REPO_ID` and `YOUR_CATEGORY_ID` are the only two things to update — giscus.app shows the exact values for your repo.

---

### 3. Enable Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) → sign up (free)
2. Create a new form → copy your Form ID (e.g. `xpzgknjv`)

3. In `contact.html`, replace `YOUR_FORM_ID`:
   ```html
   <form action="https://formspree.io/f/xpzgknjv" ...>
   ```
4. First submission triggers a verification email to your address

---

### 4. Deploy to GitHub Pages

```bash
git add .
git commit -m "Restructure: separate blog/ and work/ folders"
git push origin feature-test-release
```

GitHub repo → **Settings → Pages → Source: feature-test-release / root** → Save.

---

## Adding Content

### Add a new blog post

1. **Duplicate** any existing post in `blog/` and rename with a descriptive slug:
   ```
   blog/your-post-title-here.html
   ```
2. **Update** the `<title>`, `<meta name="description">`, hero section, and article body
3. **Add a card** in `blog/index.html` pointing to the new file
4. Giscus comments work automatically — the `data-mapping="pathname"` means each post gets its own discussion thread

### Add a new case study

1. **Duplicate** any existing page in `work/` and rename it
2. **Update** all content including stats, tags, and sidebar
3. **Add a card** in `work/index.html` pointing to the new file

### Update social links / contact details

Everything is in `assets/js/nav.js` — search for the URLs and update them there. Changes propagate to every page automatically.

---

## Credits
Designed & built for Pallav Kumar Sharma · 2024 - Present