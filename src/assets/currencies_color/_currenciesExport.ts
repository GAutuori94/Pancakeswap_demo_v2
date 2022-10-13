function importAll(r: __WebpackModuleApi.RequireContext) {
    const png: {
        [key: string]: string | undefined
    } = {}
    r.keys().forEach((item: string, index: number) => { png[item.replace('./', ``)] = r(item); });
    return png;
  }

 export const png = importAll(require.context('./currenciesSvg', false, /\.(png|jpe?g|svg)$/));
