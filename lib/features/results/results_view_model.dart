import 'package:flutter/material.dart';
import '../../core/services/storage_service.dart';

class ResultsViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  final int score;
  late int _highScore;
  late bool _isNewHighScore;

  ResultsViewModel(this.score) {
    _highScore = _storageService.getHighScore();
    _isNewHighScore = score >= _highScore;
  }

  int get highScore => _highScore;
  bool get isNewHighScore => _isNewHighScore;
}
