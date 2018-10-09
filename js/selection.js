const selection = (fitnessOfPopulation, population) => {
  let normalizedFitnessOfPopulation = normalize(fitnessOfPopulation);
  if (!normalizedFitnessOfPopulation) {
    return false;
  }
  const crossingChances = calculateCrossingChances(
    normalizedFitnessOfPopulation
  );
  const selectedForCrossing = selectForCrossing(crossingChances, population);
  return selectedForCrossing;
};

// So the weakest in population is 0
// return false when eveyone in population is the same
const normalize = fitnessOfPopulation => {
  const minFitness = Math.min(...fitnessOfPopulation);
  const maxFitness = Math.max(...fitnessOfPopulation);
  if (minFitness === maxFitness) {
    return false;
  }
  return fitnessOfPopulation.map(
    fitnessOfIndividual => fitnessOfIndividual - minFitness
  );
};

const calculateCrossingChances = fitnessOfPopulation => {
  let fitnessSum = 0;
  fitnessOfPopulation.forEach(
    fitnessOfIndividual => (fitnessSum += fitnessOfIndividual)
  );
  return fitnessOfPopulation.map(
    fitnessOfIndividual => (100 * fitnessOfIndividual) / fitnessSum
  );
};

const selectForCrossing = (crossingChances, population) => {
  const randomNumbers = Array(population.length)
    .fill(0)
    .map(r => getFromZeroToHundred());
  const crossingRanges = getCrossingRanges(crossingChances);
  return randomNumbers.map(random =>
    getIndividualForCrossing(random, crossingRanges, population)
  );
};

const getFromZeroToHundred = () => Math.floor(Math.random() * 101);

const getCrossingRanges = crossingChances => {
  let ranges = [];
  crossingChances.reduce((prevChance, currentChance) => {
    let v = prevChance + currentChance;
    ranges.push(v);
    return v;
  }, 0);
  return ranges;
};

const getIndividualForCrossing = (random, crossingRanges, population) => {
  let i;
  for (i = 0; i < population.length; i++)
    if (crossingRanges[i] >= random) return population[i];
  return population[population.length - 1];
};

export default selection;
