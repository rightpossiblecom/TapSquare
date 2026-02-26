import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:google_fonts/google_fonts.dart';
import 'dart:developer' as developer;
import '../results/results_screen.dart';
import 'game_view_model.dart';

class GameScreen extends StatefulWidget {
  const GameScreen({super.key});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> {
  @override
  void initState() {
    super.initState();
    developer.log('🎮 GameScreen initState', name: 'GameScreen');
    // Start game after first frame
    WidgetsBinding.instance.addPostFrameCallback((_) {
      developer.log('🎮 Starting game after first frame', name: 'GameScreen');
      context.read<GameViewModel>().startGame();
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: const Text('TapSquare'),
        centerTitle: true,
      ),
      body: Consumer<GameViewModel>(
        builder: (context, viewModel, child) {
          return LayoutBuilder(
            builder: (context, constraints) {
              developer.log(
                '📐 LayoutBuilder constraints: ${constraints.maxWidth.toStringAsFixed(1)} x ${constraints.maxHeight.toStringAsFixed(1)}',
                name: 'GameScreen',
              );
              // Set the game area dimensions to the ViewModel
              WidgetsBinding.instance.addPostFrameCallback((_) {
                developer.log(
                  '📝 Setting game area dimensions',
                  name: 'GameScreen',
                );
                viewModel.setGameAreaDimensions(
                  constraints.maxWidth,
                  constraints.maxHeight - 80, // Account for score/timer area
                );
              });

              return Stack(
                children: [
                  // Main game area
                  GestureDetector(
                    onTapDown: (_) {
                      viewModel.onSquareTapped();
                    },
                    child: Container(
                      color: colorScheme.surface,
                      child: Stack(
                        children: [
                          // Score and Timer at top
                          Positioned(
                            top: 20,
                            left: 0,
                            right: 0,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: [
                                // Score Display
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 24,
                                  ),
                                  child: Column(
                                    children: [
                                      Text(
                                        'Score',
                                        style: GoogleFonts.poppins(
                                          fontSize: 12,
                                          fontWeight: FontWeight.w500,
                                          color: colorScheme.onSurface
                                              .withOpacity(0.6),
                                        ),
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        viewModel.score.toString(),
                                        style: GoogleFonts.poppins(
                                          fontSize: 32,
                                          fontWeight: FontWeight.w700,
                                          color: colorScheme.primary,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                // Time Display
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 24,
                                  ),
                                  child: Column(
                                    children: [
                                      Text(
                                        'Time',
                                        style: GoogleFonts.poppins(
                                          fontSize: 12,
                                          fontWeight: FontWeight.w500,
                                          color: colorScheme.onSurface
                                              .withOpacity(0.6),
                                        ),
                                      ),
                                      const SizedBox(height: 4),
                                      Text(
                                        '${viewModel.timeRemaining}s',
                                        style: GoogleFonts.poppins(
                                          fontSize: 32,
                                          fontWeight: FontWeight.w700,
                                          color: viewModel.timeRemaining <= 5
                                              ? colorScheme.error
                                              : colorScheme.secondary,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),

                          // Tappable Square
                          if (viewModel.squareVisible)
                            Positioned(
                              left: viewModel.squarePosition.dx,
                              top: viewModel.squarePosition.dy + 80,
                              child: GestureDetector(
                                onTap: () {
                                  viewModel.onSquareTapped();
                                },
                                child: AnimatedScale(
                                  scale: 1.0,
                                  duration: const Duration(milliseconds: 100),
                                  child: Container(
                                    width: viewModel.squareSize,
                                    height: viewModel.squareSize,
                                    decoration: BoxDecoration(
                                      color: colorScheme.primary,
                                      borderRadius: BorderRadius.circular(16),
                                      boxShadow: [
                                        BoxShadow(
                                          color: colorScheme.primary
                                              .withOpacity(0.4),
                                          blurRadius: 12,
                                          spreadRadius: 4,
                                        ),
                                      ],
                                    ),
                                    child: Material(
                                      color: Colors.transparent,
                                      child: InkWell(
                                        onTap: () {
                                          viewModel.onSquareTapped();
                                        },
                                        customBorder: RoundedRectangleBorder(
                                          borderRadius: BorderRadius.circular(
                                            16,
                                          ),
                                        ),
                                        child: Center(
                                          child: Icon(
                                            Icons.touch_app,
                                            color: colorScheme.onPrimary,
                                            size: 24,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),

                          // Game Over Overlay
                          if (!viewModel.isGameActive)
                            _buildGameOverOverlay(context, viewModel),
                        ],
                      ),
                    ),
                  ),
                ],
              );
            },
          );
        },
      ),
    );
  }

  Widget _buildGameOverOverlay(BuildContext context, GameViewModel viewModel) {
    final colorScheme = Theme.of(context).colorScheme;

    return Container(
      color: Colors.black.withOpacity(0.4),
      child: Center(
        child: Container(
          padding: const EdgeInsets.all(32),
          decoration: BoxDecoration(
            color: colorScheme.surface,
            borderRadius: BorderRadius.circular(24),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Game Over!',
                style: GoogleFonts.poppins(
                  fontSize: 28,
                  fontWeight: FontWeight.w700,
                  color: colorScheme.onSurface,
                ),
              ),
              const SizedBox(height: 24),
              Text(
                'Final Score',
                style: GoogleFonts.poppins(
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                  color: colorScheme.onSurface.withOpacity(0.6),
                ),
              ),
              const SizedBox(height: 8),
              Text(
                viewModel.score.toString(),
                style: GoogleFonts.poppins(
                  fontSize: 48,
                  fontWeight: FontWeight.w700,
                  color: colorScheme.primary,
                ),
              ),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                height: 48,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: colorScheme.primary,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  onPressed: () {
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) =>
                            ResultsScreen(score: viewModel.score),
                      ),
                    );
                  },
                  child: Text(
                    'See Results',
                    style: GoogleFonts.poppins(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      color: colorScheme.onPrimary,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
