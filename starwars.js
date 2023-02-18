const chars = {
  count: 82,
  next: "https://swapi.dev/api/people/?page=2",
  previous: null,
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:10:51.357000Z",
      edited: "2014-12-20T21:17:50.309000Z",
      url: "https://swapi.dev/api/people/2/",
    },
    {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/13/"],
      created: "2014-12-10T15:18:20.704000Z",
      edited: "2014-12-20T21:17:50.313000Z",
      url: "https://swapi.dev/api/people/4/",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/2/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/30/"],
      starships: [],
      created: "2014-12-10T15:20:09.791000Z",
      edited: "2014-12-20T21:17:50.315000Z",
      url: "https://swapi.dev/api/people/5/",
    },
    {
      name: "Owen Lars",
      height: "178",
      mass: "120",
      hair_color: "brown, grey",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "52BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:52:14.024000Z",
      edited: "2014-12-20T21:17:50.317000Z",
      url: "https://swapi.dev/api/people/6/",
    },
    {
      name: "Beru Whitesun lars",
      height: "165",
      mass: "75",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "47BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:53:41.121000Z",
      edited: "2014-12-20T21:17:50.319000Z",
      url: "https://swapi.dev/api/people/7/",
    },
    {
      name: "R5-D4",
      height: "97",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, red",
      eye_color: "red",
      birth_year: "unknown",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/"],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:57:50.959000Z",
      edited: "2014-12-20T21:17:50.321000Z",
      url: "https://swapi.dev/api/people/8/",
    },
    {
      name: "Biggs Darklighter",
      height: "183",
      mass: "84",
      hair_color: "black",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "24BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: ["https://swapi.dev/api/films/1/"],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/12/"],
      created: "2014-12-10T15:59:50.509000Z",
      edited: "2014-12-20T21:17:50.323000Z",
      url: "https://swapi.dev/api/people/9/",
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/20/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: ["https://swapi.dev/api/vehicles/38/"],
      starships: [
        "https://swapi.dev/api/starships/48/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/64/",
        "https://swapi.dev/api/starships/65/",
        "https://swapi.dev/api/starships/74/",
      ],
      created: "2014-12-10T16:16:29.192000Z",
      edited: "2014-12-20T21:17:50.325000Z",
      url: "https://swapi.dev/api/people/10/",
    },
  ],
};

// Uppgift 1
console.log("Uppgift 1");
const charNames = chars.results.map((c) => console.log(c.name));

// Upggift 2
console.log("Uppgift 2");
const height = chars.results.map((c) => console.log(c.height));

// Uppgift 3
console.log("Uppgift 3");
const nameHeight = chars.results.map((c) =>
  console.log(c.name, "is" + "", c.height, "cm.")
);

// Uppgift 4
console.log("Uppgift 4");
const smallChars = chars.results.filter((c) => c.mass < 100);
console.log(smallChars);

// Uppgift 5
console.log("Uppgift 5");
const bigChars = chars.results.filter((c) => c.mass > 100);
console.log(bigChars);

// Uppgift 6
console.log("Uppgift 6");
const femaleChars = chars.results.filter((c) => c.gender == "female");
console.log(femaleChars);

// Uppgift 7
console.log("Uppgift 7");
const maleChars = chars.results.filter((c) => c.gender == "male");
console.log(maleChars);

// Uppgift 8
console.log("Uppgift 8");
const fewMovies = chars.results.filter((c) => c.films.length > 3);
console.log(fewMovies);

// Uppgift 9
console.log("Uppgift 9");
const sortedNames = chars.results.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(sortedNames);

// Uppgift 10
console.log("Uppgift 10");
const sortedMass = chars.results.sort((a, b) => {
  return a.mass - b.mass;
});
console.log(sortedMass);

// Uppgift 11
console.log("Uppgift 11");
const sortedHeight = chars.results.sort((a, b) => {
  return a.height - b.height;
});
console.log(sortedHeight);

// Uppgift 12
console.log("Uppgift 12");
const sortedGender = chars.results.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});
console.log(sortedGender);

// Uppgift 13
console.log("Uppgift 13");
chars.results.forEach((c) => {
  if (c.gender == "male") {
    return (c.name = "Mr. " + c.name);
  } else if (c.gender == "female") {
    return (c.name = "Mrs. " + c.name);
  } else {
    return (c.name = "Mx. " + c.name);
  }
});
console.log(chars.results);

// Uppgift 14
console.log("Uppgift 14");
chars.results.forEach((c) => {
  if (c.hair_color === "n/a") {
    return (c.hair_color = "-");
  }
});
console.log(chars.results);
