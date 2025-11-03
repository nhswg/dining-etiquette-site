# dining-etiquette-site

# UA Dining Etiquette

A concise guide website for professional dining etiquette aimed at University of Arizona students. The site provides practical tips on preparation, table manners, ordering alcohol, conversation and follow-up after a professional meal.

Source code: this repository. Deployed to GitHub Pages.
Live site: https://nhswg.github.io/dining-etiquette-site/

## Project deliverables & verification

This repository delivers a concise, professional learning resource designed to prepare students for business dining scenarios. The items below document where each course requirement is implemented and how it supports a practical training workflow:

- Internal navigation & feedback: a dedicated Survey page (`/survey`) is reachable from the main navigation and Home page. The survey provides a short, professional feedback form to capture learner responses.
- External resource integration: the Home page links to the University of Arizona homepage (https://www.arizona.edu/) for authoritative campus resources and next-step actions.
- Visual branding: the site includes a campus-aligned site graphic located in `src/assets/` and displayed on the Home view to improve visual credibility.
- Multimedia training: an embedded YouTube video on the Home page provides a short, instructor-style briefing to reinforce key points.
- Learner feedback: `src/views/Survey.vue` contains focused survey prompts to collect actionable input for future improvements.

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
