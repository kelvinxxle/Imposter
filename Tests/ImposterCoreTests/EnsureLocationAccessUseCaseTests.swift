import Testing
@testable import ImposterCore

private actor MockPermissionService: PermissionService {
    private let initial: PermissionStatus
    private let requested: PermissionStatus
    private(set) var didRequest = false

    init(initial: PermissionStatus, requested: PermissionStatus) {
        self.initial = initial
        self.requested = requested
    }

    func locationStatus() async -> PermissionStatus {
        initial
    }

    func requestLocationPermission() async -> PermissionStatus {
        didRequest = true
        return requested
    }

    func requestedPermission() async -> Bool {
        didRequest
    }
}

@Suite("EnsureLocationAccessUseCase")
struct EnsureLocationAccessUseCaseTests {
    @Test("returns current status when already authorized")
    func authorizedWithoutRequest() async {
        let service = MockPermissionService(initial: .authorized, requested: .denied)
        let useCase = EnsureLocationAccessUseCase(permissionService: service)

        let status = await useCase.execute()

        #expect(status == .authorized)
        let requested = await service.requestedPermission()
        #expect(requested == false)
    }

    @Test("requests permission when status is not determined")
    func requestsWhenNotDetermined() async {
        let service = MockPermissionService(initial: .notDetermined, requested: .authorized)
        let useCase = EnsureLocationAccessUseCase(permissionService: service)

        let status = await useCase.execute()

        #expect(status == .authorized)
        let requested = await service.requestedPermission()
        #expect(requested == true)
    }
}
