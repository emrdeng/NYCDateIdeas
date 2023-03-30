// Identifying the elements:
const dateControl = document.querySelector("input[type=date]");
const submitBtn = document.querySelector(".submit-btn");
const heartBtn = document.querySelector(".heart-btn");
// const addBtn = document.querySelector(".add-button");

const restCloseBtn = document.querySelector(".rest-close-button");
const dessertCloseBtn = document.querySelector(".dessert-close-button");

const dateSaveCheckbox = document.querySelector(".date-activity-save-checkbox");
const restSaveCheckbox = document.querySelector(".rest-save-checkbox");
const dessertSaveCheckbox = document.querySelector(".dessert-save-checkbox");

const restWalkDistance = document.querySelector(".rest-walking-checkbox");
const dessertWalkDistance = document.querySelector(".dessert-walking-checkbox");

// Event Listeners:
submitBtn.addEventListener("click", callEverything);
// submitBtn.addEventListener("click", callTheWeather);
submitBtn.addEventListener("mouseover", heartAnimation);
// submitBtn.addEventListener("click", noFaceDemandsFood);
// submitBtn.addEventListener("click", extraChatTime);
// addBtn.addEventListener("mouseover", addBtnMouseOver);
// addBtn.addEventListener("mouseout", addBtnMouseOut);

// Storing the locations of the date activity and restaurant:
var dateActivityLocationArray = [];
var restLocationArray = [];

// Function heartAnimation This is the animation of the heart button on hover.
function heartAnimation() {
  var heartElement = heartBtn.classList;
  heartElement.add("fa-flip");
  setTimeout(removeFlipClass, 1750);

  function removeFlipClass() {
    heartElement.toggle("fa-flip");
    heartElement.toggle("fa-heart");
    heartElement.toggle("fa-heart-crack");
  }
}

//Function addBtnMouseOver changes the i-class to an orange color upon hover and removes the effect when no longer hovering:
function addBtnMouseOver() {
  document.querySelector(".fa-plus").style.color = "#b54507";
}

function addBtnMouseOut() {
  document.querySelector(".fa-plus").style.color = "#1C3879";
}

// Restaurant API:

//This is the combinedFood object for our reference purposes.
var cuisineNames = {
  "4617": {
    "count": "1242",
    "label": "Italian",
    "locale_independent_label": "Italian",
    "priority": "413",
    "selected": false
  },
  "5086": {
    "count": "304",
    "label": "French",
    "locale_independent_label": "French",
    "priority": "312",
    "selected": false
  },
  "5110": {
    "count": "464",
    "label": "Mexican",
    "locale_independent_label": "Mexican",
    "priority": "493",
    "selected": false
  },
  "5379": {
    "count": "384",
    "label": "Chinese",
    "locale_independent_label": "Chinese",
    "priority": "180",
    "selected": false
  },
  "5473": {
    "count": "617",
    "label": "Japanese",
    "locale_independent_label": "Japanese",
    "priority": "421",
    "selected": false
  },
  "9899": {
    "count": "66",
    "label": "Ice Cream",
    "locale_independent_label": "Ice Cream",
    "priority": "404",
    "selected": false
  },
  "9908": {
    "count": "2279",
    "label": "American",
    "locale_independent_label": "American",
    "priority": "14",
    "selected": false
  },
  "9910": {
    "count": "42",
    "label": "Waffles & Crepes",
    "locale_independent_label": "Waffles & Crepes",
    "priority": "814",
    "selected": false
  },
  "9911": {
    "count": "97",
    "label": "Juice & Smoothies",
    "locale_independent_label": "Juice & Smoothies",
    "priority": "430",
    "selected": false
  },
  "10345": {
    "count": "169",
    "label": "Steakhouse",
    "locale_independent_label": "Steakhouse",
    "priority": "720",
    "selected": false
  },
  "10346": {
    "count": "213",
    "label": "Indian",
    "locale_independent_label": "Indian",
    "priority": "406",
    "selected": false
  },
  "10347": {
    "count": "21",
    "label": "German",
    "locale_independent_label": "German",
    "priority": "344",
    "selected": false
  },
  "10348": {
    "count": "27",
    "label": "Brazilian",
    "locale_independent_label": "Brazilian",
    "priority": "90",
    "selected": false
  },
  "10611": {
    "count": "1",
    "label": "Hunan",
    "locale_independent_label": "Hunan",
    "priority": "402",
    "parent_id": "5379",
    "selected": false
  },
  "10616": {
    "count": "38",
    "label": "Chowder",
    "locale_independent_label": "Chowder",
    "priority": "192",
    "selected": false
  },
  "10617": {
    "count": "9",
    "label": "Belgian",
    "locale_independent_label": "Belgian",
    "priority": "76",
    "selected": false
  },
  "10618": {
    "count": "128",
    "label": "Irish",
    "locale_independent_label": "Irish",
    "priority": "411",
    "selected": false
  },
  "10620": {
    "count": "7",
    "label": "Austrian",
    "locale_independent_label": "Austrian",
    "priority": "40",
    "selected": false
  },
  "10621": {
    "count": "34",
    "label": "Brew Pub",
    "locale_independent_label": "Brew Pub",
    "priority": "94",
    "selected": false
  },
  "10622": {
    "count": "123",
    "label": "Caribbean",
    "locale_independent_label": "Caribbean",
    "priority": "133",
    "selected": false
  },
  "10626": {
    "count": "44",
    "label": "Lebanese",
    "locale_independent_label": "Lebanese",
    "priority": "462",
    "selected": false
  },
  "10628": {
    "count": "3",
    "label": "Swiss",
    "locale_independent_label": "Swiss",
    "priority": "741",
    "selected": false
  },
  "10631": {
    "count": "39",
    "label": "Peruvian",
    "locale_independent_label": "Peruvian",
    "priority": "573",
    "selected": false
  },
  "10632": {
    "count": "43",
    "label": "African",
    "locale_independent_label": "African",
    "priority": "5",
    "selected": false
  },
  "10633": {
    "count": "17",
    "label": "Moroccan",
    "locale_independent_label": "Moroccan",
    "priority": "504",
    "selected": false
  },
  "10634": {
    "count": "19",
    "label": "Southwestern",
    "locale_independent_label": "Southwestern",
    "priority": "709",
    "selected": false
  },
  "10635": {
    "count": "27",
    "label": "Cajun & Creole",
    "locale_independent_label": "Cajun & Creole",
    "priority": "110",
    "selected": false
  },
  "10636": {
    "count": "19",
    "label": "Filipino",
    "locale_independent_label": "Filipino",
    "priority": "300",
    "selected": false
  },
  "10637": {
    "count": "15",
    "label": "Polish",
    "locale_independent_label": "Polish",
    "priority": "590",
    "selected": false
  },
  "10639": {
    "count": "349",
    "label": "Latin",
    "locale_independent_label": "Latin",
    "priority": "459",
    "selected": false
  },
  "10640": {
    "count": "1146",
    "label": "Bar",
    "locale_independent_label": "Bar",
    "priority": "61",
    "selected": false
  },
  "10641": {
    "count": "673",
    "label": "Pizza",
    "locale_independent_label": "Pizza",
    "priority": "584",
    "selected": false
  },
  "10642": {
    "count": "546",
    "label": "Cafe",
    "locale_independent_label": "Cafe",
    "priority": "109",
    "selected": false
  },
  "10643": {
    "count": "343",
    "label": "Seafood",
    "locale_independent_label": "Seafood",
    "priority": "673",
    "selected": false
  },
  "10645": {
    "count": "390",
    "label": "Noodle",
    "locale_independent_label": "Noodle",
    "priority": "523",
    "selected": false
  },
  "10646": {
    "count": "401",
    "label": "Fast Food",
    "locale_independent_label": "Fast Food",
    "priority": "292",
    "selected": false
  },
  "10647": {
    "count": "471",
    "label": "Sandwiches",
    "locale_independent_label": "Sandwiches",
    "priority": "658",
    "selected": false
  },
  "10648": {
    "count": "158",
    "label": "International",
    "locale_independent_label": "International",
    "priority": "410",
    "selected": false
  },
  "10649": {
    "count": "490",
    "label": "Mediterranean",
    "locale_independent_label": "Mediterranean",
    "priority": "491",
    "selected": false
  },
  "10651": {
    "count": "95",
    "label": "Barbecue",
    "locale_independent_label": "Barbecue",
    "priority": "63",
    "selected": false
  },
  "10653": {
    "count": "408",
    "label": "Sushi",
    "locale_independent_label": "Sushi",
    "priority": "738",
    "selected": false
  },
  "10654": {
    "count": "312",
    "label": "European",
    "locale_independent_label": "European",
    "priority": "287",
    "selected": false
  },
  "10655": {
    "count": "344",
    "label": "Spanish",
    "locale_independent_label": "Spanish",
    "priority": "714",
    "selected": false
  },
  "10659": {
    "count": "1201",
    "label": "Asian",
    "locale_independent_label": "Asian",
    "priority": "36",
    "selected": false
  },
  "10660": {
    "count": "232",
    "label": "Thai",
    "locale_independent_label": "Thai",
    "priority": "764",
    "selected": false
  },
  "10661": {
    "count": "142",
    "label": "Korean",
    "locale_independent_label": "Korean",
    "priority": "445",
    "selected": true
  },
  "10662": {
    "count": "21",
    "label": "British",
    "locale_independent_label": "British",
    "priority": "95",
    "selected": false
  },
  "10663": {
    "count": "60",
    "label": "Turkish",
    "locale_independent_label": "Turkish",
    "priority": "793",
    "selected": false
  },
  "10664": {
    "count": "127",
    "label": "Greek",
    "locale_independent_label": "Greek",
    "priority": "354",
    "selected": false
  },
  "10666": {
    "count": "160",
    "label": "Deli",
    "locale_independent_label": "Deli",
    "priority": "256",
    "selected": false
  },
  "10668": {
    "count": "63",
    "label": "Grill",
    "locale_independent_label": "Grill",
    "priority": "358",
    "selected": false
  },
  "10669": {
    "count": "156",
    "label": "Contemporary",
    "locale_independent_label": "Contemporary",
    "priority": "214",
    "selected": false
  },
  "10670": {
    "count": "897",
    "label": "Pub",
    "locale_independent_label": "Pub",
    "priority": "611",
    "selected": false
  },
  "10671": {
    "count": "101",
    "label": "Fusion",
    "locale_independent_label": "Fusion",
    "priority": "334",
    "selected": false
  },
  "10675": {
    "count": "90",
    "label": "Vietnamese",
    "locale_independent_label": "Vietnamese",
    "priority": "809",
    "selected": false
  },
  "10676": {
    "count": "159",
    "label": "Diner",
    "locale_independent_label": "Diner",
    "priority": "258",
    "selected": false
  },
  "10678": {
    "count": "1038",
    "label": "Pasta",
    "locale_independent_label": "Pasta",
    "priority": "562",
    "selected": false
  },
  "10679": {
    "count": "252",
    "label": "Healthy",
    "locale_independent_label": "Healthy",
    "priority": "385",
    "selected": false
  },
  "10680": {
    "count": "14",
    "label": "Portuguese",
    "locale_independent_label": "Portuguese",
    "priority": "601",
    "selected": false
  },
  "10681": {
    "count": "13",
    "label": "Australian",
    "locale_independent_label": "Australian",
    "priority": "39",
    "selected": false
  },
  "10682": {
    "count": "209",
    "label": "Wine Bar",
    "locale_independent_label": "Wine Bar",
    "priority": "819",
    "selected": false
  },
  "10683": {
    "count": "74",
    "label": "Gastropub",
    "locale_independent_label": "Gastropub",
    "priority": "338",
    "selected": false
  },
  "10685": {
    "count": "65",
    "label": "Chicken Wings",
    "locale_independent_label": "Chicken Wings",
    "priority": "175",
    "selected": false
  },
  "10686": {
    "count": "25",
    "label": "Street Food",
    "locale_independent_label": "Street Food",
    "priority": "727",
    "selected": false
  },
  "10687": {
    "count": "224",
    "label": "Middle Eastern",
    "locale_independent_label": "Middle Eastern",
    "priority": "494",
    "selected": false
  },
  "10690": {
    "count": "7",
    "label": "Indonesian",
    "locale_independent_label": "Indonesian",
    "priority": "409",
    "selected": false
  },
  "10692": {
    "count": "53",
    "label": "Cantonese",
    "locale_independent_label": "Cantonese",
    "priority": "124",
    "selected": false
  },
  "10693": {
    "count": "15",
    "label": "Russian",
    "locale_independent_label": "Russian",
    "priority": "645",
    "selected": false
  },
  "10695": {
    "count": "38",
    "label": "Szechuan",
    "locale_independent_label": "Szechuan",
    "priority": "744",
    "parent_id": "5379",
    "selected": false
  },
  "10696": {
    "count": "14",
    "label": "Taiwanese",
    "locale_independent_label": "Taiwanese",
    "priority": "749",
    "selected": false
  },
  "10698": {
    "count": "15",
    "label": "Argentinean",
    "locale_independent_label": "Argentinean",
    "priority": "26",
    "selected": false
  },
  "10699": {
    "count": "4",
    "label": "Canadian",
    "locale_independent_label": "Canadian",
    "priority": "120",
    "selected": false
  },
  "10700": {
    "count": "128",
    "label": "Soups",
    "locale_independent_label": "Soups",
    "priority": "706",
    "selected": false
  },
  "10709": {
    "count": "3",
    "label": "New Zealand",
    "locale_independent_label": "New Zealand",
    "priority": "520",
    "selected": false
  },
  "10714": {
    "count": "5",
    "label": "Singaporean",
    "locale_independent_label": "Singaporean",
    "priority": "691",
    "selected": false
  },
  "10715": {
    "count": "17",
    "label": "Venezuelan",
    "locale_independent_label": "Venezuelan",
    "priority": "808",
    "selected": false
  },
  "10717": {
    "count": "4",
    "label": "Albanian",
    "locale_independent_label": "Albanian",
    "priority": "8",
    "selected": false
  },
  "10718": {
    "count": "3",
    "label": "Tibetan",
    "locale_independent_label": "Tibetan",
    "priority": "766",
    "selected": false
  },
  "10721": {
    "count": "4",
    "label": "Burmese",
    "locale_independent_label": "Burmese",
    "priority": "103",
    "selected": false
  },
  "10722": {
    "count": "2",
    "label": "Salvadoran",
    "locale_independent_label": "Salvadoran",
    "priority": "655",
    "selected": false
  },
  "10724": {
    "count": "1",
    "label": "Bahamian",
    "locale_independent_label": "Bahamian",
    "priority": "50",
    "selected": false
  },
  "10727": {
    "count": "4",
    "label": "Polynesian",
    "locale_independent_label": "Polynesian",
    "priority": "592",
    "selected": false
  },
  "10731": {
    "count": "1",
    "label": "Nonya",
    "locale_independent_label": "Nonya",
    "priority": "522",
    "selected": false
  },
  "10738": {
    "count": "2",
    "label": "Czech",
    "locale_independent_label": "Czech",
    "priority": "252",
    "selected": false
  },
  "10740": {
    "count": "145",
    "label": "Bagels",
    "locale_independent_label": "Bagels",
    "priority": "48",
    "selected": false
  },
  "10741": {
    "count": "20",
    "label": "Malaysian",
    "locale_independent_label": "Malaysian",
    "priority": "480",
    "selected": false
  },
  "10742": {
    "count": "34",
    "label": "Eastern European",
    "locale_independent_label": "Eastern European",
    "priority": "270",
    "selected": false
  },
  "10743": {
    "count": "2",
    "label": "Croatian",
    "locale_independent_label": "Croatian",
    "priority": "236",
    "selected": false
  },
  "10744": {
    "count": "52",
    "label": "Cuban",
    "locale_independent_label": "Cuban",
    "priority": "242",
    "selected": false
  },
  "10745": {
    "count": "1",
    "label": "Scottish",
    "locale_independent_label": "Scottish",
    "priority": "671",
    "selected": false
  },
  "10746": {
    "count": "18",
    "label": "Central European",
    "locale_independent_label": "Central European",
    "priority": "149",
    "selected": false
  },
  "10748": {
    "count": "17",
    "label": "Pakistani",
    "locale_independent_label": "Pakistani",
    "priority": "552",
    "selected": false
  },
  "10749": {
    "count": "127",
    "label": "South American",
    "locale_independent_label": "South American",
    "priority": "707",
    "selected": false
  },
  "10752": {
    "count": "38",
    "label": "Shanghai",
    "locale_independent_label": "Shanghai",
    "priority": "681",
    "selected": false
  },
  "10753": {
    "count": "8",
    "label": "Swedish",
    "locale_independent_label": "Swedish",
    "priority": "739",
    "selected": false
  },
  "10755": {
    "count": "32",
    "label": "Hong Kong",
    "locale_independent_label": "Hong Kong",
    "priority": "391",
    "parent_id": "5379",
    "selected": false
  },
  "10756": {
    "count": "3",
    "label": "Nepali",
    "locale_independent_label": "Nepali",
    "priority": "518",
    "selected": false
  },
  "10757": {
    "count": "14",
    "label": "Colombian",
    "locale_independent_label": "Colombian",
    "priority": "212",
    "selected": false
  },
  "10758": {
    "count": "7",
    "label": "Donuts",
    "locale_independent_label": "Donuts",
    "priority": "264",
    "selected": false
  },
  "10760": {
    "count": "61",
    "label": "Central American",
    "locale_independent_label": "Central American",
    "priority": "147",
    "selected": false
  },
  "10762": {
    "count": "13",
    "label": "Scandinavian",
    "locale_independent_label": "Scandinavian",
    "priority": "668",
    "selected": false
  },
  "10763": {
    "count": "11",
    "label": "Basque",
    "locale_independent_label": "Basque",
    "priority": "64",
    "parent_id": "10655",
    "selected": false
  },
  "10764": {
    "count": "3",
    "label": "Danish",
    "locale_independent_label": "Danish",
    "priority": "253",
    "selected": false
  },
  "10765": {
    "count": "9",
    "label": "Persian",
    "locale_independent_label": "Persian",
    "priority": "572",
    "selected": false
  },
  "10766": {
    "count": "2",
    "label": "Armenian",
    "locale_independent_label": "Armenian",
    "priority": "27",
    "selected": false
  },
  "10767": {
    "count": "6",
    "label": "Bangladeshi",
    "locale_independent_label": "Bangladeshi",
    "priority": "59",
    "selected": false
  },
  "10769": {
    "count": "64",
    "label": "Israeli",
    "locale_independent_label": "Israeli",
    "priority": "412",
    "selected": false
  },
  "10770": {
    "count": "2",
    "label": "Ukrainian",
    "locale_independent_label": "Ukrainian",
    "priority": "798",
    "selected": false
  },
  "10772": {
    "count": "20",
    "label": "Hawaiian",
    "locale_independent_label": "Hawaiian",
    "priority": "383",
    "selected": false
  },
  "10774": {
    "count": "16",
    "label": "Fondue",
    "locale_independent_label": "Fondue",
    "priority": "311",
    "selected": false
  },
  "10775": {
    "count": "4",
    "label": "Romanian",
    "locale_independent_label": "Romanian",
    "priority": "641",
    "selected": false
  },
  "10777": {
    "count": "4",
    "label": "Cambodian",
    "locale_independent_label": "Cambodian",
    "priority": "118",
    "selected": false
  },
  "10779": {
    "count": "26",
    "label": "Jamaican",
    "locale_independent_label": "Jamaican",
    "priority": "418",
    "selected": false
  },
  "10780": {
    "count": "1",
    "label": "NorthWestern Chinese",
    "locale_independent_label": "NorthWestern Chinese",
    "priority": "526",
    "parent_id": "5379",
    "selected": false
  },
  "10782": {
    "count": "5",
    "label": "Norwegian",
    "locale_independent_label": "Norwegian",
    "priority": "528",
    "selected": false
  },
  "10784": {
    "count": "2",
    "label": "Egyptian",
    "locale_independent_label": "Egyptian",
    "priority": "276",
    "selected": false
  },
  "10785": {
    "count": "17",
    "label": "Ethiopian",
    "locale_independent_label": "Ethiopian",
    "priority": "285",
    "selected": false
  },
  "10788": {
    "count": "6",
    "label": "Afghan",
    "locale_independent_label": "Afghan",
    "priority": "4",
    "selected": false
  },
  "10789": {
    "count": "13",
    "label": "Puerto Rican",
    "locale_independent_label": "Puerto Rican",
    "priority": "613",
    "selected": false
  },
  "10791": {
    "count": "3",
    "label": "Ecuadorean",
    "locale_independent_label": "Ecuadorean",
    "priority": "272",
    "selected": false
  },
  "10792": {
    "count": "1",
    "label": "Xinjiang",
    "locale_independent_label": "Xinjiang",
    "priority": "821",
    "selected": false
  },
  "10793": {
    "count": "3",
    "label": "Sri Lankan",
    "locale_independent_label": "Sri Lankan",
    "priority": "718",
    "selected": false
  },
  "10872": {
    "count": "38",
    "label": "Baguette",
    "locale_independent_label": "Baguette",
    "priority": "49",
    "selected": false
  },
  "10874": {
    "count": "9",
    "label": "Baked Ziti",
    "locale_independent_label": "Baked Ziti",
    "priority": "54",
    "selected": false
  },
  "10875": {
    "count": "23",
    "label": "Bangers And Mash",
    "locale_independent_label": "Bangers And Mash",
    "priority": "58",
    "selected": false
  },
  "10876": {
    "count": "18",
    "label": "Beef Bourguignon",
    "locale_independent_label": "Beef Bourguignon",
    "priority": "68",
    "selected": false
  },
  "10877": {
    "count": "26",
    "label": "Bibimbap",
    "locale_independent_label": "Bibimbap",
    "priority": "78",
    "selected": false
  },
  "10878": {
    "count": "111",
    "label": "Burrito",
    "locale_independent_label": "Burrito",
    "priority": "105",
    "selected": false
  },
  "10879": {
    "count": "6",
    "label": "California Roll",
    "locale_independent_label": "California Roll",
    "priority": "115",
    "selected": false
  },
  "10881": {
    "count": "12",
    "label": "Cannelloni",
    "locale_independent_label": "Cannelloni",
    "priority": "122",
    "selected": false
  },
  "10883": {
    "count": "111",
    "label": "Ceviche",
    "locale_independent_label": "Ceviche",
    "priority": "153",
    "selected": false
  },
  "10884": {
    "count": "77",
    "label": "Cheeseburger",
    "locale_independent_label": "Cheeseburger",
    "priority": "156",
    "selected": false
  },
  "10885": {
    "count": "292",
    "label": "Cheesecake",
    "locale_independent_label": "Cheesecake",
    "priority": "157",
    "selected": false
  },
  "10886": {
    "count": "10",
    "label": "Cheesesteak",
    "locale_independent_label": "Cheesesteak",
    "priority": "159",
    "selected": false
  },
  "10887": {
    "count": "27",
    "label": "Chicken And Waffles",
    "locale_independent_label": "Chicken And Waffles",
    "priority": "165",
    "selected": false
  },
  "10888": {
    "count": "3",
    "label": "Chicken Kiev",
    "locale_independent_label": "Chicken Kiev",
    "priority": "171",
    "selected": false
  },
  "10889": {
    "count": "7",
    "label": "Chilli Chicken",
    "locale_independent_label": "Chilli Chicken",
    "priority": "179",
    "selected": false
  },
  "10890": {
    "count": "3",
    "label": "Chow Mein",
    "locale_independent_label": "Chow Mein",
    "priority": "193",
    "selected": false
  },
  "10891": {
    "count": "18",
    "label": "Churrasco",
    "locale_independent_label": "Churrasco",
    "priority": "194",
    "selected": false
  },
  "10892": {
    "count": "64",
    "label": "Corned Beef",
    "locale_independent_label": "Corned Beef",
    "priority": "219",
    "selected": false
  },
  "10893": {
    "count": "437",
    "label": "Crab",
    "locale_independent_label": "Crab",
    "priority": "225",
    "selected": false
  },
  "10894": {
    "count": "133",
    "label": "Crab Cake",
    "locale_independent_label": "Crab Cake",
    "priority": "226",
    "selected": false
  },
  "10896": {
    "count": "57",
    "label": "Dim Sum",
    "locale_independent_label": "Dim Sum",
    "priority": "257",
    "selected": false
  },
  "10897": {
    "count": "1",
    "label": "Doner Kebab",
    "locale_independent_label": "Doner Kebab",
    "priority": "263",
    "selected": false
  },
  "10898": {
    "count": "335",
    "label": "Dumplings",
    "locale_independent_label": "Dumplings",
    "priority": "268",
    "selected": false
  },
  "10899": {
    "count": "103",
    "label": "Falafel",
    "locale_independent_label": "Falafel",
    "priority": "290",
    "selected": false
  },
  "10900": {
    "count": "179",
    "label": "Filet Mignon",
    "locale_independent_label": "Filet Mignon",
    "priority": "299",
    "selected": false
  },
  "10901": {
    "count": "110",
    "label": "Fish & Chips",
    "locale_independent_label": "Fish & Chips",
    "priority": "302",
    "selected": false
  },
  "10902": {
    "count": "183",
    "label": "French Toast",
    "locale_independent_label": "French Toast",
    "priority": "316",
    "selected": false
  },
  "10903": {
    "count": "2",
    "label": "Frozen Yogurt",
    "locale_independent_label": "Frozen Yogurt",
    "priority": "330",
    "selected": false
  },
  "10904": {
    "count": "1",
    "label": "Gefilte Fish",
    "locale_independent_label": "Gefilte Fish",
    "priority": "340",
    "selected": false
  },
  "10905": {
    "count": "17",
    "label": "Gyros",
    "locale_independent_label": "Gyros",
    "priority": "370",
    "selected": false
  },
  "10906": {
    "count": "13",
    "label": "Halloumi",
    "locale_independent_label": "Halloumi",
    "priority": "376",
    "selected": false
  },
  "10907": {
    "count": "1149",
    "label": "Burger",
    "locale_independent_label": "Burger",
    "priority": "102",
    "selected": false
  },
  "10908": {
    "count": "5",
    "label": "Hot Dog",
    "locale_independent_label": "Hot Dog",
    "priority": "396",
    "selected": false
  },
  "10909": {
    "count": "21",
    "label": "Hot Pot",
    "locale_independent_label": "Hot Pot",
    "priority": "398",
    "selected": false
  },
  "10910": {
    "count": "11",
    "label": "Jambalaya",
    "locale_independent_label": "Jambalaya",
    "priority": "419",
    "selected": false
  },
  "10911": {
    "count": "9",
    "label": "Kobe Beef",
    "locale_independent_label": "Kobe Beef",
    "priority": "444",
    "selected": false
  },
  "10912": {
    "count": "7",
    "label": "Korean Fried Chicken",
    "locale_independent_label": "Korean Fried Chicken",
    "priority": "446",
    "selected": false
  },
  "10913": {
    "count": "6",
    "label": "Kung Pao Chicken",
    "locale_independent_label": "Kung Pao Chicken",
    "priority": "448",
    "selected": false
  },
  "10914": {
    "count": "184",
    "label": "Lasagne",
    "locale_independent_label": "Lasagne",
    "priority": "458",
    "selected": false
  },
  "10915": {
    "count": "480",
    "label": "Lobster",
    "locale_independent_label": "Lobster",
    "priority": "470",
    "selected": false
  },
  "10916": {
    "count": "101",
    "label": "Lobster Roll",
    "locale_independent_label": "Lobster Roll",
    "priority": "472",
    "selected": false
  },
  "10917": {
    "count": "26",
    "label": "Mandarin Duck",
    "locale_independent_label": "Mandarin Duck",
    "priority": "482",
    "selected": false
  },
  "10918": {
    "count": "43",
    "label": "Meatloaf",
    "locale_independent_label": "Meatloaf",
    "priority": "488",
    "selected": false
  },
  "10919": {
    "count": "35",
    "label": "Moussaka",
    "locale_independent_label": "Moussaka",
    "priority": "508",
    "selected": false
  },
  "10920": {
    "count": "5",
    "label": "New York Style Pizza",
    "locale_independent_label": "New York Style Pizza",
    "priority": "519",
    "selected": false
  },
  "10921": {
    "count": "236",
    "label": "Omelette",
    "locale_independent_label": "Omelette",
    "priority": "538",
    "selected": false
  },
  "10922": {
    "count": "361",
    "label": "Oyster",
    "locale_independent_label": "Oyster",
    "priority": "546",
    "selected": false
  },
  "10923": {
    "count": "109",
    "label": "Pad Thai",
    "locale_independent_label": "Pad Thai",
    "priority": "549",
    "selected": false
  },
  "10924": {
    "count": "89",
    "label": "Paella",
    "locale_independent_label": "Paella",
    "priority": "550",
    "selected": false
  },
  "10925": {
    "count": "26",
    "label": "Peking Duck",
    "locale_independent_label": "Peking Duck",
    "priority": "567",
    "selected": false
  },
  "10926": {
    "count": "78",
    "label": "Polenta",
    "locale_independent_label": "Polenta",
    "priority": "589",
    "selected": false
  },
  "10927": {
    "count": "1",
    "label": "Pork Roll",
    "locale_independent_label": "Pork Roll",
    "priority": "597",
    "selected": false
  },
  "10928": {
    "count": "7",
    "label": "Pork Tenderloin",
    "locale_independent_label": "Pork Tenderloin",
    "priority": "599",
    "selected": false
  },
  "10929": {
    "count": "26",
    "label": "Porterhouse Steak",
    "locale_independent_label": "Porterhouse Steak",
    "priority": "600",
    "selected": false
  },
  "10930": {
    "count": "10",
    "label": "Poutine",
    "locale_independent_label": "Poutine",
    "priority": "603",
    "selected": false
  },
  "10931": {
    "count": "29",
    "label": "Pretzel",
    "locale_independent_label": "Pretzel",
    "priority": "608",
    "selected": false
  },
  "10932": {
    "count": "325",
    "label": "Ribs",
    "locale_independent_label": "Ribs",
    "priority": "631",
    "selected": false
  },
  "10933": {
    "count": "19",
    "label": "Roast Beef",
    "locale_independent_label": "Roast Beef",
    "priority": "635",
    "selected": false
  },
  "10934": {
    "count": "16",
    "label": "Saltimbocca",
    "locale_independent_label": "Saltimbocca",
    "priority": "653",
    "selected": false
  },
  "10935": {
    "count": "27",
    "label": "Schnitzel",
    "locale_independent_label": "Schnitzel",
    "priority": "669",
    "selected": false
  },
  "10936": {
    "count": "25",
    "label": "Shawarma",
    "locale_independent_label": "Shawarma",
    "priority": "683",
    "selected": false
  },
  "10937": {
    "count": "1061",
    "label": "Shrimp",
    "locale_independent_label": "Shrimp",
    "priority": "687",
    "selected": false
  },
  "10938": {
    "count": "19",
    "label": "Souvlaki",
    "locale_independent_label": "Souvlaki",
    "priority": "710",
    "selected": false
  },
  "10939": {
    "count": "56",
    "label": "Steak Tartare",
    "locale_independent_label": "Steak Tartare",
    "priority": "722",
    "selected": false
  },
  "10940": {
    "count": "23",
    "label": "Surf And Turf",
    "locale_independent_label": "Surf And Turf",
    "priority": "737",
    "selected": false
  },
  "10941": {
    "count": "18",
    "label": "Tandoori Chicken",
    "locale_independent_label": "Tandoori Chicken",
    "priority": "752",
    "selected": false
  },
  "10942": {
    "count": "473",
    "label": "Tapas",
    "locale_independent_label": "Tapas",
    "priority": "754",
    "selected": false
  },
  "10943": {
    "count": "5",
    "label": "T-Bone Steak",
    "locale_independent_label": "T-Bone Steak",
    "priority": "760",
    "selected": false
  },
  "10944": {
    "count": "74",
    "label": "Tortillas",
    "locale_independent_label": "Tortillas",
    "priority": "780",
    "selected": false
  },
  "11717": {
    "count": "77",
    "label": "Tempura",
    "locale_independent_label": "Tempura",
    "priority": "761",
    "selected": false
  },
  "11718": {
    "count": "14",
    "label": "Tonkatsu",
    "locale_independent_label": "Tonkatsu",
    "priority": "773",
    "selected": false
  },
  "11721": {
    "count": "24",
    "label": "Udon & Soba (Wheat & Buckwheat Noodle)",
    "locale_independent_label": "Udon & Soba (Wheat & Buckwheat Noodle)",
    "priority": "796",
    "selected": false
  },
  "11722": {
    "count": "118",
    "label": "Ramen",
    "locale_independent_label": "Ramen",
    "priority": "625",
    "selected": false
  },
  "11725": {
    "count": "13",
    "label": "Yakitori (Grilled Skewers)",
    "locale_independent_label": "Yakitori (Grilled Skewers)",
    "priority": "823",
    "selected": false
  },
  "11726": {
    "count": "4",
    "label": "Sukiyaki & Shabu Shabu",
    "locale_independent_label": "Sukiyaki & Shabu Shabu",
    "priority": "733",
    "selected": false
  },
  "11728": {
    "count": "7",
    "label": "Okonomiyaki & Takoyaki (Flour Dish)",
    "locale_independent_label": "Okonomiyaki & Takoyaki (Flour Dish)",
    "priority": "536",
    "selected": false
  },
  "11730": {
    "count": "2",
    "label": "Donburi (Rice Bowl)",
    "locale_independent_label": "Donburi (Rice Bowl)",
    "priority": "262",
    "selected": false
  },
  "11734": {
    "count": "3",
    "label": "Japanese Curry",
    "locale_independent_label": "Japanese Curry",
    "priority": "422",
    "selected": false
  },
  "11735": {
    "count": "2",
    "label": "Yakiniku (Japanese BBQ)",
    "locale_independent_label": "Yakiniku (Japanese BBQ)",
    "priority": "822",
    "selected": false
  },
  "11738": {
    "count": "24",
    "label": "Bento (Lunch Box)",
    "locale_independent_label": "Bento (Lunch Box)",
    "priority": "77",
    "selected": false
  },
  "11739": {
    "count": "4",
    "label": "Central Asian",
    "locale_independent_label": "Central Asian",
    "priority": "148",
    "selected": false
  },
  "11740": {
    "count": "4",
    "label": "Uzbek",
    "locale_independent_label": "Uzbek",
    "priority": "802",
    "selected": false
  },
  "11742": {
    "count": "4",
    "label": "Georgian",
    "locale_independent_label": "Georgian",
    "priority": "343",
    "selected": false
  },
  "11744": {
    "count": "7",
    "label": "Arabic",
    "locale_independent_label": "Arabic",
    "priority": "24",
    "selected": false
  },
  "16553": {
    "count": "78",
    "label": "Fish Taco",
    "locale_independent_label": "Fish Taco",
    "priority": "305",
    "selected": false
  },
  "16554": {
    "count": "2439",
    "label": "Salad",
    "locale_independent_label": "Salad",
    "priority": "647",
    "selected": false
  },
  "16555": {
    "count": "365",
    "label": "Pancakes",
    "locale_independent_label": "Pancakes",
    "priority": "553",
    "selected": false
  },
  "19953": {
    "count": "46",
    "label": "Pho",
    "locale_independent_label": "Pho",
    "priority": "578",
    "selected": false
  },
  "19954": {
    "count": "337",
    "label": "Tacos",
    "locale_independent_label": "Tacos",
    "priority": "746",
    "selected": false
  },
  "19955": {
    "count": "274",
    "label": "Wings",
    "locale_independent_label": "Wings",
    "priority": "820",
    "selected": false
  },
  "19957": {
    "count": "3",
    "label": "Poke Bowls",
    "locale_independent_label": "Poke Bowls",
    "priority": "587",
    "selected": false
  },
  "19958": {
    "count": "27",
    "label": "Clam Chowder",
    "locale_independent_label": "Clam Chowder",
    "priority": "197",
    "selected": false
  },
  "19959": {
    "count": "142",
    "label": "Eggs Benedict",
    "locale_independent_label": "Eggs Benedict",
    "priority": "275",
    "selected": false
  },
  "19960": {
    "count": "22",
    "label": "Cuban Sandwich",
    "locale_independent_label": "Cuban Sandwich",
    "priority": "243",
    "selected": false
  },
  "20025": {
    "count": "15",
    "label": "Beignets",
    "locale_independent_label": "Beignets",
    "priority": "73",
    "selected": false
  },
  "20026": {
    "count": "8",
    "label": "Biscuits and gravy",
    "locale_independent_label": "Biscuits and gravy",
    "priority": "80",
    "selected": false
  },
  "20027": {
    "count": "469",
    "label": "Calamari",
    "locale_independent_label": "Calamari",
    "priority": "113",
    "selected": false
  },
  "20028": {
    "count": "1",
    "label": "Chicken fried steak",
    "locale_independent_label": "Chicken fried steak",
    "priority": "168",
    "selected": false
  },
  "20029": {
    "count": "121",
    "label": "Chili",
    "locale_independent_label": "Chili",
    "priority": "177",
    "selected": false
  },
  "20031": {
    "count": "33",
    "label": "Crawfish",
    "locale_independent_label": "Crawfish",
    "priority": "230",
    "selected": false
  },
  "20032": {
    "count": "11",
    "label": "Cupcakes",
    "locale_independent_label": "Cupcakes",
    "priority": "245",
    "selected": false
  },
  "20033": {
    "count": "2",
    "label": "Deep dish pizza",
    "locale_independent_label": "Deep dish pizza",
    "priority": "255",
    "selected": false
  },
  "20034": {
    "count": "52",
    "label": "Fajitas",
    "locale_independent_label": "Fajitas",
    "priority": "289",
    "selected": false
  },
  "20035": {
    "count": "6",
    "label": "Fried pickles",
    "locale_independent_label": "Fried pickles",
    "priority": "324",
    "selected": false
  },
  "20036": {
    "count": "41",
    "label": "Grilled cheese",
    "locale_independent_label": "Grilled cheese",
    "priority": "359",
    "selected": false
  },
  "20038": {
    "count": "14",
    "label": "Key lime pie",
    "locale_independent_label": "Key lime pie",
    "priority": "440",
    "selected": false
  },
  "20039": {
    "count": "116",
    "label": "Lamb chops",
    "locale_independent_label": "Lamb chops",
    "priority": "456",
    "selected": false
  },
  "20040": {
    "count": "162",
    "label": "Mac and cheese",
    "locale_independent_label": "Mac and cheese",
    "priority": "476",
    "selected": false
  },
  "20041": {
    "count": "109",
    "label": "Nachos",
    "locale_independent_label": "Nachos",
    "priority": "514",
    "selected": false
  },
  "20042": {
    "count": "3",
    "label": "Po' Boys",
    "locale_independent_label": "Po' Boys",
    "priority": "586",
    "selected": false
  },
  "20043": {
    "count": "2",
    "label": "Reuben sandwich",
    "locale_independent_label": "Reuben sandwich",
    "priority": "629",
    "selected": false
  },
  "20044": {
    "count": "18",
    "label": "Tater tots",
    "locale_independent_label": "Tater tots",
    "priority": "759",
    "selected": false
  },
  "20045": {
    "count": "176",
    "label": "Waffles",
    "locale_independent_label": "Waffles",
    "priority": "813",
    "selected": false
  },
  "20062": {
    "count": "34",
    "label": "Neapolitan",
    "locale_independent_label": "Neapolitan",
    "priority": "516",
    "selected": false
  },
  "20063": {
    "count": "3",
    "label": "Emilian",
    "locale_independent_label": "Emilian",
    "priority": "278",
    "selected": false
  },
  "20064": {
    "count": "35",
    "label": "Campania",
    "locale_independent_label": "Campania",
    "priority": "119",
    "selected": false
  },
  "20066": {
    "count": "23",
    "label": "Tuscan",
    "locale_independent_label": "Tuscan",
    "priority": "794",
    "selected": false
  },
  "20067": {
    "count": "13",
    "label": "Romana",
    "locale_independent_label": "Romana",
    "priority": "640",
    "selected": false
  },
  "20068": {
    "count": "13",
    "label": "Lazio",
    "locale_independent_label": "Lazio",
    "priority": "461",
    "selected": false
  },
  "20069": {
    "count": "24",
    "label": "Sicilian",
    "locale_independent_label": "Sicilian",
    "priority": "690",
    "selected": false
  },
  "20073": {
    "count": "1",
    "label": "Apulian",
    "locale_independent_label": "Apulian",
    "priority": "23",
    "selected": false
  },
  "20074": {
    "count": "16",
    "label": "Northern-Italian",
    "locale_independent_label": "Northern-Italian",
    "priority": "525",
    "selected": false
  },
  "20075": {
    "count": "38",
    "label": "Central-Italian",
    "locale_independent_label": "Central-Italian",
    "priority": "150",
    "selected": false
  },
  "20076": {
    "count": "58",
    "label": "Southern-Italian",
    "locale_independent_label": "Southern-Italian",
    "priority": "708",
    "selected": false
  },
  "20077": {
    "count": "4",
    "label": "Catalan",
    "locale_independent_label": "Catalan",
    "priority": "140",
    "selected": false
  },
  "20103": {
    "count": "5",
    "label": "Chicharrón",
    "locale_independent_label": "Chicharrón",
    "priority": "163",
    "selected": false
  },
  "20104": {
    "count": "2",
    "label": "Crispy Pata",
    "locale_independent_label": "Crispy Pata",
    "priority": "235",
    "selected": false
  },
  "20106": {
    "count": "4",
    "label": "Sisig",
    "locale_independent_label": "Sisig",
    "priority": "695",
    "selected": false
  },
  "20109": {
    "count": "2",
    "label": "Kare kare",
    "locale_independent_label": "Kare kare",
    "priority": "438",
    "selected": false
  },
  "20110": {
    "count": "6",
    "label": "Lechon",
    "locale_independent_label": "Lechon",
    "priority": "463",
    "selected": false
  },
  "20112": {
    "count": "2",
    "label": "Lumpia",
    "locale_independent_label": "Lumpia",
    "priority": "474",
    "selected": false
  },
  "20114": {
    "count": "1",
    "label": "Chili Crab",
    "locale_independent_label": "Chili Crab",
    "priority": "178",
    "selected": false
  },
  "20121": {
    "count": "5",
    "label": "Laksa",
    "locale_independent_label": "Laksa",
    "priority": "454",
    "selected": false
  },
  "20123": {
    "count": "1",
    "label": "Hokkien Mee",
    "locale_independent_label": "Hokkien Mee",
    "priority": "390",
    "selected": false
  },
  "20124": {
    "count": "16",
    "label": "Carrot Cake",
    "locale_independent_label": "Carrot Cake",
    "priority": "134",
    "selected": false
  },
  "20125": {
    "count": "26",
    "label": "Queso",
    "locale_independent_label": "Queso",
    "priority": "621",
    "selected": false
  },
  "20128": {
    "count": "20",
    "label": "Pastrami Sandwich",
    "locale_independent_label": "Pastrami Sandwich",
    "priority": "564",
    "selected": false
  },
  "20129": {
    "count": "16",
    "label": "Tostones",
    "locale_independent_label": "Tostones",
    "priority": "781",
    "selected": false
  },
  "20130": {
    "count": "2",
    "label": "Andouille",
    "locale_independent_label": "Andouille",
    "priority": "17",
    "selected": false
  },
  "20131": {
    "count": "1",
    "label": "Etouffee",
    "locale_independent_label": "Etouffee",
    "priority": "286",
    "selected": false
  },
  "20133": {
    "count": "62",
    "label": "Cannoli",
    "locale_independent_label": "Cannoli",
    "priority": "123",
    "selected": false
  },
  "20134": {
    "count": "34",
    "label": "Soup Dumplings",
    "locale_independent_label": "Soup Dumplings",
    "priority": "705",
    "selected": false
  },
  "20137": {
    "count": "18",
    "label": "Tres Leches",
    "locale_independent_label": "Tres Leches",
    "priority": "783",
    "selected": false
  },
  "20138": {
    "count": "15",
    "label": "Crab Legs",
    "locale_independent_label": "Crab Legs",
    "priority": "227",
    "selected": false
  },
  "20139": {
    "count": "13",
    "label": "Perogies",
    "locale_independent_label": "Perogies",
    "priority": "571",
    "selected": false
  },
  "20140": {
    "count": "9",
    "label": "Shrimp and Grits",
    "locale_independent_label": "Shrimp and Grits",
    "priority": "688",
    "selected": false
  },
  "20143": {
    "count": "19",
    "label": "Matzo Ball Soup",
    "locale_independent_label": "Matzo Ball Soup",
    "priority": "484",
    "selected": false
  },
  "20144": {
    "count": "1",
    "label": "Cioppino",
    "locale_independent_label": "Cioppino",
    "priority": "196",
    "selected": false
  },
  "20145": {
    "count": "5",
    "label": "Crab Rangoon",
    "locale_independent_label": "Crab Rangoon",
    "priority": "228",
    "selected": false
  },
  "20148": {
    "count": "1",
    "label": "Hoagie",
    "locale_independent_label": "Hoagie",
    "priority": "388",
    "selected": false
  },
  "20150": {
    "count": "15",
    "label": "Bread Pudding",
    "locale_independent_label": "Bread Pudding",
    "priority": "91",
    "selected": false
  },
  "20151": {
    "count": "3",
    "label": "Italian Beef",
    "locale_independent_label": "Italian Beef",
    "priority": "414",
    "selected": false
  },
  "20152": {
    "count": "3",
    "label": "Philly Cheesesteak",
    "locale_independent_label": "Philly Cheesesteak",
    "priority": "577",
    "selected": false
  },
  "20155": {
    "count": "24",
    "label": "Turkey Burger",
    "locale_independent_label": "Turkey Burger",
    "priority": "791",
    "selected": false
  },
  "20156": {
    "count": "24",
    "label": "Veggie Burger",
    "locale_independent_label": "Veggie Burger",
    "priority": "806",
    "selected": false
  },
  "20157": {
    "count": "1",
    "label": "Cesar Salad",
    "locale_independent_label": "Cesar Salad",
    "priority": "152",
    "selected": false
  },
  "20158": {
    "count": "26",
    "label": "Cobb Salad",
    "locale_independent_label": "Cobb Salad",
    "priority": "200",
    "selected": false
  },
  "20159": {
    "count": "2",
    "label": "Salmon Salad",
    "locale_independent_label": "Salmon Salad",
    "priority": "651",
    "selected": false
  },
  "20160": {
    "count": "2",
    "label": "Shrimp Salad",
    "locale_independent_label": "Shrimp Salad",
    "priority": "689",
    "selected": false
  },
  "20161": {
    "count": "4",
    "label": "Cucumber Salad",
    "locale_independent_label": "Cucumber Salad",
    "priority": "244",
    "selected": false
  },
  "20162": {
    "count": "32",
    "label": "Chicken Sandwich",
    "locale_independent_label": "Chicken Sandwich",
    "priority": "174",
    "selected": false
  },
  "20163": {
    "count": "3",
    "label": "Club Sandwich",
    "locale_independent_label": "Club Sandwich",
    "priority": "199",
    "selected": false
  },
  "20164": {
    "count": "14",
    "label": "Steak Sandwich",
    "locale_independent_label": "Steak Sandwich",
    "priority": "721",
    "selected": false
  },
  "20165": {
    "count": "12",
    "label": "Breakfast Sandwich",
    "locale_independent_label": "Breakfast Sandwich",
    "priority": "93",
    "selected": false
  },
  "20166": {
    "count": "2",
    "label": "Fish Sandwich",
    "locale_independent_label": "Fish Sandwich",
    "priority": "303",
    "selected": false
  },
  "20167": {
    "count": "3",
    "label": "Turkey Sandwich",
    "locale_independent_label": "Turkey Sandwich",
    "priority": "792",
    "selected": false
  },
  "20168": {
    "count": "1",
    "label": "Pulled Pork Sandwich",
    "locale_independent_label": "Pulled Pork Sandwich",
    "priority": "614",
    "selected": false
  },
  "20171": {
    "count": "1",
    "label": "Tuna Melt",
    "locale_independent_label": "Tuna Melt",
    "priority": "788",
    "selected": false
  },
  "20172": {
    "count": "6",
    "label": "French Dip",
    "locale_independent_label": "French Dip",
    "priority": "313",
    "selected": false
  },
  "20173": {
    "count": "28",
    "label": "BLT",
    "locale_independent_label": "BLT",
    "priority": "82",
    "selected": false
  },
  "20174": {
    "count": "5",
    "label": "Breakfast Burrito",
    "locale_independent_label": "Breakfast Burrito",
    "priority": "92",
    "selected": false
  },
  "20176": {
    "count": "2",
    "label": "Burrito Bowl",
    "locale_independent_label": "Burrito Bowl",
    "priority": "106",
    "selected": false
  },
  "20177": {
    "count": "5",
    "label": "Baby Back Ribs",
    "locale_independent_label": "Baby Back Ribs",
    "priority": "43",
    "selected": false
  },
  "20178": {
    "count": "9",
    "label": "Waffle Fries",
    "locale_independent_label": "Waffle Fries",
    "priority": "812",
    "selected": false
  },
  "20179": {
    "count": "38",
    "label": "Alfredo",
    "locale_independent_label": "Alfredo",
    "priority": "9",
    "selected": false
  },
  "20180": {
    "count": "2",
    "label": "Chicken Alfredo",
    "locale_independent_label": "Chicken Alfredo",
    "priority": "164",
    "selected": false
  },
  "20181": {
    "count": "232",
    "label": "Curry",
    "locale_independent_label": "Curry",
    "priority": "247",
    "selected": false
  },
  "20182": {
    "count": "24",
    "label": "Green Curry",
    "locale_independent_label": "Green Curry",
    "priority": "356",
    "selected": false
  },
  "20183": {
    "count": "16",
    "label": "Red Curry",
    "locale_independent_label": "Red Curry",
    "priority": "628",
    "selected": false
  },
  "20184": {
    "count": "1",
    "label": "Yellow Curry",
    "locale_independent_label": "Yellow Curry",
    "priority": "824",
    "selected": false
  },
  "20185": {
    "count": "90",
    "label": "Kabobs",
    "locale_independent_label": "Kabobs",
    "priority": "431",
    "selected": false
  },
  "20187": {
    "count": "47",
    "label": "Kale Salad",
    "locale_independent_label": "Kale Salad",
    "priority": "434",
    "selected": false
  },
  "20188": {
    "count": "26",
    "label": "Tikka Masala",
    "locale_independent_label": "Tikka Masala",
    "priority": "767",
    "selected": false
  },
  "20189": {
    "count": "5",
    "label": "Lettuce Wraps",
    "locale_independent_label": "Lettuce Wraps",
    "priority": "466",
    "selected": false
  },
  "20190": {
    "count": "2",
    "label": "Acai Bowls",
    "locale_independent_label": "Acai Bowls",
    "priority": "2",
    "selected": false
  },
  "20191": {
    "count": "28",
    "label": "Couscous",
    "locale_independent_label": "Couscous",
    "priority": "224",
    "selected": false
  },
  "20312": {
    "count": "360",
    "label": "Risotto",
    "locale_independent_label": "Risotto",
    "priority": "634",
    "selected": false
  },
  "20314": {
    "count": "220",
    "label": "Tiramisu",
    "locale_independent_label": "Tiramisu",
    "priority": "769",
    "selected": false
  },
  "20315": {
    "count": "153",
    "label": "Prosciutto",
    "locale_independent_label": "Prosciutto",
    "priority": "610",
    "selected": false
  },
  "20316": {
    "count": "271",
    "label": "Mussels",
    "locale_independent_label": "Mussels",
    "priority": "512",
    "selected": false
  },
  "20317": {
    "count": "61",
    "label": "Crepes",
    "locale_independent_label": "Crepes",
    "priority": "233",
    "selected": false
  },
  "20318": {
    "count": "333",
    "label": "Meatballs",
    "locale_independent_label": "Meatballs",
    "priority": "486",
    "selected": false
  },
  "20319": {
    "count": "48",
    "label": "Tagliatelle",
    "locale_independent_label": "Tagliatelle",
    "priority": "747",
    "selected": false
  },
  "20320": {
    "count": "82",
    "label": "Carbonara",
    "locale_independent_label": "Carbonara",
    "priority": "129",
    "selected": false
  },
  "20321": {
    "count": "35",
    "label": "Focaccia",
    "locale_independent_label": "Focaccia",
    "priority": "309",
    "selected": false
  },
  "20323": {
    "count": "10",
    "label": "Macarons",
    "locale_independent_label": "Macarons",
    "priority": "478",
    "selected": false
  },
  "20324": {
    "count": "24",
    "label": "Quiche",
    "locale_independent_label": "Quiche",
    "priority": "622",
    "selected": false
  },
  "20325": {
    "count": "135",
    "label": "Bolognese",
    "locale_independent_label": "Bolognese",
    "priority": "83",
    "selected": false
  },
  "20327": {
    "count": "29",
    "label": "Crostini",
    "locale_independent_label": "Crostini",
    "priority": "240",
    "selected": false
  },
  "20328": {
    "count": "8",
    "label": "Meringue",
    "locale_independent_label": "Meringue",
    "priority": "492",
    "selected": false
  },
  "20330": {
    "count": "9",
    "label": "Tripe",
    "locale_independent_label": "Tripe",
    "priority": "784",
    "selected": false
  },
  "20331": {
    "count": "24",
    "label": "Tortellini",
    "locale_independent_label": "Tortellini",
    "priority": "777",
    "selected": false
  },
  "20332": {
    "count": "27",
    "label": "Profiteroles",
    "locale_independent_label": "Profiteroles",
    "priority": "609",
    "selected": false
  },
  "20333": {
    "count": "64",
    "label": "Escargot",
    "locale_independent_label": "Escargot",
    "priority": "283",
    "selected": false
  },
  "20334": {
    "count": "16",
    "label": "Minestrone",
    "locale_independent_label": "Minestrone",
    "priority": "497",
    "selected": false
  },
  "20335": {
    "count": "21",
    "label": "Arancini",
    "locale_independent_label": "Arancini",
    "priority": "25",
    "selected": false
  },
  "20336": {
    "count": "59",
    "label": "Steak Frites",
    "locale_independent_label": "Steak Frites",
    "priority": "719",
    "selected": false
  },
  "20337": {
    "count": "10",
    "label": "Macaroons",
    "locale_independent_label": "Macaroons",
    "priority": "479",
    "selected": false
  },
  "20338": {
    "count": "1",
    "label": "Mortadella",
    "locale_independent_label": "Mortadella",
    "priority": "505",
    "selected": false
  },
  "20339": {
    "count": "22",
    "label": "Chicken Parmesan",
    "locale_independent_label": "Chicken Parmesan",
    "priority": "173",
    "selected": false
  },
  "20340": {
    "count": "10",
    "label": "Porchetta",
    "locale_independent_label": "Porchetta",
    "priority": "593",
    "selected": false
  },
  "20341": {
    "count": "21",
    "label": "Duck Confit",
    "locale_independent_label": "Duck Confit",
    "priority": "266",
    "selected": false
  },
  "20342": {
    "count": "15",
    "label": "Croque Monsieur",
    "locale_independent_label": "Croque Monsieur",
    "priority": "238",
    "selected": false
  },
  "20343": {
    "count": "11",
    "label": "Bouillabaisse",
    "locale_independent_label": "Bouillabaisse",
    "priority": "87",
    "selected": false
  },
  "20344": {
    "count": "24",
    "label": "Tortelloni",
    "locale_independent_label": "Tortelloni",
    "priority": "778",
    "selected": false
  },
  "20345": {
    "count": "1",
    "label": "Baccala",
    "locale_independent_label": "Baccala",
    "priority": "45",
    "selected": false
  },
  "20346": {
    "count": "1",
    "label": "Eclairs",
    "locale_independent_label": "Eclairs",
    "priority": "271",
    "selected": false
  },
  "20347": {
    "count": "2",
    "label": "Fettuccine Alfredo",
    "locale_independent_label": "Fettuccine Alfredo",
    "priority": "296",
    "selected": false
  },
  "20349": {
    "count": "4",
    "label": "Frog Legs",
    "locale_independent_label": "Frog Legs",
    "priority": "329",
    "selected": false
  },
  "20351": {
    "count": "14",
    "label": "Coq au Vin",
    "locale_independent_label": "Coq au Vin",
    "priority": "215",
    "selected": false
  },
  "20352": {
    "count": "12",
    "label": "Croque Madame",
    "locale_independent_label": "Croque Madame",
    "priority": "237",
    "selected": false
  },
  "20364": {
    "count": "2",
    "label": "Romagna",
    "locale_independent_label": "Romagna",
    "priority": "639",
    "selected": false
  },
  "20460": {
    "count": "15",
    "label": "Patatas Bravas",
    "locale_independent_label": "Patatas Bravas",
    "priority": "565",
    "selected": false
  },
  "20461": {
    "count": "17",
    "label": "Suckling Pig",
    "locale_independent_label": "Suckling Pig",
    "priority": "731",
    "selected": false
  },
  "20465": {
    "count": "42",
    "label": "Croquettes",
    "locale_independent_label": "Croquettes",
    "priority": "239",
    "selected": false
  },
  "20466": {
    "count": "2",
    "label": "Ham Croquettes",
    "locale_independent_label": "Ham Croquettes",
    "priority": "379",
    "selected": false
  },
  "20469": {
    "count": "1",
    "label": "Oxtail Croquettes",
    "locale_independent_label": "Oxtail Croquettes",
    "priority": "544",
    "selected": false
  },
  "20470": {
    "count": "2",
    "label": "Mushroom Croquettes",
    "locale_independent_label": "Mushroom Croquettes",
    "priority": "511",
    "selected": false
  },
  "20475": {
    "count": "3",
    "label": "Paella Valenciana",
    "locale_independent_label": "Paella Valenciana",
    "priority": "551",
    "selected": false
  },
  "20476": {
    "count": "16",
    "label": "Seafood Paella",
    "locale_independent_label": "Seafood Paella",
    "priority": "675",
    "selected": false
  },
  "20479": {
    "count": "1",
    "label": "Meat Paella",
    "locale_independent_label": "Meat Paella",
    "priority": "489",
    "selected": false
  },
  "20482": {
    "count": "1",
    "label": "Blood Sausages",
    "locale_independent_label": "Blood Sausages",
    "priority": "81",
    "selected": false
  },
  "20483": {
    "count": "325",
    "label": "Eggplant",
    "locale_independent_label": "Eggplant",
    "priority": "273",
    "selected": false
  },
  "20485": {
    "count": "2",
    "label": "Sirloin Steak",
    "locale_independent_label": "Sirloin Steak",
    "priority": "693",
    "selected": false
  },
  "20496": {
    "count": "3",
    "label": "Corvina",
    "locale_independent_label": "Corvina",
    "priority": "220",
    "selected": false
  },
  "20497": {
    "count": "2",
    "label": "Pork Cheeks",
    "locale_independent_label": "Pork Cheeks",
    "priority": "595",
    "selected": false
  },
  "20498": {
    "count": "1",
    "label": "Beef Cheeks",
    "locale_independent_label": "Beef Cheeks",
    "priority": "69",
    "selected": false
  },
  "20499": {
    "count": "6",
    "label": "Tataki",
    "locale_independent_label": "Tataki",
    "priority": "758",
    "selected": false
  },
  "20504": {
    "count": "1",
    "label": "Lobster rice",
    "locale_independent_label": "Lobster rice",
    "priority": "471",
    "selected": false
  },
  "20505": {
    "count": "1",
    "label": "Pork Loin",
    "locale_independent_label": "Pork Loin",
    "priority": "596",
    "selected": false
  },
  "20507": {
    "count": "1",
    "label": "Fideua",
    "locale_independent_label": "Fideua",
    "priority": "298",
    "selected": false
  },
  "20508": {
    "count": "2",
    "label": "Fried cheese",
    "locale_independent_label": "Fried cheese",
    "priority": "319",
    "selected": false
  },
  "20514": {
    "count": "1",
    "label": "Cockle",
    "locale_independent_label": "Cockle",
    "priority": "204",
    "selected": false
  },
  "20520": {
    "count": "1",
    "label": "Escalivada",
    "locale_independent_label": "Escalivada",
    "priority": "281",
    "selected": false
  },
  "20521": {
    "count": "2",
    "label": "Escalope",
    "locale_independent_label": "Escalope",
    "priority": "282",
    "selected": false
  },
  "20524": {
    "count": "10",
    "label": "Roe",
    "locale_independent_label": "Roe",
    "priority": "638",
    "selected": false
  },
  "20532": {
    "count": "160",
    "label": "Hummus",
    "locale_independent_label": "Hummus",
    "priority": "401",
    "selected": false
  },
  "20533": {
    "count": "75",
    "label": "Gelato",
    "locale_independent_label": "Gelato",
    "priority": "341",
    "selected": false
  },
  "20534": {
    "count": "5",
    "label": "Fattoush",
    "locale_independent_label": "Fattoush",
    "priority": "293",
    "selected": false
  },
  "20535": {
    "count": "12",
    "label": "Baba Ghanoush",
    "locale_independent_label": "Baba Ghanoush",
    "priority": "42",
    "selected": false
  },
  "20542": {
    "count": "325",
    "label": "Scallops",
    "locale_independent_label": "Scallops",
    "priority": "667",
    "selected": false
  },
  "20544": {
    "count": "107",
    "label": "Cod",
    "locale_independent_label": "Cod",
    "priority": "206",
    "selected": false
  },
  "20545": {
    "count": "44",
    "label": "Swordfish",
    "locale_independent_label": "Swordfish",
    "priority": "742",
    "selected": false
  },
  "20546": {
    "count": "74",
    "label": "Halibut",
    "locale_independent_label": "Halibut",
    "priority": "375",
    "selected": false
  },
  "20547": {
    "count": "804",
    "label": "Salmon",
    "locale_independent_label": "Salmon",
    "priority": "650",
    "selected": false
  },
  "20549": {
    "count": "42",
    "label": "Caviar",
    "locale_independent_label": "Caviar",
    "priority": "143",
    "selected": false
  },
  "20551": {
    "count": "1",
    "label": "Quail Eggs",
    "locale_independent_label": "Quail Eggs",
    "priority": "619",
    "selected": false
  },
  "20552": {
    "count": "444",
    "label": "Tuna",
    "locale_independent_label": "Tuna",
    "priority": "787",
    "selected": false
  },
  "20553": {
    "count": "6",
    "label": "Tilapia",
    "locale_independent_label": "Tilapia",
    "priority": "768",
    "selected": false
  },
  "20554": {
    "count": "33",
    "label": "Catfish",
    "locale_independent_label": "Catfish",
    "priority": "141",
    "selected": false
  },
  "20556": {
    "count": "218",
    "label": "Clams",
    "locale_independent_label": "Clams",
    "priority": "198",
    "selected": false
  },
  "20559": {
    "count": "5",
    "label": "Steamers",
    "locale_independent_label": "Steamers",
    "priority": "723",
    "selected": false
  },
  "20560": {
    "count": "3",
    "label": "Fried Clams",
    "locale_independent_label": "Fried Clams",
    "priority": "320",
    "selected": false
  },
  "20561": {
    "count": "19",
    "label": "Quail",
    "locale_independent_label": "Quail",
    "priority": "618",
    "selected": false
  },
  "20694": {
    "count": "3",
    "label": "Arroz Negro",
    "locale_independent_label": "Arroz Negro",
    "priority": "33",
    "selected": false
  },
  "20697": {
    "count": "81",
    "label": "Foie gras",
    "locale_independent_label": "Foie gras",
    "priority": "310",
    "selected": false
  },
  "20699": {
    "count": "49",
    "label": "Prawns",
    "locale_independent_label": "Prawns",
    "priority": "606",
    "selected": false
  },
  "20700": {
    "count": "3",
    "label": "Fried shrimp",
    "locale_independent_label": "Fried shrimp",
    "priority": "326",
    "selected": false
  },
  "20703": {
    "count": "98",
    "label": "French Fries",
    "locale_independent_label": "French Fries",
    "priority": "314",
    "selected": false
  },
  "20704": {
    "count": "19",
    "label": "Gazpacho",
    "locale_independent_label": "Gazpacho",
    "priority": "339",
    "selected": false
  },
  "20705": {
    "count": "5",
    "label": "Rib Steak",
    "locale_independent_label": "Rib Steak",
    "priority": "632",
    "selected": false
  },
  "20706": {
    "count": "1",
    "label": "Cod fritters",
    "locale_independent_label": "Cod fritters",
    "priority": "210",
    "selected": false
  },
  "20709": {
    "count": "8",
    "label": "Razor Clams",
    "locale_independent_label": "Razor Clams",
    "priority": "626",
    "selected": false
  },
  "20710": {
    "count": "2",
    "label": "Olivier Salad",
    "locale_independent_label": "Olivier Salad",
    "priority": "537",
    "selected": false
  },
  "20711": {
    "count": "394",
    "label": "Octopus",
    "locale_independent_label": "Octopus",
    "priority": "530",
    "selected": false
  },
  "20714": {
    "count": "7",
    "label": "Hake",
    "locale_independent_label": "Hake",
    "priority": "374",
    "selected": false
  },
  "20716": {
    "count": "13",
    "label": "Rice pudding",
    "locale_independent_label": "Rice pudding",
    "priority": "633",
    "selected": false
  },
  "20722": {
    "count": "9",
    "label": "Snails",
    "locale_independent_label": "Snails",
    "priority": "700",
    "selected": false
  },
  "20723": {
    "count": "5",
    "label": "Seafood Platters",
    "locale_independent_label": "Seafood Platters",
    "priority": "676",
    "selected": false
  },
  "20724": {
    "count": "17",
    "label": "Fried Artichokes",
    "locale_independent_label": "Fried Artichokes",
    "priority": "318",
    "selected": false
  },
  "20730": {
    "count": "392",
    "label": "Toasts",
    "locale_independent_label": "Toasts",
    "priority": "770",
    "selected": false
  },
  "20733": {
    "count": "149",
    "label": "Bass",
    "locale_independent_label": "Bass",
    "priority": "65",
    "selected": false
  },
  "20737": {
    "count": "2",
    "label": "Tomato Bread",
    "locale_independent_label": "Tomato Bread",
    "priority": "771",
    "selected": false
  },
  "20740": {
    "count": "45",
    "label": "Fish Soup",
    "locale_independent_label": "Fish Soup",
    "priority": "304",
    "selected": false
  },
  "20749": {
    "count": "2",
    "label": "Fava Beans",
    "locale_independent_label": "Fava Beans",
    "priority": "294",
    "selected": false
  },
  "20751": {
    "count": "3",
    "label": "Entrecote",
    "locale_independent_label": "Entrecote",
    "priority": "280",
    "selected": false
  },
  "20752": {
    "count": "808",
    "label": "Beef",
    "locale_independent_label": "Beef",
    "priority": "67",
    "selected": false
  },
  "20754": {
    "count": "114",
    "label": "Hamburgers",
    "locale_independent_label": "Hamburgers",
    "priority": "377",
    "selected": false
  },
  "21002": {
    "count": "13",
    "label": "Cassoulet",
    "locale_independent_label": "Cassoulet",
    "priority": "137",
    "selected": false
  },
  "21007": {
    "count": "3",
    "label": "Galettes",
    "locale_independent_label": "Galettes",
    "priority": "335",
    "selected": false
  },
  "21009": {
    "count": "4",
    "label": "Quenelle",
    "locale_independent_label": "Quenelle",
    "priority": "620",
    "selected": false
  },
  "21015": {
    "count": "1",
    "label": "Aligot",
    "locale_independent_label": "Aligot",
    "priority": "11",
    "selected": false
  },
  "21016": {
    "count": "4",
    "label": "Salad Nicoise",
    "locale_independent_label": "Salad Nicoise",
    "priority": "648",
    "selected": false
  },
  "21017": {
    "count": "28",
    "label": "French onion soup",
    "locale_independent_label": "French onion soup",
    "priority": "315",
    "selected": false
  },
  "21022": {
    "count": "468",
    "label": "Duck",
    "locale_independent_label": "Duck",
    "priority": "265",
    "selected": false
  },
  "21023": {
    "count": "41",
    "label": "Torte",
    "locale_independent_label": "Torte",
    "priority": "775",
    "selected": false
  },
  "21026": {
    "count": "2",
    "label": "Lemon tart",
    "locale_independent_label": "Lemon tart",
    "priority": "464",
    "selected": false
  },
  "21027": {
    "count": "6",
    "label": "Apple pie",
    "locale_independent_label": "Apple pie",
    "priority": "22",
    "selected": false
  },
  "21028": {
    "count": "13",
    "label": "Tarte Tatin",
    "locale_independent_label": "Tarte Tatin",
    "priority": "755",
    "selected": false
  },
  "21030": {
    "count": "1",
    "label": "buckwheat crepes",
    "locale_independent_label": "buckwheat crepes",
    "priority": "100",
    "selected": false
  },
  "21033": {
    "count": "1",
    "label": "Veal Kidneys",
    "locale_independent_label": "Veal Kidneys",
    "priority": "803",
    "selected": false
  },
  "21037": {
    "count": "75",
    "label": "Hanger steak",
    "locale_independent_label": "Hanger steak",
    "priority": "380",
    "selected": false
  },
  "21038": {
    "count": "32",
    "label": "Chocolate mousse",
    "locale_independent_label": "Chocolate mousse",
    "priority": "187",
    "selected": false
  },
  "21040": {
    "count": "25",
    "label": "Creme Brulee",
    "locale_independent_label": "Creme Brulee",
    "priority": "232",
    "selected": false
  },
  "21044": {
    "count": "1",
    "label": "Roquefort",
    "locale_independent_label": "Roquefort",
    "priority": "643",
    "selected": false
  },
  "21045": {
    "count": "28",
    "label": "Confit",
    "locale_independent_label": "Confit",
    "priority": "213",
    "selected": false
  },
  "21055": {
    "count": "1",
    "label": "Raclette",
    "locale_independent_label": "Raclette",
    "priority": "623",
    "selected": false
  },
  "21061": {
    "count": "7",
    "label": "Artichoke Salad",
    "locale_independent_label": "Artichoke Salad",
    "priority": "35",
    "selected": false
  },
  "21066": {
    "count": "17",
    "label": "Shellfish",
    "locale_independent_label": "Shellfish",
    "priority": "684",
    "selected": false
  },
  "21069": {
    "count": "4",
    "label": "Goat cheese salad",
    "locale_independent_label": "Goat cheese salad",
    "priority": "351",
    "selected": false
  },
  "21071": {
    "count": "21",
    "label": "Roast Chicken",
    "locale_independent_label": "Roast Chicken",
    "priority": "636",
    "selected": false
  },
  "21168": {
    "count": "22",
    "label": "Cacio e pepe",
    "locale_independent_label": "Cacio e pepe",
    "priority": "108",
    "selected": false
  },
  "21170": {
    "count": "2",
    "label": "Pici",
    "locale_independent_label": "Pici",
    "priority": "580",
    "selected": false
  },
  "21171": {
    "count": "4",
    "label": "Piadina",
    "locale_independent_label": "Piadina",
    "priority": "579",
    "selected": false
  },
  "21174": {
    "count": "672",
    "label": "Lamb",
    "locale_independent_label": "Lamb",
    "priority": "455",
    "selected": false
  },
  "21175": {
    "count": "73",
    "label": "Antipasti",
    "locale_independent_label": "Antipasti",
    "priority": "21",
    "selected": false
  },
  "21177": {
    "count": "14",
    "label": "Tortelli",
    "locale_independent_label": "Tortelli",
    "priority": "776",
    "selected": false
  },
  "21180": {
    "count": "1",
    "label": "Bigoli",
    "locale_independent_label": "Bigoli",
    "priority": "79",
    "selected": false
  },
  "21188": {
    "count": "3",
    "label": "Panzerotti",
    "locale_independent_label": "Panzerotti",
    "priority": "557",
    "selected": false
  },
  "21191": {
    "count": "28",
    "label": "Ossobuco",
    "locale_independent_label": "Ossobuco",
    "priority": "542",
    "selected": false
  },
  "21194": {
    "count": "20",
    "label": "Broccoli rabe",
    "locale_independent_label": "Broccoli rabe",
    "priority": "96",
    "selected": false
  },
  "21196": {
    "count": "3",
    "label": "Bottarga",
    "locale_independent_label": "Bottarga",
    "priority": "85",
    "selected": false
  },
  "21200": {
    "count": "29",
    "label": "Crostino",
    "locale_independent_label": "Crostino",
    "priority": "241",
    "selected": false
  },
  "21201": {
    "count": "91",
    "label": "Ragu",
    "locale_independent_label": "Ragu",
    "priority": "624",
    "selected": false
  },
  "21202": {
    "count": "11",
    "label": "Tartufo",
    "locale_independent_label": "Tartufo",
    "priority": "757",
    "selected": false
  },
  "21203": {
    "count": "5",
    "label": "Caponata",
    "locale_independent_label": "Caponata",
    "priority": "126",
    "selected": false
  },
  "21205": {
    "count": "1",
    "label": "Squash blossom",
    "locale_independent_label": "Squash blossom",
    "priority": "716",
    "selected": false
  },
  "21209": {
    "count": "77",
    "label": "Paninis",
    "locale_independent_label": "Paninis",
    "priority": "554",
    "selected": false
  },
  "21210": {
    "count": "3",
    "label": "Strozzapreti",
    "locale_independent_label": "Strozzapreti",
    "priority": "728",
    "selected": false
  },
  "21212": {
    "count": "13",
    "label": "Fritto misto",
    "locale_independent_label": "Fritto misto",
    "priority": "328",
    "selected": false
  },
  "21215": {
    "count": "89",
    "label": "Bruschette",
    "locale_independent_label": "Bruschette",
    "priority": "98",
    "selected": false
  },
  "21218": {
    "count": "11",
    "label": "Buffalo mozzarella",
    "locale_independent_label": "Buffalo mozzarella",
    "priority": "101",
    "selected": false
  },
  "21219": {
    "count": "19",
    "label": "Wild boar",
    "locale_independent_label": "Wild boar",
    "priority": "818",
    "selected": false
  },
  "21221": {
    "count": "1",
    "label": "Guanciale",
    "locale_independent_label": "Guanciale",
    "priority": "364",
    "selected": false
  },
  "21222": {
    "count": "9",
    "label": "Neapolitan pizza",
    "locale_independent_label": "Neapolitan pizza",
    "priority": "517",
    "selected": false
  },
  "21223": {
    "count": "26",
    "label": "Margherita Pizza",
    "locale_independent_label": "Margherita Pizza",
    "priority": "483",
    "selected": false
  },
  "21226": {
    "count": "2",
    "label": "Stracciatella",
    "locale_independent_label": "Stracciatella",
    "priority": "726",
    "selected": false
  },
  "21227": {
    "count": "12",
    "label": "Orecchiette",
    "locale_independent_label": "Orecchiette",
    "priority": "540",
    "selected": false
  },
  "21228": {
    "count": "2",
    "label": "Cassata",
    "locale_independent_label": "Cassata",
    "priority": "136",
    "selected": false
  },
  "21229": {
    "count": "2",
    "label": "Squid Ink Pasta",
    "locale_independent_label": "Squid Ink Pasta",
    "priority": "717",
    "selected": false
  },
  "21233": {
    "count": "4",
    "label": "Paccheri",
    "locale_independent_label": "Paccheri",
    "priority": "547",
    "selected": false
  },
  "21237": {
    "count": "13",
    "label": "Agnolotti",
    "locale_independent_label": "Agnolotti",
    "priority": "6",
    "selected": false
  },
  "21238": {
    "count": "1",
    "label": "Gianduja",
    "locale_independent_label": "Gianduja",
    "priority": "345",
    "selected": false
  },
  "21239": {
    "count": "1005",
    "label": "Pesto",
    "locale_independent_label": "Pesto",
    "priority": "575",
    "selected": false
  },
  "21241": {
    "count": "3",
    "label": "Vitello tonnato",
    "locale_independent_label": "Vitello tonnato",
    "priority": "811",
    "selected": false
  },
  "21270": {
    "count": "24",
    "label": "Udon",
    "locale_independent_label": "Udon",
    "priority": "795",
    "selected": false
  },
  "21272": {
    "count": "7",
    "label": "Okonomiyaki",
    "locale_independent_label": "Okonomiyaki",
    "priority": "535",
    "selected": false
  },
  "21275": {
    "count": "503",
    "label": "Cakes",
    "locale_independent_label": "Cakes",
    "priority": "111",
    "selected": false
  },
  "21277": {
    "count": "38",
    "label": "Gyoza",
    "locale_independent_label": "Gyoza",
    "priority": "369",
    "selected": false
  },
  "21281": {
    "count": "2",
    "label": "Shabu Shabu",
    "locale_independent_label": "Shabu Shabu",
    "priority": "679",
    "selected": false
  },
  "21284": {
    "count": "4",
    "label": "Sukiyaki",
    "locale_independent_label": "Sukiyaki",
    "priority": "732",
    "selected": false
  },
  "21285": {
    "count": "114",
    "label": "Fried rice",
    "locale_independent_label": "Fried rice",
    "priority": "325",
    "selected": false
  },
  "21290": {
    "count": "1",
    "label": "Tsukemen",
    "locale_independent_label": "Tsukemen",
    "priority": "786",
    "selected": false
  },
  "21293": {
    "count": "4",
    "label": "Cheese fondue",
    "locale_independent_label": "Cheese fondue",
    "priority": "158",
    "selected": false
  },
  "21301": {
    "count": "3",
    "label": "Parfait",
    "locale_independent_label": "Parfait",
    "priority": "560",
    "selected": false
  },
  "21309": {
    "count": "9",
    "label": "Miso ramen",
    "locale_independent_label": "Miso ramen",
    "priority": "498",
    "selected": false
  },
  "21310": {
    "count": "8",
    "label": "Stews",
    "locale_independent_label": "Stews",
    "priority": "724",
    "selected": false
  },
  "21312": {
    "count": "3",
    "label": "Cold noodles",
    "locale_independent_label": "Cold noodles",
    "priority": "211",
    "selected": false
  },
  "21320": {
    "count": "147",
    "label": "Sashimi",
    "locale_independent_label": "Sashimi",
    "priority": "662",
    "selected": false
  },
  "21323": {
    "count": "10",
    "label": "Tonkotsu ramen",
    "locale_independent_label": "Tonkotsu ramen",
    "priority": "774",
    "selected": false
  },
  "21324": {
    "count": "1306",
    "label": "Fish",
    "locale_independent_label": "Fish",
    "priority": "301",
    "selected": false
  },
  "21325": {
    "count": "2",
    "label": "Kaiseki",
    "locale_independent_label": "Kaiseki",
    "priority": "432",
    "selected": false
  },
  "21326": {
    "count": "754",
    "label": "Pork",
    "locale_independent_label": "Pork",
    "priority": "594",
    "selected": false
  },
  "21327": {
    "count": "1",
    "label": "Anago",
    "locale_independent_label": "Anago",
    "priority": "15",
    "selected": false
  },
  "21343": {
    "count": "1",
    "label": "Fruit parlours",
    "locale_independent_label": "Fruit parlours",
    "priority": "331",
    "selected": false
  },
  "21348": {
    "count": "4",
    "label": "Japanese sweets parlour",
    "locale_independent_label": "Japanese sweets parlour",
    "priority": "426",
    "selected": false
  },
  "21350": {
    "count": "2",
    "label": "Medicinal foods",
    "locale_independent_label": "Medicinal foods",
    "priority": "490",
    "selected": false
  },
  "21353": {
    "count": "28",
    "label": "Dining bars",
    "locale_independent_label": "Dining bars",
    "priority": "259",
    "selected": false
  },
  "21354": {
    "count": "18",
    "label": "Chicken dishes",
    "locale_independent_label": "Chicken dishes",
    "priority": "167",
    "selected": false
  },
  "21355": {
    "count": "7",
    "label": "Beer restaurants",
    "locale_independent_label": "Beer restaurants",
    "priority": "72",
    "selected": false
  },
  "21363": {
    "count": "3",
    "label": "Beijing cuisine",
    "locale_independent_label": "Beijing cuisine",
    "priority": "74",
    "selected": false
  },
  "21365": {
    "count": "3",
    "label": "Grilled pork",
    "locale_independent_label": "Grilled pork",
    "priority": "361",
    "selected": false
  },
  "21367": {
    "count": "20",
    "label": "Japanese Fusion",
    "locale_independent_label": "Japanese Fusion",
    "priority": "423",
    "selected": false
  },
  "21368": {
    "count": "1",
    "label": "Offal",
    "locale_independent_label": "Offal",
    "priority": "532",
    "selected": false
  },
  "21378": {
    "count": "1",
    "label": "Assyrian",
    "locale_independent_label": "Assyrian",
    "priority": "38",
    "selected": false
  },
  "21380": {
    "count": "1",
    "label": "Nigerian",
    "locale_independent_label": "Nigerian",
    "priority": "521",
    "selected": false
  },
  "all": {
    "count": "122",
    "label": "All Cuisines",
    "locale_independent_label": "All",
    "priority": "0",
    "selected": false
  }
}

//This is an array of all the number keys within the combinedFood object.
var arrayOfCombinedFoodKeys = Object.keys(cuisineNames);

// This generates an array of the cuisines that the user can autocomplete on the search bar.
var cuisineArrayListForUser = [];
arrayOfCombinedFoodKeys.forEach(function(foodKey) {
  return cuisineArrayListForUser.push(cuisineNames[foodKey].label);
});

// This sorts the array of cuisine names that can be typed in the search bar in ascending order.
var sortedCuisineNames = cuisineArrayListForUser.sort();

//Executes function on keyup:
var cuisineSearch = document.getElementById("cuisine-selection");

cuisineSearch.addEventListener("keyup", function(e) {
  //loops through the sorted array:
  //Initially removes all elements (so if user erases a letter or adds new letter, then it will clean the previous outputs.)
  removeElements();
  for (let i of sortedCuisineNames) {
    //Convert inputted search term to lower case and compare with eaach string in the array of potential search terms.
    if (i.toLowerCase().startsWith(cuisineSearch.value.toLowerCase()) && cuisineSearch.value != "") {
      //Create li element
      var listCuisine = document.createElement("li");
      //One common class name
      listCuisine.classList.add("list-items");
      listCuisine.style.cursor = "pointer";
      listCuisine.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      var word = "<b>" + i.substr(0, cuisineSearch.value.length) + "<b>";
      word += i.substr(cuisineSearch.value.length);
      //display the value in array:
      listCuisine.innerHTML = word;
      document.querySelector(".list").appendChild(listCuisine);
    }
  }
});

function displayNames(value) {
  cuisineSearch.value = value;
  removeElements();
}

function removeElements() {
  //clears all the items
  var items = document.querySelectorAll(".list-items");
  items.forEach(function(item) {
    item.remove();
  })
}


//This is the overarching button formula that will address everything.
function callEverything() {
  console.log("The submit button works!");
  // This identifies the key for the rest-tag-category parameter based on the user submitted item.
  //This will also hide the extra chat time div if the user submitted "none".
  var userSubmittedExtraChatTime = document.getElementById("extra-chat-time").value;
  //This is what the user submitted as the date for the weather function.
  var userSubmittedDate = dateControl.value;
  //This will control the number of panels that shows up based on the user submitted parameters.
  if (userSubmittedExtraChatTime === "None" && userSubmittedDate === "") {
    document.querySelector(".dessert-div").style.display = "none";
    document.querySelector(".weather-div").style.display = "none";
    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr";
    document.querySelector(".rightmost-container").style.display = "grid";
  } else if (userSubmittedExtraChatTime === "None" && userSubmittedDate != "") {
    document.querySelector(".dessert-div").style.display = "none";
    document.querySelector(".rightmost-container").style.display = "grid";
    document.querySelector(".rightmost-container").style.gridTemplateColumns = "0.6fr 1fr 1fr";
    document.querySelector(".weather-details").style.justifyContent = "center";
    document.querySelector(".weather-details").style.alignItems = "center;"
    callTheWeather();
  } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate != "") {
    document.querySelector(".dessert-div").style.display = "";
    document.querySelector(".rightmost-container").style.display = "grid";
    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    callTheWeather();
  } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate === "") {
    document.querySelector(".weather-div").style.display = "none";
    document.querySelector(".dessert-div").style.display = "";
    document.querySelector(".rightmost-container").style.display = "grid";
    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr";
  }

  //DATE ACTIVITY DIV: This will run the date activity information:
  //Setting up all the fetch URL variables:
  var dateActivityBaseURL = "https://travel-advisor.p.rapidapi.com/attractions/list?"
  var parameterLocationId = "location_id="
  var locationId = "60763";

  var parameterCurrency = "currency=";
  var currency = "USD";

  var parameterUnit = "lunit="
  var lunit = "mi";

  var parameterLimit = "limit=";
  var limit = "30"

  var parameterLang = "lang=";
  var lang = "en_US";

  var parameterRestAPIKey = "rapidapi-key="
  var restAPIKey = process.env.RESTAPIKEY;

  var parameterMinRating = "min_rating="
  var minRating = "4";

  var parameterOffset = "offset=";

  var parameterSort = "sort="
  var sort = "recommended"

  var parameterSubCategory = "subcategory="

  var and = "&"

  var subcategoryArray = ["40", "41", "49", "20", "0", "56", "61", "58", "57"];
  var subcategoryRandomNumber = Math.round(Math.random() * (subcategoryArray.length - 1));
  var dateActivitySubCategory = subcategoryArray[subcategoryRandomNumber];

  if (dateSaveCheckbox.checked === false) {
    return dateHappily();
  } else if (dateSaveCheckbox.checked === true && restSaveCheckbox.checked === true && dessertSaveCheckbox.checked === true) {
    console.log("Nothing needs to run. All items have been saved.")
  } else if (dateSaveCheckbox.checked === true && restSaveCheckbox.checked === true && dessertSaveCheckbox.checked === false) {
    postSaveDessert();
  } else if (dateSaveCheckbox.checked === true && restSaveCheckbox.checked === false && dessertSaveCheckbox.checked === false) {
    postSaveRestaurant();
    postSaveDessert();
  } else if (dateSaveCheckbox.checked === true && restSaveCheckbox.checked === false && dessertSaveCheckbox.checked === true) {
    postSaveRestaurant();
  }

  //This will be the function that houses the Javascript Fetch for the Date Activity panel (incl. the random number offset):

  function dateHappily() {
    //This will identify a random number for the offset:
    var dateActivityRandomOffsetNumber = Math.round(Math.random() * 50);

    var dateActivityFetchURL = dateActivityBaseURL + parameterLocationId + locationId + and + parameterSort + sort + and + parameterSubCategory + dateActivitySubCategory + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterOffset + dateActivityRandomOffsetNumber;
    console.log(dateActivityFetchURL);

    const data = null;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", dateActivityFetchURL, true);
    xhr.addEventListener("readystatechange", dateActivityCallFunction);

    function dateActivityCallFunction() {
      if (this.readyState === this.DONE) {
        var dateActivityData = JSON.parse(this.responseText);
        console.log(dateActivityData);
        var dateActivityPage1Results = dateActivityData.paging.results;
        var dateActivityTotalResults = dateActivityData.paging.total_results;
        var dateActivityActualArrayResults = dateActivityData.data.length;

        if (dateActivityPage1Results === 0) {
          return dateHappily();
        };

        var dateActivityRandomNumber = Math.round(Math.random() * (dateActivityActualArrayResults - 1));
        if (Object.keys(dateActivityData.data[dateActivityRandomNumber]).length < 30) {
          if (dateActivityData.data[dateActivityRandomNumber + 1] == null || dateActivityData.data[dateActivityRandomNumber + 1] == undefined) {
            dateActivityRandomNumber = dateActivityRandomNumber - 1;
          } else {
            dateActivityRandomNumber = dateActivityRandomNumber + 1;
          }
        };
        console.log("Date Activity random number = " + dateActivityRandomNumber);
        console.log(dateActivityData);

        var dateActivityName = dateActivityData.data[dateActivityRandomNumber].name;
        document.querySelector(".date-activity-title").innerHTML = dateActivityName;

        if (dateActivityData.data[dateActivityRandomNumber].photo == null || dateActivityData.data[dateActivityRandomNumber].photo === "" || dateActivityData.data[dateActivityRandomNumber].photo == undefined) {
          document.querySelector(".date-activity-pic").style.display = "none";
          document.querySelector(".date-activity-pic-error").style.display = "flex";
        } else {
          var dateActivityPhoto = dateActivityData.data[dateActivityRandomNumber].photo.images.large.url;
          document.querySelector(".date-activity-pic").setAttribute("src", dateActivityPhoto);
          document.querySelector(".date-activity-pic").style.display = "";
          document.querySelector(".date-activity-pic-error").style.display = "none"
        }

        var dateActivityWebsite = dateActivityData.data[dateActivityRandomNumber].website;
        if (dateActivityWebsite === "" || dateActivityWebsite == null || dateActivityWebsite == undefined) {
          document.querySelector(".date-activity-links-paragraph").innerHTML = "<a href='' target='_blank' class='date-activity-reviews'>TripAdvisor reviews</a>"
        } else {
          document.querySelector(".date-activity-links-paragraph").innerHTML = "<a href='' target='_blank' class='date-activity-link'>Website</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='' target='_blank' class='date-activity-reviews'>TripAdvisor reviews</a>"
          document.querySelector(".date-activity-link").setAttribute("href", dateActivityWebsite);
        };
        var dateActivityTripAdvisor = dateActivityData.data[dateActivityRandomNumber].web_url;
        document.querySelector(".date-activity-reviews").setAttribute("href", dateActivityTripAdvisor);

        var dateActivityPhone = dateActivityData.data[dateActivityRandomNumber].phone;
        if (dateActivityPhone === "" || dateActivityPhone == null || dateActivityPhone == undefined) {
          document.querySelector(".date-activity-phone").style.display = "none";
        } else {
          document.querySelector(".date-activity-phone").style.display = "";
          document.querySelector(".date-activity-phone").innerHTML = dateActivityPhone;
        };

        // ADDRESS EDITS:
        var dateActivityStreet1 = dateActivityData.data[dateActivityRandomNumber].address_obj.street1;
        var dateActivityCity = dateActivityData.data[dateActivityRandomNumber].address_obj.city;
        var dateActivityState = dateActivityData.data[dateActivityRandomNumber].address_obj.state;
        if (dateActivityStreet1 == null || dateActivityStreet1 == undefined || dateActivityStreet1 === "") {
          document.querySelector(".date-activity-street-1").style.display = "none";
        } else {
          document.querySelector(".date-activity-street-1").style.display = "";
          document.querySelector(".date-activity-street-1").innerHTML = dateActivityStreet1;
        }

        if (dateActivityData.data[dateActivityRandomNumber].address_obj.postalcode == null || dateActivityData.data[dateActivityRandomNumber].address_obj.postalcode == undefined || dateActivityData.data[dateActivityRandomNumber].address_obj.postalcode === "") {
          document.querySelector(".date-activity-city").innerHTML = dateActivityCity + ", " + dateActivityState;
        } else {
          let dateActivityZip = (dateActivityData.data[dateActivityRandomNumber].address_obj.postalcode);
          let dateActivityZipCut = dateActivityZip.split("-")[0];
          document.querySelector(".date-activity-city").innerHTML = dateActivityCity + ", " + dateActivityState + " " + dateActivityZipCut;
        };

        //OTHER DATE ACTIVITY EDITS:
        var dateActivityRating = dateActivityData.data[dateActivityRandomNumber].rating;
        document.querySelector(".dadg4").innerHTML = dateActivityRating;

        var dateActivityDescription = dateActivityData.data[dateActivityRandomNumber].description;
        document.querySelector(".date-activity-description-paragraph").innerHTML = dateActivityDescription;

        //FIGURING OUT THE LOCATION OF THE RESTAURANT TO INPUT INTO THE DESSERT FUNCTION:

        var dateActivityNeighborhoodInfoArray = dateActivityData.data[dateActivityRandomNumber].neighborhood_info;
        console.log(dateActivityNeighborhoodInfoArray);

        function findTheRightLocation(x) {
          if (x.location_id != "60763" && x.location_id != "15565668" && x.location_id != "7102352" && x.location_id != "15565677") {
            return true;
          }
        };

        function findTheSecondRightLocation(x) {
          if (x.location_id != "60763") {
            return true;
          }
        };

        if (dateActivityNeighborhoodInfoArray == null) {
          var dateActivityLocation = "60763";
        } else if (restWalkDistance.checked === false) {
          var dateActivityLocation = "60763";
        } else if (restWalkDistance.checked === true) {
          if (dateActivityNeighborhoodInfoArray.findIndex(findTheRightLocation) === -1) {
            var dateActivityLocation = "60763";
          } else {
            var dateActivityLocation = dateActivityData.data[dateActivityRandomNumber].neighborhood_info[dateActivityNeighborhoodInfoArray.findIndex(findTheRightLocation)].location_id;
          }
        } else {
          var dateActivityLocation = dateActivityData.data[dateActivityRandomNumber].neighborhood_info[0].location_id;
        }

        console.log(dateActivityLocation);

        dateActivityLocationArray.push(dateActivityLocation);
        console.log("Date Activity Location Array: " + dateActivityLocationArray);


        //This is the noFaceDemandsFood()function that is embedded within this Date Activity function.
        noFaceDemandsFood();

        function noFaceDemandsFood() {
          //Setting up all the fetch URL variables:
          var restBaseURL = "https://travel-advisor.p.rapidapi.com/restaurants/list?"
          var parameterLocationId = "location_id="

          var parameterCurrency = "currency=";
          var currency = "USD";

          var parameterUnit = "lunit="
          var lunit = "mi";

          var parameterLimit = "limit=";
          var limit = "30"

          var parameterLang = "lang=";
          var lang = "en_US";

          var parameterRestAPIKey = "rapidapi-key="
          var restAPIKey = process.env.RESTAPIKEY;

          var parameterMinRating = "min_rating="
          var minRating = "4";

          var parameterRestPrice = "prices_restaurants="
          var parameterCombinedFoodKey = "combined_food="
          var parameterRestTag = "restaurant_tagcategory="

          var and = "&"

          //This will identify the key for the price-range submitted by the user.
          var priceRange = document.getElementById("price-range")
          var userSubmittedPriceRange = priceRange.value;
          if (userSubmittedPriceRange === "$") {
            var pricesRestaurants = "10953";
          } else if (userSubmittedPriceRange === "$$ - $$$") {
            var pricesRestaurants = "10955";
          } else if (userSubmittedPriceRange === "$$$$") {
            var pricesRestaurants = "10954";
          } else {
            var pricesRestaurants = "all"
          }

          //This will identify the key that correlates with the cuisine search result.
          function getKeyByCuisineValue(object, value) {
            var x = Object.keys(object)
            return x.find(function(key) {
              return object[key].label.toLowerCase() === value.toLowerCase()
            });
          }
          var userSubmittedCuisineSearch = document.getElementById("cuisine-selection").value;

          if (userSubmittedCuisineSearch === "") {
            var cuisineSearchKey = "all";
          } else {
            var cuisineSearchKey = getKeyByCuisineValue(cuisineNames, userSubmittedCuisineSearch);
          };

          var restaurantFetchURL = restBaseURL + parameterLocationId + dateActivityLocation + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterCombinedFoodKey + cuisineSearchKey;
          console.log(restaurantFetchURL);

          if (restSaveCheckbox.checked === false) {
            reRestaurantFetch(restaurantFetchURL);
          } else if (restSaveCheckbox.checked === true && dessertSaveChecbox.checked === true) {
            console.log("Restaurant Function does not need to run.")
          } else if (restSaveCheckbox.checked === true && dessertSaveChecbox.checked === false) {
            postSaveDessert();
          }

          function reRestaurantFetch(x) {
            const data = null;
            const xhr = new XMLHttpRequest();

            xhr.open("GET", x, true);
            xhr.addEventListener("readystatechange", restaurantCallFunction);

            function restaurantCallFunction() {
              if (this.readyState === this.DONE) {
                var restaurantData = JSON.parse(this.responseText);
                var restPage1Results = restaurantData.paging.results;
                var restTotalResults = restaurantData.paging.total_results;
                var restActualArrayResults = restaurantData.data.length;
                console.log("restActualArrayResults =" + restActualArrayResults);

                if (restActualArrayResults == null || restActualArrayResults == undefined || restActualArrayResults === 0 || restActualArrayResults === "") {
                  document.querySelector(".restaurant-div").style.display = "none";
                  document.querySelector(".rest-error-page").style.display = "block";
                  if (userSubmittedExtraChatTime === "None" && userSubmittedDate === "") {
                    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr";
                    document.querySelector(".rightmost-container").style.display = "grid";
                  } else if (userSubmittedExtraChatTime === "None" && userSubmittedDate != "") {
                    document.querySelector(".rightmost-container").style.display = "grid";
                    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr";
                  } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate != "") {
                    document.querySelector(".rightmost-container").style.display = "grid";
                    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
                  } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate === "") {
                    document.querySelector(".rightmost-container").style.display = "grid";
                    document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr";
                  }
                  restCloseBtn.addEventListener("click", closeRestErrorPage);

                  function closeRestErrorPage() {
                    document.querySelector(".restaurant-div").style.display = "";
                    document.querySelector(".rest-error-page").style.display = "none";
                    var reRunRestaurantFetchURL = restBaseURL + parameterLocationId + locationId + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterCombinedFoodKey + cuisineSearchKey;
                    reRestaurantFetch(reRunRestaurantFetchURL);
                  } //This is the end of the function closeRestErrorPage()
                } else {
                  document.querySelector(".restaurant-div").style.display = "";
                  document.querySelector(".rest-error-page").style.display = "none";
                  var firstPageRandomNumber = Math.round(Math.random() * (restActualArrayResults - 1));
                  if (Object.keys(restaurantData.data[firstPageRandomNumber]).length < 30) {
                    if (restaurantData.data[firstPageRandomNumber + 1] == null || restaurantData.data[firstPageRandomNumber + 1] == undefined) {
                      firstPageRandomNumber = firstPageRandomNumber - 1;
                    } else {
                      firstPageRandomNumber = firstPageRandomNumber + 1;
                    }
                  };
                  console.log(firstPageRandomNumber);
                  console.log(restaurantData);

                  var restName = restaurantData.data[firstPageRandomNumber].name;
                  document.querySelector(".rest-title").innerHTML = restName;

                  if (restaurantData.data[firstPageRandomNumber].photo == null || restaurantData.data[firstPageRandomNumber].photo == undefined || restaurantData.data[firstPageRandomNumber].photo === "") {
                    document.querySelector(".rest-pic").style.display = "none";
                    document.querySelector(".rest-pic-error").style.display = "flex";
                  } else {
                    var restPhoto = restaurantData.data[firstPageRandomNumber].photo.images.large.url;
                    document.querySelector(".rest-pic").setAttribute("src", restPhoto);
                    document.querySelector(".rest-pic").style.display = "";
                    document.querySelector(".rest-pic-error").style.display = "none"
                  }

                  var restWebsite = restaurantData.data[firstPageRandomNumber].website;
                  if (restWebsite === "" || restWebsite == null || restWebsite == undefined) {
                    document.querySelector(".rest-links-paragraph").innerHTML = "<a href='' target='_blank' class='rest-reviews'>TripAdvisor reviews</a>"
                  } else {
                    document.querySelector(".rest-links-paragraph").innerHTML = "<a href='' target='_blank' class='rest-link'>Website</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='' target='_blank' class='rest-reviews'>TripAdvisor reviews</a>"
                    document.querySelector(".rest-link").setAttribute("href", restWebsite);
                  };
                  var restTripAdvisor = restaurantData.data[firstPageRandomNumber].web_url;
                  document.querySelector(".rest-reviews").setAttribute("href", restTripAdvisor);

                  var restPhone = restaurantData.data[firstPageRandomNumber].phone;
                  if (restPhone === "" || restPhone == null || restPhone == undefined) {
                    document.querySelector(".rest-phone").style.display = "none";
                  } else {
                    document.querySelector(".rest-phone").style.display = "";
                    document.querySelector(".rest-phone").innerHTML = restPhone;
                  };

                  // ADDRESS EDITS:
                  var restStreet1 = restaurantData.data[firstPageRandomNumber].address_obj.street1;
                  var restCity = restaurantData.data[firstPageRandomNumber].address_obj.city;
                  var restState = restaurantData.data[firstPageRandomNumber].address_obj.state;

                  if (restStreet1 == null || restStreet1 == undefined || restStreet1 === "") {
                    document.querySelector(".rest-street-1").style.display = "none";
                  } else {
                    document.querySelector(".rest-street-1").style.display = "";
                    document.querySelector(".rest-street-1").innerHTML = restStreet1;
                  }

                  if (restaurantData.data[firstPageRandomNumber].address_obj.postalcode == null || restaurantData.data[firstPageRandomNumber].address_obj.postalcode == undefined || restaurantData.data[firstPageRandomNumber].address_obj.postalcode === "") {
                    document.querySelector(".rest-city").innerHTML = restCity + ", " + restState;
                  } else {
                    let restZip = (restaurantData.data[firstPageRandomNumber].address_obj.postalcode);
                    let restZipCut = restZip.split("-")[0];
                    document.querySelector(".rest-city").innerHTML = restCity + ", " + restState + " " + restZipCut;
                  };

                  //OTHER REST EDITS:
                  var restRating = restaurantData.data[firstPageRandomNumber].rating;
                  document.querySelector(".rdg4").innerHTML = restRating;

                  var restPrice = restaurantData.data[firstPageRandomNumber].price_level;

                  if (restPrice === "$$ - $$$") {
                    document.querySelector(".rdg2").innerHTML = "$$-$$$";
                  } else {
                    document.querySelector(".rdg2").innerHTML = restPrice;
                  }

                  var restDescription = restaurantData.data[firstPageRandomNumber].description;
                  document.querySelector(".restaurant-description-paragraph").innerHTML = restDescription;

                  //FIGURING OUT THE LOCATION OF THE RESTAURANT TO INPUT INTO THE DESSERT FUNCTION:
                  //7102352=Midwest and 15565668=Tenderloin and 15565677=Downtown Manhattan

                  var restaurantNeighborhoodInfoArray = restaurantData.data[firstPageRandomNumber].neighborhood_info;
                  console.log(restaurantNeighborhoodInfoArray);

                  function findTheRestRightLocation(x) {
                    if (x.location_id != "60763" && x.location_id != "15565668" && x.location_id != "7102352" && x.location_id != "15565677") {
                      return true;
                    }
                  };

                  function findTheSecondRestRightLocation(x) {
                    if (x.location_id != "60763") {
                      return true;
                    }
                  };

                  if (restaurantNeighborhoodInfoArray == null) {
                    var restLocation = "60763";
                  } else if (dessertWalkDistance.checked === false) {
                    var restLocation = "60763";
                  } else if (dessertWalkDistance.checked === true) {
                    if (restaurantNeighborhoodInfoArray.findIndex(findTheRestRightLocation) === -1) {
                      var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[restaurantNeighborhoodInfoArray.findIndex(findTheSecondRestRightLocation)].location_id;
                    } else {
                      var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[restaurantNeighborhoodInfoArray.findIndex(findTheRestRightLocation)].location_id;
                    }
                  } else {
                    var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[0].location_id;
                  }

                  console.log(restLocation);

                  restLocationArray.push(restLocation);
                  console.log("Restaurant Location Array: " + restLocationArray);


                  //THIS IS THE DESSERT/TEA/COFFEE DIV:
                  if (userSubmittedExtraChatTime != "None" && dessertSaveCheckbox.checked === false) {
                    return extraChatTime();
                  } else if (userSubmittedExtraChatTime != "None" && dessertSaveCheckbox.checked === true) {
                    console.log("No dessert API function needs to run.");
                  } else if (userSubmittedExtraChatTime === "None" && dessertSaveCheckbox.checked === true) {
                    console.log("No dessert API function needs to run.");
                  } else if (userSubmittedExtraChatTime === "None" && dessertSaveCheckbox.checked === false) {
                    console.log("No dessert API function needs to run.");
                  }

                  function extraChatTime() {
                    console.log("Extra Chat Time Works!");
                    // This identifies the key for the rest-tag-category parameter based on the user submitted item.
                    //This will also hide the extra chat time div if the user submitted "none".
                    var userSubmittedExtraChatTime = document.getElementById("extra-chat-time").value;
                    //This is what the user submitted as the date for the weather function.
                    var userSubmittedDate = dateControl.value;

                    if (userSubmittedExtraChatTime === "Bars & Pubs") {
                      var restTagCategory = "11776";
                    } else if (userSubmittedExtraChatTime === "Coffee & Tea") {
                      var restTagCategory = "9900";
                    } else if (userSubmittedExtraChatTime === "Dessert") {
                      var restTagCategory = "9909,9901";
                    } else if (userSubmittedExtraChatTime === "Any") {
                      var restTagCategory = "11776,9900,9909,9901";
                    }

                    var dessertFetchURL = restBaseURL + parameterLocationId + restLocation + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterRestTag + restTagCategory;
                    console.log(dessertFetchURL);

                    reDessertFetch(dessertFetchURL);

                    function reDessertFetch(x) {

                      const data = null;
                      const xhr = new XMLHttpRequest();

                      xhr.open("GET", x, true);
                      xhr.addEventListener("readystatechange", dessertCallFunction);

                      function dessertCallFunction() {
                        if (this.readyState === this.DONE) {
                          var dessertData = JSON.parse(this.responseText);
                          console.log(dessertData);
                          var dessertPage1Results = dessertData.paging.results;
                          var dessertTotalResults = dessertData.paging.total_results;
                          var dessertActualArrayResults = dessertData.data.length;
                          console.log("dessertActualArrayResults =" + dessertActualArrayResults);

                          if (dessertActualArrayResults == null || dessertActualArrayResults == undefined || dessertActualArrayResults === 0 || dessertActualArrayResults === "") {
                            document.querySelector(".dessert-div").style.display = "none";
                            document.querySelector(".dessert-error-page").style.display = "block";
                            dessertCloseBtn.addEventListener("click", closeDessertErrorPage);

                            function closeDessertErrorPage() {
                              document.querySelector(".dessert-error-page").style.display = "none";
                              document.querySelector(".dessert-div").style.display = "";
                              var reRunDessertFetchURL = restBaseURL + parameterLocationId + "60763" + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterRestTag + restTagCategory;
                              reDessertFetch(reRunDessertFetchURL);
                            } //This is the end of the closeDessertErrorPage() function
                          } else {
                            document.querySelector(".dessert-div").style.display = "";
                            document.querySelector(".dessert-error-page").style.display = "none";
                            var dessertFirstPageRandomNumber = Math.round(Math.random() * (dessertActualArrayResults - 1));
                            if (Object.keys(dessertData.data[dessertFirstPageRandomNumber]).length < 30) {
                              if (dessertData.data[dessertFirstPageRandomNumber + 1] == null || dessertData.data[dessertFirstPageRandomNumber + 1] == undefined) {
                                dessertFirstPageRandomNumber = dessertFirstPageRandomNumber - 1;
                              } else {
                                dessertFirstPageRandomNumber = dessertFirstPageRandomNumber + 1;
                              }
                            };
                            console.log("Dessert random number = " + dessertFirstPageRandomNumber);

                            var dessertName = dessertData.data[dessertFirstPageRandomNumber].name;
                            document.querySelector(".dessert-title").innerHTML = dessertName;

                            if (dessertData.data[dessertFirstPageRandomNumber].photo == null || dessertData.data[dessertFirstPageRandomNumber].photo == undefined || dessertData.data[dessertFirstPageRandomNumber].photo === "") {
                              document.querySelector(".dessert-pic").style.display = "none";
                              document.querySelector(".dessert-pic-error").style.display = "flex";
                            } else {
                              var dessertPhoto = dessertData.data[dessertFirstPageRandomNumber].photo.images.large.url;
                              document.querySelector(".dessert-pic").setAttribute("src", dessertPhoto);
                              document.querySelector(".dessert-pic").style.display = "";
                              document.querySelector(".dessert-pic-error").style.display = "none"
                            }

                            var dessertWebsite = dessertData.data[dessertFirstPageRandomNumber].website;
                            if (dessertWebsite === "" || dessertWebsite == null || dessertWebsite == undefined) {
                              document.querySelector(".dessert-links").innerHTML = "<a href='' target='_blank' class='dessert-reviews'>TripAdvisor reviews</a>"
                            } else {
                              document.querySelector(".dessert-links").innerHTML = "<a href='' target='_blank' class='dessert-link'>Website</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='' target='_blank' class='dessert-reviews'>TripAdvisor reviews</a>"
                              document.querySelector(".dessert-link").setAttribute("href", dessertWebsite);
                            };
                            var dessertTripAdvisor = dessertData.data[dessertFirstPageRandomNumber].web_url;
                            document.querySelector(".dessert-reviews").setAttribute("href", dessertTripAdvisor);

                            var dessertPhone = dessertData.data[dessertFirstPageRandomNumber].phone;
                            if (dessertPhone === "" || dessertPhone == null || dessertPhone == undefined) {
                              document.querySelector(".dessert-phone").style.display = "none";
                            } else {
                              document.querySelector(".dessert-phone").style.display = "";
                              document.querySelector(".dessert-phone").innerHTML = dessertPhone;
                            }

                            // ADDRESS EDITS:
                            var dessertStreet1 = dessertData.data[dessertFirstPageRandomNumber].address_obj.street1;
                            var dessertCity = dessertData.data[dessertFirstPageRandomNumber].address_obj.city;
                            var dessertState = dessertData.data[dessertFirstPageRandomNumber].address_obj.state;
                            if (dessertStreet1 == null || dessertStreet1 == undefined || dessertStreet1 === "") {
                              document.querySelector(".dessert-street-1").style.display = "none";
                            } else {
                              document.querySelector(".dessert-street-1").style.display = "";
                              document.querySelector(".dessert-street-1").innerHTML = dessertStreet1;
                            }

                            if (dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode == null || dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode == undefined || dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode === "") {
                              document.querySelector(".dessert-city").innerHTML = dessertCity + ", " + dessertState;
                            } else {
                              let dessertZip = (dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode);
                              let dessertZipCut = dessertZip.split("-")[0];
                              document.querySelector(".dessert-city").innerHTML = dessertCity + ", " + dessertState + " " + dessertZipCut;
                            };

                            //OTHER REST EDITS:
                            var dessertRating = dessertData.data[dessertFirstPageRandomNumber].rating;
                            document.querySelector(".ddg4").innerHTML = dessertRating;

                            var dessertPrice = dessertData.data[dessertFirstPageRandomNumber].price_level;

                            if (dessertPrice === "$$ - $$$") {
                              document.querySelector(".ddg2").innerHTML = "$$-$$$";
                            } else {
                              document.querySelector(".ddg2").innerHTML = dessertPrice;
                            }

                            var dessertDescription = dessertData.data[dessertFirstPageRandomNumber].description;
                            document.querySelector(".dessert-description-paragraph").innerHTML = dessertDescription;

                          }; //This is the end of the if else statement to identify whether the first search results for dessert return nothing.
                        }; //End of the xhr if statement which determines ready state for the dessertCallFunction.
                      }; //End of the xhr call function dessertCallFunction().

                      xhr.send(); //This is the xhr.send() for the dessertCallFunction();

                    }; //This is the end of the function reDessertFetch(x).

                  }; //This is the end of the extraChatTime() function.

                }; //this is the end of the if else statement to identify whether the first search results for restaurants return nothing

              }; //End of the if statement which determines ready state for restaurantCallFunction().

            }; //End of the xhr load function for restaurantCallFunction().
            xhr.send(); //To send the data from the xhr load function for restaurantCallFunction().
          }; // This is the end of the function reRestaurantFetch(x).

        }; //This is the end of the function noFaceDemandsFood().

      }; //End of the if statement which determines ready state for dateActivityCallFunction().
    }; //This is the end of the xhr load function called: dateActivityCallFunction().
    xhr.send(); //This is the xhr.send() for the dateActivityCallFunction() function.
  }; //This is the end of the dateHappily() function.

} //This is the end of the callEverything() function.


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// POST-SAVE DUPLICATE FUNCTIONS:
// SECONDARY RESTAURANT FUNCTION:

function postSaveRestaurant() {
  //Setting up all the fetch URL variables:
  var restBaseURL = "https://travel-advisor.p.rapidapi.com/restaurants/list?"
  var parameterLocationId = "location_id="

  var parameterCurrency = "currency=";
  var currency = "USD";

  var parameterUnit = "lunit="
  var lunit = "mi";

  var parameterLimit = "limit=";
  var limit = "30"

  var parameterLang = "lang=";
  var lang = "en_US";

  var parameterRestAPIKey = "rapidapi-key="
  var restAPIKey = process.env.RESTAPIKEY;

  var parameterMinRating = "min_rating="
  var minRating = "4";

  var parameterRestPrice = "prices_restaurants="
  var parameterCombinedFoodKey = "combined_food="
  var parameterRestTag = "restaurant_tagcategory="

  var and = "&"

  //This will identify the key for the price-range submitted by the user.
  var priceRange = document.getElementById("price-range")
  var userSubmittedPriceRange = priceRange.value;
  if (userSubmittedPriceRange === "$") {
    var pricesRestaurants = "10953";
  } else if (userSubmittedPriceRange === "$$ - $$$") {
    var pricesRestaurants = "10955";
  } else if (userSubmittedPriceRange === "$$$$") {
    var pricesRestaurants = "10954";
  } else {
    var pricesRestaurants = "all"
  }

  //This will identify the key that correlates with the cuisine search result.
  function getKeyByCuisineValue(object, value) {
    var x = Object.keys(object)
    return x.find(function(key) {
      return object[key].label.toLowerCase() === value.toLowerCase()
    });
  }
  var userSubmittedCuisineSearch = document.getElementById("cuisine-selection").value;

  if (userSubmittedCuisineSearch === "") {
    var cuisineSearchKey = "all";
  } else {
    var cuisineSearchKey = getKeyByCuisineValue(cuisineNames, userSubmittedCuisineSearch);
  };

  //This will identify the location id to use based on whether the restWalk checkbox is checked or not:
  if (restWalkDistance.checked === true) {
    var restParameterLocationId = dateActivityLocationArray[dateActivityLocationArray.length - 1];
  } else {
    var restParameterLocationId = "60763";
  }

  var restaurantFetchURL = restBaseURL + parameterLocationId + restParameterLocationId + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterCombinedFoodKey + cuisineSearchKey;
  console.log(restaurantFetchURL);

  reRestaurantFetch(restaurantFetchURL);

  function reRestaurantFetch(x) {
    const data = null;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", x, true);
    xhr.addEventListener("readystatechange", restaurantCallFunction);

    function restaurantCallFunction() {
      if (this.readyState === this.DONE) {
        var restaurantData = JSON.parse(this.responseText);
        var restPage1Results = restaurantData.paging.results;
        var restTotalResults = restaurantData.paging.total_results;
        var restActualArrayResults = restaurantData.data.length;
        console.log("restActualArrayResults =" + restActualArrayResults);

        if (restActualArrayResults == null || restActualArrayResults == undefined || restActualArrayResults === 0 || restActualArrayResults === "") {
          document.querySelector(".restaurant-div").style.display = "none";
          document.querySelector(".rest-error-page").style.display = "block";
          if (userSubmittedExtraChatTime === "None" && userSubmittedDate === "") {
            document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr";
            document.querySelector(".rightmost-container").style.display = "grid";
          } else if (userSubmittedExtraChatTime === "None" && userSubmittedDate != "") {
            document.querySelector(".rightmost-container").style.display = "grid";
            document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr";
          } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate != "") {
            document.querySelector(".rightmost-container").style.display = "grid";
            document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
          } else if (userSubmittedExtraChatTime != "None" && userSubmittedDate === "") {
            document.querySelector(".rightmost-container").style.display = "grid";
            document.querySelector(".rightmost-container").style.gridTemplateColumns = "1fr 1fr 1fr";
          }
          restCloseBtn.addEventListener("click", closeRestErrorPage);

          function closeRestErrorPage() {
            document.querySelector(".restaurant-div").style.display = "";
            document.querySelector(".rest-error-page").style.display = "none";
            var reRunRestaurantFetchURL = restBaseURL + parameterLocationId + locationId + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterCombinedFoodKey + cuisineSearchKey;
            reRestaurantFetch(reRunRestaurantFetchURL);
          } //This is the end of the function closeRestErrorPage()
        } else {
          document.querySelector(".restaurant-div").style.display = "";
          document.querySelector(".rest-error-page").style.display = "none";
          var firstPageRandomNumber = Math.round(Math.random() * (restActualArrayResults - 1));
          if (Object.keys(restaurantData.data[firstPageRandomNumber]).length < 30) {
            if (restaurantData.data[firstPageRandomNumber + 1] == null || restaurantData.data[firstPageRandomNumber + 1] == undefined) {
              firstPageRandomNumber = firstPageRandomNumber - 1;
            } else {
              firstPageRandomNumber = firstPageRandomNumber + 1;
            }
          };
          console.log(firstPageRandomNumber);
          console.log(restaurantData);

          var restName = restaurantData.data[firstPageRandomNumber].name;
          document.querySelector(".rest-title").innerHTML = restName;

          if (restaurantData.data[firstPageRandomNumber].photo == null || restaurantData.data[firstPageRandomNumber].photo == undefined || restaurantData.data[firstPageRandomNumber].photo === "") {
            document.querySelector(".rest-pic").style.display = "none";
            document.querySelector(".rest-pic-error").style.display = "flex";
          } else {
            var restPhoto = restaurantData.data[firstPageRandomNumber].photo.images.large.url;
            document.querySelector(".rest-pic").setAttribute("src", restPhoto);
            document.querySelector(".rest-pic").style.display = "";
            document.querySelector(".rest-pic-error").style.display = "none"
          }

          var restWebsite = restaurantData.data[firstPageRandomNumber].website;
          if (restWebsite === "" || restWebsite == null || restWebsite == undefined) {
            document.querySelector(".rest-links-paragraph").innerHTML = "<a href='' target='_blank' class='rest-reviews'>TripAdvisor reviews</a>"
          } else {
            document.querySelector(".rest-links-paragraph").innerHTML = "<a href='' target='_blank' class='rest-link'>Website</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='' target='_blank' class='rest-reviews'>TripAdvisor reviews</a>"
            document.querySelector(".rest-link").setAttribute("href", restWebsite);
          };
          var restTripAdvisor = restaurantData.data[firstPageRandomNumber].web_url;
          document.querySelector(".rest-reviews").setAttribute("href", restTripAdvisor);

          var restPhone = restaurantData.data[firstPageRandomNumber].phone;
          if (restPhone === "" || restPhone == null || restPhone == undefined) {
            document.querySelector(".rest-phone").style.display = "none";
          } else {
            document.querySelector(".rest-phone").style.display = "";
            document.querySelector(".rest-phone").innerHTML = restPhone;
          };

          // ADDRESS EDITS:
          var restStreet1 = restaurantData.data[firstPageRandomNumber].address_obj.street1;
          var restCity = restaurantData.data[firstPageRandomNumber].address_obj.city;
          var restState = restaurantData.data[firstPageRandomNumber].address_obj.state;

          if (restStreet1 == null || restStreet1 == undefined || restStreet1 === "") {
            document.querySelector(".rest-street-1").style.display = "none";
          } else {
            document.querySelector(".rest-street-1").style.display = "";
            document.querySelector(".rest-street-1").innerHTML = restStreet1;
          }

          if (restaurantData.data[firstPageRandomNumber].address_obj.postalcode == null || restaurantData.data[firstPageRandomNumber].address_obj.postalcode == undefined || restaurantData.data[firstPageRandomNumber].address_obj.postalcode === "") {
            document.querySelector(".rest-city").innerHTML = restCity + ", " + restState;
          } else {
            let restZip = (restaurantData.data[firstPageRandomNumber].address_obj.postalcode);
            let restZipCut = restZip.split("-")[0];
            document.querySelector(".rest-city").innerHTML = restCity + ", " + restState + " " + restZipCut;
          };

          //OTHER REST EDITS:
          var restRating = restaurantData.data[firstPageRandomNumber].rating;
          document.querySelector(".rdg4").innerHTML = restRating;

          var restPrice = restaurantData.data[firstPageRandomNumber].price_level;

          if (restPrice === "$$ - $$$") {
            document.querySelector(".rdg2").innerHTML = "$$-$$$";
          } else {
            document.querySelector(".rdg2").innerHTML = restPrice;
          }

          var restDescription = restaurantData.data[firstPageRandomNumber].description;
          document.querySelector(".restaurant-description-paragraph").innerHTML = restDescription;

          //FIGURING OUT THE LOCATION OF THE RESTAURANT TO INPUT INTO THE DESSERT FUNCTION:
          //7102352=Midwest and 15565668=Tenderloin and 15565677=Downtown Manhattan

          var restaurantNeighborhoodInfoArray = restaurantData.data[firstPageRandomNumber].neighborhood_info;
          console.log(restaurantNeighborhoodInfoArray);

          function findTheRestRightLocation(x) {
            if (x.location_id != "60763" && x.location_id != "15565668" && x.location_id != "7102352" && x.location_id != "15565677") {
              return true;
            }
          };

          function findTheSecondRestRightLocation(x) {
            if (x.location_id != "60763") {
              return true;
            }
          };

          if (restaurantNeighborhoodInfoArray == null) {
            var restLocation = "60763";
          } else if (dessertWalkDistance.checked === false) {
            var restLocation = "60763";
          } else if (dessertWalkDistance.checked === true) {
            if (restaurantNeighborhoodInfoArray.findIndex(findTheRestRightLocation) === -1) {
              var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[restaurantNeighborhoodInfoArray.findIndex(findTheSecondRestRightLocation)].location_id;
            } else {
              var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[restaurantNeighborhoodInfoArray.findIndex(findTheRestRightLocation)].location_id;
            }
          } else {
            var restLocation = restaurantData.data[firstPageRandomNumber].neighborhood_info[0].location_id;
          }

          console.log(restLocation);

          restLocationArray.push(restLocation);
          console.log("Restaurant Location Array: " + restLocationArray);
        }; //this is the end of the if else statement to identify whether the first search results for restaurants return nothing
      }; //End of the if statement which determines ready state for the restaurantCallFunction.
    }; //This is the end of the xhr onload for restaurantCallFunction within the postSaveRestaurant function.
    xhr.send();
  }; // This is the end of the function reRestaurantFetch(x).

}; //This is the end of the postSaveRestaurant() function.


// SECONDARY DESSERT FUNCTION:
function postSaveDessert(){
  var userSubmittedExtraChatTime = document.getElementById("extra-chat-time").value;
  if (userSubmittedExtraChatTime != "None" && dessertSaveCheckbox.checked === false) {
    return extraChatTime();
  } else if (userSubmittedExtraChatTime != "None" && dessertSaveCheckbox.checked === true) {
    console.log("No dessert API function needs to run.");
  } else if (userSubmittedExtraChatTime === "None" && dessertSaveCheckbox.checked === true) {
    console.log("No dessert API function needs to run.");
  } else if (userSubmittedExtraChatTime === "None" && dessertSaveCheckbox.checked === false) {
    console.log("No dessert API function needs to run.");
  }

  function extraChatTime() {
    console.log("Extra Chat Time Works!");

    var restBaseURL = "https://travel-advisor.p.rapidapi.com/restaurants/list?"
    var parameterLocationId = "location_id="

    var parameterCurrency = "currency=";
    var currency = "USD";

    var parameterUnit = "lunit="
    var lunit = "mi";

    var parameterLimit = "limit=";
    var limit = "30"

    var parameterLang = "lang=";
    var lang = "en_US";

    var parameterRestAPIKey = "rapidapi-key="
    var restAPIKey = process.env.RESTAPIKEY;

    var parameterMinRating = "min_rating="
    var minRating = "4";

    var parameterRestPrice = "prices_restaurants="
    var parameterCombinedFoodKey = "combined_food="
    var parameterRestTag = "restaurant_tagcategory="

    var and = "&"

    //This will identify the key for the price-range submitted by the user.
    var priceRange = document.getElementById("price-range")
    var userSubmittedPriceRange = priceRange.value;
    if (userSubmittedPriceRange === "$") {
      var pricesRestaurants = "10953";
    } else if (userSubmittedPriceRange === "$$ - $$$") {
      var pricesRestaurants = "10955";
    } else if (userSubmittedPriceRange === "$$$$") {
      var pricesRestaurants = "10954";
    } else {
      var pricesRestaurants = "all"
    }

    //This will identify the location needed for the fetch URL.
    if(dessertWalkDistance.checked === true){
      var restLocation = restLocationArray[restLocationArray.length-1];
    } else {restLocation = "60763"}

    // This identifies the key for the rest-tag-category parameter based on the user submitted item.
    //This will also hide the extra chat time div if the user submitted "none".
    var userSubmittedExtraChatTime = document.getElementById("extra-chat-time").value;
    //This is what the user submitted as the date for the weather function.
    var userSubmittedDate = dateControl.value;

    if (userSubmittedExtraChatTime === "Bars & Pubs") {
      var restTagCategory = "11776";
    } else if (userSubmittedExtraChatTime === "Coffee & Tea") {
      var restTagCategory = "9900";
    } else if (userSubmittedExtraChatTime === "Dessert") {
      var restTagCategory = "9909,9901";
    } else if (userSubmittedExtraChatTime === "Any") {
      var restTagCategory = "11776,9900,9909,9901";
    }

    var dessertFetchURL = restBaseURL + parameterLocationId + restLocation + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterRestTag + restTagCategory;
    console.log(dessertFetchURL);

    reDessertFetch(dessertFetchURL);

    function reDessertFetch(x){
      const data = null;
      const xhr = new XMLHttpRequest();

      xhr.open("GET", x, true);
      xhr.addEventListener("readystatechange", dessertCallFunction);

      function dessertCallFunction(){
        if(this.readyState === this.DONE){
          var dessertData = JSON.parse(this.responseText);
          console.log(dessertData);
          var dessertPage1Results = dessertData.paging.results;
          var dessertTotalResults = dessertData.paging.total_results;
          var dessertActualArrayResults = dessertData.data.length;
          console.log("dessertActualArrayResults =" + dessertActualArrayResults);

          if (dessertActualArrayResults == null || dessertActualArrayResults == undefined || dessertActualArrayResults === 0 || dessertActualArrayResults === "") {
            document.querySelector(".dessert-div").style.display = "none";
            document.querySelector(".dessert-error-page").style.display = "block";
            dessertCloseBtn.addEventListener("click", closeDessertErrorPage);

            function closeDessertErrorPage() {
              document.querySelector(".dessert-error-page").style.display = "none";
              document.querySelector(".dessert-div").style.display = "";
              var reRunDessertFetchURL = restBaseURL + parameterLocationId + "60763" + and + parameterCurrency + currency + and + parameterUnit + lunit + and + parameterLimit + limit + and + parameterLang + lang + and + parameterRestAPIKey + restAPIKey + and + parameterMinRating + minRating + and + parameterRestPrice + pricesRestaurants + and + parameterRestTag + restTagCategory;
              reDessertFetch(reRunDessertFetchURL);
            } //This is the end of the closeDessertErrorPage() function
          } else {
            document.querySelector(".dessert-div").style.display = "";
            document.querySelector(".dessert-error-page").style.display = "none";
            var dessertFirstPageRandomNumber = Math.round(Math.random() * (dessertActualArrayResults - 1));
            if (Object.keys(dessertData.data[dessertFirstPageRandomNumber]).length < 30) {
              if (dessertData.data[dessertFirstPageRandomNumber + 1] == null || dessertData.data[dessertFirstPageRandomNumber + 1] == undefined) {
                dessertFirstPageRandomNumber = dessertFirstPageRandomNumber - 1;
              } else {
                dessertFirstPageRandomNumber = dessertFirstPageRandomNumber + 1;
              }
            };
            console.log("Dessert random number = " + dessertFirstPageRandomNumber);

            var dessertName = dessertData.data[dessertFirstPageRandomNumber].name;
            document.querySelector(".dessert-title").innerHTML = dessertName;

            if (dessertData.data[dessertFirstPageRandomNumber].photo == null || dessertData.data[dessertFirstPageRandomNumber].photo == undefined || dessertData.data[dessertFirstPageRandomNumber].photo === "") {
              document.querySelector(".dessert-pic").style.display = "none";
              document.querySelector(".dessert-pic-error").style.display = "flex";
            } else {
              var dessertPhoto = dessertData.data[dessertFirstPageRandomNumber].photo.images.large.url;
              document.querySelector(".dessert-pic").setAttribute("src", dessertPhoto);
              document.querySelector(".dessert-pic").style.display = "";
              document.querySelector(".dessert-pic-error").style.display = "none"
            }

            var dessertWebsite = dessertData.data[dessertFirstPageRandomNumber].website;
            if (dessertWebsite === "" || dessertWebsite == null || dessertWebsite == undefined) {
              document.querySelector(".dessert-links").innerHTML = "<a href='' target='_blank' class='dessert-reviews'>TripAdvisor reviews</a>"
            } else {
              document.querySelector(".dessert-links").innerHTML = "<a href='' target='_blank' class='dessert-link'>Website</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href='' target='_blank' class='dessert-reviews'>TripAdvisor reviews</a>"
              document.querySelector(".dessert-link").setAttribute("href", dessertWebsite);
            };
            var dessertTripAdvisor = dessertData.data[dessertFirstPageRandomNumber].web_url;
            document.querySelector(".dessert-reviews").setAttribute("href", dessertTripAdvisor);

            var dessertPhone = dessertData.data[dessertFirstPageRandomNumber].phone;
            if (dessertPhone === "" || dessertPhone == null || dessertPhone == undefined) {
              document.querySelector(".dessert-phone").style.display = "none";
            } else {
              document.querySelector(".dessert-phone").style.display = "";
              document.querySelector(".dessert-phone").innerHTML = dessertPhone;
            }

            // ADDRESS EDITS:
            var dessertStreet1 = dessertData.data[dessertFirstPageRandomNumber].address_obj.street1;
            var dessertCity = dessertData.data[dessertFirstPageRandomNumber].address_obj.city;
            var dessertState = dessertData.data[dessertFirstPageRandomNumber].address_obj.state;
            if (dessertStreet1 == null || dessertStreet1 == undefined || dessertStreet1 === "") {
              document.querySelector(".dessert-street-1").style.display = "none";
            } else {
              document.querySelector(".dessert-street-1").style.display = "";
              document.querySelector(".dessert-street-1").innerHTML = dessertStreet1;
            }

            if (dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode == null || dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode == undefined || dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode === "") {
              document.querySelector(".dessert-city").innerHTML = dessertCity + ", " + dessertState;
            } else {
              let dessertZip = (dessertData.data[dessertFirstPageRandomNumber].address_obj.postalcode);
              let dessertZipCut = dessertZip.split("-")[0];
              document.querySelector(".dessert-city").innerHTML = dessertCity + ", " + dessertState + " " + dessertZipCut;
            };

            //OTHER REST EDITS:
            var dessertRating = dessertData.data[dessertFirstPageRandomNumber].rating;
            document.querySelector(".ddg4").innerHTML = dessertRating;

            var dessertPrice = dessertData.data[dessertFirstPageRandomNumber].price_level;

            if (dessertPrice === "$$ - $$$") {
              document.querySelector(".ddg2").innerHTML = "$$-$$$";
            } else {
              document.querySelector(".ddg2").innerHTML = dessertPrice;
            }

            var dessertDescription = dessertData.data[dessertFirstPageRandomNumber].description;
            document.querySelector(".dessert-description-paragraph").innerHTML = dessertDescription;

          }; //This is the end of the if else statement to identify whether the first search results for dessert return nothing.
        }; //This is the end of the if statement which determines readystate for dessertCallFunction.
        }; //This is the end of the xhr onload function for dessertCallFunction
      xhr.send();
    }; //This is the end of the function reDessertFetch(x).

  }; //This is the end of the extraChatTime() function.
}; //This is the end of the PostSaveDessert() function.







// Changing the min and max date selectable in the calendar input:
// ----This sets the minimum date on the calendar input.
var todaysDate = new Date();
var todaysDateAtNoon = new Date(todaysDate.setHours(12, 0, 0));
var formattedTodaysDate = todaysDateAtNoon.toISOString().split("T")[0];
document.getElementById("calendar").setAttribute("min", formattedTodaysDate);
// ----This sets the maximum date on the calendar input.
var maxDate = todaysDateAtNoon.setDate(todaysDateAtNoon.getDate() + 15);
var formattedMaxDate = new Date(maxDate).toISOString().split("T")[0];
document.getElementById("calendar").setAttribute("max", formattedMaxDate);

// CALLS THE WEATHER API (callTheWeather function):
function callTheWeather() {
  // This identifies what the user submitted as the date.
  var userSubmittedDate = dateControl.value;
  // This identifies what the user submitted as the weather measurement.
  var measurementControl = document.getElementById("weather-unit").value;
  // This changes the Weather API URL depending on the measurement unit selected.
  var weatherURL = ""
  if (measurementControl === "Celsius") {
    weatherURL = process.env.WEATHERURLCELSIUS
  } else {
    weatherURL = process.env.WEATHERURLFARENHEIT
  };

  const data = null;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", weatherURL, true);
  xhr.addEventListener("readystatechange", weatherCallFunction);

  function weatherCallFunction() {
    if(this.readyState === this.DONE){
      var weatherData = JSON.parse(this.responseText);
      var dateIndex = weatherData.data.findIndex(function(eachObject) {
        return eachObject.datetime === userSubmittedDate;
      })
      if (dateIndex < 0) {
        document.querySelector(".weather-div").style.display = "none";
      } else {
        document.querySelector(".weather-div").style.removeProperty("display");

        // WEATHER SUMMARY DATA
        var weatherDataDate = new Date(weatherData.data[dateIndex].datetime + "T12:00:00");
        var weatherDate = weatherDataDate.toLocaleString("en-US", {
          dateStyle: "medium"
        });
        document.querySelector(".weather-date").innerHTML = weatherDate;
        var weatherTemp = Math.round(weatherData.data[dateIndex].temp);
        if (measurementControl === "Celsius") {
          document.querySelector(".temperature").innerHTML = weatherTemp + "&#176;C";
        } else {
          document.querySelector(".temperature").innerHTML = weatherTemp + "&#176;F";
        }

        // WEATHER IMAGE DATA
        var weatherCode = weatherData.data[dateIndex].weather.code;
        if (weatherCode >= 800 && weatherCode <= 803) {
          document.querySelector(".weather-div").style.backgroundImage = "url('images/blue-sky.jpg')"
        } else {
          document.querySelector(".weather-div").style.backgroundImage = "url('images/rainy-sky-2.jpg')"
        }

        var weatherIcon = weatherData.data[dateIndex].weather.icon;
        var weatherIconURL = "https://www.weatherbit.io/static/img/icons/" + weatherIcon + ".png"
        var icon = document.querySelector(".weather-icon-pic");
        icon.src = weatherIconURL

        // WEATHER SUMMARY DATA CONTINUED
        var weatherDescription = weatherData.data[dateIndex].weather.description;
        document.querySelector(".weather-description").innerHTML = weatherDescription;

        // WEATHER DETAILS DATA
        var highTemp = Math.round(weatherData.data[dateIndex].high_temp);
        var lowTemp = Math.round(weatherData.data[dateIndex].low_temp);

        if (measurementControl === "Celsius") {
          document.querySelector(".high-temp-number").innerHTML = highTemp + "&#176;C";
          document.querySelector(".low-temp-number").innerHTML = lowTemp + "&#176;C";
        } else {
          document.querySelector(".high-temp-number").innerHTML = highTemp + "&#176;F";
          document.querySelector(".low-temp-number").innerHTML = lowTemp + "&#176;F";
        }

        var rainChance = Math.round(weatherData.data[dateIndex].pop);
        document.querySelector(".rain-percentage-number").innerHTML = rainChance + "&#37;";

        if (rainChance >= 20) {
          document.querySelector(".rain-percentage-number").style.color = "red";
          document.querySelector(".rain-percentage").style.color = "red";
        } else {
          document.querySelector(".rain-percentage-number").style.color = "inherit";
          document.querySelector(".rain-percentage").style.color = "inherit";
        }

        var averageHumidity = Math.round(weatherData.data[dateIndex].rh);
        document.querySelector(".avg-humidity-number").innerHTML = averageHumidity + "&#37;";
        var accumSnowfall = Math.round(weatherData.data[dateIndex].snow);
        if (measurementControl === "Celsius") {
          document.querySelector(".accum-snowfall-number").innerHTML = accumSnowfall + "mm";
        } else {
          document.querySelector(".accum-snowfall-number").innerHTML = accumSnowfall + " in";
        }

      } //This is the end of the if else function in the event the dateIndex is NOT 0 which means a date was submitted by the user.
    }; //End of the if statement which determines ready state for the weather function.
    }; //This closes the weatherCallFunction().
  xhr.send();
}; //This is the end of the entire function "callTheWeather"
