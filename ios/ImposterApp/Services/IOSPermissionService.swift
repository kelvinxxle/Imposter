#if canImport(CoreLocation)
import CoreLocation
import ImposterCore

actor IOSPermissionService: PermissionService {
    private let manager = CLLocationManager()

    func locationStatus() async -> PermissionStatus {
        switch manager.authorizationStatus {
        case .authorizedAlways, .authorizedWhenInUse:
            return .authorized
        case .denied, .restricted:
            return .denied
        case .notDetermined:
            return .notDetermined
        @unknown default:
            return .denied
        }
    }

    func requestLocationPermission() async -> PermissionStatus {
        manager.requestWhenInUseAuthorization()
        return await locationStatus()
    }
}
#endif
