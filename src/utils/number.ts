export const randomNumber = (from: number, to: number) =>
  Math.floor(Math.random() * (from - to + 1) + to);
