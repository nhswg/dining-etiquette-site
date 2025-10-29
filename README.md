# dining-etiquette-site

# UA Dining Etiquette

A concise guide website for professional dining etiquette aimed at University of Arizona students. The site provides practical tips on preparation, table manners, ordering alcohol, conversation and follow-up after a professional meal.

Source code: this repository. Deployed to GitHub Pages.
Live site: https://nhswg.github.io/dining-etiquette-site/

## Assignment checklist

This project was updated to meet the course assignment minimums. Where each requirement appears:

- One internal link: the site navigation and a dedicated Survey page (`/survey`) — accessible from the top nav and HomeView.
- One external link: the Home page links to the University of Arizona homepage (https://www.arizona.edu/).
- One graphic feature: `src/assets/logo.svg` is shown on the Home page as a site graphic.
- One advanced feature: an embedded YouTube video is on the Home page as a multimedia resource.
- Survey questions: a Survey page (`src/views/Survey.vue`) contains a list of questions suitable for a brief student survey.

## How to run (local)

Requirements: Node (v14+), npm (or yarn). This is a Vite + Vue project.

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open the site (usually at http://localhost:5173)

## Notes and citations

Content on the site was written for the assignment and synthesized from multiple public resources. Helpful references used while producing the site and for further reading:

- University of Arizona homepage — https://www.arizona.edu/
- General dining etiquette resources and guides (examples): OpenTable, Emily Post Institute, and hospitality articles. (No material was copied verbatim.)

If you'd like, I can also wire the Survey page into a real form backend (Google Forms, Netlify Functions, or an API) so student responses are stored.
