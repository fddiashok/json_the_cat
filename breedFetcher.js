const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {


    // // Check response code
    // console.log("Response :", response&& response.statusCode);

    //Convert response string into object using JSON.parse()
    const data = JSON.parse(body);

    if (data.length === 0)
      return callback(null, "Breed Not Found");
    else
      return callback(null, data[0].description);
  });
};

const printDescription = (error, toPrint) => {
  console.log(toPrint);
}

fetchBreedDescription(breedName, printDescription);
// console.log("in the end");
module.exports = { fetchBreedDescription };