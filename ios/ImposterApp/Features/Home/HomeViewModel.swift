#if canImport(SwiftUI)
import SwiftUI
import ImposterCore

@Observable
final class HomeViewModel {
    private let ensureLocationAccess: EnsureLocationAccessUseCase

    var statusLabel = "Checking permissions..."

    init(permissionService: PermissionService) {
        self.ensureLocationAccess = EnsureLocationAccessUseCase(permissionService: permissionService)
    }

    func onAppear() {
        Task {
            let status = await ensureLocationAccess.execute()
            await MainActor.run {
                statusLabel = switch status {
                case .authorized: "Location access enabled"
                case .denied: "Location denied"
                case .notDetermined: "Location undecided"
                }
            }
        }
    }
}
#endif
