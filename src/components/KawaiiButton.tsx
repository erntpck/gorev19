import React, { useRef } from 'react';
import { Text, Pressable, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useAppSettings } from '../store/useAppSettings';

interface KawaiiButtonProps {
  onPress: () => void;
  text: string;
}

export const KawaiiButton: React.FC<KawaiiButtonProps> = ({ onPress, text }) => {
  const { isHapticEnabled, isDarkMode } = useAppSettings();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (isHapticEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className={`${
          isDarkMode ? 'bg-kawaii-purple' : 'bg-kawaii-pink'
        } rounded-full px-12 py-5 shadow-lg`}>
        <Text
          className="text-center text-xl font-bold text-white"
          style={{ fontFamily: 'Nunito_700Bold' }}>
          {text}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
