import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SymbolView } from 'expo-symbols';
import { useRef } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Games } from '@/constants/games';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function GameScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const game = Games.find((g) => g.id === id);
  const webViewRef = useRef<WebView>(null);
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <StatusBar hidden />

      {game ? (
        <WebView
          ref={webViewRef}
          source={{ uri: game.url }}
          style={styles.webView}
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          startInLoadingState
          renderLoading={() => (
            <ThemedView style={styles.centered}>
              <ActivityIndicator size="large" color={theme.primary} accessibilityLabel="Loading game" />
            </ThemedView>
          )}
          renderError={() => (
            <Message text="Couldn't load the game. Check your connection.">
              <Button label="Try again" onPress={() => webViewRef.current?.reload()} />
            </Message>
          )}
        />
      ) : (
        <Message text="Sorry, we couldn't find that game." />
      )}

      <Pressable
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Close game"
        hitSlop={Spacing.two}
        style={({ pressed }) => [
          styles.closeButton,
          { top: insets.top + Spacing.two, backgroundColor: theme.background, borderColor: theme.backgroundSelected },
          pressed && styles.pressed,
        ]}>
        <SymbolView
          tintColor={theme.text}
          name={{ ios: 'xmark', android: 'close', web: 'close' }}
          size={20}
          weight="bold"
        />
      </Pressable>
    </View>
  );
}

function Message({ text, children }: { text: string; children?: React.ReactNode }) {
  return (
    <ThemedView style={[StyleSheet.absoluteFill, styles.centered]}>
      <ThemedText style={styles.message}>{text}</ThemedText>
      {children}
    </ThemedView>
  );
}

function Button({ label, onPress }: { label: string; onPress: () => void }) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: theme.primary, borderColor: theme.primaryShadow },
        pressed && styles.pressed,
      ]}>
      <ThemedText type="smallBold" themeColor="onPrimary">
        {label.toUpperCase()}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  webView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
    padding: Spacing.four,
  },
  message: {
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    left: Spacing.three,
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderBottomWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    borderRadius: Spacing.three,
    borderBottomWidth: 4,
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 2,
  },
});
