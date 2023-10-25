const statesInfo = [
  {
    backgroundImage: "/al-bg.jpg",
    name: "Alabama",
    options: {
      stateCapital: "Montgomery",
      wrongOptionOne: "Tuscaloosa",
      wrongOptionTwo: "Mobile",
      wrongOptionThree: "Huntsville",
    },
  },
  {
    backgroundImage: "/ak-bg.jpg",
    name: "Alaska",
    options: {
      stateCapital: "Juneau",
      wrongOptionOne: "Anchorage",
      wrongOptionTwo: "Barrow",
      wrongOptionThree: "Naknek",
    },
  },
  {
    backgroundImage: "/az-bg.jpg",
    name: "Arizona",
    options: {
      stateCapital: "Phoenix",
      wrongOptionOne: "Yuma",
      wrongOptionTwo: "Flagstaff",
      wrongOptionThree: "Scottsdale",
    },
  },
  {
    backgroundImage: "/ar-bg.jpg",
    name: "Arkansas",
    options: {
      stateCapital: "Little Rock",
      wrongOptionOne: "Springfield",
      wrongOptionTwo: "Eureka Springs",
      wrongOptionThree: "Fayetteville",
    },
  },
  {
    backgroundImage: "/ca-bg.jpg",
    name: "California",
    options: {
      stateCapital: "Sacramento",
      wrongOptionOne: "Los Angeles",
      wrongOptionTwo: "San Diego",
      wrongOptionThree: "Petaluma",
    },
  },
  {
    backgroundImage: "/co-bg.jpg",
    name: "Colorado",
    options: {
      stateCapital: "Denver",
      wrongOptionOne: "Fort Collins",
      wrongOptionTwo: "Boulder",
      wrongOptionThree: "Loveland",
    },
  },
  {
    backgroundImage: "/ct-bg.jpg",
    name: "Connecticut",
    options: {
      stateCapital: "Hartford",
      wrongOptionOne: "Bridgeport",
      wrongOptionTwo: "Fairfield",
      wrongOptionThree: "Norwalk",
    },
  },
  {
    backgroundImage: "/de-bg.jpg",
    name: "Delaware",
    options: {
      stateCapital: "Dover",
      wrongOptionOne: "Wilmington",
      wrongOptionTwo: "Smyrna",
      wrongOptionThree: "Seaford",
    },
  },
  {
    backgroundImage: "/fl-bg.jpg",
    name: "Florida",
    options: {
      stateCapital: "Tallahassee",
      wrongOptionOne: "Jacksonville",
      wrongOptionTwo: "Miami",
      wrongOptionThree: "Gainesville",
    },
  },
  {
    backgroundImage: "/ga-bg.jpg",
    name: "Georgia",
    options: {
      stateCapital: "Atlanta",
      wrongOptionOne: "Savannah",
      wrongOptionTwo: "Athens",
      wrongOptionThree: "Augusta",
    },
  },
  {
    backgroundImage: "/hi-bg.jpg",
    name: "Hawaii",
    options: {
      stateCapital: "Honolulu",
      wrongOptionOne: "Pearl Harbor",
      wrongOptionTwo: "Waipahu",
      wrongOptionThree: "Kailua",
    },
  },
  {
    backgroundImage: "/id-bg.jpg",
    name: "Idaho",
    options: {
      stateCapital: "Boise",
      wrongOptionOne: "Twin Falls",
      wrongOptionTwo: "Caldwell",
      wrongOptionThree: "Nampa",
    },
  },
  {
    backgroundImage: "/il-bg.jpg",
    name: "Illinois",
    options: {
      stateCapital: "Springfield",
      wrongOptionOne: "Chicago",
      wrongOptionTwo: "Joliet",
      wrongOptionThree: "Aurora",
    },
  },
  {
    backgroundImage: "/in-bg.jpg",
    name: "Indiana",
    options: {
      stateCapital: "Indianapolis",
      wrongOptionOne: "Shipshewana",
      wrongOptionTwo: "South Bend",
      wrongOptionThree: "Gary",
    },
  },
  {
    backgroundImage: "/ia-bg.jpg",
    name: "Iowa",
    options: {
      stateCapital: "Des Moines",
      wrongOptionOne: "Iowa City",
      wrongOptionTwo: "Council Bluffs",
      wrongOptionThree: "Cedar Rapids",
    },
  },
  {
    backgroundImage: "/ks-bg.jpg",
    name: "Kansas",
    options: {
      stateCapital: "Topeka",
      wrongOptionOne: "Wichita",
      wrongOptionTwo: "Kansas City",
      wrongOptionThree: "Lawrence",
    },
  },
  {
    backgroundImage: "/ky-bg.jpg",
    name: "Kentucky",
    options: {
      stateCapital: "Frankfort",
      wrongOptionOne: "Lexington",
      wrongOptionTwo: "Louisville",
      wrongOptionThree: "Bowling Green",
    },
  },
  {
    backgroundImage: "/la-bg.jpg",
    name: "Louisiana",
    options: {
      stateCapital: "Baton Rouge",
      wrongOptionOne: "Shreveport",
      wrongOptionTwo: "New Orleans",
      wrongOptionThree: "Monroe",
    },
  },
  {
    backgroundImage: "/me-bg.jpg",
    name: "Maine",
    options: {
      stateCapital: "Augusta",
      wrongOptionOne: "Portland",
      wrongOptionTwo: "Berwick",
      wrongOptionThree: "Andover",
    },
  },
  {
    backgroundImage: "/md-bg.jpg",
    name: "Maryland",
    options: {
      stateCapital: "Annapolis",
      wrongOptionOne: "Baltimore",
      wrongOptionTwo: "Frederick",
      wrongOptionThree: "Bethesda",
    },
  },
  {
    backgroundImage: "/ma-bg.jpg",
    name: "Massachusetts",
    options: {
      stateCapital: "Boston",
      wrongOptionOne: "Cambridge",
      wrongOptionTwo: "Bedford",
      wrongOptionThree: "Worcester",
    },
  },
  {
    backgroundImage: "/mi-bg.jpg",
    name: "Michigan",
    options: {
      stateCapital: "Lansing",
      wrongOptionOne: "Grand Rapids",
      wrongOptionTwo: "Detroit",
      wrongOptionThree: "Traverse City",
    },
  },
  {
    backgroundImage: "/mn-bg.jpg",
    name: "Minnesota",
    options: {
      stateCapital: "St. Paul",
      wrongOptionOne: "Minneapolis",
      wrongOptionTwo: "Duluth",
      wrongOptionThree: "Rochester",
    },
  },
  {
    backgroundImage: "/ms-bg.jpg",
    name: "Mississippi",
    options: {
      stateCapital: "Jackson",
      wrongOptionOne: "Biloxi",
      wrongOptionTwo: "Hattiesburg",
      wrongOptionThree: "Tupelo",
    },
  },
  {
    backgroundImage: "/mo-bg.jpg",
    name: "Missouri",
    options: {
      stateCapital: "Jefferson City",
      wrongOptionOne: "Springfield",
      wrongOptionTwo: "Kansas City",
      wrongOptionThree: "Hannibal",
    },
  },
  {
    backgroundImage: "/mt-bg.jpg",
    name: "Montana",
    options: {
      stateCapital: "Helena",
      wrongOptionOne: "Big Sky",
      wrongOptionTwo: "Billings",
      wrongOptionThree: "Bozeman",
    },
  },
  {
    backgroundImage: "/ne-bg.jpg",
    name: "Nebraska",
    options: {
      stateCapital: "Lincoln",
      wrongOptionOne: "Omaha",
      wrongOptionTwo: "Bellevue",
      wrongOptionThree: "Papillion",
    },
  },
  {
    backgroundImage: "/nv-bg.jpg",
    name: "Nevada",
    options: {
      stateCapital: "Carson City",
      wrongOptionOne: "Reno",
      wrongOptionTwo: "Las Vegas",
      wrongOptionThree: "Sparks",
    },
  },
  {
    backgroundImage: "/nh-bg.jpg",
    name: "New Hampshire",
    options: {
      stateCapital: "Concord",
      wrongOptionOne: "Manchester",
      wrongOptionTwo: "Portsmouth",
      wrongOptionThree: "Derry",
    },
  },
  {
    backgroundImage: "/nj-bg.jpg",
    name: "New Jersey",
    options: {
      stateCapital: "Trenton",
      wrongOptionOne: "Newark",
      wrongOptionTwo: "Garden City",
      wrongOptionThree: "Rutherford",
    },
  },
  {
    backgroundImage: "/nm-bg.jpg",
    name: "New Mexico",
    options: {
      stateCapital: "Santa Fe",
      wrongOptionOne: "Albuquerque",
      wrongOptionTwo: "Las Cruces",
      wrongOptionThree: "Roswell",
    },
  },
  {
    backgroundImage: "/ny-bg.jpg",
    name: "New York",
    options: {
      stateCapital: "Albany",
      wrongOptionOne: "Manhattan",
      wrongOptionTwo: "Syracuse",
      wrongOptionThree: "Staten Island",
    },
  },
  {
    backgroundImage: "/nc-bg.jpg",
    name: "North Carolina",
    options: {
      stateCapital: "Raleigh",
      wrongOptionOne: "Charlotte",
      wrongOptionTwo: "Chapel Hill",
      wrongOptionThree: "Greensboro",
    },
  },
  {
    backgroundImage: "/nd-bg.jpg",
    name: "North Dakota",
    options: {
      stateCapital: "Bismarck",
      wrongOptionOne: "Fargo",
      wrongOptionTwo: "Mandan",
      wrongOptionThree: "Grand Forks",
    },
  },
  {
    backgroundImage: "/oh-bg.jpg",
    name: "Ohio",
    options: {
      stateCapital: "Columbus",
      wrongOptionOne: "Cincinnati",
      wrongOptionTwo: "Cleveland",
      wrongOptionThree: "Youngstown",
    },
  },
  {
    backgroundImage: "/ok-bg.jpg",
    name: "Oklahoma",
    options: {
      stateCapital: "Oklahoma City",
      wrongOptionOne: "Tulsa",
      wrongOptionTwo: "Broken Arrow",
      wrongOptionThree: "Comanche",
    },
  },
  {
    backgroundImage: "/or-bg.jpg",
    name: "Oregon",
    options: {
      stateCapital: "Salem",
      wrongOptionOne: "Portland",
      wrongOptionTwo: "Medford",
      wrongOptionThree: "McMinnville",
    },
  },
  {
    backgroundImage: "/pa-bg.jpg",
    name: "Pennsylvania",
    options: {
      stateCapital: "Harrisburg",
      wrongOptionOne: "Pittsburgh",
      wrongOptionTwo: "Scranton",
      wrongOptionThree: "Philadelphia",
    },
  },
  {
    backgroundImage: "/ri-bg.jpg",
    name: "Rhode Island",
    options: {
      stateCapital: "Providence",
      wrongOptionOne: "Warwick",
      wrongOptionTwo: "Pawtucket",
      wrongOptionThree: "Newport",
    },
  },
  {
    backgroundImage: "/sc-bg.jpg",
    name: "South Carolina",
    options: {
      stateCapital: "Columbia",
      wrongOptionOne: "Charleston",
      wrongOptionTwo: "Myrtle Beach",
      wrongOptionThree: "Greensboro",
    },
  },
  {
    backgroundImage: "/sd-bg.jpg",
    name: "South Dakota",
    options: {
      stateCapital: "Pierre",
      wrongOptionOne: "Brookings",
      wrongOptionTwo: "Sioux Falls",
      wrongOptionThree: "Big Stone City",
    },
  },
  {
    backgroundImage: "/tn-bg.jpg",
    name: "Tennessee",
    options: {
      stateCapital: "Nashville",
      wrongOptionOne: "Gatlinburg",
      wrongOptionTwo: "Memphis",
      wrongOptionThree: "Dollywood",
    },
  },
  {
    backgroundImage: "/tx-bg.jpg",
    name: "Texas",
    options: {
      stateCapital: "Austin",
      wrongOptionOne: "Houston",
      wrongOptionTwo: "San Antonio",
      wrongOptionThree: "Dallas",
    },
  },
  {
    backgroundImage: "/ut-bg.jpg",
    name: "Utah",
    options: {
      stateCapital: "Salt Lake City",
      wrongOptionOne: "Provo",
      wrongOptionTwo: "Ogden",
      wrongOptionThree: "South Jordan",
    },
  },
  {
    backgroundImage: "/vt-bg.jpg",
    name: "Vermont",
    options: {
      stateCapital: "Montpelier",
      wrongOptionOne: "Burlington",
      wrongOptionTwo: "Winooski",
      wrongOptionThree: "Concord",
    },
  },
  {
    backgroundImage: "/va-bg.jpg",
    name: "Virginia",
    options: {
      stateCapital: "Richmond",
      wrongOptionOne: "Virginia Beach",
      wrongOptionTwo: "Chesapeake",
      wrongOptionThree: "Alexandria",
    },
  },
  {
    backgroundImage: "/wa-bg.jpg",
    name: "Washington",
    options: {
      stateCapital: "Olympia",
      wrongOptionOne: "Seattle",
      wrongOptionTwo: "Tacoma",
      wrongOptionThree: "Linden",
    },
  },
  {
    backgroundImage: "/wv-bg.jpg",
    name: "West Virginia",
    options: {
      stateCapital: "Charleston",
      wrongOptionOne: "Morgantown",
      wrongOptionTwo: "Wheeling",
      wrongOptionThree: "Clarkston",
    },
  },
  {
    backgroundImage: "/wi-bg.jpg",
    name: "Wisconsin",
    options: {
      stateCapital: "Madison",
      wrongOptionOne: "Milwaukee",
      wrongOptionTwo: "Green Bay",
      wrongOptionThree: "Fond du Lac",
    },
  },
  {
    backgroundImage: "/wy-bg.jpg",
    name: "Wyoming",
    options: {
      stateCapital: "Cheyenne",
      wrongOptionOne: "Jackson Hole",
      wrongOptionTwo: "Casper",
      wrongOptionThree: "Sheridan",
    },
  },
];

export default statesInfo;
