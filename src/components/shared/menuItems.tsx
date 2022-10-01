type menuItem = {
  label: string;
  href: string;
  sub?: subMenuItem[];
};
type subMenuItem = {
  type?: string;
  label: string;
  href: string;
};

export const linkTrade: menuItem[] = [
  {
    label: 'Trade',
    href: 'trade',
    sub: [
      { type: 'Trade', label: 'Swap', href: 'swap' },
      {
        label: 'Limit',
        href: 'limit',
      },
      {
        label: 'Liquidity',
        href: 'liquidity',
      },
      {
        label: 'Perpetual',
        href: 'perpetual',
      },
      {
        label: 'Bridge',
        href: 'bridge',
      },
    ],
  },
];
export const linkEarn: menuItem[] = [
  {
    label: 'Earn',
    href: '/earn',
    sub: [
      {
        label: 'Farms',
        href: 'farms',
      },
      {
        label: 'Pool',
        href: 'pool',
      },
    ],
  },
];
export const linkWin: menuItem[] = [
  {
    label: 'Win',
    href: '/win',
    sub: [
      {
        label: 'Trading Competition',
        href: 'trading-competition',
      },
      {
        label: 'Prediction (BETA)',
        href: 'prediction',
      },
      {
        label: 'Lottery',
        href: 'lottery',
      },
      {
        label: 'Pottery',
        href: 'pottery',
      },
    ],
  },
];

export const linksNFT: menuItem[] = [
  {
    label: 'NFT',
    href: '/nft',
    sub: [
      {
        label: 'Overview',
        href: 'overview',
      },
      {
        label: 'Collection',
        href: 'collection',
      },
      {
        label: 'Activity',
        href: 'activity',
      },
    ],
  },
];

export const linksInfo: menuItem[] = [
  {
    label: '⋯',
    href: '/info',
    sub: [
      {
        label: 'Info',
        href: 'info',
      },
      {
        label: 'IFO',
        href: 'ifo',
      },
      {
        label: 'Voting',
        href: 'voting',
      },
      {
        label: 'Leaderboard',
        href: 'leaderboard',
      },
    ],
  },
];
