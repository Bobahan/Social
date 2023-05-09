export const chechInputError = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
};
