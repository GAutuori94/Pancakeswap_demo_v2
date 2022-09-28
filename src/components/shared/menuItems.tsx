type menuItem = {
  label: string;
  href: string;
  sub?: subMenuItem[];
};
type subMenuItem = {
  label: string;
  href:string;
}

export const links: menuItem[] = [
  {
    label: 'Trade',
    href: '/trade',
    sub: [
      {
        label: 'Swap',
        href: 'swap',
      },
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
      }
    ],
  },
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
      }
    ]
  },
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
