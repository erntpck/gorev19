import { ImageBackground } from 'react-native';
import { ReactNode } from 'react';
import { useAppSettings } from '../store/useAppSettings';

interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  const { isDarkMode } = useAppSettings();

  const backgroundImage = isDarkMode
    ? require('../../assets/bg/bg_dark.png')
    : require('../../assets/bg/bg_light.png');

  return (
    <ImageBackground source={backgroundImage} className="flex-1" resizeMode="cover">
      {children}
    </ImageBackground>
  );
};
