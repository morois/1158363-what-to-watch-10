const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min < 0) {
    min = 0;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  if (max === min) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRendomIndexArr = (array: string[]) => {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

export {getRandomInt, getRendomIndexArr};
