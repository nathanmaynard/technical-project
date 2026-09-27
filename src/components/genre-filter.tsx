import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Genre, Genres } from '@/constants/games';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  selected: Genre | null;
  onSelect: (genre: Genre | null) => void;
};

// Choose one genre (or All) at a time, so screen readers get radio-button semantics.
export function GenreFilter({ selected, onSelect }: Props) {
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel="Filter by genre" style={styles.row}>
      <GenreButton label="All" selected={selected === null} onPress={() => onSelect(null)} />
      {Genres.map((genre) => (
        <GenreButton
          key={genre}
          label={genre}
          selected={selected === genre}
          onPress={() => onSelect(genre)}
        />
      ))}
    </View>
  );
}

function GenreButton({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      // aria-checked works on iOS, Android and web (accessibilityState isn't passed through on web)
      aria-checked={selected}
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.button,
        selected
          ? { backgroundColor: theme.primary, borderColor: theme.primaryShadow }
          : { backgroundColor: theme.background, borderColor: theme.backgroundSelected },
        pressed && styles.pressed,
      ]}>
      <ThemedText type="smallBold" themeColor={selected ? 'onPrimary' : 'textSecondary'}>
        {label.toUpperCase()}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Wraps onto a second line rather than scrolling sideways, so every genre is visible.
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginTop: Spacing.three,
  },
  button: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
    borderWidth: 2,
    borderBottomWidth: 4,
  },
  pressed: {
    borderBottomWidth: 2,
    marginTop: 2,
  },
});
