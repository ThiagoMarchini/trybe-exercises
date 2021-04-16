function techList(array, string) {
  if (array.length === 0) { return 'Vazio!' };
  const sortedArray = array.sort();
  const returnArray = sortedArray.map((entry) => ({
    tech: entry,
    name: string
  }));
  return returnArray;
}

module.exports = techList;