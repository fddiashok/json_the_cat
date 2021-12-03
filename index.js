const { fetchBreedDescription } = require('./breedFetcher');
const array = process.argv.slice(2);

// Extracting first three characters from breed name
// const breed = array[0].slice(0,3).toLowerCase();
const breedName = array[0];
console.log(breedName);
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

