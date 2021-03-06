const mongoose = require("mongoose");
const db = require("../models");

// This file empties the City collection and inserts the city below

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/utahviews"
);

const citySeed = [
    {
        "city": "Alpine",
        "latitude": 40.46,
        "longitude": -111.77
    },
    {
        "city": "Alta",
        "latitude": 40.58,
        "longitude": -111.62
    },
    {
        "city": "Altamont",
        "latitude": 40.36,
        "longitude": -110.29
    },
    {
        "city": "Alton",
        "latitude": 37.43,
        "longitude": -112.51
    },
    {
        "city": "Amalga",
        "latitude": 41.86,
        "longitude": -111.9
    },
    {
        "city": "American Fork",
        "latitude": 40.38,
        "longitude": -111.79
    },
    {
        "city": "Aneth",
        "latitude": 37.21,
        "longitude": -109.16
    },
    {
        "city": "Annabella",
        "latitude": 38.71,
        "longitude": -112.06
    },
    {
        "city": "Antimony",
        "latitude": 38.1,
        "longitude": -111.98
    },
    {
        "city": "Apple Valley",
        "latitude": 37.08,
        "longitude": -113.11
    },
    {
        "city": "Aurora",
        "latitude": 38.92,
        "longitude": -111.93
    },
    {
        "city": "Avon",
        "latitude": 41.54,
        "longitude": -111.81
    },
    {
        "city": "Ballard",
        "latitude": 40.3,
        "longitude": -109.95
    },
    {
        "city": "Bear River City",
        "latitude": 41.61,
        "longitude": -112.12
    },
    {
        "city": "Beaver",
        "latitude": 38.27,
        "longitude": -112.64
    },
    {
        "city": "Benjamin",
        "latitude": 40.09,
        "longitude": -111.74
    },
    {
        "city": "Benson",
        "latitude": 41.75,
        "longitude": -111.92
    },
    {
        "city": "Beryl Junction",
        "latitude": 37.7,
        "longitude": -113.65
    },
    {
        "city": "Bicknell",
        "latitude": 38.34,
        "longitude": -111.54
    },
    {
        "city": "Big Water",
        "latitude": 37.07,
        "longitude": -111.66
    },
    {
        "city": "Blanding",
        "latitude": 37.62,
        "longitude": -109.51
    },
    {
        "city": "Bluebell",
        "latitude": 40.36,
        "longitude": -110.22
    },
    {
        "city": "Bluff",
        "latitude": 37.29,
        "longitude": -109.57
    },
    {
        "city": "Bluffdale",
        "latitude": 40.48,
        "longitude": -111.94
    },
    {
        "city": "Bonanza",
        "latitude": 40.03,
        "longitude": -109.19
    },
    {
        "city": "Boulder",
        "latitude": 37.92,
        "longitude": -111.43
    },
    {
        "city": "Bountiful",
        "latitude": 40.87,
        "longitude": -111.86
    },
    {
        "city": "Brian Head",
        "latitude": 37.7,
        "longitude": -112.84
    },
    {
        "city": "Brigham City",
        "latitude": 41.5,
        "longitude": -112.04
    },
    {
        "city": "Bryce Canyon City",
        "latitude": 37.68,
        "longitude": -112.16
    },
    {
        "city": "Cache",
        "latitude": 41.83,
        "longitude": -112.01
    },
    {
        "city": "Cannonville",
        "latitude": 37.58,
        "longitude": -112.06
    },
    {
        "city": "Carbonville",
        "latitude": 39.63,
        "longitude": -110.83
    },
    {
        "city": "Castle Dale",
        "latitude": 39.22,
        "longitude": -111.02
    },
    {
        "city": "Castle Valley",
        "latitude": 38.63,
        "longitude": -109.4
    },
    {
        "city": "Cedar City",
        "latitude": 37.68,
        "longitude": -113.09
    },
    {
        "city": "Cedar Fort",
        "latitude": 40.34,
        "longitude": -112.11
    },
    {
        "city": "Cedar Hills",
        "latitude": 40.41,
        "longitude": -111.75
    },
    {
        "city": "Centerfield",
        "latitude": 39.13,
        "longitude": -111.82
    },
    {
        "city": "Centerville",
        "latitude": 40.93,
        "longitude": -111.88
    },
    {
        "city": "Central",
        "latitude": 37.41,
        "longitude": -113.63
    },
    {
        "city": "Central Valley",
        "latitude": 38.7,
        "longitude": -112.1
    },
    {
        "city": "Charleston",
        "latitude": 40.47,
        "longitude": -111.46
    },
    {
        "city": "Circleville",
        "latitude": 38.17,
        "longitude": -112.27
    },
    {
        "city": "Clarkston",
        "latitude": 41.92,
        "longitude": -112.05
    },
    {
        "city": "Clawson",
        "latitude": 39.14,
        "longitude": -111.1
    },
    {
        "city": "Clear Creek",
        "latitude": 39.64,
        "longitude": -111.15
    },
    {
        "city": "Clearfield",
        "latitude": 41.1,
        "longitude": -112.02
    },
    {
        "city": "Cleveland",
        "latitude": 39.35,
        "longitude": -110.86
    },
    {
        "city": "Clinton",
        "latitude": 41.14,
        "longitude": -112.07
    },
    {
        "city": "Coalville",
        "latitude": 40.92,
        "longitude": -111.39
    },
    {
        "city": "Copperton",
        "latitude": 40.56,
        "longitude": -112.09
    },
    {
        "city": "Corinne",
        "latitude": 41.55,
        "longitude": -112.12
    },
    {
        "city": "Cornish",
        "latitude": 41.97,
        "longitude": -111.95
    },
    {
        "city": "Cottonwood Heights",
        "latitude": 40.62,
        "longitude": -111.82
    },
    {
        "city": "Cove",
        "latitude": 41.97,
        "longitude": -111.78
    },
    {
        "city": "Dammeron Valley",
        "latitude": 37.3,
        "longitude": -113.67
    },
    {
        "city": "Daniel",
        "latitude": 40.47,
        "longitude": -111.41
    },
    {
        "city": "Delta",
        "latitude": 39.35,
        "longitude": -112.57
    },
    {
        "city": "Deseret",
        "latitude": 39.29,
        "longitude": -112.65
    },
    {
        "city": "Deweyville",
        "latitude": 41.69,
        "longitude": -112.09
    },
    {
        "city": "Draper",
        "latitude": 40.5,
        "longitude": -111.86
    },
    {
        "city": "Duchesne",
        "latitude": 40.17,
        "longitude": -110.39
    },
    {
        "city": "Dugway",
        "latitude": 40.23,
        "longitude": -112.75
    },
    {
        "city": "Dutch John",
        "latitude": 40.93,
        "longitude": -109.39
    },
    {
        "city": "Eagle Mountain",
        "latitude": 40.31,
        "longitude": -112
    },
    {
        "city": "East Carbon",
        "latitude": 39.53,
        "longitude": -110.44
    },
    {
        "city": "Echo",
        "latitude": 40.98,
        "longitude": -111.44
    },
    {
        "city": "Eden",
        "latitude": 41.3,
        "longitude": -111.81
    },
    {
        "city": "Elberta",
        "latitude": 39.97,
        "longitude": -111.96
    },
    {
        "city": "Elk Ridge",
        "latitude": 40.01,
        "longitude": -111.68
    },
    {
        "city": "Elmo",
        "latitude": 39.39,
        "longitude": -110.82
    },
    {
        "city": "Elsinore",
        "latitude": 38.68,
        "longitude": -112.15
    },
    {
        "city": "Elwood",
        "latitude": 41.68,
        "longitude": -112.14
    },
    {
        "city": "Emery",
        "latitude": 38.92,
        "longitude": -111.25
    },
    {
        "city": "Emigration Canyon",
        "latitude": 40.79,
        "longitude": -111.74
    },
    {
        "city": "Enoch",
        "latitude": 37.77,
        "longitude": -113.04
    },
    {
        "city": "Enterprise",
        "latitude": 41.11,
        "longitude": -111.73
    },
    {
        "city": "Enterprise",
        "latitude": 37.57,
        "longitude": -113.74
    },
    {
        "city": "Ephraim",
        "latitude": 39.36,
        "longitude": -111.58
    },
    {
        "city": "Erda",
        "latitude": 40.6,
        "longitude": -112.33
    },
    {
        "city": "Escalante",
        "latitude": 37.76,
        "longitude": -111.6
    },
    {
        "city": "Eureka",
        "latitude": 39.96,
        "longitude": -112.12
    },
    {
        "city": "Fairfield",
        "latitude": 40.25,
        "longitude": -112.08
    },
    {
        "city": "Fairview",
        "latitude": 39.63,
        "longitude": -111.44
    },
    {
        "city": "Farmington",
        "latitude": 40.98,
        "longitude": -111.91
    },
    {
        "city": "Farr West",
        "latitude": 41.3,
        "longitude": -112.03
    },
    {
        "city": "Fayette",
        "latitude": 39.22,
        "longitude": -111.85
    },
    {
        "city": "Ferron",
        "latitude": 39.09,
        "longitude": -111.13
    },
    {
        "city": "Fielding",
        "latitude": 41.81,
        "longitude": -112.12
    },
    {
        "city": "Fillmore",
        "latitude": 38.97,
        "longitude": -112.34
    },
    {
        "city": "Flaming Gorge",
        "latitude": 40.89,
        "longitude": -109.48
    },
    {
        "city": "Fort Duchesne",
        "latitude": 40.28,
        "longitude": -109.88
    },
    {
        "city": "Fountain Green",
        "latitude": 39.63,
        "longitude": -111.64
    },
    {
        "city": "Francis",
        "latitude": 40.61,
        "longitude": -111.28
    },
    {
        "city": "Fremont",
        "latitude": 38.46,
        "longitude": -111.61
    },
    {
        "city": "Fruit Heights",
        "latitude": 41.03,
        "longitude": -111.91
    },
    {
        "city": "Garden",
        "latitude": 41.89,
        "longitude": -111.43
    },
    {
        "city": "Garden City",
        "latitude": 41.94,
        "longitude": -111.41
    },
    {
        "city": "Garland",
        "latitude": 41.74,
        "longitude": -112.16
    },
    {
        "city": "Genola",
        "latitude": 40.01,
        "longitude": -111.85
    },
    {
        "city": "Glendale",
        "latitude": 37.34,
        "longitude": -112.6
    },
    {
        "city": "Glenwood",
        "latitude": 38.76,
        "longitude": -111.99
    },
    {
        "city": "Goshen",
        "latitude": 39.95,
        "longitude": -111.9
    },
    {
        "city": "Granite",
        "latitude": 40.57,
        "longitude": -111.8
    },
    {
        "city": "Grantsville",
        "latitude": 40.6,
        "longitude": -112.47
    },
    {
        "city": "Green River",
        "latitude": 38.98,
        "longitude": -110.09
    },
    {
        "city": "Gunnison",
        "latitude": 39.16,
        "longitude": -111.81
    },
    {
        "city": "Halchita",
        "latitude": 37.13,
        "longitude": -109.91
    },
    {
        "city": "Halls Crossing",
        "latitude": 37.46,
        "longitude": -110.68
    },
    {
        "city": "Hanksville",
        "latitude": 38.37,
        "longitude": -110.71
    },
    {
        "city": "Harrisville",
        "latitude": 41.29,
        "longitude": -111.99
    },
    {
        "city": "Hatch",
        "latitude": 37.65,
        "longitude": -112.44
    },
    {
        "city": "Heber",
        "latitude": 40.51,
        "longitude": -111.4
    },
    {
        "city": "Helper",
        "latitude": 39.69,
        "longitude": -110.86
    },
    {
        "city": "Henefer",
        "latitude": 41.02,
        "longitude": -111.49
    },
    {
        "city": "Henrieville",
        "latitude": 37.56,
        "longitude": -112
    },
    {
        "city": "Herriman",
        "latitude": 40.49,
        "longitude": -112.01
    },
    {
        "city": "Hideout",
        "latitude": 40.64,
        "longitude": -111.4
    },
    {
        "city": "Highland",
        "latitude": 40.43,
        "longitude": -111.8
    },
    {
        "city": "Hildale",
        "latitude": 37.01,
        "longitude": -112.99
    },
    {
        "city": "Hinckley",
        "latitude": 39.33,
        "longitude": -112.67
    },
    {
        "city": "Holden",
        "latitude": 39.1,
        "longitude": -112.27
    },
    {
        "city": "Holladay",
        "latitude": 40.66,
        "longitude": -111.82
    },
    {
        "city": "Honeyville",
        "latitude": 41.64,
        "longitude": -112.09
    },
    {
        "city": "Hooper",
        "latitude": 41.16,
        "longitude": -112.29
    },
    {
        "city": "Howell",
        "latitude": 41.77,
        "longitude": -112.45
    },
    {
        "city": "Hoytsville",
        "latitude": 40.88,
        "longitude": -111.38
    },
    {
        "city": "Huntington",
        "latitude": 39.33,
        "longitude": -110.96
    },
    {
        "city": "Huntsville",
        "latitude": 41.26,
        "longitude": -111.77
    },
    {
        "city": "Hurricane",
        "latitude": 37.15,
        "longitude": -113.35
    },
    {
        "city": "Hyde Park",
        "latitude": 41.8,
        "longitude": -111.81
    },
    {
        "city": "Hyrum",
        "latitude": 41.63,
        "longitude": -111.84
    },
    {
        "city": "Independence",
        "latitude": 40.41,
        "longitude": -111.3
    },
    {
        "city": "Ivins",
        "latitude": 37.17,
        "longitude": -113.68
    },
    {
        "city": "Jensen",
        "latitude": 40.37,
        "longitude": -109.36
    },
    {
        "city": "Joseph",
        "latitude": 38.62,
        "longitude": -112.22
    },
    {
        "city": "Junction",
        "latitude": 38.24,
        "longitude": -112.22
    },
    {
        "city": "Kamas",
        "latitude": 40.65,
        "longitude": -111.27
    },
    {
        "city": "Kanab",
        "latitude": 37.03,
        "longitude": -112.52
    },
    {
        "city": "Kanarraville",
        "latitude": 37.54,
        "longitude": -113.18
    },
    {
        "city": "Kanosh",
        "latitude": 38.8,
        "longitude": -112.44
    },
    {
        "city": "Kaysville",
        "latitude": 41.03,
        "longitude": -111.95
    },
    {
        "city": "Kearns",
        "latitude": 40.65,
        "longitude": -112.01
    },
    {
        "city": "Kenilworth",
        "latitude": 39.68,
        "longitude": -110.81
    },
    {
        "city": "Kingston",
        "latitude": 38.21,
        "longitude": -112.18
    },
    {
        "city": "Koosharem",
        "latitude": 38.51,
        "longitude": -111.88
    },
    {
        "city": "La Sal",
        "latitude": 38.3,
        "longitude": -109.26
    },
    {
        "city": "La Verkin",
        "latitude": 37.23,
        "longitude": -113.25
    },
    {
        "city": "Lake Shore",
        "latitude": 40.13,
        "longitude": -111.75
    },
    {
        "city": "Laketown",
        "latitude": 41.83,
        "longitude": -111.32
    },
    {
        "city": "Layton",
        "latitude": 41.08,
        "longitude": -111.96
    },
    {
        "city": "Leamington",
        "latitude": 39.53,
        "longitude": -112.29
    },
    {
        "city": "Leeds",
        "latitude": 37.24,
        "longitude": -113.36
    },
    {
        "city": "Lehi",
        "latitude": 40.41,
        "longitude": -111.87
    },
    {
        "city": "Levan",
        "latitude": 39.56,
        "longitude": -111.86
    },
    {
        "city": "Lewiston",
        "latitude": 41.96,
        "longitude": -111.88
    },
    {
        "city": "Liberty",
        "latitude": 41.34,
        "longitude": -111.86
    },
    {
        "city": "Lindon",
        "latitude": 40.34,
        "longitude": -111.72
    },
    {
        "city": "Loa",
        "latitude": 38.4,
        "longitude": -111.64
    },
    {
        "city": "Logan",
        "latitude": 41.74,
        "longitude": -111.84
    },
    {
        "city": "Lyman",
        "latitude": 38.4,
        "longitude": -111.59
    },
    {
        "city": "Lynndyl",
        "latitude": 39.51,
        "longitude": -112.4
    },
    {
        "city": "Maeser",
        "latitude": 40.47,
        "longitude": -109.58
    },
    {
        "city": "Magna",
        "latitude": 40.71,
        "longitude": -112.08
    },
    {
        "city": "Manila",
        "latitude": 40.99,
        "longitude": -109.72
    },
    {
        "city": "Manti",
        "latitude": 39.27,
        "longitude": -111.64
    },
    {
        "city": "Mantua",
        "latitude": 41.5,
        "longitude": -111.93
    },
    {
        "city": "Mapleton",
        "latitude": 40.12,
        "longitude": -111.57
    },
    {
        "city": "Marion",
        "latitude": 40.68,
        "longitude": -111.28
    },
    {
        "city": "Marriott-Slaterville",
        "latitude": 41.26,
        "longitude": -112.04
    },
    {
        "city": "Marysvale",
        "latitude": 38.44,
        "longitude": -112.26
    },
    {
        "city": "Mayfield",
        "latitude": 39.12,
        "longitude": -111.71
    },
    {
        "city": "Meadow",
        "latitude": 38.89,
        "longitude": -112.41
    },
    {
        "city": "Mendon",
        "latitude": 41.71,
        "longitude": -111.98
    },
    {
        "city": "Mexican Hat",
        "latitude": 37.17,
        "longitude": -109.87
    },
    {
        "city": "Midvale",
        "latitude": 40.61,
        "longitude": -111.89
    },
    {
        "city": "Midway",
        "latitude": 40.52,
        "longitude": -111.48
    },
    {
        "city": "Milford",
        "latitude": 38.39,
        "longitude": -113.02
    },
    {
        "city": "Millcreek",
        "latitude": 40.69,
        "longitude": -111.83
    },
    {
        "city": "Millville",
        "latitude": 41.69,
        "longitude": -111.82
    },
    {
        "city": "Minersville",
        "latitude": 38.21,
        "longitude": -112.92
    },
    {
        "city": "Moab",
        "latitude": 38.57,
        "longitude": -109.55
    },
    {
        "city": "Mona",
        "latitude": 39.81,
        "longitude": -111.85
    },
    {
        "city": "Monroe",
        "latitude": 38.62,
        "longitude": -112.12
    },
    {
        "city": "Montezuma Creek",
        "latitude": 37.26,
        "longitude": -109.3
    },
    {
        "city": "Monticello",
        "latitude": 37.87,
        "longitude": -109.35
    },
    {
        "city": "Morgan",
        "latitude": 41.04,
        "longitude": -111.68
    },
    {
        "city": "Moroni",
        "latitude": 39.53,
        "longitude": -111.58
    },
    {
        "city": "Mount Pleasant",
        "latitude": 39.54,
        "longitude": -111.46
    },
    {
        "city": "Mountain Green",
        "latitude": 41.15,
        "longitude": -111.79
    },
    {
        "city": "Murray",
        "latitude": 40.65,
        "longitude": -111.89
    },
    {
        "city": "Myton",
        "latitude": 40.19,
        "longitude": -110.06
    },
    {
        "city": "Naples",
        "latitude": 40.43,
        "longitude": -109.49
    },
    {
        "city": "Navajo Mountain",
        "latitude": 37.05,
        "longitude": -110.79
    },
    {
        "city": "Neola",
        "latitude": 40.43,
        "longitude": -110.03
    },
    {
        "city": "Nephi",
        "latitude": 39.71,
        "longitude": -111.83
    },
    {
        "city": "New Harmony",
        "latitude": 37.48,
        "longitude": -113.31
    },
    {
        "city": "Newcastle",
        "latitude": 37.66,
        "longitude": -113.56
    },
    {
        "city": "Newton",
        "latitude": 41.86,
        "longitude": -111.99
    },
    {
        "city": "Nibley",
        "latitude": 41.67,
        "longitude": -111.85
    },
    {
        "city": "North Logan",
        "latitude": 41.78,
        "longitude": -111.81
    },
    {
        "city": "North Ogden",
        "latitude": 41.31,
        "longitude": -111.96
    },
    {
        "city": "North Salt Lake",
        "latitude": 40.84,
        "longitude": -111.92
    },
    {
        "city": "Oak City",
        "latitude": 39.38,
        "longitude": -112.34
    },
    {
        "city": "Oakley",
        "latitude": 40.73,
        "longitude": -111.28
    },
    {
        "city": "Oasis",
        "latitude": 39.29,
        "longitude": -112.63
    },
    {
        "city": "Ogden",
        "latitude": 41.23,
        "longitude": -111.97
    },
    {
        "city": "Oljato-Monument Valley",
        "latitude": 37.03,
        "longitude": -110.25
    },
    {
        "city": "Ophir",
        "latitude": 40.37,
        "longitude": -112.26
    },
    {
        "city": "Orangeville",
        "latitude": 39.23,
        "longitude": -111.06
    },
    {
        "city": "Orderville",
        "latitude": 37.25,
        "longitude": -112.66
    },
    {
        "city": "Orem",
        "latitude": 40.3,
        "longitude": -111.7
    },
    {
        "city": "Palmyra",
        "latitude": 40.15,
        "longitude": -111.7
    },
    {
        "city": "Panguitch",
        "latitude": 37.82,
        "longitude": -112.44
    },
    {
        "city": "Paradise",
        "latitude": 41.57,
        "longitude": -111.83
    },
    {
        "city": "Paragonah",
        "latitude": 37.89,
        "longitude": -112.77
    },
    {
        "city": "Park City",
        "latitude": 40.64,
        "longitude": -111.5
    },
    {
        "city": "Parowan",
        "latitude": 37.83,
        "longitude": -112.83
    },
    {
        "city": "Payson",
        "latitude": 40.04,
        "longitude": -111.73
    },
    {
        "city": "Peoa",
        "latitude": 40.73,
        "longitude": -111.34
    },
    {
        "city": "Perry",
        "latitude": 41.46,
        "longitude": -112.04
    },
    {
        "city": "Peter",
        "latitude": 41.77,
        "longitude": -111.99
    },
    {
        "city": "Pine Valley",
        "latitude": 37.39,
        "longitude": -113.51
    },
    {
        "city": "Plain City",
        "latitude": 41.31,
        "longitude": -112.09
    },
    {
        "city": "Pleasant Grove",
        "latitude": 40.37,
        "longitude": -111.74
    },
    {
        "city": "Pleasant View",
        "latitude": 41.32,
        "longitude": -112
    },
    {
        "city": "Plymouth",
        "latitude": 41.88,
        "longitude": -112.14
    },
    {
        "city": "Portage",
        "latitude": 41.98,
        "longitude": -112.24
    },
    {
        "city": "Price",
        "latitude": 39.6,
        "longitude": -110.8
    },
    {
        "city": "Providence",
        "latitude": 41.7,
        "longitude": -111.81
    },
    {
        "city": "Provo",
        "latitude": 40.25,
        "longitude": -111.65
    },
    {
        "city": "Randlett",
        "latitude": 40.23,
        "longitude": -109.83
    },
    {
        "city": "Randolph",
        "latitude": 41.66,
        "longitude": -111.18
    },
    {
        "city": "Redmond",
        "latitude": 39.01,
        "longitude": -111.87
    },
    {
        "city": "Richfield",
        "latitude": 38.76,
        "longitude": -112.09
    },
    {
        "city": "Richmond",
        "latitude": 41.92,
        "longitude": -111.81
    },
    {
        "city": "River Heights",
        "latitude": 41.72,
        "longitude": -111.82
    },
    {
        "city": "Riverdale",
        "latitude": 41.17,
        "longitude": -112
    },
    {
        "city": "Riverside",
        "latitude": 41.81,
        "longitude": -112.14
    },
    {
        "city": "Riverton",
        "latitude": 40.52,
        "longitude": -111.96
    },
    {
        "city": "Rockville",
        "latitude": 37.15,
        "longitude": -113.05
    },
    {
        "city": "Rocky Ridge",
        "latitude": 39.92,
        "longitude": -111.83
    },
    {
        "city": "Roosevelt",
        "latitude": 40.29,
        "longitude": -110
    },
    {
        "city": "Roy",
        "latitude": 41.17,
        "longitude": -112.05
    },
    {
        "city": "Rush Valley",
        "latitude": 40.36,
        "longitude": -112.45
    },
    {
        "city": "Salem",
        "latitude": 40.05,
        "longitude": -111.67
    },
    {
        "city": "Salina",
        "latitude": 38.94,
        "longitude": -111.87
    },
    {
        "city": "Salt Lake City",
        "latitude": 40.78,
        "longitude": -111.93
    },
    {
        "city": "Samak",
        "latitude": 40.63,
        "longitude": -111.22
    },
    {
        "city": "Sandy",
        "latitude": 40.57,
        "longitude": -111.85
    },
    {
        "city": "Santa Clara",
        "latitude": 37.13,
        "longitude": -113.66
    },
    {
        "city": "Santaquin",
        "latitude": 39.97,
        "longitude": -111.79
    },
    {
        "city": "Saratoga Springs",
        "latitude": 40.35,
        "longitude": -111.91
    },
    {
        "city": "Scipio",
        "latitude": 39.25,
        "longitude": -112.1
    },
    {
        "city": "Scofield",
        "latitude": 39.72,
        "longitude": -111.16
    },
    {
        "city": "Sigurd",
        "latitude": 38.85,
        "longitude": -111.97
    },
    {
        "city": "Silver Summit",
        "latitude": 40.74,
        "longitude": -111.49
    },
    {
        "city": "Smithfield",
        "latitude": 41.83,
        "longitude": -111.83
    },
    {
        "city": "Snowville",
        "latitude": 41.97,
        "longitude": -112.72
    },
    {
        "city": "Snyderville",
        "latitude": 40.7,
        "longitude": -111.54
    },
    {
        "city": "South Jordan",
        "latitude": 40.56,
        "longitude": -111.98
    },
    {
        "city": "South Ogden",
        "latitude": 41.17,
        "longitude": -111.96
    },
    {
        "city": "South Salt Lake",
        "latitude": 40.71,
        "longitude": -111.9
    },
    {
        "city": "South Weber",
        "latitude": 41.13,
        "longitude": -111.94
    },
    {
        "city": "South Willard",
        "latitude": 41.36,
        "longitude": -112.04
    },
    {
        "city": "Spanish Fork",
        "latitude": 40.11,
        "longitude": -111.64
    },
    {
        "city": "Spanish Valley",
        "latitude": 38.47,
        "longitude": -109.42
    },
    {
        "city": "Spring City",
        "latitude": 39.48,
        "longitude": -111.49
    },
    {
        "city": "Spring Glen",
        "latitude": 39.66,
        "longitude": -110.85
    },
    {
        "city": "Spring Lake",
        "latitude": 40.01,
        "longitude": -111.75
    },
    {
        "city": "Springdale",
        "latitude": 37.18,
        "longitude": -113
    },
    {
        "city": "Springville",
        "latitude": 40.16,
        "longitude": -111.62
    },
    {
        "city": "St. George",
        "latitude": 37.08,
        "longitude": -113.58
    },
    {
        "city": "Stansbury Park",
        "latitude": 40.64,
        "longitude": -112.3
    },
    {
        "city": "Sterling",
        "latitude": 39.19,
        "longitude": -111.69
    },
    {
        "city": "Stockton",
        "latitude": 40.45,
        "longitude": -112.37
    },
    {
        "city": "Summit",
        "latitude": 37.8,
        "longitude": -112.94
    },
    {
        "city": "Summit Park",
        "latitude": 40.74,
        "longitude": -111.58
    },
    {
        "city": "Sunnyside",
        "latitude": 39.55,
        "longitude": -110.4
    },
    {
        "city": "Sunset",
        "latitude": 41.14,
        "longitude": -112.03
    },
    {
        "city": "Sutherland",
        "latitude": 39.39,
        "longitude": -112.64
    },
    {
        "city": "Syracuse",
        "latitude": 41.09,
        "longitude": -112.07
    },
    {
        "city": "Tabiona",
        "latitude": 40.35,
        "longitude": -110.71
    },
    {
        "city": "Taylorsville",
        "latitude": 40.66,
        "longitude": -111.95
    },
    {
        "city": "Teasdale",
        "latitude": 38.29,
        "longitude": -111.47
    },
    {
        "city": "Thatcher",
        "latitude": 41.68,
        "longitude": -112.32
    },
    {
        "city": "Thompson Springs",
        "latitude": 38.96,
        "longitude": -109.7
    },
    {
        "city": "Timber Lakes",
        "latitude": 40.47,
        "longitude": -111.25
    },
    {
        "city": "Tooele",
        "latitude": 40.54,
        "longitude": -112.31
    },
    {
        "city": "Toquerville",
        "latitude": 37.26,
        "longitude": -113.29
    },
    {
        "city": "Torrey",
        "latitude": 38.3,
        "longitude": -111.42
    },
    {
        "city": "Tremonton",
        "latitude": 41.72,
        "longitude": -112.19
    },
    {
        "city": "Trenton",
        "latitude": 41.91,
        "longitude": -111.93
    },
    {
        "city": "Tropic",
        "latitude": 37.63,
        "longitude": -112.09
    },
    {
        "city": "Tselakai Dezza",
        "latitude": 37.21,
        "longitude": -109.61
    },
    {
        "city": "Uintah",
        "latitude": 41.14,
        "longitude": -111.93
    },
    {
        "city": "Vernal",
        "latitude": 40.45,
        "longitude": -109.54
    },
    {
        "city": "Vernon",
        "latitude": 40.09,
        "longitude": -112.45
    },
    {
        "city": "Veyo",
        "latitude": 37.34,
        "longitude": -113.69
    },
    {
        "city": "Vineyard",
        "latitude": 40.31,
        "longitude": -111.75
    },
    {
        "city": "Virgin",
        "latitude": 37.21,
        "longitude": -113.21
    },
    {
        "city": "Wales",
        "latitude": 39.49,
        "longitude": -111.64
    },
    {
        "city": "Wallsburg",
        "latitude": 40.39,
        "longitude": -111.42
    },
    {
        "city": "Wanship",
        "latitude": 40.82,
        "longitude": -111.42
    },
    {
        "city": "Washington",
        "latitude": 37.13,
        "longitude": -113.49
    },
    {
        "city": "Washington Terrace",
        "latitude": 41.17,
        "longitude": -111.98
    },
    {
        "city": "Wellington",
        "latitude": 39.53,
        "longitude": -110.73
    },
    {
        "city": "Wellsville",
        "latitude": 41.63,
        "longitude": -111.94
    },
    {
        "city": "Wendover",
        "latitude": 40.72,
        "longitude": -114.02
    },
    {
        "city": "West Bountiful",
        "latitude": 40.9,
        "longitude": -111.91
    },
    {
        "city": "West Haven",
        "latitude": 41.21,
        "longitude": -112.05
    },
    {
        "city": "West Jordan",
        "latitude": 40.6,
        "longitude": -112
    },
    {
        "city": "West Mountain",
        "latitude": 40.06,
        "longitude": -111.79
    },
    {
        "city": "West Point",
        "latitude": 41.12,
        "longitude": -112.1
    },
    {
        "city": "West Valley City",
        "latitude": 40.69,
        "longitude": -112.01
    },
    {
        "city": "West Wood",
        "latitude": 39.61,
        "longitude": -110.84
    },
    {
        "city": "White City",
        "latitude": 40.57,
        "longitude": -111.86
    },
    {
        "city": "White Mesa",
        "latitude": 37.46,
        "longitude": -109.46
    },
    {
        "city": "Whiterocks",
        "latitude": 40.47,
        "longitude": -109.94
    },
    {
        "city": "Willard",
        "latitude": 41.41,
        "longitude": -112.04
    },
    {
        "city": "Wolf Creek",
        "latitude": 41.33,
        "longitude": -111.83
    },
    {
        "city": "Woodland",
        "latitude": 40.58,
        "longitude": -111.24
    },
    {
        "city": "Woodland Hills",
        "latitude": 40.01,
        "longitude": -111.65
    },
    {
        "city": "Woodruff",
        "latitude": 41.52,
        "longitude": -111.16
    },
    {
        "city": "Woods Cross",
        "latitude": 40.87,
        "longitude": -111.92}
];

db.Cities.remove({})
    .then(() => db.City.collection.insertMany(citySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });