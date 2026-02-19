# Imposter

A cross-platform starter that now includes:

- **iOS-native scaffold** with Swift + SwiftUI.
- **Mobile-first web app** that can run as an iPhone Home Screen app.

## Repository layout

- `Package.swift` - SwiftPM package definition for `ImposterCore`.
- `Sources/ImposterCore` - domain models, use cases, services.
- `Tests/ImposterCoreTests` - Linux/macOS runnable tests for the core.
- `ios/ImposterApp` - SwiftUI app source template (open in Xcode on macOS).
- `web/` - installable PWA-style web app for iPhone/mobile browsers.

## Run on iPhone without your computer hosting a server (recommended)

This repo now includes GitHub Pages deployment at `.github/workflows/deploy-web.yml`.

1. Push this project to a GitHub repository (branch: `main`).
2. In GitHub, open **Settings -> Pages** and set **Source** to **GitHub Actions**.
3. Push any change under `web/` (or run the workflow manually from the Actions tab).
4. After deployment finishes, open:

   `https://<your-github-username>.github.io/<your-repo-name>/`

5. On iPhone Safari, tap **Share -> Add to Home Screen**.

After first successful load, the service worker caches assets for offline play.

## Local run (optional)

From repo root:

```powershell
pwsh -File .\serve-web.ps1 -Port 8080
```

Then open the printed `http://<your-computer-ip>:8080` URL on iPhone (same Wi-Fi).

## Web game rules

- Configure player count, imposter count, and player names.
- Use the **Categories** button to pick one or more categories.
- Add your own custom categories with custom keywords.
- Every round picks one selected category at random.
- **Civilians** receive one shared keyword.
- **Imposters** receive no keyword, only the category.
- Discuss, vote, and reveal the result.

## Important platform note

Without macOS/Xcode, you cannot build/sign a native `.ipa` iOS app yourself.
The practical no-Mac path is this PWA deployment route (GitHub Pages + Add to Home Screen).

## iOS-native development (optional)

If you want the native app path later:

```bash
swift test
```

Then wire `ios/ImposterApp` into an Xcode iOS target on macOS.
