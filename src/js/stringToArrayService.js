const stringToArrayService = () => {
  const regEx = /[^\w\s]/gi;
  return {
    convert: string => string.replace(regEx, '').split(' ')
  };
};

export default stringToArrayService();
