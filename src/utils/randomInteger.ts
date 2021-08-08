export function randomInteger(min: number, max: number): number {
  const randInt = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randInt);
}
