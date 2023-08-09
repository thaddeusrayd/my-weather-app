import { WeatherLocation } from "./dashboard/weather-location";

export const locations: WeatherLocation[] = [
    {
        city: 'Chicago, IL',
        currentTemp: 78,
        conditions: 'Sunny',
        id: 1,
        forecast: "Greatest city on earth. Whatever the weather's gonna be, that won't change."
    },
    {
        city: 'Jackson, MS',
        currentTemp: 98,
        conditions: 'Partly Cloudy',
        id: 2,
        forecast: "Home sweet home. Nothing like it. It'll always be hot and humid, even in 'winter'."
    },
    {
        city: 'Fairhope, AL',
        currentTemp: 95,
        conditions: 'Sunny',
        id: 3,
        forecast: "Warm and humid, but breezy. Nice gulf winds and the best people you can find. Marry one if ya can."
    },
    {
        city: 'Starkville, MS',
        currentTemp: 88,
        conditions: 'Rainy',
        id: 4,
        forecast: "This is God's country. Whatever God deems is right will be the forecast. Stay as long as possible."
    },
    {
        city: 'Milwaukee, WI',
        currentTemp: 'Terrible place, Go Cubs',
        conditions: 'Awful',
        id: 5,
        forecast: "Why do you even need to know? Are the Cubs playing in Milwaukee this week? Can't think of any other reason."
    },
];