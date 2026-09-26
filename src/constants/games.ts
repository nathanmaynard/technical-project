/**
 * A hand-picked list of free games from https://html5games.com.
 * The site has no public API, so the list lives here as typed data.
 * `url` is the embed link html5games.com gives for each game.
 */

export type Game = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
};

const thumbnail = (name: string) =>
  `https://img.cdn.famobi.com/portal/html5games/images/tmp/${name}Teaser.jpg`;

export const Games: Game[] = [
  {
    id: 'om-nom-run',
    title: 'Om Nom Run',
    category: 'Runner',
    thumbnail: thumbnail('OmNomRun'),
    url: 'https://play.famobi.com/om-nom-run',
  },
  {
    id: 'bubble-woods',
    title: 'Bubble Woods',
    category: 'Bubble shooter',
    thumbnail: thumbnail('BubbleWoods'),
    url: 'https://play.famobi.com/bubble-woods',
  },
  {
    id: 'zoo-boom',
    title: 'Zoo Boom',
    category: 'Match 3',
    thumbnail: thumbnail('ZooBoom'),
    url: 'https://play.famobi.com/zoo-boom',
  },
  {
    id: 'garden-bloom',
    title: 'Garden Bloom',
    category: 'Match 3',
    thumbnail: thumbnail('GardenBloom'),
    url: 'https://play.famobi.com/garden-bloom',
  },
  {
    id: 'element-blocks',
    title: 'Element Blocks',
    category: 'Puzzle',
    thumbnail: thumbnail('ElementBlocks'),
    url: 'https://play.famobi.com/element-blocks',
  },
  {
    id: 'solitaire-klondike',
    title: 'Solitaire Klondike',
    category: 'Cards',
    thumbnail: thumbnail('SolitaireKlondike'),
    url: 'https://play.famobi.com/solitaire-klondike',
  },
];
