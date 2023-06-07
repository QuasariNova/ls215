// We have the following Array of information for some popular bands:

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// There are problems with this data, though, so we first have to clean it up
// before we can use it:

//     The band countries are wrong: all the bands should have 'Canada' as the
//       country.
//     The band name should have all words capitalized.
//     Remove all dots from the band names.

// Write a function that can process the input band Array and return an Array
// that contains the fixed information:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// Transform data array and copy data as a deep copy
//   Object.assign
// Iterate the new data array changing the name and country property
//     Name
//     Replace '.', split into words, capitalize first letter, join

function removeDotsInString(string) {
  return string.replace(/[.]/g, '');
}

function caplitalizePhrase(string) {
  return string.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function fixBandName(name) {
  name = removeDotsInString(name);

  return caplitalizePhrase(name);
}

function processBands(data) {
  data = data.map(band => Object.assign({}, band));

  data.forEach(band => {
    band.name = fixBandName(band.name);
    band.country = 'Canada';
  });

  return data;
}

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
