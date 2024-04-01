export const normalizeUserName = name =>
  name
    .split(/([- ])/)
    .map(word => {
      if (word === '-' || word === ' ') {
        return word;
      }
      const firstUpCaseLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.substring(1).toLowerCase();
      return `${firstUpCaseLetter}${restOfWord}`;
    })
    .join('');
