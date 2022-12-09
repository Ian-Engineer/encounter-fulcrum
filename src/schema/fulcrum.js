const dataDefault = {
  shape: "",
  length: 0,
  width: 0,
  centerTolerance: 0,
  extremeDifference: 0,
  totalWeight: 0,
  characters: [],
  baddies: [],
  items: [],
  maxRounds: 0,
  roundsAtExtreme: 0,
};

const weightedDefault = {
  name: "",
  weight: 0,
  location: [0, 0],
};

const fulcrumSchema = { dataDefault, weightedDefault };

export default fulcrumSchema;
