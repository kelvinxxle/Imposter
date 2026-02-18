// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Imposter",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(
            name: "ImposterCore",
            targets: ["ImposterCore"]
        )
    ],
    targets: [
        .target(
            name: "ImposterCore"
        ),
        .testTarget(
            name: "ImposterCoreTests",
            dependencies: ["ImposterCore"]
        )
    ]
)
