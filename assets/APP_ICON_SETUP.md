# TapSquare App Icon Setup

## Required Action

An app icon image is required at: `assets/app_logo.png`

The configuration is ready in `pubspec.yaml` for:
- Flutter Launcher Icons generation
- Flutter Native Splash generation

## Icon Requirements

- File: `assets/app_logo.png`
- Format: PNG (1024x1024 recommended)
- Design: A blue square icon representing the game concept
- Must be a solid icon (no transparency for adaptive icon foreground is optional)

## Next Steps

1. Create or provide an app_logo.png file in the assets/ folder
2. Run: `flutter pub run flutter_launcher_icons`
3. Run: `flutter pub run flutter_native_splash:create`

This will automatically generate all platform-specific icon sizes for iOS, Android, and other platforms.

## Alternative

You can use any solid blue square or tap-themed icon image to represent TapSquare.
