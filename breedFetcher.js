const request = require("request");
const array = process.argv.slice(2);

// Extracting first three characters from breed name
// const breed = array[0].slice(0,3).toLowerCase();
const breed = array[0];
console.log(breed);

request(`https://api.thecatapi.com/v1/breeds/seach?q=${breed}`, (error, response, body) => {

  if (error) {
    // Display an error if any
    console.log("Error:", error);
    return;
  }
  // // Check response code
  // console.log("Response :", response&& response.statusCode);

  //Convert response string into object using JSON.parse()
  const data = JSON.parse(body);

  // console.log(typeof data);
  // console.log("Body :", data);
  if (data.length === 0)
    console.log("Breed Not Found");
});