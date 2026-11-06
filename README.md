# Alejandro de la Mora — Forward Deployed Engineer

A responsive, print-friendly professional résumé tailored to Zeo Consulting's Forward Deployed Engineer role. A separate site based on the editorial identity of [Alejandro's existing resumes](https://github.com/Oruga420/amorac-applied-ai-engineering).

**Website:** https://amorac-zeo-fde.vercel.app

## Development

Use Node.js 20.9 or later.

```sh
npm ci
npm test
npm run dev
```

```sh
npm run build
```

Next.js exports a static site to `out/`. Vercel builds from the `main` branch. No environment variables, server functions, analytics, or external runtime APIs are required. Fonts are downloaded at build time and served locally.

The **Print / Save PDF** button opens the browser print dialog. Choose **Save as PDF**, A4, 100% scale, with browser headers and footers disabled. The print stylesheet uses a compact two-page layout with selectable text and clickable links.

## Content

- `app/resume.json`: professional profile, work history, outcomes, capabilities, education and public project.
- `app/certifications.json`: six selected certificates with verification links.
- `app/globals.css`: responsive and print styles.

Historical job titles and dates are retained. Forward deployed engineering is a professional focus, not an added employer. The $1.7M+ savings figure has no currency code or annualization because those details are not specified in the published source. Education is listed as provided, without asserting a degree award. No unverified Adobe experience or English proficiency certification is claimed.

## Public references

- [Existing professional resume](https://github.com/Oruga420/amorac-applied-ai-engineering/blob/main/app/resume.json)
- [Certificate verification links](https://github.com/Oruga420/amorac-applied-ai-engineering/blob/main/app/certifications.json)
- [Luna / office-agent](https://github.com/Oruga420/office-agent)
- [Zeo Consulting role](https://zeoconsulting.hiringroom.com/jobs/get_vacancy/6aeb3b65af15252dea3ea43c?source=talent)

No other resume repository or deployment is modified by this project.
