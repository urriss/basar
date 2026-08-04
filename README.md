# Básar camp page — PoC

Static, responsive one-pager. No build step, no backend.

## Run locally

```bash
python3 -m http.server 8420
```

Then open http://localhost:8420 in a browser. (Opening `index.html` directly via `file://` also works, but a local server avoids any browser file-access quirks.)

## Files

- `index.html` — all markup and content (Icelandic only for now)
- `styles.css` — responsive layout, breakpoint at 860px
- `app.js` — EN/IS toggle (visual only — shows a "coming soon" toast, does not swap content yet)
- `images/` — photos and map assets

## Moving to another machine / server

This folder is fully self-contained (relative paths only). To move it:

```bash
git clone <this-repo> basar
# or just copy the folder
```

To push to a remote for the first time:

```bash
git remote add origin <your-remote-url>
git push -u origin main
```

Any static host works (no server-side logic needed) — e.g. `python3 -m http.server`, Nginx, Netlify, GitHub Pages, etc.
