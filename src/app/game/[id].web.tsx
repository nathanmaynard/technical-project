import { router, useLocalSearchParams } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Games } from '@/constants/games';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/**
 * Web version of the game screen. react-native-webview has no web support,
 * so the game loads in an <iframe> instead.
 */
export default function GameScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const game = Games.find((g) => g.id === id);
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <Pressable
        // Opened from a shared link there is no page to go back to, so go to the list instead.
        onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
        accessibilityRole="button"
        accessibilityLabel="Close game"
        style={({ pressed }) => [
          styles.closeButton,
          { backgroundColor: theme.background, borderColor: theme.backgroundSelected },
          pressed && styles.pressed,
        ]}>
        <SymbolView tintColor={theme.text} name={{ ios: 'xmark', web: 'close' }} size={20} weight="bold" />
      </Pressable>

      {game ? (
        <iframe
          title={game.title}
          src={game.url}
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ flex: 1, border: 'none' }}
        />
      ) : (
        <ThemedText style={styles.message}>Sorry, we couldn&apos;t find that game.</ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: Spacing.two,
    left: Spacing.three,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 2,
  },
});
