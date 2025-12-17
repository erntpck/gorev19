import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BackgroundWrapper } from '../../src/components/BackgroundWrapper';
import { categories, getRandomSuggestion, Suggestion } from '../../src/data/suggestions';
import { useAppSettings } from '../../src/store/useAppSettings';
import * as Haptics from 'expo-haptics';

const DICE_IMAGES = {
  idle: require('../../assets/dice_idle.png'),
  pressed: require('../../assets/dice_pressed.png'),
  roll_1: require('../../assets/dice_roll_1.png'),
  roll_2: require('../../assets/dice_roll_2.png'),
  roll_3: require('../../assets/dice_roll_3.png'),
};

type DiceState = 'idle' | 'pressed' | 'roll_1' | 'roll_2' | 'roll_3';

export default function HomeScreen() {
  const { isDarkMode, selectedCategoryId, isHapticEnabled } = useAppSettings();

  const selectedCategory = categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

  const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion>(
    getRandomSuggestion(selectedCategory.suggestions)
  );

  const [diceState, setDiceState] = useState<DiceState>('idle');
  const [isRolling, setIsRolling] = useState(false);

  const handleRollDice = () => {
    if (isRolling) return;

    if (isHapticEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    setIsRolling(true);
    setDiceState('pressed');

    setTimeout(() => {
      setDiceState('roll_1');
      setTimeout(() => {
        setDiceState('roll_2');
        setTimeout(() => {
          setDiceState('roll_3');
          setTimeout(() => {
            setDiceState('idle');
            const newSuggestion = getRandomSuggestion(selectedCategory.suggestions);
            setCurrentSuggestion(newSuggestion);
            setIsRolling(false);

            if (isHapticEnabled) {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
          }, 120);
        }, 120);
      }, 120);
    }, 120);
  };

  return (
    <BackgroundWrapper>
      <View className="flex-1">
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />

        <ScrollView
          contentContainerClassName="flex-grow items-center justify-center py-16 px-6"
          showsVerticalScrollIndicator={false}>
          <View className="mb-12 items-center">
            <Text
              className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-2 text-4xl font-bold`}
              style={{ fontFamily: 'Nunito_700Bold' }}>
              Bugün Ne Yapalım?
            </Text>
            <Text
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}
              style={{ fontFamily: 'Nunito_400Regular' }}>
              {selectedCategory.emoji} {selectedCategory.name}
            </Text>
          </View>

          <Pressable
            onPress={handleRollDice}
            disabled={isRolling}
            className="mb-3 items-center justify-center">
            <Image source={DICE_IMAGES[diceState]} className="h-72 w-72" resizeMode="contain" />
          </Pressable>

          <Text
            className={`${isDarkMode ? 'text-gray-300' : 'text-slate-500'} mb-12 text-lg`}
            style={{ fontFamily: 'Nunito_400Regular' }}>
            Zara dokun 🎲
          </Text>

          <Text
            className={`${isDarkMode ? 'text-slate-100' : 'text-slate-900'} px-6 text-center text-2xl font-extrabold leading-relaxed`}
            style={{ fontFamily: 'Nunito_700Bold' }}>
            {currentSuggestion.emoji} {currentSuggestion.text}
          </Text>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
}
