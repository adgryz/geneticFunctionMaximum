import generatePopulation from "/js/generatePopulation.js";
import evaluatePopulation from "/js/evaluatePopulation.js";
import selection from "/js/selection.js";
import crossing from "/js/crossing.js";

let population = [];
let fitnessOfPopulation = [];
let selectedForCrossing = [];
let fitnessOverTime = [];
let avgFitness = [];
const populationNumber = 64;
const lengthOfChromosome = 11;

function solve() {
  population = generatePopulation(populationNumber, lengthOfChromosome);
  // console.log("INITIAL POPULATION : ", population);
  let i;
  for (i = 0; i < 100; i++) {
    fitnessOfPopulation = evaluatePopulation(population);
    avgFitness.push(avg(fitnessOfPopulation));
    fitnessOverTime.push(Math.max(...fitnessOfPopulation));
    selectedForCrossing = selection(fitnessOfPopulation, population);
    if (!selectedForCrossing) {
      console.log("END OF EVOLUTION !");
      return;
    }
    population = crossing(selectedForCrossing, lengthOfChromosome);
    // console.log(`POPULATION #${i + 1}: `, population);
  }
  console.log("TIME PASSED !");
  return;
}

function avg(arr) {
  let sum,
    avg = 0;
  if (arr.length) {
    sum = arr.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / arr.length;
  }
  return avg;
}
solve();
console.log(fitnessOverTime);
console.log(avgFitness);
