const weatherData = {
    "queryCost": 1,
    "latitude": 9.93601,
    "longitude": 76.2615,
    "resolvedAddress": "Kochi, KL, India",
    "address": "kochi",
    "timezone": "Asia/Kolkata",
    "tzoffset": 5.5,
    "description": "Similar temperatures continuing with a chance of rain multiple days.",
    "days": [
     {
      "datetime": "2023-09-03",
      "datetimeEpoch": 1693679400,
      "tempmax": 29,
      "tempmin": 25,
      "temp": 26.7,
      "feelslikemax": 32.2,
      "feelslikemin": 25,
      "feelslike": 28,
      "dew": 23.3,
      "humidity": 82.2,
      "precip": 9.7,
      "precipprob": 100,
      "precipcover": 79.17,
      "preciptype": [
       "rain"
      ],
      "snow": 0,
      "snowdepth": 0,
      "windgust": 18.7,
      "windspeed": 14.8,
      "winddir": 252.5,
      "pressure": 1009,
      "cloudcover": 86.9,
      "visibility": 16.7,
      "solarradiation": 283.3,
      "solarenergy": 24.5,
      "uvindex": 10,
      "severerisk": 10,
      "sunrise": "06:15:40",
      "sunriseEpoch": 1693701940,
      "sunset": "18:33:15",
      "sunsetEpoch": 1693746195,
      "moonphase": 0.61,
      "conditions": "Rain, Partially cloudy",
      "description": "Partly cloudy throughout the day with rain.",
      "icon": "rain",
      "stations": [
       "VOCI",
       "remote"
      ],
      "source": "comb",
      "hours": [
       {
        "datetime": "12:00:00",
        "datetimeEpoch": 1693722600,
        "temp": 28.4,
        "feelslike": 31.8,
        "humidity": 73.02,
        "dew": 23.1,
        "precip": 0.4,
        "precipprob": 33.3,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": [
         "rain"
        ],
        "windgust": 10.1,
        "windspeed": 8.6,
        "winddir": 246.7,
        "pressure": 1010,
        "visibility": 17.2,
        "cloudcover": 49.9,
        "solarradiation": 867,
        "solarenergy": 3.1,
        "uvindex": 9,
        "severerisk": 10,
        "conditions": "Partially cloudy",
        "icon": "partly-cloudy-day",
        "stations": null,
        "source": "fcst"
       },
       {
        "datetime": "13:00:00",
        "datetimeEpoch": 1693726200,
        "temp": 28.8,
        "feelslike": 32.2,
        "humidity": 70.06,
        "dew": 22.8,
        "precip": 0.2,
        "precipprob": 100,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": [
         "rain"
        ],
        "windgust": 13,
        "windspeed": 11.5,
        "winddir": 255.3,
        "pressure": 1009,
        "visibility": 24.1,
        "cloudcover": 100,
        "solarradiation": 971,
        "solarenergy": 3.5,
        "uvindex": 10,
        "severerisk": 10,
        "conditions": "Rain, Overcast",
        "icon": "rain",
        "stations": null,
        "source": "fcst"
       }
      ]
     }
    ],
    "alerts": [],
    "stations": {
     "ATVK": {
      "distance": 8280,
      "latitude": 10,
      "longitude": 76.3,
      "useCount": 0,
      "id": "ATVK",
      "name": "ATVK",
      "quality": 0,
      "contribution": 0
     },
     "VWTI": {
      "distance": 8280,
      "latitude": 10,
      "longitude": 76.3,
      "useCount": 0,
      "id": "VWTI",
      "name": "VWTI (maritime)",
      "quality": 0,
      "contribution": 0
     },
     "VOCI": {
      "distance": 28248,
      "latitude": 10.15,
      "longitude": 76.4,
      "useCount": 0,
      "id": "VOCI",
      "name": "VOCI",
      "quality": 49,
      "contribution": 0
     }
    },
    "currentConditions": {
     "datetime": "03:39:00",
     "datetimeEpoch": 1693692540,
     "temp": 24.6,
     "feelslike": 24.6,
     "humidity": 96.4,
     "dew": 24,
     "precip": null,
     "precipprob": 0,
     "snow": 0,
     "snowdepth": 0,
     "preciptype": null,
     "windgust": null,
     "windspeed": 3.5,
     "winddir": 29,
     "pressure": 1009,
     "visibility": 3,
     "cloudcover": 88,
     "solarradiation": 0,
     "solarenergy": 0,
     "uvindex": 0,
     "conditions": "Partially cloudy",
     "icon": "partly-cloudy-night",
     "stations": [
      "ATVK",
      "VOCI",
      "VWTI"
     ],
     "source": "obs",
     "sunrise": "06:15:40",
     "sunriseEpoch": 1693701940,
     "sunset": "18:33:15",
     "sunsetEpoch": 1693746195,
     "moonphase": 0.61
    }
   }

   export default weatherData;