import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAppSettings } from '../../src/store/useAppSettings';
import { BackgroundWrapper } from '../../src/components/BackgroundWrapper';
import { categories } from '../../src/data/suggestions';
import * as Haptics from 'expo-haptics';

export default function CategoriesScreen() {
  const { isDarkMode, selectedCategoryId, setSelectedCategory, isHapticEnabled } = useAppSettings();

  const handleSelectCategory = (categoryId: string) => {
    if (isHapticEnabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    setSelectedCategory(categoryId);
  };

  return (
    <BackgroundWrapper>
      <View className="flex-1">
        <StatusBar style={isDarkMode ? 'light' : 'dark'} />

        <ScrollView contentContainerClassName="py-16 px-4" showsVerticalScrollIndicator={false}>
          <Text
            className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-8 text-center text-4xl font-bold`}
            style={{ fontFamily: 'Nunito_700Bold' }}>
            Kategoriler
          </Text>

          <View className="gap-4">
            {categories.map((category) => {
              const isSelected = category.id === selectedCategoryId;
              return (
                <Pressable
                  key={category.id}
                  onPress={() => handleSelectCategory(category.id)}
                  className={`${
                    isSelected
                      ? isDarkMode
                        ? 'bg-kawaii-purple'
                        : 'bg-kawaii-pink'
                      : isDarkMode
                        ? 'bg-dark-card'
                        : 'bg-white/90'
                  } flex-row items-center justify-between rounded-2xl p-6 shadow-lg`}>
                  <View className="flex-row items-center gap-4">
                    <Text className="text-4xl">{category.emoji}</Text>
                    <View>
                      <Text
                        className={`${
                          isSelected
                            ? 'text-white'
                            : isDarkMode
                              ? 'text-dark-text'
                              : 'text-gray-800'
                        } text-xl font-bold`}
                        style={{ fontFamily: 'Nunito_700Bold' }}>
                        {category.name}
                      </Text>
                      <Text
                        className={`${
                          isSelected
                            ? 'text-white/80'
                            : isDarkMode
                              ? 'text-gray-400'
                              : 'text-gray-600'
                        } text-sm`}
                        style={{ fontFamily: 'Nunito_400Regular' }}>
                        {category.suggestions.length} öneri
                      </Text>
                    </View>
                  </View>
                  {isSelected && <Text className="text-2xl">✓</Text>}
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
}
