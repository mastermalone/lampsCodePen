import stringToArrayService from './stringToArrayService.js';

const stringCaseService = () => ({
  getCase: (list, type) => {
    if (typeof list === 'string') {
      stringToArrayService.convert(list);
    }

    const wordArray =
      typeof list === 'string' ? stringToArrayService.convert(list) : list;

    return wordArray.reduce((acc, item) => {
      let stringCase;
      switch (type) {
        case 'upper':
          stringCase = item.charAt(0) === item.charAt(0).toUpperCase();
          break;
        default:
          stringCase = item.charAt(0) === item.charAt(0).toLowerCase();
      }
      if (stringCase) {
        acc.push(item);
      }
      return acc;
    }, []);
  }
});

export default stringCaseService();
