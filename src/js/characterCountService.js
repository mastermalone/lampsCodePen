const characterCountService = () => ({
  count: string => {
    const characterCountMap = {};
    const regEx = /[^\w\s]/gi;
    const cleanString = string.replace(regEx, '');

    for (let i = 0; i < cleanString.length; i++) {
      cleanString[i] !== ' ';
      const standardizedChar =
        cleanString[i] !== ' ' ? cleanString[i].toLowerCase() : cleanString[i];

      if (!characterCountMap[cleanString[i]]) {
        let charCount = 1;
        characterCountMap[standardizedChar] = charCount;
      } else if (characterCountMap[standardizedChar]) {
        characterCountMap[standardizedChar] += 1;
      }
    }

    return characterCountMap;
  }
});

export default characterCountService();
