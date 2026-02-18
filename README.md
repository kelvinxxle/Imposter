# Imposter

A deep iOS-native starter scaffold using **Swift + SwiftUI**, with a testable shared core module.

## Why this structure

This repo is designed for a workflow where you may be on **Windows** for day-to-day editing (VS Code/JetBrains), while still building and shipping a native iOS app from a Mac (local, CI, or cloud macOS runner).

- `Package.swift` + `Sources/ImposterCore`: testable pure Swift domain and services.
- `ios/ImposterApp`: SwiftUI app shell and feature wiring for iOS.

## Repository layout

- `Package.swift` — SwiftPM package definition for `ImposterCore`.
- `Sources/ImposterCore` — domain models, use cases, services.
- `Tests/ImposterCoreTests` — Linux/macOS runnable tests for the core.
- `ios/ImposterApp` — iOS app source template (to be opened in Xcode on macOS).

## Local development (Windows-friendly)

### 1) Edit from Windows

Use VS Code with Swift extension and work inside WSL or a dev container.

```bash
swift test
```

This validates the core business logic without requiring Xcode.

### 2) Build iOS app from macOS

Options:

- Local Mac with Xcode.
- GitHub Actions macOS runner.
- Cloud Mac provider.

Open/create an Xcode project, then add files from `ios/ImposterApp` and local Swift package `ImposterCore`.

## Test on a physical iPhone

For a copy/paste setup guide, use [`docs/Xcode-iPhone-Run-Checklist.md`](docs/Xcode-iPhone-Run-Checklist.md).

You cannot deploy directly from Windows to an iPhone. For on-device testing, use a Mac (local or cloud) with Xcode.

1. On macOS, install Xcode from the App Store.
2. Clone this repo and open/create an iOS app project in Xcode.
3. Add this package as a local dependency:
   - **File → Add Package Dependencies... → Add Local...**
   - Select this repository folder.
4. Add source files from `ios/ImposterApp` into your app target.
5. Connect your iPhone with USB (first run), unlock it, and tap **Trust This Computer**.
6. In Xcode:
   - Select your iPhone as the run destination.
   - Open **Signing & Capabilities**.
   - Choose your Apple Developer Team and set a unique bundle identifier.
7. On iPhone, enable developer trust if prompted:
   - **Settings → General → VPN & Device Management → Developer App → Trust**.
8. Run from Xcode (`⌘R`) and accept location permission prompts.

### If you only have Windows hardware

- Keep writing and testing core logic with `swift test` on Windows/WSL.
- Use one of these for iPhone deployment:
  - A teammate’s Mac.
  - A rented cloud Mac (e.g., MacStadium, Scaleway Apple Silicon, etc.).
  - GitHub Actions/macOS CI to produce builds, then install via TestFlight.

## Next steps

1. Create Xcode iOS app target and include `ios/ImposterApp/*` files.
2. Add signing/team/bundle ID.
3. Replace mock service implementations with real Apple framework integrations.
4. Add UI tests and snapshot tests on macOS CI.
