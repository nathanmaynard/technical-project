# html5games launcher

A small Expo app that lists 50 free games from [html5games.com](https://html5games.com), filterable by genre, and opens the chosen game full screen. It's built on the Expo default TypeScript template (SDK 57) and styled after Duolingo.

## Run it

```bash
npm install
npx expo start
```

Then press `i` for the iOS Simulator, `a` for an Android emulator or `w` for the web, or scan the QR code with Expo Go. `react-native-webview` is bundled in Expo Go, so you don't need a development build.

## What changed from the template

The first commit is the untouched template, so `git diff <first commit>` shows every change.

| File | Change | Why |
| --- | --- | --- |
| `src/app/_layout.tsx` | Tabs → `Stack`, and the game screen opens as a `fullScreenModal` | The app has one list and one detail screen, so tabs add nothing. A full-screen modal is the native pattern for immersive content. |
| `src/app/index.tsx` | A `FlatList` of games, with genre filter buttons, replaces the welcome content | `FlatList` virtualises its rows, so 50 games scroll smoothly. One `useState` holds the selected genre. |
| `src/app/game/[id].tsx` | New full-screen WebView screen | Expo Router dynamic route. It has loading, error/retry and "not found" states, plus a close button. |
| `src/app/game/[id].web.tsx` | Web version of the game screen | `react-native-webview` has no web support, so on the web the game loads in an `<iframe>`. Expo picks the `.web.tsx` file automatically. |
| `src/components/game-card.tsx` | New Duolingo-style card | A thick bottom border gives the "3D" look and flattens when pressed. Uses `Pressable` only, with no animation library. |
| `src/components/genre-filter.tsx` | Genre filter buttons (All, Arcade, Puzzle, Match 3, Cards, Sports) | A single-choice radio group for screen readers. The buttons wrap onto a second line so every genre is visible. |
| `src/constants/games.ts` | 50 games, 10 per genre, as typed data | Picked from Famobi's game feed (Famobi runs html5games.com), leaving out landscape-only games. A `Genre` type means a misspelt genre won't compile. Each URL is the official embed link. |
| `src/constants/theme.ts` | Duolingo palette, plus `primary`, `primaryShadow` and `onPrimary` tokens | Same token structure as before, so every themed component keeps working in light and dark mode. |
| `src/components/themed-text.tsx` | Titles use `Fonts.rounded` at weight 800 | Duolingo's chunky, rounded headings, using the rounded font the template already defines (no custom font needed). |
| `src/hooks/use-color-scheme.web.ts` | `useSyncExternalStore` instead of `setState` in an effect | Fixes the template's own lint error without changing behaviour. |
| Deleted | Explore tab, tab bar, and the demo components/images only they used | Unused once the tabs were gone. |

New dependency: `react-native-webview`, installed with `npx expo install`. `eslint` and `eslint-config-expo` were added by the template's own `npm run lint` on its first run.

## Accessibility

- **Contrast:** Duolingo's white-on-green (`#FFFFFF` on `#58CC02`) is only **2.09:1**, which fails WCAG AA, so buttons use dark text `#131F24` on the green (**8.05:1**). Every text colour meets 4.5:1 or better in both light and dark mode.
- **Screen readers:** each card is a single button labelled "Play *title*" with the hint "Opens the game full screen". The thumbnail is decorative. The genre buttons are a labelled radio group ("Filter by genre") that announces which genre is selected. The close button is labelled "Close game" and comes first on the game screen, the heading has the `header` role, and the spinner is labelled "Loading game".
- **Web:** the same props become `role` and `aria-*` attributes in the browser, and the game `<iframe>` has a `title`.
- **Touch targets:** the cards and the close button are 48pt or larger, and the genre buttons are at least 44pt tall.
- **Dynamic Type:** font scaling is left on, and text wraps rather than truncating.
- **Dark mode:** follows the system setting, using the template's `useTheme` hook.

## Known limitations

- **Web:** there's no loading spinner or error screen for the `<iframe>`.
- **Portrait only:** the template locks orientation, so I picked games that play in portrait.
- **Consent screen:** the games are ad-supported and show html5games' GDPR consent dialog on first launch.
- **Hardcoded list:** the 50 games live in the app. Famobi's feed is meant for its publishing partners, so the app doesn't call it at runtime.
