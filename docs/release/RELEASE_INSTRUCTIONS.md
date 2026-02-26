# TapSquare Release Instructions

## Pre-Release Checklist

### ✅ Completed
- [x] App icon configured (requires assets/app_logo.png)
- [x] Splash screen configured (requires assets/app_logo.png)
- [x] App name updated to "TapSquare"
- [x] Package name set to com.tapsquare.app
- [x] MainActivity moved to correct package structure
- [x] Internet permission added
- [x] Version set to 1.0.0+1
- [x] Privacy policy created
- [x] Play Store listing created
- [x] Release keystore generated
- [x] Signing configuration set up

### 📋 Required before Build

1. **App Icon**
   - Place an app logo image at: `assets/app_logo.png` (1024x1024 PNG)
   - Run: `flutter pub run flutter_launcher_icons`
   - Run: `flutter pub run flutter_native_splash:create`

2. **Review Privacy Policy**
   - Location: `docs/release/privacy_policy.txt`
   - Update support email if needed (currently: support@tapsquare.app)

3. **Review Play Store Listing**
   - Location: `docs/release/play_store_listing.txt`
   - Includes: Description, features, category, content rating

4. **Verify Package Structure**
   - Kotlin code is in: `android/app/src/main/kotlin/com/tapsquare/app/`
   - Old example package should be ignored

## Build Commands

### Debug Build (Testing)
```bash
flutter build apk --debug
```

### Release Build - APK (for testing on physical device)
```bash
flutter build apk --release
```

### Release Build - App Bundle (for Google Play Store)
```bash
flutter build appbundle --release
```

This generates: `build/app/outputs/bundle/release/app-release.aab`

## Release Keystore Details

**File**: docs/release/tapsquare-release.jks
**Alias**: tapsquare
**Store Password**: tapsquare123
**Key Password**: tapsquare123
**Validity**: 10,000 days

⚠️ **CRITICAL**: Keep this keystore and key.properties file secure and backed up!

## Google Play Console Steps

1. Go to Google Play Console (https://play.google.com/console)
2. Create new app or select existing
3. Complete app store listing (Use content from play_store_listing.txt)
4. Upload app-release.aab to Internal Testing track
5. Create content declarations for required permissions
6. Set up pricing and distribution
7. Test on internal testing devices (5+ devices recommended)
8. Move to production release

## Content Declaration Checklist

- [ ] Permission: INTERNET - Used for policy links and feedback
- [ ] Permission: VIBRATE (optional) - For haptic feedback
- [ ] Permission: MODIFY_AUDIO_SETTINGS (optional) - For sound control

## Important Notes

- All game data is stored locally; no cloud sync needed
- No user authentication required
- No analytics or tracking implemented
- Privacy policy reflects no data collection
- App icon must be provided by user before building for store

## Files to Review Before Release

- `docs/release/privacy_policy.txt` - Privacy statement
- `docs/release/play_store_listing.txt` - Store description
- `android/app/build.gradle.kts` - Signing configuration
- `android/app/src/main/AndroidManifest.xml` - Permissions
- `android/key.properties` - Signing credentials (KEEP SECURE)

## Troubleshooting

### Icon not appearing
- Ensure assets/app_logo.png exists
- Run: `flutter pub run flutter_launcher_icons`
- Run: `flutter clean` and rebuild

### Build fails with signing error
- Verify key.properties exists in android/ root
- Check keystore password matches (tapsquare123)
- Ensure tapsquare-release.jks is in android/app/

### Gradle sync error
- Run: `flutter pub get`
- Run: `flutter clean`
- Then rebuild

## Version Bumping (for future releases)

Update version in pubspec.yaml:
```yaml
version: 1.0.1+2  # Increment as needed
```

Convention: Major.Minor.Patch+BuildNumber

---

**Ready for Release**: Once app_logo.png is provided and configured, the app is ready to build for Play Store!
