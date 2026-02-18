public struct EnsureLocationAccessUseCase: Sendable {
    private let permissionService: PermissionService

    public init(permissionService: PermissionService) {
        self.permissionService = permissionService
    }

    public func execute() async -> PermissionStatus {
        let current = await permissionService.locationStatus()

        switch current {
        case .authorized, .denied:
            return current
        case .notDetermined:
            return await permissionService.requestLocationPermission()
        }
    }
}
