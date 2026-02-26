import 'package:hive_flutter/hive_flutter.dart';
import '../constants/app_constants.dart';

class StorageService {
  static final StorageService _instance = StorageService._internal();

  factory StorageService() {
    return _instance;
  }

  StorageService._internal();

  late Box<String> _settingsBox;
  late Box<String> _gameDataBox;

  Future<void> initialize() async {
    _settingsBox = await Hive.openBox<String>(AppConstants.settingsBox);
    _gameDataBox = await Hive.openBox<String>(AppConstants.gameDataBox);

    // Initialize default values if not already set
    if (!_settingsBox.containsKey(AppConstants.soundEnabledKey)) {
      await _settingsBox.put(AppConstants.soundEnabledKey, 'true');
    }
    if (!_settingsBox.containsKey(AppConstants.vibrationEnabledKey)) {
      await _settingsBox.put(AppConstants.vibrationEnabledKey, 'true');
    }
    if (!_gameDataBox.containsKey(AppConstants.highScoreKey)) {
      await _gameDataBox.put(AppConstants.highScoreKey, '0');
    }
  }

  // High Score Methods
  int getHighScore() {
    final score = _gameDataBox.get(AppConstants.highScoreKey) ?? '0';
    return int.tryParse(score) ?? 0;
  }

  Future<void> setHighScore(int score) async {
    await _gameDataBox.put(AppConstants.highScoreKey, score.toString());
  }

  // Settings Methods
  bool isSoundEnabled() {
    final value = _settingsBox.get(AppConstants.soundEnabledKey) ?? 'true';
    return value.toLowerCase() == 'true';
  }

  Future<void> setSoundEnabled(bool enabled) async {
    await _settingsBox.put(AppConstants.soundEnabledKey, enabled.toString());
  }

  bool isVibrationEnabled() {
    final value = _settingsBox.get(AppConstants.vibrationEnabledKey) ?? 'true';
    return value.toLowerCase() == 'true';
  }

  Future<void> setVibrationEnabled(bool enabled) async {
    await _settingsBox.put(
      AppConstants.vibrationEnabledKey,
      enabled.toString(),
    );
  }

  // Clear all data
  Future<void> clearAllData() async {
    await _settingsBox.clear();
    await _gameDataBox.clear();

    // Reset defaults
    _settingsBox.put(AppConstants.soundEnabledKey, 'true');
    _settingsBox.put(AppConstants.vibrationEnabledKey, 'true');
    _gameDataBox.put(AppConstants.highScoreKey, '0');
  }
}
