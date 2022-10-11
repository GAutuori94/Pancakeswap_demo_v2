export type KlineResponseModel = [
    number,
    string,
    string,
    string,
    string,
    string,
    number,
    string,
    number,
    string,
    string,
    string
  ];

  export type ParsedBinanceKline = {
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    openTime: number;
    closeTime: number;
  };
