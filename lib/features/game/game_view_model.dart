import 'package:flutter/material.dart';
import 'dart:async';
import 'dart:math';
import 'dart:developer' as developer;
import '../../core/constants/app_constants.dart';
import '../../core/services/storage_service.dart';

class GameViewModel extends ChangeNotifier {
  final StorageService _storageService = StorageService();

  // Game State
  int _score = 0;
  int get score => _score;

  int _timeRemaining = AppConstants.gameDurationSeconds;
  int get timeRemaining => _timeRemaining;

  bool _isGameActive = false;
  bool get isGameActive => _isGameActive;

  bool _squareVisible = false;
  bool get squareVisible => _squareVisible;

  // Square Position and Size
  Offset _squarePosition = const Offset(0, 0);
  Offset get squarePosition => _squarePosition;

  double _squareSize = AppConstants.initialSquareSize;
  double get squareSize => _squareSize;

  // Available game area
  double _maxWidth = 400.0;
  double _maxHeight = 500.0;

  // Difficulty Management
  int _squareDurationMs = AppConstants.initialSquareDurationMs;

  // Game mode: when true the game ends on first missed square. Default is
  // false to support the 30-second timed mode.
  final bool _endOnMiss = false;

  // Optional misses counter when using miss-limited mode
  int _misses = 0;

  // Timers
  Timer? _gameTimer;
  Timer? _squareTimer;

  // Set the available game area dimensions
  void setGameAreaDimensions(double width, double height) {
    _maxWidth = width;
    _maxHeight = height;
    developer.log(
      '📐 Game area set: ${width.toStringAsFixed(1)} x ${height.toStringAsFixed(1)}',
      name: 'GameViewModel',
    );
  }

  void startGame() {
    developer.log('🎮 START GAME called', name: 'GameViewModel');
    _score = 0;
    _timeRemaining = AppConstants.gameDurationSeconds;
    _squareDurationMs = AppConstants.initialSquareDurationMs;
    _squareSize = AppConstants.initialSquareSize;
    _isGameActive = true;
    _squareVisible = false;
    notifyListeners();

    developer.log(
      '✅ Game initialized - Active: $_isGameActive, Time: $_timeRemaining',
      name: 'GameViewModel',
    );

    // Start game countdown
    _gameTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (_timeRemaining > 0) {
        _timeRemaining--;
        developer.log(
          '⏱️ Time remaining: $_timeRemaining seconds',
          name: 'GameViewModel',
        );
        notifyListeners();

        if (_timeRemaining == 0) {
          developer.log('⏱️ TIME UP - ending game', name: 'GameViewModel');
          endGame();
        }
      }
    });

    developer.log('🟦 Showing first square', name: 'GameViewModel');
    // Show first square
    _showNextSquare();
  }

  void _showNextSquare() {
    if (!_isGameActive) {
      developer.log(
        '❌ Cannot show square - game not active',
        name: 'GameViewModel',
      );
      return;
    }

    developer.log('🟦 _showNextSquare called', name: 'GameViewModel');

    // Cancel previous square timer
    _squareTimer?.cancel();

    final random = Random();
    const squarePadding = 30.0;

    developer.log(
      '📊 Available space: ${_maxWidth.toStringAsFixed(1)} x ${_maxHeight.toStringAsFixed(1)}, Square size: ${_squareSize.toStringAsFixed(1)}',
      name: 'GameViewModel',
    );

    // Generate random position within available space
    final maxX = _maxWidth - squarePadding * 2 - _squareSize;
    final maxY = _maxHeight - squarePadding * 2 - _squareSize;

    developer.log(
      '📐 Max X: ${maxX.toStringAsFixed(1)}, Max Y: ${maxY.toStringAsFixed(1)}',
      name: 'GameViewModel',
    );

    final x = squarePadding + (maxX > 0 ? random.nextDouble() * maxX : 0);
    final y = squarePadding + (maxY > 0 ? random.nextDouble() * maxY : 0);

    _squarePosition = Offset(x, y);
    _squareVisible = true;
    notifyListeners();

    developer.log(
      '✨ Square shown at (${x.toStringAsFixed(1)}, ${y.toStringAsFixed(1)}), Duration: ${_squareDurationMs}ms',
      name: 'GameViewModel',
    );

    // Hide square after duration
    _squareTimer = Timer(Duration(milliseconds: _squareDurationMs), () {
      developer.log(
        '⏲️ Square hide timer fired - game active: $_isGameActive',
        name: 'GameViewModel',
      );
      if (!_isGameActive) return;

      // Mark square hidden
      _squareVisible = false;
      notifyListeners();

      if (_endOnMiss) {
        // Miss-limited behavior: increment misses and optionally end
        _misses++;
        developer.log('❗ Missed square (#$_misses)', name: 'GameViewModel');
        // For now, immediate end on miss if configured
        developer.log(
          '💥 Ending game due to miss (endOnMiss=true)',
          name: 'GameViewModel',
        );
        endGame();
        return;
      }

      // Timed mode (default): do NOT end the game on a miss, just spawn next
      developer.log(
        '➡️ Missed square, continuing timed round',
        name: 'GameViewModel',
      );
      // Small delay before next square to avoid immediate spawns
      Future.delayed(const Duration(milliseconds: 150), () {
        if (_isGameActive) _showNextSquare();
      });
    });
  }

  void onSquareTapped() {
    developer.log(
      '👆 onSquareTapped called - active: $_isGameActive, visible: $_squareVisible',
      name: 'GameViewModel',
    );
    if (!_isGameActive || !_squareVisible) {
      developer.log(
        '❌ Invalid tap - Game active: $_isGameActive, Square visible: $_squareVisible',
        name: 'GameViewModel',
      );
      return;
    }

    developer.log('✅ Valid tap! Increasing score.', name: 'GameViewModel');

    // Cancel the hide timer since they tapped in time
    _squareTimer?.cancel();
    _squareVisible = false;

    // Increase score
    _score++;

    developer.log('🎯 Score: $_score', name: 'GameViewModel');

    // Increase difficulty
    _updateDifficulty();

    notifyListeners();

    // Show next square
    developer.log('🔄 Showing next square...', name: 'GameViewModel');
    _showNextSquare();
  }

  void _updateDifficulty() {
    // Increase speed based on score
    // Every 5 points, increase difficulty
    if (_score % 5 == 0 &&
        _squareDurationMs > AppConstants.minSquareDurationMs) {
      _squareDurationMs = (_squareDurationMs * 0.85).toInt();
      developer.log(
        '⚡ Difficulty up! New duration: ${_squareDurationMs}ms',
        name: 'GameViewModel',
      );
    }

    // Decrease size based on score
    if (_score % 3 == 0 && _squareSize > AppConstants.minSquareSize) {
      _squareSize *= 0.95;
      developer.log(
        '📉 Size reduced! New size: ${_squareSize.toStringAsFixed(1)}',
        name: 'GameViewModel',
      );
    }
  }

  void endGame() {
    developer.log(
      '🛑 GAME OVER - Final score: $_score, Game was active: $_isGameActive',
      name: 'GameViewModel',
    );
    _isGameActive = false;
    _squareVisible = false;

    _gameTimer?.cancel();
    _squareTimer?.cancel();

    // Update high score if needed
    final currentHighScore = _storageService.getHighScore();
    if (_score > currentHighScore) {
      _storageService.setHighScore(_score);
      developer.log(
        '🏆 New high score! $_score (previous: $currentHighScore)',
        name: 'GameViewModel',
      );
    }

    notifyListeners();
  }

  @override
  void dispose() {
    _gameTimer?.cancel();
    _squareTimer?.cancel();
    super.dispose();
  }
}
