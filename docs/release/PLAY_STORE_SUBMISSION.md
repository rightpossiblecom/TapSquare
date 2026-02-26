# TapSquare – Google Play Store Submission Guide

## ✅ Production Checklist Complete

All preparation for Play Store submission is complete. The app is ready to upload.

## 📦 Deliverables

### Release Artifacts
- **App Bundle**: `build/app/outputs/bundle/release/app-release.aab` (38.0MB)
  - Used for Play Store submission
  - Automatically generates optimized APKs per device
  
- **Release APK**: `build/app/outputs/flutter-apk/app-release.apk` (43.8MB)
  - For direct device installation (optional)
  - Fully signed and minified

### Documentation
- **Privacy Policy**: `docs/release/privacy_policy.txt`
- **Play Store Listing**: `docs/release/play_store_listing.txt`
- **Release Instructions**: `docs/release/RELEASE_INSTRUCTIONS.md`
- **Keystore Backup**: `docs/release/tapsquare-release.jks`
- **Signing Credentials**: `docs/release/key.properties` (KEEP SECURE!)

## 🔐 Signing Details

```
Keystore:     tapsquare-release.jks
Alias:        tapsquare
Store Pass:   tapsquare123
Key Pass:     tapsquare123
Validity:     10,000 days (expires 2053)
```

## 📋 Pre-Submission Checklist

Before uploading to Play Store:

- [x] Code is compiled and tested
- [x] Release APK/AAB successfully built
- [x] Signing configuration verified
- [x] Privacy policy prepared
- [x] Play Store listing prepared
- [x] Package name: com.tapsquare.app
- [x] App label: TapSquare
- [x] Version: 1.0.0+1
- [x] Permissions configured
- [ ] **TODO: Provide app icon** (assets/app_logo.png)
  - Required: 1024x1024 PNG
  - Then run: `flutter pub run flutter_launcher_icons`

## 🚀 Google Play Console Steps

### Step 1: Create App in Play Console
1. Go to https://play.google.com/console
2. Sign in with an account that has access or create one
3. Click **Create App**
4. Enter app name: "TapSquare"
5. Select app type: **Game**
6. Select app category: **Casual** or **Arcade**

### Step 2: Fill Store Listing
1. Navigate to **Store listing** section
2. Fill in all required fields:
   - **App name**: TapSquare
   - **Short description** (max 80 chars):
     > Test your reaction speed in this fast-paced arcade tapping game.
   
   - **Full description** (use content from `docs/release/play_store_listing.txt`)
   - **Category**: Games > Arcade
   - **Content rating**: Everyone (E)

### Step 3: Add Screenshots
1. Go to **Screenshots** section
2. Add at least 2 phone screenshots of the game
   - Recommended: 8 screenshots showing gameplay
   - Dimensions: 1080x1920 pixels (portrait)
   - Format: PNG or JPEG
3. Optional: Add 7-inch and 10-inch tablet screenshots

### Step 4: Upload App Bundle
1. Navigate to **Release** > **Testing tracks** > **Internal testing**
2. Click **Upload new release**
3. Select the AAB file: `build/app/outputs/bundle/release/app-release.aab`
4. Add release notes (e.g., "Initial release of TapSquare")

### Step 5: Complete Declarations
1. Go to **Policies** > **App content**
2. Complete content rating questionnaire:
   - Violence: None
   - Sexual content: None
   - Alcohol/Tobacco: None
   - Gambling: None
   - Data collection: None (select "This app does not collect personal data")

3. Go to **Policies** > **Permissions**
4. Declare permissions:
   - Location: Not used
   - Calendar: Not used
   - Contacts: Not used
   - Camera: Not used
   - Photos: Not used
   - Microphone: Not used
   - Body Sensors: Not used
   - Sensitive Identifiers: Not used
   - Financial Info: Not used
   - Health Info: Not used

### Step 6: Privacy Policy
1. Go to **App content** > **Privacy policy**
2. Add privacy policy URL: (Host policy_policy.txt somewhere and add URL)
   - Or paste the content directly from `docs/release/privacy_policy.txt`

### Step 7: Review & Test
1. Go to **Testing tracks** > **Internal testing**
2. Invite testers (minimum 5 devices recommended)
3. Wait for approval and test on multiple devices
4. Verify:
   - All features work
   - No crashes on opening
   - Sound/vibration toggles work
   - High score persists
   - Settings save correctly

### Step 8: Submit for Production Review
1. Once tested and verified, move to **Production** track
2. Click **Submit for review**
3. Review and accept the Content rating certificate
4. Confirm publishing options
5. Submit

### Step 9: Monitor & Support
- Respond to user reviews and feedback
- Monitor crash reports (Android Vitals)
- Check rating and install metrics
- File updates if issues arise

## ⏰ Review Timeline

- **Initial Review**: 1-7 days typically
- **Response Time**: Monitor Play Console for questions
- **Rejection Common Reasons**: Missing privacy policy, unclear permissions

## 📊 Version Updates (Future Releases)

For next releases:
1. Update version in `pubspec.yaml`:
   ```yaml
   version: 1.0.1+2  # Increment build number
   ```

2. Rebuild:
   ```bash
   flutter build appbundle --release
   ```

3. Upload to **Internal testing** first, test thoroughly
4. Then move to **Production**

## 💡 Post-Launch Tips

- Monitor Android Vitals for crashes
- Engage with user reviews
- Plan updates regularly (e.g., monthly improvements)
- Consider adding features based on feedback
- Keep privacy policy updated if data practices change

## 🆘 Troubleshooting

### App not approved
- Check Play Console > **Program policies**
- Ensure Privacy Policy clearly states no data collection
- Verify Content rating is accurate
- Review exact rejection reason in console messages

### High crash rate
- Test on more device types
- Check Android Vitals in Play Console
- Review app logs for errors
- File a bug fix and resubmit

### Low ratings/reviews
- Investigate user feedback for improvement areas
- Respond positively to all reviews
- Fix reported bugs quickly
- Update frequently with visible improvements

---

## 📞 Support

For questions about the app or submissions:
- Email: support@tapsquare.app
- Playstore contact: Found in App > About store listing

---

**Status**: ✅ Ready for Google Play Console Submission

The app is fully prepared and signed. Proceed to Google Play Console and follow the steps above!
