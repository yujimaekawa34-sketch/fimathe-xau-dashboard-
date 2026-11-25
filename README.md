# Fimathe XAU Auto Dashboard — MVP 0.1

**Prototype only / simulated data / no MT5 or Exness connection.** This is a static mobile-first PWA-ready web app, not a trading terminal and not a remotely controlling robot.

## Included
- Responsive iPhone-oriented dashboard layout
- Simulated balance, equity, daily P/L, drawdown, position, signal, and trade history
- Local demo ON/OFF switch and demo emergency stop
- Editable risk settings (only on-screen/local session)
- Status panel for future bridge, auth, and alert integration
- PWA manifest, service worker, and icon files

## Install on iPhone 18 Pro Max (after hosting)
A PWA install needs the site served from a secure HTTPS origin (localhost is a special case, but not practical on an iPhone). A ZIP or file opened locally is **not** the same as an installable PWA.

1. Publish this folder to a static HTTPS host (for example, GitHub Pages or Cloudflare Pages). Do not put passwords, broker credentials, API keys, or personal trading data in this static folder.
2. Open the published URL in **Safari** on your iPhone.
3. Tap **Share** → **Add to Home Screen**. If offered, select **Open as Web App**.
4. Tap **Add**, then open the icon from your Home Screen. Allow the first load to finish while connected to the internet; the service worker then caches the app shell for offline opening.

### GitHub Pages quick publish
1. Create a new empty repository on GitHub.
2. Upload all files from this folder (the files themselves, not the parent folder).
3. Repository → Settings → Pages → set source to `Deploy from a branch`; select `main` and `/ (root)`; save.
4. Wait for GitHub Pages to publish, then open the Pages URL in Safari on the iPhone and follow steps 2–4 above.

## Prototype limitations / security
- ON/OFF and emergency-stop are visual/local state only. The emergency stop does not cancel trades, disable AutoTrading, or contact MT5.
- Account numbers, positions, signals, and P/L are fictitious placeholders.
- No backend, bridge, user authentication, encryption endpoint, remote command, push notifications, persistence, broker credentials, or order execution is included.
- Future bridge should use HTTPS, strong authentication (prefer short-lived tokens), allowlisted commands, least privilege, audit logs, rate limits, replay protection, and server-side risk checks. Never store broker login/password in the PWA.
- This is not tested against a live broker and must not be used to make trading decisions.

## Files
- `index.html`: interface
- `style.css`: responsive dark styling
- `app.js`: demo interaction only
- `manifest.webmanifest`: PWA metadata
- `sw.js`: offline cache shell
- `icon-192.png`, `icon-512.png`: app icons
