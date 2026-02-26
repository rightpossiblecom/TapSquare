import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  late bool _soundEnabled;
  late bool _vibrationEnabled;

  bool get soundEnabled => _soundEnabled;
  bool get vibrationEnabled => _vibrationEnabled;

  SettingsViewModel() {
    _soundEnabled = _storageService.isSoundEnabled();
    _vibrationEnabled = _storageService.isVibrationEnabled();
  }

  Future<void> setSoundEnabled(bool value) async {
    _soundEnabled = value;
    await _storageService.setSoundEnabled(value);
    notifyListeners();
  }

  Future<void> setVibrationEnabled(bool value) async {
    _vibrationEnabled = value;
    await _storageService.setVibrationEnabled(value);
    notifyListeners();
  }

  Future<void> resetHighScore() async {
    await _storageService.setHighScore(0);
    notifyListeners();
  }

  Future<void> clearAllData() async {
    await _storageService.clearAllData();
    _soundEnabled = true;
    _vibrationEnabled = true;
    notifyListeners();
  }
}
