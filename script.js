const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

function suma() {
  return 2 + 2;
}
