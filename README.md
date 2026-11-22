# Portfolio Website

Next.js portfolio. Sob content `data/` folder e, ar chobi `public/assets/` e.
Code e haat na diyei sob kichu bodlano jay.

## Content kothay bodlaben

| Ki bodlaben | File |
|---|---|
| Nam, title, email, phone, location, logo, Resume/CV link | `data/profile.js` → `profile` |
| Hero section (badge, typing text, chobi, floating badge) | `data/profile.js` → `hero` |
| About section (lekha, chobi) | `data/profile.js` → `about` |
| Social link (LinkedIn, GitHub, X, ORCID, WhatsApp, Telegram) | `data/profile.js` → `socials` |
| Footer, browser tab title, contact section er lekha | `data/profile.js` → `footer`, `seo`, `contactSection` |
| Skills | `data/skills.js` |
| Education | `data/education.js` |
| Projects (category onujayi filter) | `data/projects.js` |
| Experience timeline, Work, Extracurricular, Certificate | `data/experience.js` |
| Research paper | `data/research.js` |

- Notun item add korte: list e ekta item `{ ... }` copy kore paste korun, tarpor value bodlan.
- Kono item muchte: puro `{ ... },` block ta delete korun.
- Social link er URL `""` (khali) rakhle oi icon ta dekhabe na.
- Project e notun `category` likhle notun filter button nijei chole asbe.

## Chobi bodlano

1. Notun chobi `public/assets/...` folder e rakhun:
   - Profile/hero/logo → `public/assets/images/`
   - Project er chobi → `public/assets/images/projects/` (`.png` file)
   - Certificate → `public/assets/certificates/`
2. Data file e path ta din. Path `/assets/` diye shuru hobe, `public` likhben na.
   Udaharon: `public/assets/images/me.jpg` → `"/assets/images/me.jpg"`
3. Project er `image` e shudhu file er nam din, `.png` chara (jemon `"my_project"`).

Sohoj upay: purono chobi ta notun chobi diye replace korun, file er nam ek rekhe.
Tahole data file e kichui bodlate hobe na.

## Computer e chalano

```bash
npm install      # prothom bar
npm run dev      # http://localhost:3000 e khulun
```

`npm run dev` chalu thakle file save korlei browser e change dekha jabe.

## GitHub e push

```bash
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

(Age github.com e ekta notun khali repository khulun.)

## Vercel e deploy

1. https://vercel.com e GitHub account diye login korun.
2. **Add New → Project** → apnar repository ta **Import** korun.
3. Kono setting bodlano lagbe na (Next.js nijei detect korbe) → **Deploy**.
4. Er por protibar `git push` korlei site automatic update hobe.

## Contact form

Form er message `data/profile.js` er `contactFormEmail` e jay ([formsubmit.co](https://formsubmit.co)).
Prothom bar keu message pathale ei email e formsubmit ekta confirmation mail pathabe.
Oi mail er link e click korle form chalu hobe.
