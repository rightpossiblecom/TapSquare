class AppConstants {
  // App Info
  static const String appName = 'TapSquare';
  static const String appVersion = '1.0.0';
  static const String appDescription = 'Test your reaction speed';

  // Game Configuration
  static const int gameDurationSeconds = 30;
  static const int initialSquareDurationMs = 1000; // 1 second
  static const int minSquareDurationMs = 300; // Minimum 300ms
  static const double initialSquareSize = 100.0;
  static const double minSquareSize = 50.0;

  // Hive Boxes
  static const String settingsBox = 'settings';
  static const String gameDataBox = 'game_data';

  // Hive Keys
  static const String highScoreKey = 'high_score';
  static const String soundEnabledKey = 'sound_enabled';
  static const String vibrationEnabledKey = 'vibration_enabled';

  // URLs
  static const String privacyPolicyUrl = 'https://example.com/privacy';
  static const String termsOfServiceUrl = 'https://example.com/terms';
}
