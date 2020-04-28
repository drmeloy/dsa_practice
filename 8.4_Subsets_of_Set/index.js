// 8.4 Power Set: Write a method to return all subsets of a set
// ex: the subsets of set {a, b, c} include [{a}, {b}, {c}, {a, b}, {b, c}, {c, a}, {a, b, c}]

// if one more element is added to the set, all previous subsets are subsets of the new set, new element, and all previous subsets + new element

//[{a}, {b}, {a, b}, {a, c}, {b, c}, {a, b, c}, {c}, {a, d}, {b, d}, {a, b, d}, {c, d}, {a, c, d}, {b, c, d}, {a, b, c, d}, {d}]



addNewSubsetsToRunningSubsets = (runningSubsets, value) => {
  const copyOfRunningSubsets = new Set(runningSubsets);
  copyOfRunningSubsets.forEach(subset => {
    const newAddition = new Set(subset);
    newAddition.add(value);
    runningSubsets.add(newAddition);
  });
  runningSubsets.add((new Set()).add(value));
}

const subsetInator = set => {
  const runningSubset = new Set();
  set.forEach(element => {
    addNewSubsetsToRunningSubsets(runningSubset, element);
  });
  return runningSubset;
}

const theSet = new Set();
theSet.add('a');
theSet.add('b');
theSet.add('c');
theSet.add('d');
theSet.add('e');
console.log(subsetInator(theSet));