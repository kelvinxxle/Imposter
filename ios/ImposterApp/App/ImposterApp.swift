#if canImport(SwiftUI)
import SwiftUI
import ImposterCore

@main
struct ImposterApp: App {
    @State private var viewModel = HomeViewModel(permissionService: IOSPermissionService())

    var body: some Scene {
        WindowGroup {
            HomeView(viewModel: viewModel)
        }
    }
}
#endif
