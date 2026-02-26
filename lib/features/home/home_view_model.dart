import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  int _highScore = 0;
  int get highScore => _highScore;

  HomeViewModel() {
    _loadHighScore();
  }

  void _loadHighScore() {
    _highScore = _storageService.getHighScore();
    notifyListeners();
  }

  void refreshHighScore() {
    _loadHighScore();
  }
}
