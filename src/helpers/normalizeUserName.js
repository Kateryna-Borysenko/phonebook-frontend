export const normalizeUserName = name =>
  name
    .split(/([- ])/)
    .map(word => {
      if (word === '-' || word === ' ') {
        return word;
      }
      const firstUpCaseLetter = word.charAt(0).toUpperCase();
      const anotherLetters = word.substring(1);
      return `${firstUpCaseLetter}${anotherLetters}`;
    })
    .join('');
