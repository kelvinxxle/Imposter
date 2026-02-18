#if canImport(SwiftUI)
import SwiftUI

struct HomeView: View {
    @Bindable var viewModel: HomeViewModel

    var body: some View {
        VStack(spacing: 12) {
            Text("Imposter")
                .font(.largeTitle)
                .bold()

            Text(viewModel.statusLabel)
                .foregroundStyle(.secondary)
        }
        .padding()
        .onAppear {
            viewModel.onAppear()
        }
    }
}
#endif
