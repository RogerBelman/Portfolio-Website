# Repository instructions

- This is a React and Vite portfolio website.
- Install dependencies with `npm ci`.
- Validate changes with `npm run lint` and `npm run build`.
- Keep public SEO metadata in `index.html`, `src/routes/routeMeta.js`, and `public/sitemap.xml` consistent.
- Never include credentials, server IP addresses, or private deployment information.
- Preserve mobile responsiveness and accessibility.

## Git workflow

Before modifying files:

1. Fetch the latest remote branches.
2. Confirm the working tree is clean.
3. Base new work on the latest `origin/main`.
4. Create a dedicated feature branch; never commit directly to `main`.
5. If existing work, conflicts, or divergence would prevent this, stop and report the condition instead of overwriting anything.
