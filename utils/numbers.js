export const formatNumber = (number) =>
  new Intl.NumberFormat("fr-FR").format(number);

export const getPercentage = (currentValue, targetValue) =>
  Math.floor((currentValue / targetValue) * 100);
