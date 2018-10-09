const generatePopulation = (populationNumber, lengthOfChromosome) =>
  Array(populationNumber)
    .fill(0)
    .map(() => generateInvidual(lengthOfChromosome));

const generateInvidual = lengthOfChromosome =>
  Array(lengthOfChromosome)
    .fill(0)
    .map(() => getRandomBit());

const getRandomBit = () => (Math.random() > 0.5 ? 1 : 0);

export default generatePopulation;
