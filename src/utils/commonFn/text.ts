const capitalize = (str: string) => {
  const upper = str[0].toUpperCase();
  return upper + str.slice(1);
};

export default capitalize;
