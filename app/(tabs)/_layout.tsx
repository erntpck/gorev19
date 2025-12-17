import { Tabs } from 'expo-router';
import { Image, View, Text } from 'react-native';
import { useAppSettings } from '../../src/store/useAppSettings';

export default function TabsLayout() {
  const { isDarkMode } = useAppSettings();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode ? '#FFD1E8' : '#FF6FAE',
        tabBarInactiveTintColor: '#B6B6C6',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#1B1822' : '#FFF7FB',
          borderTopWidth: 0,
          height: 85,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontFamily: 'Nunito_700Bold',
          fontSize: 13,
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Kategoriler',
          tabBarIcon: () => (
            <Image
              source={
                isDarkMode
                  ? require('../../assets/icons/icon_categories_dark.png')
                  : require('../../assets/icons/icon_categories_light.png')
              }
              className="h-20 w-20"
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Öneri',
          tabBarLabel: ({ focused, color }) => (
            <Text
              className="mt-5 text-xs font-bold"
              style={{ fontFamily: 'Nunito_700Bold', color, fontSize: 13 }}>
              Öneri
            </Text>
          ),
          tabBarIcon: () => (
            <View
              className={`${isDarkMode ? 'bg-[#2A2233]' : 'bg-[#FFE3EF]'} -mt-8 h-24 w-24 items-center justify-center rounded-full`}>
              <Image
                source={
                  isDarkMode
                    ? require('../../assets/icons/icon_suggestion_main_dark.png')
                    : require('../../assets/icons/icon_suggestion_main_light.png')
                }
                className="h-32 w-32"
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ayarlar',
          tabBarIcon: () => (
            <Image
              source={
                isDarkMode
                  ? require('../../assets/icons/icon_settings_dark.png')
                  : require('../../assets/icons/icon_settings_light.png')
              }
              className="h-16 w-16"
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
