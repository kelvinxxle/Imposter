public struct UserProfile: Equatable, Sendable {
    public let id: String
    public var displayName: String
    public var isLocationEnabled: Bool

    public init(id: String, displayName: String, isLocationEnabled: Bool) {
        self.id = id
        self.displayName = displayName
        self.isLocationEnabled = isLocationEnabled
    }
}
