export interface Suggestion {
  id: string;
  text: string;
  emoji: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  suggestions: Suggestion[];
}

export const allSuggestions: Suggestion[] = [
  { id: '1', text: 'Parka gidip piknik yap', emoji: '🌳' },
  { id: '2', text: 'Sevdiğin bir film izle', emoji: '🎬' },
  { id: '3', text: 'Yeni bir tarif dene', emoji: '🍳' },
  { id: '4', text: 'Arkadaşlarınla oyun oyna', emoji: '🎮' },
  { id: '5', text: 'Kitap oku ve çay iç', emoji: '📚' },
  { id: '6', text: 'Müzeye git', emoji: '🏛️' },
  { id: '7', text: 'Yürüyüş yap', emoji: '🚶' },
  { id: '8', text: 'Resim çiz', emoji: '🎨' },
  { id: '9', text: 'Dans et', emoji: '💃' },
  { id: '10', text: 'Meditasyon yap', emoji: '🧘' },
];

export const categories: Category[] = [
  {
    id: 'all',
    name: 'Tümü',
    emoji: '✨',
    suggestions: allSuggestions,
  },
  {
    id: 'outdoor',
    name: 'Dışarı Çık',
    emoji: '🌞',
    suggestions: [
      { id: 'o1', text: 'Parka gidip piknik yap', emoji: '🌳' },
      { id: 'o2', text: 'Yürüyüş yap', emoji: '🚶' },
      { id: 'o3', text: 'Bisiklete bin', emoji: '🚴' },
      { id: 'o4', text: 'Sahilde günbatımı izle', emoji: '🌅' },
      { id: 'o5', text: 'Botanik bahçesini gez', emoji: '🌺' },
    ],
  },
  {
    id: 'home',
    name: 'Evde Kal',
    emoji: '🏠',
    suggestions: [
      { id: 'h1', text: 'Sevdiğin bir film izle', emoji: '🎬' },
      { id: 'h2', text: 'Yeni bir tarif dene', emoji: '🍳' },
      { id: 'h3', text: 'Kitap oku ve çay iç', emoji: '📚' },
      { id: 'h4', text: 'Puzzle yap', emoji: '🧩' },
      { id: 'h5', text: 'Yoga yap', emoji: '🧘' },
    ],
  },
  {
    id: 'creative',
    name: 'Yaratıcı',
    emoji: '🎨',
    suggestions: [
      { id: 'c1', text: 'Resim çiz', emoji: '🎨' },
      { id: 'c2', text: 'Günlük yaz', emoji: '📝' },
      { id: 'c3', text: 'Fotoğraf çek', emoji: '📸' },
      { id: 'c4', text: 'El işi yap', emoji: '🧶' },
      { id: 'c5', text: 'Müzik yap', emoji: '🎵' },
    ],
  },
  {
    id: 'social',
    name: 'Sosyal',
    emoji: '👥',
    suggestions: [
      { id: 's1', text: 'Arkadaşlarınla buluş', emoji: '☕' },
      { id: 's2', text: 'Oyun gecesi düzenle', emoji: '🎲' },
      { id: 's3', text: 'Aileni ziyaret et', emoji: '👨‍👩‍👧' },
      { id: 's4', text: 'Video call yap', emoji: '📞' },
      { id: 's5', text: 'Yeni insanlarla tanış', emoji: '🤝' },
    ],
  },
];

export const getRandomSuggestion = (suggestions: Suggestion[]): Suggestion => {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  return suggestions[randomIndex];
};
