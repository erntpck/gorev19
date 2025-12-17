import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAppSettings } from '../../src/store/useAppSettings';
import { BackgroundWrapper } from '../../src/components/BackgroundWrapper';
import * as Haptics from 'expo-haptics';

export default function SettingsScreen() {
  const { isDarkMode, isHapticEnabled, toggleDarkMode, toggleHaptic } = useAppSettings();

  const handleToggleDarkMode = () => {
    if (isHapticEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    toggleDarkMode();
  };

  const handleToggleHaptic = () => {
    if (isHapticEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    toggleHaptic();
  };

  return (
    <BackgroundWrapper>
      <View className="flex-1">
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />

        <ScrollView contentContainerClassName="py-16 px-4" showsVerticalScrollIndicator={false}>
          <Text
            className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-8 text-center text-4xl font-bold`}
            style={{ fontFamily: 'Nunito_700Bold' }}>
            Ayarlar
          </Text>

          <View className="gap-4">
            <Pressable
              onPress={handleToggleDarkMode}
              className={`${isDarkMode ? 'bg-dark-card' : 'bg-white/90'} flex-row items-center justify-between rounded-2xl p-6 shadow-lg`}>
              <View className="flex-row items-center gap-4">
                <Text className="text-4xl">{isDarkMode ? '🌙' : '☀️'}</Text>
                <View>
                  <Text
                    className={`${isDarkMode ? 'text-dark-text' : 'text-gray-800'} text-xl font-bold`}
                    style={{ fontFamily: 'Nunito_700Bold' }}>
                    Karanlık Mod
                  </Text>
                  <Text
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}
                    style={{ fontFamily: 'Nunito_400Regular' }}>
                    {isDarkMode ? 'Açık' : 'Kapalı'}
                  </Text>
                </View>
              </View>
              <View
                className={`${
                  isDarkMode ? 'bg-kawaii-purple' : 'bg-gray-300'
                } h-9 w-16 justify-center rounded-full ${
                  isDarkMode ? 'items-end' : 'items-start'
                } px-1`}>
                <View className="h-7 w-7 rounded-full bg-white" />
              </View>
            </Pressable>

            <Pressable
              onPress={handleToggleHaptic}
              className={`${isDarkMode ? 'bg-dark-card' : 'bg-white/90'} flex-row items-center justify-between rounded-2xl p-6 shadow-lg`}>
              <View className="flex-row items-center gap-4">
                <Text className="text-4xl">📳</Text>
                <View>
                  <Text
                    className={`${isDarkMode ? 'text-dark-text' : 'text-gray-800'} text-xl font-bold`}
                    style={{ fontFamily: 'Nunito_700Bold' }}>
                    Titreşim
                  </Text>
                  <Text
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}
                    style={{ fontFamily: 'Nunito_400Regular' }}>
                    {isHapticEnabled ? 'Açık' : 'Kapalı'}
                  </Text>
                </View>
              </View>
              <View
                className={`${
                  isHapticEnabled ? 'bg-kawaii-pink' : 'bg-gray-300'
                } h-9 w-16 justify-center rounded-full ${
                  isHapticEnabled ? 'items-end' : 'items-start'
                } px-1`}>
                <View className="h-7 w-7 rounded-full bg-white" />
              </View>
            </Pressable>

            <View
              className={`${isDarkMode ? 'bg-dark-card' : 'bg-white/90'} mt-4 rounded-2xl p-6 shadow-lg`}>
              <Text
                className={`${isDarkMode ? 'text-dark-text' : 'text-gray-800'} mb-2 text-lg font-bold`}
                style={{ fontFamily: 'Nunito_700Bold' }}>
                Hakkında
              </Text>
              <Text
                className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-base leading-relaxed`}
                style={{ fontFamily: 'Nunito_400Regular' }}>
                Bugün Ne Yapalım? uygulaması sana her gün yeni aktivite önerileri sunar. Kategori
                seç, rastgele öneri al ve eğlen! 🎉
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
}
