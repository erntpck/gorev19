import React from 'react';
import { View, Text } from 'react-native';
import { useAppSettings } from '../store/useAppSettings';

interface KawaiiCardProps {
  emoji: string;
  text: string;
}

export const KawaiiCard: React.FC<KawaiiCardProps> = ({ emoji, text }) => {
  const { isDarkMode } = useAppSettings();

  return (
    <View
      className={`${
        isDarkMode ? 'bg-dark-card' : 'bg-white'
      } mx-4 min-h-[280px] items-center justify-center rounded-3xl p-8 shadow-lg`}>
      <Text className="mb-6 text-7xl">{emoji}</Text>
      <Text
        className={`${
          isDarkMode ? 'text-dark-text' : 'text-gray-800'
        } text-center text-2xl font-bold leading-relaxed`}
        style={{ fontFamily: 'Nunito_700Bold' }}>
        {text}
      </Text>
    </View>
  );
};
