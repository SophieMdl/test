export const formatNumber = (number) =>
  new Intl.NumberFormat("fr-FR").format(number);

export const getPercentage = (currentValue, targetValue) =>
  currentValue > targetValue
    ? 100
    : Math.floor((currentValue / targetValue) * 100);
