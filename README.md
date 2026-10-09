# TVA Gang — Cinematic Fan Website

A responsive, black-and-crimson fan website for the TVA Gang in the Mallu RP / GTA V RP community.

## Pages and features
- `index.html` — cinematic homepage, TVA Joker founder feature, leadership and community section
- `players.html` — searchable player directory and role filters
- `story.html` — TVA story and leadership
- `gallery.html` — gallery coming-soon page
- `style.css` — responsive styling, mobile navigation and scroll reveal effects
- `players.js` — roster data and player search
- `chatbot.js` — front-end demo helper (not connected to an AI service yet)

## Enable GitHub Pages
1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then click **Save**.
5. Wait for GitHub Pages to publish. The project site URL should be `https://offical-maker.github.io/Tva-players/` (repository names are case-sensitive in links).

## Update the player roster
Edit `TVA_PLAYERS` in `players.js`. Keep role values exactly as `Founder`, `Leader`, `Co-Leader`, or `Member`.

## Add images or a custom font
Create an `assets` folder by uploading an image or font file in GitHub. Once your DX Slight font file is available, it can be added with a CSS `@font-face` rule. Until then, the logo uses a bold condensed fallback font.

## Important limitations
- This is a fan-made community website and is not an official Rockstar Games or Mallu RP website.
- The chat widget currently uses simple demo responses. Real AI requires a server-side backend and API key; never put a private API key in front-end JavaScript.
- A secure admin dashboard that can edit roster content requires authentication and a backend/database. GitHub Pages alone is static hosting and should not hold admin secrets.
- The official TVA full form has not been provided, so no expansion is invented here.
