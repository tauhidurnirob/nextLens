export const ShouldBeCapital = (char) => {
  const character = char
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1));
  return character;
};
