/**
 * 50 free games from https://html5games.com, 10 per genre.
 * Picked from the game feed published by Famobi (who run html5games.com),
 * leaving out landscape-only games because the app is portrait.
 * `url` is the embed link html5games.com gives for each game.
 */

export const Genres = ['Arcade', 'Puzzle', 'Match 3', 'Cards', 'Sports'] as const;

export type Genre = (typeof Genres)[number];

export type Game = {
  id: string;
  title: string;
  genre: Genre;
  thumbnail: string;
  url: string;
};

const game = (id: string, title: string, genre: Genre, image: string): Game => ({
  id,
  title,
  genre,
  thumbnail: `https://img.cdn.famobi.com/portal/html5games/images/tmp/${image}`,
  url: `https://play.famobi.com/${id}`,
});

export const Games: Game[] = [
  // Arcade
  game('om-nom-run', 'Om Nom Run', 'Arcade', 'OmNomRunTeaser.jpg'),
  game('bubble-tower-3d', 'Bubble Tower 3D', 'Arcade', 'BubbleTower3dTeaser.jpg'),
  game('cannon-balls-3d', 'Cannon Balls 3D', 'Arcade', 'CannonBalls3dTeaser.jpg'),
  game('tower-crash-3d', 'Tower Crash 3D', 'Arcade', 'TowerCrash3dTeaser.jpg'),
  game('merge-and-fight', 'Merge And Fight', 'Arcade', 'MergeAndFightTeaser.jpg'),
  game('cooking-blast', 'Cooking Blast', 'Arcade', 'CookingBlastTeaser.jpg'),
  game('kebab-world', 'Kebab World', 'Arcade', 'KebabWorldTeaser.jpg'),
  game('cooking-rage', 'Cooking Rage', 'Arcade', 'CookingRageTeaser.jpg'),
  game('glass-break', 'Glass Break', 'Arcade', 'GlassBreakTeaser.jpg'),
  game('star-stars-arena', 'Star Stars Arena', 'Arcade', 'StarStarsArenaTeaser.jpg'),

  // Puzzle
  game('element-blocks', 'Element Blocks', 'Puzzle', 'ElementBlocksTeaser.jpg'),
  game('onet-connect-classic', 'Onet Connect Classic', 'Puzzle', 'OnetConnectClassicTeaser.jpg'),
  game('thread-fever', 'Thread Fever', 'Puzzle', 'ThreadFeverTeaser.jpg'),
  game('word-solitaire', 'Word Solitaire', 'Puzzle', 'WordSolitaireTeaser.jpg'),
  game('temple-blocks', 'Temple Blocks', 'Puzzle', 'TempleBlocksTeaser.jpg'),
  game('cut-the-rope-time-travel', 'Cut The Rope Time Travel', 'Puzzle', 'CutTheRopeTimeTravelTeaser.jpg'),
  game('cut-the-rope-2', 'Cut The Rope 2', 'Puzzle', 'CutTheRope2Teaser.jpg'),
  game('cut-the-rope-experiments', 'Cut The Rope Experiment', 'Puzzle', 'CutTheRopeExperimentsTeaser.jpg'),
  game('cut-the-rope-magic', 'Cut The Rope Magic', 'Puzzle', 'CutTheRopeMagicTeaser.jpg'),
  game('go-escape', 'Go Escape', 'Puzzle', 'GoEscapeTeaser.jpg'),

  // Match 3
  game('zoo-boom', 'Zoo Boom', 'Match 3', 'ZooBoomTeaser.jpg'),
  game('garden-bloom', 'Garden Bloom', 'Match 3', 'GardenBloomTeaser.jpg'),
  game('bubble-woods', 'Bubble Woods', 'Match 3', 'BubbleWoodsTeaser.jpg'),
  game('totemia-cursed-marbles', 'Totemia: Cursed Marbles', 'Match 3', 'TotemiaCursedMarblesTeaser.jpg'),
  game('diamond-rush', 'Diamond Rush', 'Match 3', 'DiamondRushTeaser.jpg'),
  game('gold-mine', 'Gold Mine', 'Match 3', 'GoldMineTeaser.jpg'),
  game('food-rush', 'Food Rush', 'Match 3', 'FoodRushTeaser.jpg'),
  game('tile-journey', 'Tile Journey', 'Match 3', 'TileJourneyNewTeaser.jpg'),
  game('diamond-rush-2', 'Diamond Rush 2', 'Match 3', 'DiamondRush2Teaser.jpg'),
  game('garden-match-3d', 'Garden Match 3D', 'Match 3', 'GardenMatch3dTeaser.jpg'),

  // Cards
  game('solitaire-klondike', 'Solitaire Klondike', 'Cards', 'SolitaireKlondikeTeaser.jpg'),
  game('crossover-21', 'Crossover 21', 'Cards', 'Crossover21Teaser.jpg'),
  game('pirate-cards', 'Pirate Cards', 'Cards', 'PirateCardsTeaser.jpg'),
  game('solitaire-legend', 'Solitaire Legend', 'Cards', 'SolitaireLegendTeaser.jpg'),
  game('mafia-poker', 'Mafia Poker', 'Cards', 'MafiaPokerTeaser.jpg'),
  game('solitaire-classic-christmas', 'Solitaire Classic Christmas', 'Cards', 'SolitaireClassicChristmasTeaser.jpg'),
  game('matching-card-heroes', 'Matching Card Heroes', 'Cards', 'MatchingCardHeroesTeaser.jpg'),
  game('kitten-match', 'Kitten Match', 'Cards', 'KittenMatchTeaser.jpg'),
  game('3d-solitaire', '3D Solitaire', 'Cards', '3dSolitaireTeaser.jpg'),
  game('gin-rummy-plus', 'Gin Rummy Plus', 'Cards', 'GinRummyPlusTeaser.jpg'),

  // Sports
  game('3d-free-kick', '3D Free Kick', 'Sports', '3dFreeKickTeaser.jpg'),
  game('8-ball-billiards-classic', '8 Ball Billiards Classic', 'Sports', '8BallBilliardsClassicTeaser.jpg'),
  game('archery-world-tour', 'Archery World Tour', 'Sports', 'ArcheryWorldTourTeaser.jpg'),
  game('table-tennis-world-tour', 'Table Tennis World Tour', 'Sports', 'TableTennis_WorldTour_Teaser.jpg'),
  game('drift-dudes', 'Drift Dudes', 'Sports', 'DriftDudesTeaser.jpg'),
  game('euro-penalty-cup-2021', 'Euro Penalty Cup 2021', 'Sports', 'EuroPenaltyCup2021Teaser.jpg'),
  game('drag-racing-club', 'Drag Racing Club', 'Sports', 'DragRacingClubTeaser.jpg'),
  game('3d-basketball', '3D Basketball', 'Sports', '3dBasketballTeaser.jpg'),
  game('3d-darts', '3D Darts', 'Sports', '3dDartsTeaser.jpg'),
  game('dunk-brush', 'Dunk Brush', 'Sports', 'DunkBrushTeaser.jpg'),
];
