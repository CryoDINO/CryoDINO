# CryoDINO

Project page for **CryoDINO: A generalizable 3D foundation model for Cryo-electron tomography**.

## About

This site is built with the [Papers](https://tonyhx2021.github.io/papers) template (Handlebars + Bulma). Content is driven by `static/js/data.js`: edit authors, affiliations, abstract, sections, and conclusion there; the page updates without changing HTML.

## Deployment (GitHub Pages)

The site must be built before deployment so that `<meta>`, `<title>`, and Open Graph tags are filled from `data.js`. Use **GitHub Actions** as the Pages source, not “Deploy from a branch”:

1. Repo **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Each push to `main` will run the workflow, build `dist/`, and deploy that as the site

If you use “Deploy from a branch”, the live site serves the raw template and link previews will show `{{paper.metadata.title}}` etc.

## Structure

- **`index.html`** — Handlebars template and layout
- **`static/js/data.js`** — Paper data: `metadata`, `affiliations`, `authors`, `link_items`, `content.intro_blocks`, `content.sections`, `content.conclusion`, `bibtex`
- **`static/js/index.js`** — Template render and Handlebars helpers
- **`static/css/`** — Styles (Bulma + `index.css`)
- **`static/images/`** — Figures and assets

## License

This website is licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).  
Design inspiration: [Nerfies](https://nerfies.github.io).
