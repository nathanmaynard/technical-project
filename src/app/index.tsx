import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GameCard } from '@/components/game-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Games } from '@/constants/games';
import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={Games}
          keyExtractor={(game) => game.id}
          renderItem={({ item }) => <GameCard game={item} />}
          contentContainerStyle={styles.list}
          ListHeaderComponent={
            <ThemedView style={styles.header}>
              <ThemedText type="subtitle" accessibilityRole="header">
                Pick a game
              </ThemedText>
              <ThemedText themeColor="textSecondary">
                Games sourced from html5games.com
              </ThemedText>
            </ThemedView>
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
  },
  list: {
    gap: Spacing.three,
    padding: Spacing.four,
  },
  header: {
    paddingBottom: Spacing.two,
  },
});
