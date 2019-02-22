/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var personLength = preferences.length;
  var excludedPersons = {};
  var loveTrianglesCount = 0;

  for (var person = 0; person < personLength; person++) {
    var nextPerson = preferences[person] - 1;
    var loveTriangle = [nextPerson];

    if (excludedPersons[nextPerson]) continue;
    if (person === nextPerson) continue;

    for (var i = 0; i < 2; i++) {
      nextPerson = preferences[nextPerson] - 1;
      loveTriangle.push(nextPerson);
    }

    if (person === nextPerson) {
      loveTriangle.forEach(function(person) {
        excludedPersons[person] = true;
      });

      loveTrianglesCount++;
    }
  }

  return loveTrianglesCount;
};
