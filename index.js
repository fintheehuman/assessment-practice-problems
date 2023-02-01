/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleCities` variable below to gain access to an array of the ten biggest cities in North America.

  Keep in mind that your functions must still have and use a parameter for accepting all cities.
*/
const exampleCities = require("./cities");
// Do not change the line above.

/**
 * getAllCityNames()
 * -----------------------------
 * Returns all the names from an array of cities. If the inputted `cities` array is empty, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are city names.
 *
 * EXAMPLE:
 *  getAlLCityNames(cities);
 *  //> [
      "Mexico City",
      "New York City",
      "Los Angeles",
      "Toronto",
      "Chicago",
      "Houston",
      "Havana",
      "Montreal",
      "Ecatepec de Morelos",
      "Philadelphia",
    ];
 */
function getAllCityNames(cities) {
  let array = []

  for (let city of cities) {
    array.push(city.name)
  } return array
}

/**
 * getOldestCity()
 * -----------------------------
 * Returns the name of the inputted city with the oldest yearFounded. If the inputted `cities` array is empty, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string} The name of the oldest inputted city.
 *
 * EXAMPLE:
 *  getOldestCity(cities);
 *  //> "Mexico City"
 */
function getOldestCity(cities) {
  if (cities) {
    for (let city of cities) {
      return city.name
    }
  } return null
}
//This one didn't make much sense to me. The instructions left me confused, although it may generally be my understanding. I also wasn't quite sure why the two test arrays (cities, and alternative) made the oldest in both the 1st positions. Maybe this was by design...
/**
 * findByName()
 * -----------------------------
 * Returns a city object from an array of objects based on the given name. If the inputted `cities` array is empty or the name does not match any city, return `null`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} name - A name.
 * @returns {Object|null} The city object with the matching name.
 *
 * EXAMPLE:
 *  findByName(cities, "Houston");
 *  //> {
        name: "Houston",
        country: "United States",
        population:	2296224,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Panoramic_Houston_skyline.jpg/240px-Panoramic_Houston_skyline.jpg`,
        yearFounded: 1837,
        stateOrProvince: "Texas",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        id: 't870ol'
    }
 */
function findByName(cities, name) {
  for (let city of cities) {
    if (city.name === name) {
      return city
    }
  } return null
}

/**
 * filterByCountry()
 * -----------------------------
 * Returns all city objects with a matching country. Case-insensitive. If the inputted `cities` array is empty or no cities match the inputted `country`, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} country - The country a city is in. (e.g. "United States")
 * @returns {Object[]} An array of cities where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByCountry(cities, "Mexico");
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ]
    function filterByCountry() {}
*/
function filterByCountry(cities, country) { 
  let array = []

  for (let city of cities) {
    if (city.country.toLowerCase() === country.toLowerCase()) {
      array.push(city)
    } 
  } return array
}

/**
 * findBySportsTeam()
 * -----------------------------
 * Returns the name of the city with a sports team matching the one given. If the inputted `cities` array is empty or no cities have a matching sports team, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} teamName - The name of a sports team (with "The" omitted if applicable).
 * @returns {string} The name of a city with a matching sports team.
 *
 * EXAMPLE:
 *  findBySportsTeam(cities, "Cubs")
 *  //> "Chicago"
 */
function findBySportsTeam(cities, teamName) {
  for (let city of cities) {
    if (city.sportsTeams.includes(teamName)) {
      return city.name
    }
  } return null
}

/**
 * countByCountry()
 * -----------------------------
 * Returns an object where the keys are countries and the values are the number of cities in the array that are in that country. If the inputted `cities` array is empty, return `{}`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {Object} An object where keys are countries (e.g. "Mexico") and the values are how many cities in the array are in that country (e.g. 2).
 *
 * EXAMPLE:
 *  countByCountry(cities);
 *  //> {
 *        "Mexico": 2,
 *        "United States": 5,
 *        "Canada": 2,
 *        "Cuba": 1
 *      }
 */
function countByCountry(cities) {
  let object = {} 

  for (let city of cities) {
    if (!object[city.country]) {
      object[city.country] = 0
    } object[city.country] += 1
  } return object
}

/**
 * getAverageFoundingYearForCapitals()
 * -----------------------------
 * Averages all of the founding years ONLY of the cities which are EITHER national capitals or the capital of their provice/state, and returns it as a number, rounded to the nearest integer. If the inputted `cities` array is empty or contains no capital cities, return `0`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {number} The average founding year across all capital cities.
 *
 * EXAMPLE:
 *  getAverageFoundingYearForCapitals(cities);
 *  //> 1531
 */
function getAverageFoundingYearForCapitals(cities) {
  let total = 0
  let count = 0

  if (cities.length === 0) {
    return 0
  } 
  for (let city of cities) {
    if (city.nationalCapital || city.stateOrProvinceCapital) {
      total += city.yearFounded
      count += 1
    } 
  } 
  let average = Math.round(total/count)
    return average
}
/**
 * getAllCitiesFoundedBeforeYear()
 * -----------------------------
 * Returns the names of all cities with a `yearFounded` less than the given year.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of cities where the `yearFounded` is less than the inputted year.
 *
 * EXAMPLE:
 *  getAllCitiesFoundedBeforeYear(cities, 1492);
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ];
 */
function getAllCitiesFoundedBeforeYear(cities, year) {
  let array = []

  for (let city of cities) {
    if(city.yearFounded <  year) {
      array.push(city)
    } 
  } return array
}

// Do not change anything below this line.
module.exports = {
  getAllCityNames,
  getOldestCity,
  findByName,
  filterByCountry,
  countByCountry,
  findBySportsTeam,
  getAverageFoundingYearForCapitals,
  getAllCitiesFoundedBeforeYear,
};
