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

## Next steps

1. Create Xcode iOS app target and include `ios/ImposterApp/*` files.
2. Add signing/team/bundle ID.
3. Replace mock service implementations with real Apple framework integrations.
4. Add UI tests and snapshot tests on macOS CI.
