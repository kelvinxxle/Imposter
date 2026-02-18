# Xcode + iPhone Run Checklist

Use this checklist after cloning the repository on a Mac.

## 1) Create/Open iOS app project

- Open Xcode.
- Create an iOS **App** project (Swift + SwiftUI) OR open your existing iOS project.
- Minimum deployment target recommendation: **iOS 17.0+**.

## 2) Add local Swift package dependency

1. In Xcode, choose **File → Add Package Dependencies...**.
2. Click **Add Local...**.
3. Select the repository root (`Imposter`) containing `Package.swift`.
4. Add `ImposterCore` to your app target.

Verification:
- In the app target’s **Frameworks, Libraries, and Embedded Content**, you should see `ImposterCore`.

## 3) Add iOS app shell source files

Add these files from `ios/ImposterApp` into your iOS app target:

- `ios/ImposterApp/App/ImposterApp.swift`
- `ios/ImposterApp/Features/Home/HomeView.swift`
- `ios/ImposterApp/Features/Home/HomeViewModel.swift`
- `ios/ImposterApp/Services/IOSPermissionService.swift`

Important:
- Ensure each file has your iOS app target checked in **Target Membership**.
- If your project already has an `@main` app entry file, merge carefully so there is only one `@main` type.

## 4) Configure Signing

In your iOS app target:

1. Open **Signing & Capabilities**.
2. Enable **Automatically manage signing**.
3. Set your **Team**.
4. Set a unique **Bundle Identifier** (for example: `com.yourname.imposter`).

## 5) Add required Info.plist privacy keys

For location permission prompts to appear, add these keys:

- `NSLocationWhenInUseUsageDescription` = `Imposter uses your location to provide location-based features.`
- (Optional if needed later) `NSLocationAlwaysAndWhenInUseUsageDescription`
- (Optional if needed later) `NSLocationAlwaysUsageDescription`

Where:
- **Target → Info** (Custom iOS Target Properties), or directly in `Info.plist`.

## 6) Prepare iPhone device

1. Connect iPhone via USB (first-time setup).
2. Unlock iPhone and tap **Trust This Computer** if prompted.
3. In Xcode toolbar, choose your iPhone as the run destination.

If you see trust/signing prompts on device:
- iPhone: **Settings → General → VPN & Device Management → Developer App → Trust**.

## 7) Run and verify

- Press **Run** (`⌘R`).
- Confirm the app launches on iPhone.
- Confirm the location prompt appears.
- Verify UI status changes after permission selection.

## 8) Common failures and quick fixes

### “No provisioning profiles found”
- Re-check Team selection and unique bundle identifier.
- Keep “Automatically manage signing” enabled.

### “Cannot find module 'ImposterCore'”
- Ensure package is added to the app target.
- Clean build folder (`Shift+Cmd+K`) and rebuild.

### Location prompt never appears
- Confirm `NSLocationWhenInUseUsageDescription` exists.
- Delete app from iPhone and reinstall to reset permission flow.

### Build works on Mac but not in this Linux environment
- This is expected for iOS target execution; iOS builds/runs require Xcode/macOS.
