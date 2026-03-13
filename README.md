# Pallav Kumar Sharma — Personal Portfolio

> MuleSoft Architect & Integration Manager  
> [pallavkumar.in](https://pallavkumar.in) · [LinkedIn](https://linkedin.com/in/pallavkumarsharma) · [GitHub](https://github.com/pallavkumarsharma)

---

## Folder Structure

```
portfolio/
├── index.html              # Home / Hero page
├── about.html              # About & Bio
├── experience.html         # Career Timeline
├── skills.html             # Technical Skills + Proficiency bars
├── case-studies.html       # Project Case Studies
├── blog.html               # Writing / Articles (modal reader)
├── contact.html            # Contact Form (Formspree)
├── README.md               # This file
│
└── assets/
    ├── css/
    │   └── styles.css      # Shared stylesheet (all pages)
    ├── js/
    │   ├── nav.js          # Shared nav + footer injection
    │   └── main.js         # Scroll reveal, form handling, modals
    └── images/
        ├── pallav-mono.png # Primary portrait (B&W, used on Hero)
        └── pallav-casual.jpg # Secondary portrait (used on About)
```

---

## Tech Stack

- **Pure HTML / CSS / JS** — no frameworks, no build step
- **Google Fonts** — Playfair Display + DM Sans + DM Mono
- **Formspree** — contact form email delivery (see setup below)
- **Deployable anywhere** — GitHub Pages, Netlify, Vercel, or any static host

---

## Setup & Deployment

### 1. Clone the repo
```bash
git clone https://github.com/pallavkumarsharma/portfolio.git
cd portfolio
```

### 2. Enable Contact Form (Formspree)
To receive emails from the contact form:
1. Go to [formspree.io](https://formspree.io) and sign up (free tier is fine)
2. Create a new form — it will give you a Form ID like `xpzgknjv`
3. Open `contact.html` and replace `YOUR_FORM_ID` in the form action:
   ```html
   <!-- Before -->
   <form action="https://formspree.io/f/YOUR_FORM_ID">
   
   <!-- After -->
   <form action="https://formspree.io/f/xpzgknjv">
   ```
4. On first submission, Formspree will send a confirmation email to verify your address

### 3. Deploy to GitHub Pages
```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```
Then in your GitHub repo → **Settings → Pages → Source: main branch / root** → Save.  
Your site will be live at `https://pallavkumarsharma.github.io/portfolio`

### 4. Custom Domain (pallavkumar.in)
1. Add a `CNAME` file to the repo root with your domain:
   ```
   pallavkumar.in
   ```
2. In your domain registrar (GoDaddy / Namecheap / etc.), add DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  pallavkumarsharma.github.io
   ```
3. In GitHub Pages settings, set custom domain to `pallavkumar.in` and enable HTTPS

---

## Customisation Guide

### Update personal content
- **Resume bullets / experience**: Edit `experience.html`
- **Case studies**: Edit `case-studies.html` — add/remove `.case-card` blocks
- **Blog posts**: Edit `blog.html` — add entries to `window.blogPosts` object
- **Skills**: Edit `skills.html` — add `.skill-tag` spans to any card
- **Colors**: All CSS variables are in `assets/css/styles.css` under `:root {}`

### Add your headshot
Replace files in `assets/images/`:
- `pallav-mono.png` — primary photo (hero page, dark/B&W preferred)
- `pallav-casual.jpg` — secondary photo (about page)

### Add certifications
In `about.html`, add a new `.chip` inside `.about-chips`:
```html
<span class="chip">MuleSoft Certified Integration Architect</span>
```

### Add a new blog post
In `blog.html`, add to `window.blogPosts`:
```javascript
post4: {
  label: 'Category',
  date: 'April 2024 · 5 min read',
  title: 'Your Post Title',
  body: `<p>Your content here...</p>`
}
```
And add a new `.blog-card` div with `onclick="openModal('post4')"`.

---

## Social Links (already wired in nav + footer)
- LinkedIn: `https://linkedin.com/in/pallavkumarsharma`
- GitHub: `https://github.com/pallavkumarsharma`
- WhatsApp: `https://wa.me/917050757171`

To update, search for these URLs in `assets/js/nav.js` and replace.

---

## Credits
Designed & built for Pallav Kumar Sharma · 2024 - Present