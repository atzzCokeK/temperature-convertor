export const toFahrenheit = (degreeCelsius: number) => {
  return degreeCelsius * 1.8 + 32;
};

export const toCelsius = (degreeFahrenheit: number) => {
  return (degreeFahrenheit - 32) / 1.8;
};

export const round = (degree: number, digits: number) => {
  return Math.round(degree * digits) / digits;
};
