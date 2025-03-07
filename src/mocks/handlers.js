// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("https://swapi.dev/api/people/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];

export const data = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "http://swapi.dev/api/planets/1/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: [
      "http://swapi.dev/api/vehicles/14/",
      "http://swapi.dev/api/vehicles/30/",
    ],
    starships: [
      "http://swapi.dev/api/starships/12/",
      "http://swapi.dev/api/starships/22/",
    ],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "http://swapi.dev/api/people/1/",
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
    homeworld: "http://swapi.dev/api/planets/1/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith",
    ],
    species: ["http://swapi.dev/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:10:51.357000Z",
    edited: "2014-12-20T21:17:50.309000Z",
    url: "http://swapi.dev/api/people/2/",
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
    homeworld: "http://swapi.dev/api/planets/8/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Phantom Menace",
      "Attack of the Clones",
      "Revenge of the Sith",
    ],
    species: ["http://swapi.dev/api/species/2/"],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:11:50.376000Z",
    edited: "2014-12-20T21:17:50.311000Z",
    url: "http://swapi.dev/api/people/3/",
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
    homeworld: "http://swapi.dev/api/planets/1/",

    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: [],
    starships: ["http://swapi.dev/api/starships/13/"],
    created: "2014-12-10T15:18:20.704000Z",
    edited: "2014-12-20T21:17:50.313000Z",
    url: "http://swapi.dev/api/people/4/",
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
    homeworld: "http://swapi.dev/api/planets/2/",
    films: [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
    ],
    species: [],
    vehicles: ["http://swapi.dev/api/vehicles/30/"],
    starships: [],
    created: "2014-12-10T15:20:09.791000Z",
    edited: "2014-12-20T21:17:50.315000Z",
    url: "http://swapi.dev/api/people/5/",
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
    homeworld: "http://swapi.dev/api/planets/1/",
    films: ["A New Hope", "Attack of the Clones", "Revenge of the Sith"],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-10T15:52:14.024000Z",
    edited: "2014-12-20T21:17:50.317000Z",
    url: "http://swapi.dev/api/people/6/",
  },
];

export const films = [
  {
    count: 6,
    next: null,
    previous: null,
    results: [
      {
        title: "A New Hope",
        episode_id: 4,
        opening_crawl:
          "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: "George Lucas",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1977-05-25",
        characters: [
          "http://swapi.dev/api/people/1/",
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/4/",
          "http://swapi.dev/api/people/5/",
          "http://swapi.dev/api/people/6/",
          "http://swapi.dev/api/people/7/",
          "http://swapi.dev/api/people/8/",
          "http://swapi.dev/api/people/9/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/12/",
          "http://swapi.dev/api/people/13/",
          "http://swapi.dev/api/people/14/",
          "http://swapi.dev/api/people/15/",
          "http://swapi.dev/api/people/16/",
          "http://swapi.dev/api/people/18/",
          "http://swapi.dev/api/people/19/",
          "http://swapi.dev/api/people/81/",
        ],
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/2/",
          "http://swapi.dev/api/planets/3/",
        ],
        starships: [
          "http://swapi.dev/api/starships/2/",
          "http://swapi.dev/api/starships/3/",
          "http://swapi.dev/api/starships/5/",
          "http://swapi.dev/api/starships/9/",
          "http://swapi.dev/api/starships/10/",
          "http://swapi.dev/api/starships/11/",
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/13/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/4/",
          "http://swapi.dev/api/vehicles/6/",
          "http://swapi.dev/api/vehicles/7/",
          "http://swapi.dev/api/vehicles/8/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/3/",
          "http://swapi.dev/api/species/4/",
          "http://swapi.dev/api/species/5/",
        ],
        created: "2014-12-10T14:23:31.880000Z",
        edited: "2014-12-20T19:49:45.256000Z",
        url: "http://swapi.dev/api/films/1/",
      },
      {
        title: "The Empire Strikes Back",
        episode_id: 5,
        opening_crawl:
          "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
        director: "Irvin Kershner",
        producer: "Gary Kurtz, Rick McCallum",
        release_date: "1980-05-17",
        characters: [
          "http://swapi.dev/api/people/1/",
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/4/",
          "http://swapi.dev/api/people/5/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/13/",
          "http://swapi.dev/api/people/14/",
          "http://swapi.dev/api/people/18/",
          "http://swapi.dev/api/people/20/",
          "http://swapi.dev/api/people/21/",
          "http://swapi.dev/api/people/22/",
          "http://swapi.dev/api/people/23/",
          "http://swapi.dev/api/people/24/",
          "http://swapi.dev/api/people/25/",
          "http://swapi.dev/api/people/26/",
        ],
        planets: [
          "http://swapi.dev/api/planets/4/",
          "http://swapi.dev/api/planets/5/",
          "http://swapi.dev/api/planets/6/",
          "http://swapi.dev/api/planets/27/",
        ],
        starships: [
          "http://swapi.dev/api/starships/3/",
          "http://swapi.dev/api/starships/10/",
          "http://swapi.dev/api/starships/11/",
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/15/",
          "http://swapi.dev/api/starships/17/",
          "http://swapi.dev/api/starships/21/",
          "http://swapi.dev/api/starships/22/",
          "http://swapi.dev/api/starships/23/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/8/",
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/16/",
          "http://swapi.dev/api/vehicles/18/",
          "http://swapi.dev/api/vehicles/19/",
          "http://swapi.dev/api/vehicles/20/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/3/",
          "http://swapi.dev/api/species/6/",
          "http://swapi.dev/api/species/7/",
        ],
        created: "2014-12-12T11:26:24.656000Z",
        edited: "2014-12-15T13:07:53.386000Z",
        url: "http://swapi.dev/api/films/2/",
      },
      {
        title: "Return of the Jedi",
        episode_id: 6,
        opening_crawl:
          "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
        director: "Richard Marquand",
        producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
        release_date: "1983-05-25",
        characters: [
          "http://swapi.dev/api/people/1/",
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/4/",
          "http://swapi.dev/api/people/5/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/13/",
          "http://swapi.dev/api/people/14/",
          "http://swapi.dev/api/people/16/",
          "http://swapi.dev/api/people/18/",
          "http://swapi.dev/api/people/20/",
          "http://swapi.dev/api/people/21/",
          "http://swapi.dev/api/people/22/",
          "http://swapi.dev/api/people/25/",
          "http://swapi.dev/api/people/27/",
          "http://swapi.dev/api/people/28/",
          "http://swapi.dev/api/people/29/",
          "http://swapi.dev/api/people/30/",
          "http://swapi.dev/api/people/31/",
          "http://swapi.dev/api/people/45/",
        ],
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/5/",
          "http://swapi.dev/api/planets/7/",
          "http://swapi.dev/api/planets/8/",
          "http://swapi.dev/api/planets/9/",
        ],
        starships: [
          "http://swapi.dev/api/starships/2/",
          "http://swapi.dev/api/starships/3/",
          "http://swapi.dev/api/starships/10/",
          "http://swapi.dev/api/starships/11/",
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/15/",
          "http://swapi.dev/api/starships/17/",
          "http://swapi.dev/api/starships/22/",
          "http://swapi.dev/api/starships/23/",
          "http://swapi.dev/api/starships/27/",
          "http://swapi.dev/api/starships/28/",
          "http://swapi.dev/api/starships/29/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/8/",
          "http://swapi.dev/api/vehicles/16/",
          "http://swapi.dev/api/vehicles/18/",
          "http://swapi.dev/api/vehicles/19/",
          "http://swapi.dev/api/vehicles/24/",
          "http://swapi.dev/api/vehicles/25/",
          "http://swapi.dev/api/vehicles/26/",
          "http://swapi.dev/api/vehicles/30/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/3/",
          "http://swapi.dev/api/species/5/",
          "http://swapi.dev/api/species/6/",
          "http://swapi.dev/api/species/8/",
          "http://swapi.dev/api/species/9/",
          "http://swapi.dev/api/species/10/",
          "http://swapi.dev/api/species/15/",
        ],
        created: "2014-12-18T10:39:33.255000Z",
        edited: "2014-12-20T09:48:37.462000Z",
        url: "http://swapi.dev/api/films/3/",
      },
      {
        title: "The Phantom Menace",
        episode_id: 1,
        opening_crawl:
          "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
        director: "George Lucas",
        producer: "Rick McCallum",
        release_date: "1999-05-19",
        characters: [
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/11/",
          "http://swapi.dev/api/people/16/",
          "http://swapi.dev/api/people/20/",
          "http://swapi.dev/api/people/21/",
          "http://swapi.dev/api/people/32/",
          "http://swapi.dev/api/people/33/",
          "http://swapi.dev/api/people/34/",
          "http://swapi.dev/api/people/35/",
          "http://swapi.dev/api/people/36/",
          "http://swapi.dev/api/people/37/",
          "http://swapi.dev/api/people/38/",
          "http://swapi.dev/api/people/39/",
          "http://swapi.dev/api/people/40/",
          "http://swapi.dev/api/people/41/",
          "http://swapi.dev/api/people/42/",
          "http://swapi.dev/api/people/43/",
          "http://swapi.dev/api/people/44/",
          "http://swapi.dev/api/people/46/",
          "http://swapi.dev/api/people/47/",
          "http://swapi.dev/api/people/48/",
          "http://swapi.dev/api/people/49/",
          "http://swapi.dev/api/people/50/",
          "http://swapi.dev/api/people/51/",
          "http://swapi.dev/api/people/52/",
          "http://swapi.dev/api/people/53/",
          "http://swapi.dev/api/people/54/",
          "http://swapi.dev/api/people/55/",
          "http://swapi.dev/api/people/56/",
          "http://swapi.dev/api/people/57/",
          "http://swapi.dev/api/people/58/",
          "http://swapi.dev/api/people/59/",
        ],
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/8/",
          "http://swapi.dev/api/planets/9/",
        ],
        starships: [
          "http://swapi.dev/api/starships/31/",
          "http://swapi.dev/api/starships/32/",
          "http://swapi.dev/api/starships/39/",
          "http://swapi.dev/api/starships/40/",
          "http://swapi.dev/api/starships/41/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/33/",
          "http://swapi.dev/api/vehicles/34/",
          "http://swapi.dev/api/vehicles/35/",
          "http://swapi.dev/api/vehicles/36/",
          "http://swapi.dev/api/vehicles/37/",
          "http://swapi.dev/api/vehicles/38/",
          "http://swapi.dev/api/vehicles/42/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/6/",
          "http://swapi.dev/api/species/11/",
          "http://swapi.dev/api/species/12/",
          "http://swapi.dev/api/species/13/",
          "http://swapi.dev/api/species/14/",
          "http://swapi.dev/api/species/15/",
          "http://swapi.dev/api/species/16/",
          "http://swapi.dev/api/species/17/",
          "http://swapi.dev/api/species/18/",
          "http://swapi.dev/api/species/19/",
          "http://swapi.dev/api/species/20/",
          "http://swapi.dev/api/species/21/",
          "http://swapi.dev/api/species/22/",
          "http://swapi.dev/api/species/23/",
          "http://swapi.dev/api/species/24/",
          "http://swapi.dev/api/species/25/",
          "http://swapi.dev/api/species/26/",
          "http://swapi.dev/api/species/27/",
        ],
        created: "2014-12-19T16:52:55.740000Z",
        edited: "2014-12-20T10:54:07.216000Z",
        url: "http://swapi.dev/api/films/4/",
      },
      {
        title: "Attack of the Clones",
        episode_id: 2,
        opening_crawl:
          "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
        director: "George Lucas",
        producer: "Rick McCallum",
        release_date: "2002-05-16",
        characters: [
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/6/",
          "http://swapi.dev/api/people/7/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/11/",
          "http://swapi.dev/api/people/20/",
          "http://swapi.dev/api/people/21/",
          "http://swapi.dev/api/people/22/",
          "http://swapi.dev/api/people/33/",
          "http://swapi.dev/api/people/35/",
          "http://swapi.dev/api/people/36/",
          "http://swapi.dev/api/people/40/",
          "http://swapi.dev/api/people/43/",
          "http://swapi.dev/api/people/46/",
          "http://swapi.dev/api/people/51/",
          "http://swapi.dev/api/people/52/",
          "http://swapi.dev/api/people/53/",
          "http://swapi.dev/api/people/58/",
          "http://swapi.dev/api/people/59/",
          "http://swapi.dev/api/people/60/",
          "http://swapi.dev/api/people/61/",
          "http://swapi.dev/api/people/62/",
          "http://swapi.dev/api/people/63/",
          "http://swapi.dev/api/people/64/",
          "http://swapi.dev/api/people/65/",
          "http://swapi.dev/api/people/66/",
          "http://swapi.dev/api/people/67/",
          "http://swapi.dev/api/people/68/",
          "http://swapi.dev/api/people/69/",
          "http://swapi.dev/api/people/70/",
          "http://swapi.dev/api/people/71/",
          "http://swapi.dev/api/people/72/",
          "http://swapi.dev/api/people/73/",
          "http://swapi.dev/api/people/74/",
          "http://swapi.dev/api/people/75/",
          "http://swapi.dev/api/people/76/",
          "http://swapi.dev/api/people/77/",
          "http://swapi.dev/api/people/78/",
          "http://swapi.dev/api/people/82/",
        ],
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/8/",
          "http://swapi.dev/api/planets/9/",
          "http://swapi.dev/api/planets/10/",
          "http://swapi.dev/api/planets/11/",
        ],
        starships: [
          "http://swapi.dev/api/starships/21/",
          "http://swapi.dev/api/starships/32/",
          "http://swapi.dev/api/starships/39/",
          "http://swapi.dev/api/starships/43/",
          "http://swapi.dev/api/starships/47/",
          "http://swapi.dev/api/starships/48/",
          "http://swapi.dev/api/starships/49/",
          "http://swapi.dev/api/starships/52/",
          "http://swapi.dev/api/starships/58/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/4/",
          "http://swapi.dev/api/vehicles/44/",
          "http://swapi.dev/api/vehicles/45/",
          "http://swapi.dev/api/vehicles/46/",
          "http://swapi.dev/api/vehicles/50/",
          "http://swapi.dev/api/vehicles/51/",
          "http://swapi.dev/api/vehicles/53/",
          "http://swapi.dev/api/vehicles/54/",
          "http://swapi.dev/api/vehicles/55/",
          "http://swapi.dev/api/vehicles/56/",
          "http://swapi.dev/api/vehicles/57/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/6/",
          "http://swapi.dev/api/species/12/",
          "http://swapi.dev/api/species/13/",
          "http://swapi.dev/api/species/15/",
          "http://swapi.dev/api/species/28/",
          "http://swapi.dev/api/species/29/",
          "http://swapi.dev/api/species/30/",
          "http://swapi.dev/api/species/31/",
          "http://swapi.dev/api/species/32/",
          "http://swapi.dev/api/species/33/",
          "http://swapi.dev/api/species/34/",
          "http://swapi.dev/api/species/35/",
        ],
        created: "2014-12-20T10:57:57.886000Z",
        edited: "2014-12-20T20:18:48.516000Z",
        url: "http://swapi.dev/api/films/5/",
      },
      {
        title: "Revenge of the Sith",
        episode_id: 3,
        opening_crawl:
          "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
        director: "George Lucas",
        producer: "Rick McCallum",
        release_date: "2005-05-19",
        characters: [
          "http://swapi.dev/api/people/1/",
          "http://swapi.dev/api/people/2/",
          "http://swapi.dev/api/people/3/",
          "http://swapi.dev/api/people/4/",
          "http://swapi.dev/api/people/5/",
          "http://swapi.dev/api/people/6/",
          "http://swapi.dev/api/people/7/",
          "http://swapi.dev/api/people/10/",
          "http://swapi.dev/api/people/11/",
          "http://swapi.dev/api/people/12/",
          "http://swapi.dev/api/people/13/",
          "http://swapi.dev/api/people/20/",
          "http://swapi.dev/api/people/21/",
          "http://swapi.dev/api/people/33/",
          "http://swapi.dev/api/people/35/",
          "http://swapi.dev/api/people/46/",
          "http://swapi.dev/api/people/51/",
          "http://swapi.dev/api/people/52/",
          "http://swapi.dev/api/people/53/",
          "http://swapi.dev/api/people/54/",
          "http://swapi.dev/api/people/55/",
          "http://swapi.dev/api/people/56/",
          "http://swapi.dev/api/people/58/",
          "http://swapi.dev/api/people/63/",
          "http://swapi.dev/api/people/64/",
          "http://swapi.dev/api/people/67/",
          "http://swapi.dev/api/people/68/",
          "http://swapi.dev/api/people/75/",
          "http://swapi.dev/api/people/78/",
          "http://swapi.dev/api/people/79/",
          "http://swapi.dev/api/people/80/",
          "http://swapi.dev/api/people/81/",
          "http://swapi.dev/api/people/82/",
          "http://swapi.dev/api/people/83/",
        ],
        planets: [
          "http://swapi.dev/api/planets/1/",
          "http://swapi.dev/api/planets/2/",
          "http://swapi.dev/api/planets/5/",
          "http://swapi.dev/api/planets/8/",
          "http://swapi.dev/api/planets/9/",
          "http://swapi.dev/api/planets/12/",
          "http://swapi.dev/api/planets/13/",
          "http://swapi.dev/api/planets/14/",
          "http://swapi.dev/api/planets/15/",
          "http://swapi.dev/api/planets/16/",
          "http://swapi.dev/api/planets/17/",
          "http://swapi.dev/api/planets/18/",
          "http://swapi.dev/api/planets/19/",
        ],
        starships: [
          "http://swapi.dev/api/starships/2/",
          "http://swapi.dev/api/starships/32/",
          "http://swapi.dev/api/starships/48/",
          "http://swapi.dev/api/starships/59/",
          "http://swapi.dev/api/starships/61/",
          "http://swapi.dev/api/starships/63/",
          "http://swapi.dev/api/starships/64/",
          "http://swapi.dev/api/starships/65/",
          "http://swapi.dev/api/starships/66/",
          "http://swapi.dev/api/starships/68/",
          "http://swapi.dev/api/starships/74/",
          "http://swapi.dev/api/starships/75/",
        ],
        vehicles: [
          "http://swapi.dev/api/vehicles/33/",
          "http://swapi.dev/api/vehicles/50/",
          "http://swapi.dev/api/vehicles/53/",
          "http://swapi.dev/api/vehicles/56/",
          "http://swapi.dev/api/vehicles/60/",
          "http://swapi.dev/api/vehicles/62/",
          "http://swapi.dev/api/vehicles/67/",
          "http://swapi.dev/api/vehicles/69/",
          "http://swapi.dev/api/vehicles/70/",
          "http://swapi.dev/api/vehicles/71/",
          "http://swapi.dev/api/vehicles/72/",
          "http://swapi.dev/api/vehicles/73/",
          "http://swapi.dev/api/vehicles/76/",
        ],
        species: [
          "http://swapi.dev/api/species/1/",
          "http://swapi.dev/api/species/2/",
          "http://swapi.dev/api/species/3/",
          "http://swapi.dev/api/species/6/",
          "http://swapi.dev/api/species/15/",
          "http://swapi.dev/api/species/19/",
          "http://swapi.dev/api/species/20/",
          "http://swapi.dev/api/species/23/",
          "http://swapi.dev/api/species/24/",
          "http://swapi.dev/api/species/25/",
          "http://swapi.dev/api/species/26/",
          "http://swapi.dev/api/species/27/",
          "http://swapi.dev/api/species/28/",
          "http://swapi.dev/api/species/29/",
          "http://swapi.dev/api/species/30/",
          "http://swapi.dev/api/species/33/",
          "http://swapi.dev/api/species/34/",
          "http://swapi.dev/api/species/35/",
          "http://swapi.dev/api/species/36/",
          "http://swapi.dev/api/species/37/",
        ],
        created: "2014-12-20T18:49:38.403000Z",
        edited: "2014-12-20T20:47:52.073000Z",
        url: "http://swapi.dev/api/films/6/",
      },
    ],
  },
];

