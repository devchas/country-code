exports.getCode = function(code) {
    for (var i = 0; i < countryList.length; i++) {
        if (code == countryList[i].value) {
            return countryList[i].label;
        }
    }
    return 'Invalid Entry';
}

const countryList = [{
        "label": "United States of America",
        "value": "US"
    }, {
        "label": "Afghanistan",
        "value": "AF"
    }, {
        "label": "Albania",
        "value": "AL"
    }, {
        "label": "Algeria",
        "value": "DZ"
    }, {
        "label": "Andorra",
        "value": "AD"
    }, {
        "label": "Angola",
        "value": "AO"
    }, {
        "label": "Antigua and Barbuda",
        "value": "AG"
    }, {
        "label": "Argentina",
        "value": "AR"
    }, {
        "label": "Armenia",
        "value": "AM"
    }, {
        "label": "Australia",
        "value": "AU"
    }, {
        "label": "Austria",
        "value": "AT"
    }, {
        "label": "Azerbaijan",
        "value": "AZ"
    }, {
        "label": "Bahamas",
        "value": "BS"
    }, {
        "label": "Bahrain",
        "value": "BH"
    }, {
        "label": "Bangladesh",
        "value": "BD"
    }, {
        "label": "Barbados",
        "value": "BB"
    }, {
        "label": "Belarus",
        "value": "BY"
    }, {
        "label": "Belgium",
        "value": "BE"
    }, {
        "label": "Belize",
        "value": "BZ"
    }, {
        "label": "Benin",
        "value": "BJ"
    }, {
        "label": "Bhutan",
        "value": "BT"
    }, {
        "label": "Bolivia",
        "value": "BO"
    }, {
        "label": "Bosnia and Herzegovina",
        "value": "BA"
    }, {
        "label": "Botswana",
        "value": "BW"
    }, {
        "label": "Brazil",
        "value": "BR"
    }, {
        "label": "Brunei",
        "value": "BN"
    }, {
        "label": "Bulgaria",
        "value": "BG"
    }, {
        "label": "Burkina Faso",
        "value": "BF"
    }, {
        "label": "Burundi",
        "value": "BI"
    }, {
        "label": "Cambodia",
        "value": "KH"
    }, {
        "label": "Cameroon",
        "value": "CM"
    }, {
        "label": "Canada",
        "value": "CA"
    }, {
        "label": "Cape Verde",
        "value": "CV"
    }, {
        "label": "Central African Republic",
        "value": "CF"
    }, {
        "label": "Chad",
        "value": "TD"
    }, {
        "label": "Chile",
        "value": "CL"
    }, {
        "label": "China",
        "value": "CN"
    }, {
        "label": "Colombia",
        "value": "CO"
    }, {
        "label": "Comoros",
        "value": "KM"
    }, {
        "label": "Congo",
        "value": "CD"
    }, {
        "label": "Congo, Republic of the (Congo _ Brazzaville)",
        "value": "CG"
    }, {
        "label": "Costa Rica",
        "value": "CR"
    }, {
        "label": "Cote d'Ivoire (Ivory Coast)",
        "value": "CI"
    }, {
        "label": "Croatia",
        "value": "HR"
    }, {
        "label": "Cuba",
        "value": "CU"
    }, {
        "label": "Cyprus",
        "value": "CY"
    }, {
        "label": "Czech Republic",
        "value": "CZ"
    }, {
        "label": "Denmark",
        "value": "DK"
    }, {
        "label": "Djibouti",
        "value": "DJ"
    }, {
        "label": "Dominica",
        "value": "DM"
    }, {
        "label": "Dominican Republic",
        "value": "DO"
    }, {
        "label": "Ecuador",
        "value": "EC"
    }, {
        "label": "Egypt",
        "value": "EG"
    }, {
        "label": "El Salvador",
        "value": "SV"
    }, {
        "label": "Equatorial Guinea",
        "value": "GQ"
    }, {
        "label": "Eritrea",
        "value": "ER"
    }, {
        "label": "Estonia",
        "value": "EE"
    }, {
        "label": "Ethiopia",
        "value": "ET"
    }, {
        "label": "Fiji",
        "value": "FJ"
    }, {
        "label": "Finland",
        "value": "FI"
    }, {
        "label": "France",
        "value": "FR"
    }, {
        "label": "Gabon",
        "value": "GA"
    }, {
        "label": "Gambia",
        "value": "GM"
    }, {
        "label": "Georgia",
        "value": "GE"
    }, {
        "label": "Germany",
        "value": "DE"
    }, {
        "label": "Ghana",
        "value": "GH"
    }, {
        "label": "Greece",
        "value": "GR"
    }, {
        "label": "Grenada",
        "value": "GD"
    }, {
        "label": "Guatemala",
        "value": "GT"
    }, {
        "label": "Guinea",
        "value": "GN"
    }, {
        "label": "Guinea-Bissau",
        "value": "GW"
    }, {
        "label": "Guyana",
        "value": "GY"
    }, {
        "label": "Haiti",
        "value": "HT"
    }, {
        "label": "Honduras",
        "value": "HN"
    }, {
        "label": "Hungary",
        "value": "HU"
    }, {
        "label": "Iceland",
        "value": "IS"
    }, {
        "label": "India",
        "value": "IN"
    }, {
        "label": "Indonesia",
        "value": "ID"
    }, {
        "label": "Iran",
        "value": "IR"
    }, {
        "label": "Iraq",
        "value": "IQ"
    }, {
        "label": "Ireland",
        "value": "IE"
    }, {
        "label": "Israel",
        "value": "IL"
    }, {
        "label": "Italy",
        "value": "IT"
    }, {
        "label": "Jamaica",
        "value": "JM"
    }, {
        "label": "Japan",
        "value": "JP"
    }, {
        "label": "Jordan",
        "value": "JO"
    }, {
        "label": "Kazakhstan",
        "value": "KZ"
    }, {
        "label": "Kenya",
        "value": "KE"
    }, {
        "label": "Kiribati",
        "value": "KI"
    }, {
        "label": "North Korea",
        "value": "KP"
    }, {
        "label": "South Korea",
        "value": "KR"
    }, {
        "label": "Kuwait",
        "value": "KW"
    }, {
        "label": "Kyrgyzstan",
        "value": "KG"
    }, {
        "label": "Laos",
        "value": "LA"
    }, {
        "label": "Latvia",
        "value": "LV"
    }, {
        "label": "Lebanon",
        "value": "LB"
    }, {
        "label": "Lesotho",
        "value": "LS"
    }, {
        "label": "Liberia",
        "value": "LR"
    }, {
        "label": "Libya",
        "value": "LY"
    }, {
        "label": "Liechtenstein",
        "value": "LI"
    }, {
        "label": "Lithuania",
        "value": "LT"
    }, {
        "label": "Luxembourg",
        "value": "LU"
    }, {
        "label": "Macedonia",
        "value": "MK"
    }, {
        "label": "Madagascar",
        "value": "MG"
    }, {
        "label": "Malawi",
        "value": "MW"
    }, {
        "label": "Malaysia",
        "value": "MY"
    }, {
        "label": "Maldives",
        "value": "MV"
    }, {
        "label": "Mali",
        "value": "ML"
    }, {
        "label": "Malta",
        "value": "MT"
    }, {
        "label": "Marshall Islands",
        "value": "MH"
    }, {
        "label": "Mauritania",
        "value": "MR"
    }, {
        "label": "Mauritius",
        "value": "MU"
    }, {
        "label": "Mexico",
        "value": "MX"
    }, {
        "label": "Micronesia",
        "value": "FM"
    }, {
        "label": "Moldova",
        "value": "MD"
    }, {
        "label": "Monaco",
        "value": "MC"
    }, {
        "label": "Mongolia",
        "value": "MN"
    }, {
        "label": "Montenegro",
        "value": "ME"
    }, {
        "label": "Morocco",
        "value": "MA"
    }, {
        "label": "Mozambique",
        "value": "MZ"
    }, {
        "label": "Myanmar (Burma)",
        "value": "MM"
    }, {
        "label": "Namibia",
        "value": "NA"
    }, {
        "label": "Nauru",
        "value": "NR"
    }, {
        "label": "Nepal",
        "value": "NP"
    }, {
        "label": "Netherlands",
        "value": "NL"
    }, {
        "label": "New Zealand",
        "value": "NZ"
    }, {
        "label": "Nicaragua",
        "value": "NI"
    }, {
        "label": "Niger",
        "value": "NE"
    }, {
        "label": "Nigeria",
        "value": "NG"
    }, {
        "label": "Norway",
        "value": "NO"
    }, {
        "label": "Oman",
        "value": "OM"
    }, {
        "label": "Pakistan",
        "value": "PK"
    }, {
        "label": "Palau",
        "value": "PW"
    }, {
        "label": "Panama",
        "value": "PA"
    }, {
        "label": "Papua New Guinea",
        "value": "PG"
    }, {
        "label": "Paraguay",
        "value": "PY"
    }, {
        "label": "Peru",
        "value": "PE"
    }, {
        "label": "Philippines",
        "value": "PH"
    }, {
        "label": "Poland",
        "value": "PL"
    }, {
        "label": "Portugal",
        "value": "PT"
    }, {
        "label": "Qatar",
        "value": "QA"
    }, {
        "label": "Romania",
        "value": "RO"
    }, {
        "label": "Russia",
        "value": "RU"
    }, {
        "label": "Rwanda",
        "value": "RW"
    }, {
        "label": "Saint Kitts and Nevis",
        "value": "KN"
    }, {
        "label": "Saint Lucia",
        "value": "LC"
    }, {
        "label": "Saint Vincent and the Grenadines",
        "value": "VC"
    }, {
        "label": "Samoa",
        "value": "WS"
    }, {
        "label": "San Marino",
        "value": "SM"
    }, {
        "label": "Sao Tome and Principe",
        "value": "ST"
    }, {
        "label": "Saudi Arabia",
        "value": "SA"
    }, {
        "label": "Senegal",
        "value": "SN"
    }, {
        "label": "Serbia",
        "value": "RS"
    }, {
        "label": "Seychelles",
        "value": "SC"
    }, {
        "label": "Sierra Leone",
        "value": "SL"
    }, {
        "label": "Singapore",
        "value": "SG"
    }, {
        "label": "Slovakia",
        "value": "SK"
    }, {
        "label": "Slovenia",
        "value": "SI"
    }, {
        "label": "Solomon Islands",
        "value": "SB"
    }, {
        "label": "Somalia",
        "value": "SO"
    }, {
        "label": "South Africa",
        "value": "ZA"
    }, {
        "label": "Spain",
        "value": "ES"
    }, {
        "label": "Sri Lanka",
        "value": "LK"
    }, {
        "label": "Sudan",
        "value": "SD"
    }, {
        "label": "Suriname",
        "value": "SR"
    }, {
        "label": "Swaziland",
        "value": "SZ"
    }, {
        "label": "Sweden",
        "value": "SE"
    }, {
        "label": "Switzerland",
        "value": "CH"
    }, {
        "label": "Syria",
        "value": "SY"
    }, {
        "label": "Tajikistan",
        "value": "TJ"
    }, {
        "label": "Tanzania",
        "value": "TZ"
    }, {
        "label": "Thailand",
        "value": "TH"
    }, {
        "label": "Timor-Leste (East Timor)",
        "value": "TL"
    }, {
        "label": "Togo",
        "value": "TG,Tonga"
    }, {
        "label": "Tunisia",
        "value": "TN"
    }, {
        "label": "Turkey",
        "value": "TR"
    }, {
        "label": "Turkmenistan",
        "value": "TM"
    }, {
        "label": "Tuvalu",
        "value": "TV"
    }, {
        "label": "Uganda",
        "value": "UG"
    }, {
        "label": "Ukraine",
        "value": "UA"
    }, {
        "label": "United Arab Emirates",
        "value": "AE"
    }, {
        "label": "United Kingdom",
        "value": "GB"
    }, {
        "label": "United States",
        "value": "US"
    }, {
        "label": "Uruguay",
        "value": "UY"
    }, {
        "label": "Uzbekistan",
        "value": "UZ"
    }, {
        "label": "Vanuatu",
        "value": "VU"
    }, {
        "label": "Vatican City",
        "value": "VA"
    }, {
        "label": "Venezuela",
        "value": "VE"
    }, {
        "label": "Vietnam",
        "value": "VN"
    }, {
        "label": "Yemen",
        "value": "YE"
    }, {
        "label": "Zambia",
        "value": "ZM"
    }, {
        "label": "Zimbabwe",
        "value": "ZW"
    }, {
        "label": "Abkhazia",
        "value": "GE"
    }, {
        "label": "Taiwan",
        "value": "TW"
    }, {
        "label": "Nagorno-Karabakh",
        "value": "AZ"
    }, {
        "label": "Northern Cyprus",
        "value": "CY"
    }, {
        "label": "Pridnestrovie (Transnistria)",
        "value": "MD"
    }, {
        "label": "Somaliland",
        "value": "SO,South Ossetia"
    }, {
        "label": "Ashmore and Cartier Islands",
        "value": "AU"
    }, {
        "label": "Christmas Island",
        "value": "CX"
    }, {
        "label": "Cocos (Keeling) Islands",
        "value": "CC"
    }, {
        "label": "Coral Sea Islands",
        "value": "AU"
    }, {
        "label": "Heard Island and McDonald Islands",
        "value": "HM"
    }, {
        "label": "Norfolk Island",
        "value": "NF"
    }, {
        "label": "New Caledonia",
        "value": "NC"
    }, {
        "label": "French Polynesia",
        "value": "PF"
    }, {
        "label": "Mayotte",
        "value": "YT"
    }, {
        "label": "Saint Barthelemy",
        "value": "GP"
    }, {
        "label": "Saint Martin",
        "value": "GP"
    }, {
        "label": "Saint Pierre and Miquelon",
        "value": "PM"
    }, {
        "label": "Wallis and Futuna",
        "value": "WF"
    }, {
        "label": "French Southern and Antarctic Lands",
        "value": "TF"
    }, {
        "label": "Clipperton Island",
        "value": "PF"
    }, {
        "label": "Bouvet Island",
        "value": "BV"
    }, {
        "label": "Cook Islands",
        "value": "CK"
    }, {
        "label": "Niue",
        "value": "NU,Tokelau"
    }, {
        "label": "Guernsey",
        "value": "GG"
    }, {
        "label": "Isle of Man",
        "value": "IM"
    }, {
        "label": "Jersey",
        "value": "JE"
    }, {
        "label": "Anguilla",
        "value": "AI"
    }, {
        "label": "Bermuda",
        "value": "BM"
    }, {
        "label": "British Indian Ocean Territory",
        "value": "IO"
    }, {
        "label": "British Sovereign Base Areas",
        "value": "British Sovereign Base Areas"
    }, {
        "label": "British Virgin Islands",
        "value": "VG"
    }, {
        "label": "Cayman Islands",
        "value": "KY"
    }, {
        "label": "Falkland Islands (Islas Malvinas)",
        "value": "FK"
    }, {
        "label": "Gibraltar",
        "value": "GI"
    }, {
        "label": "Montserrat",
        "value": "MS"
    }, {
        "label": "Pitcairn Islands",
        "value": "PN"
    }, {
        "label": "Saint Helena",
        "value": "SH"
    }, {
        "label": "South Georgia and the South Sandwich Islands",
        "value": "GS"
    }, {
        "label": "Turks and Caicos Islands",
        "value": "TC"
    }, {
        "label": "Northern Mariana Islands",
        "value": "MP"
    }, {
        "label": "Puerto Rico",
        "value": "PR"
    }, {
        "label": "American Samoa",
        "value": "AS"
    }, {
        "label": "Baker Island",
        "value": "UM"
    }, {
        "label": "Guam",
        "value": "GU"
    }, {
        "label": "Howland Island",
        "value": "UM"
    }, {
        "label": "Jarvis Island",
        "value": "UM"
    }, {
        "label": "Johnston Atoll",
        "value": "UM"
    }, {
        "label": "Kingman Reef",
        "value": "UM"
    }, {
        "label": "Midway Islands",
        "value": "UM"
    }, {
        "label": "Navassa Island",
        "value": "UM"
    }, {
        "label": "Palmyra Atoll",
        "value": "UM"
    }, {
        "label": "U.S. Virgin Islands",
        "value": "VI"
    }, {
        "label": "Wake Island",
        "value": "UM"
    }, {
        "label": "Hong Kong",
        "value": "HK"
    }, {
        "label": "Macau",
        "value": "MO"
    }, {
        "label": "Faroe Islands",
        "value": "FO"
    }, {
        "label": "Greenland",
        "value": "GL"
    }, {
        "label": "French Guiana",
        "value": "GF"
    }, {
        "label": "Guadeloupe",
        "value": "GP"
    }, {
        "label": "Martinique",
        "value": "MQ"
    }, {
        "label": "Reunion",
        "value": "RE"
    }, {
        "label": "Aland",
        "value": "AX"
    }, {
        "label": "Aruba",
        "value": "AW"
    }, {
        "label": "Netherlands Antilles",
        "value": "AN"
    }, {
        "label": "Svalbard",
        "value": "SJ"
    }, {
        "label": "Ascension",
        "value": "AC"
    }, {
        "label": "Tristan da Cunha",
        "value": "TA"
    }, {
        "label": "Antarctica",
        "value": "AQ"
    }, {
        "label": "Kosovo",
        "value": "CS"
    }, {
        "label": "Palestinian Territories (Gaza Strip and West Bank)",
        "value": "PS"
    }, {
        "label": "Western Sahara",
        "value": "EH,Australian Antarctic Territory"
    }, {
        "label": "Ross Dependency",
        "value": "AQ"
    }, {
        "label": "Peter I Island",
        "value": "AQ"
    }, {
        "label": "Queen Maud Land",
        "value": "AQ"
    }, {
        "label": "British Antarctic Territory",
        "value": "AQ"
    }
]

