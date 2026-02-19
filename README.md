# Imposter

A cross-platform starter that now includes:

- **iOS-native scaffold** with Swift + SwiftUI.
- **Mobile-first web app** you can run on iPhone from Safari without a Mac build.

## Repository layout

- `Package.swift` — SwiftPM package definition for `ImposterCore`.
- `Sources/ImposterCore` — domain models, use cases, services.
- `Tests/ImposterCoreTests` — Linux/macOS runnable tests for the core.
- `ios/ImposterApp` — SwiftUI app source template (open in Xcode on macOS).
- `web/` — installable PWA-style web app for iPhone/mobile browsers.

## Play on iPhone (web app)

1. Serve the `web` folder:

   ```bash
   cd web
   python3 -m http.server 8080
   ```

2. On your iPhone, open:

   `http://<your-computer-ip>:8080`

3. In Safari, tap **Share → Add to Home Screen**.
4. Launch from Home Screen for a full-screen app-like experience.

### Web game rules

- Configure players, imposters, timer, and category.
- Every player sees a word privately.
- **Civilians** share one word; **imposters** receive a closely related word.
- Discuss, vote, and reveal the result.


### One-shot Windows recovery script

If your local clone is missing `web/` files, run:

```powershell
pwsh -File .\restore-web-app.ps1 -RepoPath C:\Users\Kelvin\Imposter
```

Then commit and push:

```powershell
git add README.md web
git commit -m "Add iPhone-friendly Imposter web app"
git push origin main
```


If you get a “script file not recognized” error, run:

```powershell
git pull
Test-Path .\restore-web-app.ps1
Test-Path .\scripts\restore-web-app.ps1
```

Both commands should print `True` before re-running the script.

## iOS-native development (optional)

If you want the native app path later:

```bash
swift test
```

Then wire `ios/ImposterApp` into an Xcode iOS target on macOS.
