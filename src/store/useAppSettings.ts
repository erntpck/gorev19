import { create } from 'zustand';

interface AppSettings {
  isDarkMode: boolean;
  isHapticEnabled: boolean;
  selectedCategoryId: string;
  toggleDarkMode: () => void;
  toggleHaptic: () => void;
  setSelectedCategory: (categoryId: string) => void;
}

export const useAppSettings = create<AppSettings>((set) => ({
  isDarkMode: false,
  isHapticEnabled: true,
  selectedCategoryId: 'all',
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleHaptic: () => set((state) => ({ isHapticEnabled: !state.isHapticEnabled })),
  setSelectedCategory: (categoryId: string) => set({ selectedCategoryId: categoryId }),
}));
