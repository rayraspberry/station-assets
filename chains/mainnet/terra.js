module.exports = {
  chainID: 'phoenix-1',
  lcd: 'https://phoenix-lcd.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: 'https://station-assets.terra.money/img/chains/Terra.svg',
  // doesn't require IBC channels since it's already on all the other chains
  explorer: {
    address: "https://terrasco.pe/mainnet/address/{}",
    tx: "https://terrasco.pe/mainnet/tx/{}",
    validator: "https://terrasco.pe/mainnet/validator/{}",
    block: "https://terrasco.pe/mainnet/block/{}",
  }
}
