const request = require("request");
const array = process.argv.slice(2);

// Extracting first three characters from breed name
// const breed = array[0].slice(0,3).toLowerCase();
const breed = array[0];
// console.log(breed);

const fetchBreedDescription = function (breedName, callback) {

  console.log("outside request");

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    console.log("inside request ");
    // // Check response code
    // console.log("Response :", response&& response.statusCode);

    //Convert response string into object using JSON.parse()
    const data = JSON.parse(body);

    // console.log(typeof data);
    // console.log("Body :", data);
    if (data.length === 0)
      return callback(null, "Breed Not Found");
    else
      return callback(null, data[0].description);
  });
};

const printDescription = (error, toPrint) => {
  console.log(toPrint);
}

fetchBreedDescription(breed, printDescription);
console.log("in the end");