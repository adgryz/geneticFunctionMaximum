const evaluatePopulation = population =>
  population.map(individual => calculateFitness(individual));

const calculateFitness = invidual => {
  const x = decodeInvidual(invidual);
  return (x - 8) * (x + 8) * (x - 1);
};

const decodeInvidual = invidual => {
  let decodedValue = 0;
  if (invidual[1]) decodedValue += 4;
  if (invidual[2]) decodedValue += 2;
  if (invidual[3]) decodedValue += 1;
  if (invidual[4]) decodedValue += 0.5;
  if (invidual[5]) decodedValue += 0.25;
  if (invidual[6]) decodedValue += 0.125;
  if (invidual[7]) decodedValue += 0.0625;
  if (invidual[8]) decodedValue += 0.03125;
  if (invidual[9]) decodedValue += 0.015625;
  if (invidual[10]) decodedValue += 0.0078125;
  if (!invidual[0]) decodedValue *= -1;
  return decodedValue;
};

export default evaluatePopulation;
