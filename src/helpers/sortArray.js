export const sortArray = (array) => {
  const bufferArray = [...array];
  bufferArray.sort((a, b) => a.completed - b.completed) ;
  return bufferArray;
};