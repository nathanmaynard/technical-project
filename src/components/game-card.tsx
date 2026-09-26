import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Game } from '@/constants/games';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function GameCard({ game }: { game: Game }) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => router.push({ pathname: '/game/[id]', params: { id: game.id } })}
      accessibilityRole="button"
      accessibilityLabel={`Play ${game.title}`}
      accessibilityHint="Opens the game full screen"
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.background, borderColor: theme.backgroundSelected },
        pressed && styles.pressed,
      ]}>
      <Image source={game.thumbnail} style={styles.thumbnail} />

      <View style={styles.details}>
        <ThemedText type="smallBold" themeColor="textSecondary" style={styles.category}>
          {game.category}
        </ThemedText>
        <ThemedText type="default" style={styles.title}>
          {game.title}
        </ThemedText>
      </View>

      <View
        style={[
          styles.playButton,
          { backgroundColor: theme.primary, borderColor: theme.primaryShadow },
        ]}>
        <ThemedText type="smallBold" themeColor="onPrimary">
          PLAY
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Duolingo's "3D" look: a thicker bottom border that flattens when pressed.
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: Spacing.three,
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 2,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: Spacing.three,
  },
  details: {
    flex: 1,
  },
  category: {
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: 700,
  },
  playButton: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.three,
    borderBottomWidth: 4,
  },
});
