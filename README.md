# gurinder-raju.github.io

Personal site of Gurinder Raju, built with [Astro](https://astro.build) and published to GitHub Pages at https://gurinder-raju.github.io/.

## Layout

```text
src/content/posts/<year>/<slug>/index.md   posts (front matter: title, date, description, image), images beside them
src/data/talks.ts                          talk list shown on / and /talks/
public/talks/<year>/<slug>/                talk decks, served exactly as committed
.github/workflows/deploy.yml               build and deploy on every push to main
```

## Adding a post

1. Create `src/content/posts/<year>/<slug>/index.md` with `title`, `date`, `description`, and `image` (a relative path such as `./cover.png`).
2. Put the post's images in the same folder.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start the dev server at `localhost:4321`   |
| `npm run build`   | Build the site to `./dist/`                |
| `npm run preview` | Preview the build locally                  |
