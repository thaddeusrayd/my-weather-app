export interface Location {
    city: string,
    currentTemp: number,
    conditions: string
}

export const locations = [
    {
        city: 'Chicago',
        currentTemp: 78,
        conditions: 'Sunny'
    },
    {
        city: 'Jackson',
        currentTemp: 98,
        conditions: 'Partly Cloudy'
    },
    {
        city: 'Fairhope',
        currentTemp: 95,
        conditions: 'Sunny'
    },
    {
        city: 'Lesvos',
        currentTemp: 88,
        conditions: 'Rainy'
    },
    {
        city: 'Milwaukee',
        currentTemp: 1000,
        conditions: 'Awful'
    },
];