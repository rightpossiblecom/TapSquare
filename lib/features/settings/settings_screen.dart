import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../core/constants/app_constants.dart';
import '../about/about_screen.dart';
import 'settings_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return ChangeNotifierProvider(
      create: (_) => SettingsViewModel(),
      child: Scaffold(
        appBar: AppBar(title: const Text('Settings')),
        body: Consumer<SettingsViewModel>(
          builder: (context, viewModel, child) {
            return ListView(
              padding: const EdgeInsets.symmetric(vertical: 16),
              children: [
                // Game Settings Section
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  child: Text(
                    'Game Settings',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: colorScheme.primary,
                    ),
                  ),
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.volume_up,
                  title: 'Sound Effects',
                  trailing: Switch(
                    value: viewModel.soundEnabled,
                    onChanged: (value) {
                      viewModel.setSoundEnabled(value);
                    },
                  ),
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.vibration,
                  title: 'Vibration',
                  trailing: Switch(
                    value: viewModel.vibrationEnabled,
                    onChanged: (value) {
                      viewModel.setVibrationEnabled(value);
                    },
                  ),
                ),
                const Divider(height: 1),

                // Data Management Section
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  child: Text(
                    'Data Management',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: colorScheme.primary,
                    ),
                  ),
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.restore,
                  title: 'Reset High Score',
                  onTap: () {
                    _showConfirmDialog(
                      context,
                      'Reset High Score?',
                      'This action cannot be undone.',
                      () {
                        viewModel.resetHighScore();
                        Navigator.pop(context);
                      },
                    );
                  },
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.delete_sweep,
                  title: 'Clear All Data',
                  onTap: () {
                    _showConfirmDialog(
                      context,
                      'Clear All App Data?',
                      'This will reset all settings and scores.',
                      () {
                        viewModel.clearAllData();
                        Navigator.pop(context);
                      },
                    );
                  },
                ),
                const Divider(height: 1),

                // App Info Section
                Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 12,
                  ),
                  child: Text(
                    'App Information',
                    style: GoogleFonts.poppins(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: colorScheme.primary,
                    ),
                  ),
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.info,
                  title: 'About',
                  onTap: () {
                    Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (context) => const AboutScreen(),
                      ),
                    );
                  },
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.shield,
                  title: 'Privacy Policy',
                  onTap: () {
                    _launchUrl(AppConstants.privacyPolicyUrl);
                  },
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.description,
                  title: 'Terms of Service',
                  onTap: () {
                    _launchUrl(AppConstants.termsOfServiceUrl);
                  },
                ),
                _buildSettingsTile(
                  context: context,
                  icon: Icons.info_outline,
                  title: 'Version',
                  subtitle: AppConstants.appVersion,
                ),
                const SizedBox(height: 32),
              ],
            );
          },
        ),
      ),
    );
  }

  Widget _buildSettingsTile({
    required BuildContext context,
    required IconData icon,
    required String title,
    String? subtitle,
    Widget? trailing,
    VoidCallback? onTap,
  }) {
    final colorScheme = Theme.of(context).colorScheme;

    return ListTile(
      leading: Icon(icon, color: colorScheme.primary),
      title: Text(
        title,
        style: GoogleFonts.poppins(fontSize: 16, fontWeight: FontWeight.w500),
      ),
      subtitle: subtitle != null
          ? Text(
              subtitle,
              style: GoogleFonts.poppins(
                fontSize: 13,
                color: colorScheme.onSurface.withOpacity(0.6),
              ),
            )
          : null,
      trailing: trailing,
      onTap: onTap,
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
    );
  }

  void _showConfirmDialog(
    BuildContext context,
    String title,
    String message,
    VoidCallback onConfirm,
  ) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(title),
        content: Text(message),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          TextButton(onPressed: onConfirm, child: const Text('Confirm')),
        ],
      ),
    );
  }

  Future<void> _launchUrl(String urlString) async {
    final Uri url = Uri.parse(urlString);
    try {
      if (await canLaunchUrl(url)) {
        await launchUrl(url, mode: LaunchMode.externalApplication);
      }
    } catch (e) {
      // URL cannot be launched
    }
  }
}
