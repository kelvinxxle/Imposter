public enum PermissionStatus: Equatable, Sendable {
    case notDetermined
    case denied
    case authorized
}

public protocol PermissionService: Sendable {
    func locationStatus() async -> PermissionStatus
    func requestLocationPermission() async -> PermissionStatus
}
