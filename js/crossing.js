const crossing = (selectedForCrossing, lengthOfChromosome) => {
  const pairs = getPairs(selectedForCrossing);
  let kids = pairs
    .map(pair => getKids(pair.parent1, pair.parent2, lengthOfChromosome))
    .flat();
  console.log("--------------------NEXT GEN-----------------------");
  return kids;
};

const getPairs = selectedForCrossing => {
  let pairs = [];
  while (selectedForCrossing.length > 0) {
    let parnet1Index = Math.floor(Math.random() * selectedForCrossing.length);
    let parent1 = selectedForCrossing.splice(parnet1Index, 1)[0];
    let parnet2Index = Math.floor(Math.random() * selectedForCrossing.length);
    let parent2 = selectedForCrossing.splice(parnet2Index, 1)[0];
    pairs.push({
      parent1,
      parent2
    });
  }
  return pairs;
};

const getKids = (parent1, parent2, lengthOfChromosome) => {
  const crossPoint = getCrossPoint(lengthOfChromosome);
  const kid1 = crossParents(parent1, parent2, crossPoint);
  const kid2 = crossParents(parent2, parent1, crossPoint);
  return [kid1, kid2];
};

const getCrossPoint = lengthOfChromosome =>
  Math.floor(Math.random() * (lengthOfChromosome - 2)) + 1;

const crossParents = (parent1, parent2, crossPoint) => {
  let parent1part = parent1.slice(0, crossPoint);
  let parent2part = parent2.slice(crossPoint);
  return parent1part.concat(parent2part);
};

export default crossing;
