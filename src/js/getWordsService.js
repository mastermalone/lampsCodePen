const getWordsService = () => ({
  startsWith: (char, list, caseSensitive) =>
    list.reduce((acc, item) => {
      const isUpperOrLowercase = caseSensitive && item.charAt(0) === char;

      if (
        !caseSensitive &&
        item.charAt(0).toLowerCase() === char.toLowerCase()
      ) {
        acc.push(item);
      }
      if (isUpperOrLowercase) {
        acc.push(item);
      }

      return acc;
    }, [])
});

export default getWordsService();
