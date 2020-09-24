export default function sortCharacter(arrOfChar) {
  return arrOfChar.sort((next, prev) => prev.health - next.health);
}
